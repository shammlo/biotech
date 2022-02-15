import React from 'react'
import "./contact.css"
import logo from "../../images/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
function Contact() {
    return (
        <div className='contact-section '>

            <div className='contact-logo-parent '>
                <div className='hexagon' style={{ marginTop: "-100px" }}>

                    <span>
                        <div className='contact-logo '>
                            <img src={logo} />

                        </div>

                    </span>
                </div>
            </div>

            <div className='contact-container '>
                <div className='contact-content '>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103859.82458735061!2d45.30761499479892!3d35.5630978961248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002c0536d143b1%3A0xf791750d4e215dea!2sSulaymaniyah!5e0!3m2!1sen!2siq!4v1644834542461!5m2!1sen!2siq" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact