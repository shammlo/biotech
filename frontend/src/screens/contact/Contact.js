import React from 'react'
import "./contact.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import bioTechLogo from '../../images/biotech-footer.svg';
function Contact() {
    return (
        <div id='contact-section' className='contact-section2 '>
            <div className='contact-content2'>
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

        </div>
    )
}

export default Contact