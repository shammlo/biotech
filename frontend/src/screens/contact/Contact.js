import React from 'react'
import "./contact.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import bioTechLogo from '../../images/biotech-footer.svg';
function Contact() {
    return (
        <div id='contact-section' className='contact-section '>

            <div className='contact-logo-parent ' >
                <img className="footer-logo" width="200px" src={bioTechLogo} alt="biotech logo" />
            </div>
            <div className='contact-container '>
                <div className='contact-content'>
                    <div className='contact-card-parent'>
                        <div className='contact-card '>
                            <div className='card-icon'>
                                <FaFacebookF />
                            </div>
                            &nbsp;
                            <div className='card-number'>
                                <h2> biotech/facebook</h2>
                            </div>
                        </div>
                        <div className='contact-card'>
                            <div className='card-icon'>
                                <FaInstagram />
                            </div>
                            &nbsp;
                            <div className='card-number'>
                                <h2> biotech instagram</h2>
                            </div>
                        </div>
                    </div>
                    <div className='contact-card-parent'>
                        <div className='contact-card'>
                            <div className='card-icon'>
                                <AiOutlineMail />
                            </div>
                            &nbsp;
                            <div className='card-number'>
                                <h2> biotech.2022@gmail.com</h2>
                            </div>
                        </div>
                        <div className='contact-card'>
                            <div className='card-icon'>
                                <AiOutlinePhone />
                            </div>
                            &nbsp;
                            <div className='card-number'>
                                <h2>  0770 000 0000</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-map '>
                    {/* <iframe src="https://www.google.com/maps/d/embed?mid=1bTUmo8VxcrGcwgqVkQhGxOswhs72ZS9X&ehbc=2E312F" width="640" height="480"></iframe> */}
                    <iframe title='location' src="https://www.google.com/maps/d/embed?mid=1bTUmo8VxcrGcwgqVkQhGxOswhs72ZS9X&ehbc=2E312F" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact