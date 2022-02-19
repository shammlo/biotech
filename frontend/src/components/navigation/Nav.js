import React from 'react'
import "./nav.css"
import aa from "../../images/logo.png"
import { GrLanguage } from "react-icons/gr";
function Nav() {
    return (<>
        <div class="nav">
            <input type="checkbox" id="nav-check" />
            <div class="nav-header">
                <div class="nav-title">
                    <div className='nav-logo'>

                    </div>
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div class="nav-links">

                <a href="#home-section">سەرەکی</a>
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
                    <li><a href="#home-section">سەرەکی</a></li>
                    <li><a href="#about-section">دەربارە</a></li>
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