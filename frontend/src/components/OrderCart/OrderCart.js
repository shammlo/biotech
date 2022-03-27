import React, { useContext, useState } from 'react'
import "./orderCart.css"
import { CardContext } from "../../context/CardContext";
import cookies from "js-cookie";
import OrderSure from './OrderSure';
import { useTranslation } from "react-i18next";

function OrderCart(props) {
    const { t } = useTranslation();
    const currentLanguageCode = cookies.get("i18next") || "en";

    const { cart, setCart } = useContext(CardContext)

    const [sure, setsure] = useState(false);
    const [note, setnote] = useState("");

    const toggle = () => {
        setsure(false)
    }
    // console.table(cart)

    const handleRemoveField = (e, index) => {
        e.preventDefault();

        setCart((prev) => prev.filter((item) => item !== prev[index]));
        // localStorage.setItem("cart", cart)
    }
    // console.log(cart)




    const updateFieldChanged = index => e => {

        // name = e.target.name //key

        let newArr = [...cart]; // copying the old datas array
        newArr[index][e.target.name] = e.target.value; //key and value
        setCart(newArr);
    }

    return (
        <>
            <div className='ordercart-container' dir='rtl'>
                <div className="shopping-cart">
                    <div className="shopping-cart-header">
                        <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">{t("my-cart")}</span>
                        {/* <div className="shopping-cart-total">
                        <span className="lighter-text">Total:</span>
                        <span className="main-color-text">$2,229.97</span>
                    </div> */}
                    </div>


                    <ul className="shopping-cart-items">
                        {cart.map((e, index) => {
                            return <li className="clearfix " >
                                <img src={`http://api.biotech.cf${e.image}`} alt="item1" onClick={(e) => handleRemoveField(e, index)} />
                                <span className="item-name">{currentLanguageCode === "ar" ? e.nameAR : e.nameKR}</span>
                                {/* <span className="item-price">$849.99</span> */}
                                <span className="item-quantity">{t("quantity")}: <input style={{ width: "60px" }} type="number" name='quantity' onChange={updateFieldChanged((index))} /></span>
                                <span className="item-price">{isNaN(e.quantity) ? "select" : `$ ${e.quantity * e.price}`}</span>

                            </li>
                        })}
                    </ul>
                    <span className="item-quantity">{t("note")}</span>

                    <textarea className='tebini' onChange={(e) => setnote(e.target.value)} />

                    <a href="#" className="button" onClick={() => setsure(true)}>{t("checkout")}</a>
                    {/* onClick={props.toggle} */}
                </div>

            </div>
            {sure ? <OrderSure toggle={toggle} note={note} /> : null}

        </>
    )
}

export default OrderCart