import React, { useContext } from 'react'
import "./orderCart.css"
import { CardContext } from "../../context/CardContext";
import cookies from "js-cookie";

function OrderCart(props) {
    const currentLanguageCode = cookies.get("i18next") || "en";

    const { cart, setCart } = useContext(CardContext)



    // console.table(cart)

    const handleRemoveField = (e, index) => {
        e.preventDefault();

        setCart((prev) => prev.filter((item) => item !== prev[index]));
        // localStorage.setItem("cart", cart)
    }


    return (
        <div className='ordercart-container'>
            <div class="shopping-cart">
                <div class="shopping-cart-header">
                    <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">345</span>
                    {/* <div class="shopping-cart-total">
                        <span class="lighter-text">Total:</span>
                        <span class="main-color-text">$2,229.97</span>
                    </div> */}
                </div>


                <ul class="shopping-cart-items">
                    {cart.map((e, index) => {
                        return <li class="clearfix ">
                            <img src={`http://api.biotech.cf${e.image}`} alt="item1" onClick={(e) => handleRemoveField(e, index)} />
                            <span class="item-name">{currentLanguageCode === "ar" ? e.nameAR : e.nameKR}</span>
                            {/* <span class="item-price">$849.99</span> */}
                            <span class="item-quantity">Quantity: <input type="number" /></span>
                        </li>
                    })}
                    {/* <li class="clearfix">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
                        <span class="item-name">Sony DSC-RX100M III</span>
                        <span class="item-price">$849.99</span>
                        <span class="item-quantity">Quantity: 01</span>
                    </li>

                    <li class="clearfix">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
                        <span class="item-name">KS Automatic Mechanic...</span>
                        <span class="item-price">$1,249.99</span>
                        <span class="item-quantity">Quantity: 01</span>
                    </li>

                    <li class="clearfix">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
                        <span class="item-name">Kindle, 6" Glare-Free To...</span>
                        <span class="item-price">$129.99</span>
                        <span class="item-quantity">Quantity: 01</span>
                    </li> */}
                </ul>
                <span class="item-quantity">Tebini</span>

                <textarea className='tebini' />

                <a href="#" class="button" onClick={props.toggle}>Checkout</a>
            </div>

        </div>
    )
}

export default OrderCart