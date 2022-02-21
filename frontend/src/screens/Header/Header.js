import React from 'react'
import Nav from '../../components/navigation/Nav'
import logo from "../../images/logo.png"
import shape from "../../images/header.png"
import back from "../../images/shapehead.png"
import "./Header.css"


function Header() {



    return (
        <div id='home-section'>
            <Nav />
            <div className='hero-area'>
                <div className='hero-back-shape'>
                    <img src={back} alt="header" />

                </div>
                <div className='hero-logo '>
                    <img src={logo} alt="header" />
                </div>
                <div className='hero-shape' >
                    <img src={shape} alt="header" />

                </div>
            </div>
        </div>
    )
}

export default Header