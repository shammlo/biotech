import React from 'react'
import "./nav.css"
import aa from "../../images/logo.png"
function Nav() {
    return (
        <div className='nav-main container'>
            <div className='nav-logo'>
                <img src={aa} />
            </div>
            <div className='nav-routes'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Brand</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='nav-utils'>
                {/* <h5>search</h5> */}
            </div>


        </div>
    )
}

export default Nav