import React from 'react'
import "./nav.css"
import aa from "../../images/logo.png"
import { GrLanguage } from "react-icons/gr";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
function Nav() {

    const { t } = useTranslation();

    return (<>
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                    <div className='nav-logo'>

                    </div>
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">

                <a href="#home-section"> {t("home")}</a>
                <a href="#about-section">دەربارە</a>
                <a href="#brand-section">براندەکان</a>
                <a href="#contact-section">پەیوەندی</a>

            </div>
        </div>
        <nav className='nav-main container ' dir='rtl'>
            <div className='nav-logo'>
                <a href='/'>
                    <img src={aa} alt="logo" />
                </a>
            </div>
            <div className='nav-routes'>
                <ul>
                    <li><a href="#home-section">{t("home")}</a></li>
                    <li><a href="#about-section">{t("malawa")}</a></li>
                    <li><a href="#brand-section">براندەکان</a></li>
                    <li><a href="#contact-section">پەیوەندی</a></li>
                </ul>
            </div>


            <div className='nav-utils'>
                <div className="dropdown" >
                    <button className="dropbtn dropsize"><GrLanguage /></button>
                    <div className="dropdown-content">
                        <a href="/ku">کوردی</a>
                        <a href="/ar">عربی</a>

                    </div>
                </div>
            </div>
        </nav>
    </>

    )
}

export default Nav