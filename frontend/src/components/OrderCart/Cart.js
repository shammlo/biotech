import React, { useState, useContext } from 'react';
import { GrCart } from 'react-icons/gr';
import OrderCart from '../OrderCart/OrderCart';
import { CardContext } from '../../context/CardContext';

const Cart = () => {
    const [openCart, setOpenCart] = useState(false);
    const { cart } = useContext(CardContext);
    const toggleCart = () => setOpenCart(!openCart);
    // console.log(cart);
    return (
        <>
            <div className="cart-fixed" onClick={toggleCart}>
                <div className="cart-wrapper">
                    <div className="cart-count">{cart.length}</div>
                    <div className="cart-logo">
                        <GrCart className='fixed-cart' />
                    </div>
                </div>
            </div>
            <OrderCart toggle={toggleCart} openCart={openCart} setOpenCart={setOpenCart} />
        </>
    );
};

export default Cart;
