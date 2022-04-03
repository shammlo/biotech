import React, { useContext } from 'react'
import "./categoryCard.css"
import { CardContext } from "../../context/CardContext";
import { GrCart } from "react-icons/gr";
import cookies from 'js-cookie';

import { AiOutlineInfoCircle } from "react-icons/ai";
function CategoryCard(props) {
    const { cart, setCart } = useContext(CardContext)
    const currentLanguageCode = cookies.get('i18next') || 'en';

    // console.log(props.cart)

    return (
        <>


            <div className="wrapper ">
                <div className="containera">
                    <div className="top" style={{ backgroundImage: `url(http://api.biotech.cf${props.cart.image})` }}>


                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="details">
                                <h1 style={{ fontSize: "20px" }}>{props.cart.nameKR}</h1>
                                <p>${props.cart.price}</p>
                            </div>
                            {/* <button style={{ width: "200px" }} value="add to card" onClick={() => { localStorage.setItem("cart", JSON.stringify([...cart, props.cart])); setCart([...cart, props.cart]) }} /> */}
                            <div className="buy" onClick={() => { localStorage.setItem("cart", JSON.stringify([...cart, props.cart])); setCart([...cart, props.cart]); props.notify() }}><GrCart style={{ zoom: "220%", margin: "10px 10px" }} /></div>
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
                    <div className="icon" ><AiOutlineInfoCircle style={{ zoom: "200%" }} /></div>
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
    )
}

export default CategoryCard