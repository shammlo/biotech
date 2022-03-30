import React, { useContext, useState, useEffect } from 'react';
import './orderCart.css';
import { CardContext } from '../../context/CardContext';
import cookies from 'js-cookie';
import OrderSure from './OrderSure';
import { useTranslation } from 'react-i18next';
import Modal from '../modal/Modal';
import './cartModal.scss';

function OrderCart({ openCart, setOpenCart }) {
    const { t } = useTranslation();
    const currentLanguageCode = cookies.get('i18next') || 'en';

    const { cart, setCart } = useContext(CardContext);

    const [sure, setsure] = useState(false);
    const [note, setnote] = useState('');
    const [modal, setModal] = useState(false);

    // ----------------------------------------------------------------
    // *** USE EFFECT ***
    useEffect(() => {
        if (sure) {
            setOpenCart(!openCart);
            setTimeout(() => {
                setModal(true);
            }, 500);
        }
    }, [sure]);

    // ----------------------------------------------------------------
    // *** FUNCTION ***

    const toggle = () => {
        setsure(!sure);
    };

    const modalHandler = () => {
        setModal(!modal);
    };

    const closeAll = () => {
        setsure(false);
        setOpenCart(false);
        setModal(false);
    };
    const handleRemoveField = (e, index) => {
        e.preventDefault();
        setCart((prev) => prev.filter((item) => item !== prev[index]));
    };

    const checkoutHandler = () => {
        setsure(true);
        setOpenCart(!openCart);
    };
    const updateFieldChanged = (index) => (e) => {
        // name = e.target.name //key

        let newArr = [...cart]; // copying the old datas array
        newArr[index][e.target.name] = e.target.value; //key and value
        setCart(newArr);
    };

    // ----------------------------------------------------------------
    return (
        <>
            {!sure && (
                <div className={`cart-order ${openCart ? 'show' : 'close'}`}>
                    {openCart && <div className="backdrop" onClick={closeAll}></div>}
                    <div className="cart_order-wrapper">
                        <div className="ordercart-container" dir="rtl">
                            <div className="shopping-cart">
                                <div className="shopping-cart-header">
                                    <i className="fa fa-shopping-cart cart-icon"></i>
                                    <span className="badge">{t('my-cart')}</span>
                                    {/* <div className="shopping-cart-total">
                        <span className="lighter-text">Total:</span>
                        <span className="main-color-text">$2,229.97</span>
                    </div> */}
                                </div>

                                <ul className="shopping-cart-items">
                                    {cart.map((e, index) => {
                                        return (
                                            <li className="clearfix " key={index}>
                                                <img
                                                    src={`http://api.biotech.cf${e.image}`}
                                                    alt="item1"
                                                    onClick={(e) => handleRemoveField(e, index)}
                                                />
                                                <span className="item-name">
                                                    {currentLanguageCode === 'ar'
                                                        ? e.nameAR
                                                        : e.nameKR}
                                                </span>
                                                {/* <span className="item-price">$849.99</span> */}
                                                <span className="item-quantity">
                                                    {t('quantity')}:{' '}
                                                    <input
                                                        style={{ width: '60px' }}
                                                        type="number"
                                                        name="quantity"
                                                        onChange={updateFieldChanged(index)}
                                                    />
                                                </span>
                                                <span className="item-price">
                                                    {isNaN(e.quantity)
                                                        ? 'price'
                                                        : `$ ${e.quantity * e.price}`}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <span className="item-quantity">{t('note')}</span>

                                <textarea
                                    className="tebini"
                                    onChange={(e) => setnote(e.target.value)}
                                />

                                <button className="button" onClick={checkoutHandler}>
                                    {t('checkout')}
                                </button>
                            </div>
                        </div>
                        {/* {sure ? <OrderSure toggle={toggle} note={note} /> : null} */}
                    </div>
                </div>
            )}

            {
                <Modal modalHandler={modalHandler} closeAll={closeAll} show={modal}>
                    {modal ? (
                        <>
                            <div className="modal-title">
                                <h2>{t('Your order has been sent successfully!')}</h2>
                            </div>

                            <div className="modal-cart">
                                {cart.map((item, index) => {
                                    return (
                                        <div className="cart-item" key={index}>
                                            <div className="cart-img">
                                                <img
                                                    src={`http://api.biotech.cf${item.image}`}
                                                    height="100px"
                                                    width="100px"
                                                    alt="item1"
                                                />
                                            </div>
                                            <div className="cart-content">
                                                <span className="item-name">
                                                    {currentLanguageCode === 'ar'
                                                        ? item.nameAR
                                                        : item.nameKR}
                                                </span>
                                                {/* <span className="item-price">$849.99</span> */}{' '}
                                                <span className="item-quantity">
                                                    {item.quantity} : {t('quantity')}
                                                </span>
                                                <span className="item-price">
                                                    {isNaN(item.quantity)
                                                        ? 'select'
                                                        : `$ ${item.quantity * item.price}`}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="modal-note">
                                <span>note: {t(note)}</span>
                            </div>

                            <div className="modal-buttons">
                                <button className="button button-close" onClick={closeAll}>
                                    Close
                                </button>
                                <button className="button" onClick={closeAll}>
                                    Order
                                </button>
                            </div>
                        </>
                    ) : null}
                </Modal>
            }
        </>
    );
}

export default OrderCart;
