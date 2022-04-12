import React, { useContext, useState, useEffect } from 'react';
import './orderCart.css';
import { CardContext } from '../../context/CardContext';
import cookies from 'js-cookie';
// import OrderSure from './OrderSure';
import { useTranslation } from 'react-i18next';
import Modal from '../modal/Modal';
import './cartModal.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';

function OrderCart({ openCart, setOpenCart }) {
    const { t } = useTranslation();
    const currentLanguageCode = cookies.get('i18next') || 'ku';

    const { cart, setCart } = useContext(CardContext);
    const user = localStorage.getItem('token') ? localStorage.getItem('token') : 'empty';
    const token = user === 'empty' ? 'empty' : JSON.parse(user).token;
    // console.log(token)
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

    // console.table(cart)

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


    const updateFieldChanged = (index) => (e) => {
        // name = e.target.name //key

        let newArr = [...cart]; // copying the old datas array
        newArr[index][e.target.name] = e.target.value; //key and value
        setCart(newArr);
    };

    const [data, setData] = useState({
        products: [],
    });

    const order = cart;

    const arr = () => {
        const eee = [];
        order.forEach((item, index) => {
            eee.push({ product: item._id, quantity: item.quantity });
            // quant = [...quant, item.quantity]
        });
        setData({ ...data, products: eee, note: note });
    };
    const checkoutHandler = () => {
        arr();
        setsure(true);
        setOpenCart(!openCart);
    };
    const add = async () => {
        arr();

        await axios.post(`${process.env.REACT_APP_MAIN_URL}cart/`, data, {
            headers: {
                authorization: 'Bearer ' + token,
            },
        });

        toast.success(' دروست کرا', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setCart([])
        closeAll();
    };

    const emptyCartHandler = () => {
        setCart([]);
        closeAll();
    };
    // ----------------------------------------------------------------
    return (
        <>
            {!sure && (
                <>
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
                                    {token === 'empty' ? (
                                        <>
                                            {' '}
                                            <h1 className="h1-1">{t('pleaselogin')}</h1>
                                            <Link onClick={closeAll} className="h1-2" to="/login">
                                                <h1 className="h1-2">{t('clicktolog')}</h1>
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            {' '}
                                            <ul className="shopping-cart-items">
                                                {cart.length === 0 ? (
                                                    <h1 className="h1-1">{t('emptycard')}</h1>
                                                ) : (
                                                    cart.map((e, index) => {
                                                        return (
                                                            <li className="clearfix " key={index}>
                                                                <div
                                                                    className="delete-item"
                                                                    onClick={(e) =>
                                                                        handleRemoveField(e, index)
                                                                    }
                                                                >
                                                                    <div>
                                                                        <FiX />
                                                                    </div>
                                                                </div>
                                                                <img
                                                                    src={`http://api.biotech.cf${e.image}`}
                                                                    alt="item1"
                                                                    className="cart-item-image"
                                                                    onClick={(e) =>
                                                                        handleRemoveField(e, index)
                                                                    }
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
                                                                        onChange={updateFieldChanged(
                                                                            index
                                                                        )}
                                                                    />
                                                                </span>
                                                                <span className="item-price">
                                                                    {isNaN(e.quantity)
                                                                        ? 'price'
                                                                        : `$ ${e.quantity * e.price
                                                                        }`}
                                                                </span>
                                                            </li>
                                                        );
                                                    })
                                                )}
                                            </ul>
                                            <span className="item-quantity">{t('note')}</span>
                                            <textarea
                                                className="tebini"
                                                onChange={(e) => setnote(e.target.value)}
                                            />
                                            <button className="button" onClick={checkoutHandler} >
                                                {t('checkout')}
                                            </button>
                                            <button
                                                className="button"
                                                style={{ background: 'grey' }}
                                                onClick={
                                                    emptyCartHandler
                                                }
                                            >
                                                {t('emptycart')}
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* {sure ? <OrderSure toggle={toggle} note={note} /> : null} */}
                        </div>
                    </div>
                    {/* <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    /> */}
                </>
            )}

            {
                <Modal modalHandler={modalHandler} closeAll={closeAll} show={modal}>
                    {modal ? (
                        <>
                            <div className="modal-title">
                                <h2>{t('sure')}</h2>
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
                                <span>{t('note')}: {note}</span>
                            </div>

                            <div className="modal-buttons">
                                <button className="button button-close" onClick={closeAll}>
                                    {t('Close')}
                                </button>
                                <button className="button" onClick={add}>
                                    {t('checkout')}
                                </button>
                            </div>
                        </>
                    ) : null}
                </Modal>
            }
            <ToastContainer />
        </>
    );
}

export default OrderCart;
