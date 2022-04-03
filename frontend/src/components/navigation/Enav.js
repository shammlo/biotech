import React, { useState } from 'react'
// import "./nav.css"
import aa from "../../images/logo.png"
import { GrLanguage } from "react-icons/gr";
import i18next from "i18next";
import {
    Link, NavLink, useLocation 
 } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { GrCart } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import OrderCart from '../OrderCart/OrderCart';
import { Navbar as Navs } from "./Navbar.style";

function Enav({ setSearch, search }) {
    // const usePathname = () => {
    //     const location = useLocation();
    //     return location.pathname;
    // }
    // console.log(usePathname)
    // console.log(window.location.href === 'http://localhost:3000/')

    const [cartShow, setcartShow] = useState(false);
    const toggle = () => {
        setcartShow(false)
    }

    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const menuHandler = () => {
        setOpen(!open);
    };
    const togglelang = () => {
        if (i18next.language === "ku") {
            i18next.changeLanguage("ar");
        } else { i18next.changeLanguage("ku"); }

        // console.log(i18next.language)
    }
    const clearSearch = () => {
        setSearch('');
    };
    return (<>
        <Navs bg="white" fg="black">
            <h6 className='ax'>.</h6>
            <div className="nav_container " dir='rtl'>

                <div
                    className={`hamburger ${open ? "open " : ""}`}
                    onClick={() => {
                        menuHandler();
                    }}
                >
                    <div className={`line top ${open ? "open " : ""}`}></div>
                    <div className={`line middle ${open ? "open " : ""}`}></div>
                    <div className={`line bottom ${open ? "open " : ""}`}></div>
                </div>
                <ul className={open ? "open " : ""}>
                    <div className='nav-logo'>
                        <a href='/'>
                            <img src={aa} alt="logo" />
                        </a>
                    </div>

                    <div className="search-bar">
                        {/* <label>Search:</label> */}

                        <input
                            type="text"
                            placeholder="Search product"
                            value={search && search}
                            onChange={(event) => setSearch(event.target.value.toLowerCase())}
                        />
                        <div className="clear-search" onClick={clearSearch}>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                color="#02073E"
                                height="24px"
                                width="24px"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ color: 'rgb(2, 7, 62)' }}
                            >
                                <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
                            </svg>
                        </div>
                    </div>

                    <li>
                        <NavLink
                            to="/"
                            onClick={() => {
                                menuHandler();
                            }}
                        >
                            {t("home")}
                        </NavLink>
                    </li>
                   
                    <div className='nav-utils'>
                      
                        <div className='cart-logo' onClick={togglelang}>
                            <GrLanguage />
                        </div>
                        <div className='cart-logo' onClick={() => { setcartShow(true); menuHandler(); }}>
                            <GrCart />
                        </div>
                        <div className='cart-logo'>
                            <Link to="/login" className='link' onClick={() => {
                                menuHandler();
                            }}>
                                <CgProfile />
                            </Link>
                        </div>
                    </div>
                </ul>
                
            </div>
        </Navs>
        <OrderCart toggle={toggle} openCart={cartShow} setOpenCart={setcartShow} />

    </>

    )
}

export default Enav



    // < div className = "nav" >
    //         <input type="checkbox" id="nav-check" />
    //         <div className="nav-header">
    //             <div className='nav-utils' style={{ marginLeft: "30px" }}>
    //                 <div className="dropdown" >
    //                     <button className="dropbtn dropsize"><GrLanguage /></button>
    //                     <div className="dropdown-content" style={{ textAlign: "center" }}>
    //                         <a href="#!" onClick={() => {

    //                             i18next.changeLanguage("ku");
    //                         }}>کوردی</a>
    //                         <a href="#!" onClick={() => {

    //                             i18next.changeLanguage("ar");
    //                         }}>عربی</a>

    //                     </div>
    //                 </div>

    //                 <div className='cart-logo' onClick={() => setcartShow(true)}>
    //                     <GrCart />
    //                 </div>
    //                 <div className='cart-logo'>
    //                     <Link to="/login" className='link'>
    //                         <CgProfile />
    //                     </Link>
    //                 </div>
    //             </div>
    //             {/* <div className="nav-title">

    //                 <div className='nav-logo'>

    //                 </div>
    //             </div> */}
    //         </div>
    //         <div className="nav-btn">
    //             <label htmlFor="nav-check">
    //                 <span></span>
    //                 <span></span>
    //                 <span></span>
    //             </label>
    //         </div>

    //         <div className="nav-links">
    //             <a href="#home-section"> {t("home")}</a>
    //             <a href="#about-section">{t("about_us")}</a>
    //             <a href="#brand-section">{t("brands")}</a>
    //             <a href="#contact-section">{t("call_us")}</a>

    //         </div>


    //     </div >
    // <nav className='nav-main container ' dir='rtl'>
    //     <div className='nav-logo'>
    //         <a href='/'>
    //             <img src={aa} alt="logo" />
    //         </a>
    //     </div>
    //     <div className='nav-routes'>
    //         <ul>
    //             <li><a href="#home-section">{t("home")}</a></li>
    //             <li><a href="#about-section">{t("about_us")}</a></li>
    //             <li><a href="#brand-section">{t("brands")}</a></li>
    //             <li><a href="#contact-section">{t("call_us")}</a></li>
    //         </ul>
    //     </div>


        

    // </nav>