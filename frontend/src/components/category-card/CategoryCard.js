import React, { useContext, useState, useEffect } from 'react';
import './categoryCard.css';
import { CardContext } from '../../context/CardContext';
import { GrCart } from 'react-icons/gr';
import cookies from 'js-cookie';
import Modal from '../modal/Modal';

import { AiOutlineInfoCircle } from 'react-icons/ai';
import Cookies from 'js-cookie';
function CategoryCard(props) {
    const { cart, setCart } = useContext(CardContext);
    const currentLanguageCode = cookies.get('i18next') || 'en';
    const [bought, setBought] = useState(false);
    const [classes, setClasses] = useState('');
    // console.log(props.cart);
    // console.log(cart);

    // console.log(props.cart)

    const [token, setToken] = useState();

    useEffect(() => {
        const session = Cookies.get('biotechToken');
        if (session) {
            setToken(session);
        }
    }, [token]);
    const addToCart = () => {
        if (!token) {
            props.notify('warning', 'Please log in to buy this item!');
            return;
        }
        if (bought) {
            props.notify('warning', 'Already in cart!');
            return;
        }
        // const
        localStorage.setItem(
            'cart',
            JSON.stringify([
                ...cart,
                {
                    ...props.cart,
                },
            ])
        );
        // props.addToStore(props.cart._id);
        setCart([...cart, props.cart]);
        props.notify();
        setBought(true);
    };

    useEffect(() => {
        let result = cart.map((item) => item._id).find((fill) => fill === props.cart._id);
        // console.log(result);
        if (result && token) {
            setBought(true);
            setClasses('buy bought');
        } else {
            setBought(false);
            setClasses('buy');
        }
    }, [props.cart._id, cart, token]);

    return (
        <>
            <div className="wrapper ">
                <div className="containera">
                    <div
                        className="top"
                        onClick={() => props.addToViewed(props.cart._id)}
                        style={{
                            backgroundImage: `url(http://api.biotech.cf${props.cart.image})`,
                            cursor: 'pointer',
                        }}
                    ></div>
                    <div className="bottom">
                        <div className="left">
                            <div className="details">
                                <h1 style={{ fontSize: '20px' }}>{props.cart.nameKR}</h1>
                                <p>${props.cart.price}</p>
                            </div>
                            {/* <button style={{ width: "200px" }} value="add to card" onClick={() => { localStorage.setItem("cart", JSON.stringify([...cart, props.cart])); setCart([...cart, props.cart]) }} /> */}
                            <div className={`buy ${classes}`} onClick={addToCart}>
                                {/* className={`buy ${bought ? 'bought' : ''}`} */}
                                <GrCart style={{ zoom: '220%', margin: '10px 10px' }} />
                            </div>
                        </div>
                        <div className="right">
                            {/* <div className="done"><i className="material-icons">done</i></div> */}
                            <div className="details">
                                <h1>Chair</h1>
                                <p>Added to your cart</p>
                            </div>
                            {/* <div className="remove"><i className="material-icons">clear</i></div> */}
                        </div>
                    </div>
                </div>
                <div className="inside">
                    <div className="icon">
                        <AiOutlineInfoCircle style={{ zoom: '200%' }} />
                    </div>
                    <div className="contents">
                        <p>
                            {currentLanguageCode === 'ar'
                                ? props.cart.descriptionAR
                                : props.cart.descriptionKR}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryCard;
