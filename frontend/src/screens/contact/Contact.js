import React from 'react'
import "./contact.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
function Contact() {
    return (
        <div id='contact-section' className='contact-section '>

            <div className='contact-logo-parent ' >

                <svg style={{ marginTop: "-90px" }} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 507 444" width="200px"><polygon className="cls-1" points="379.81 444 126.35 444 -0.38 224.5 126.35 5 379.81 5 506.54 224.5 379.81 444" /><path className="cls-2" d="M148.3,368.08V331h9.28c7.44,0,12.17,3.83,12.17,9.89,0,3.05-1.23,5.22-4.11,7.44a9.49,9.49,0,0,1,6.16,9.11,10,10,0,0,1-4.33,8.45c-2.56,1.72-4.61,2.16-9.83,2.16ZM152,347h4.61c3.38,0,4.94-.28,6.38-1.11a6.12,6.12,0,0,0,3-5.12,6.3,6.3,0,0,0-2.39-4.83c-1.55-1.11-3.5-1.61-6.66-1.61H152Zm0,17.72h5.16c3.39,0,5.33-.28,6.95-1a7.1,7.1,0,0,0,4-6.22,6.81,6.81,0,0,0-4.38-6.34c-1.78-.66-3.17-.83-7.17-.83H152Z" /><rect className="cls-2" x="179.7" y="331.03" width="3.72" height="37.06" /><path className="cls-2" d="M209.37,368.75c-10.72,0-19.61-8.67-19.61-19.11a19.5,19.5,0,0,1,19.61-19.28v3.33a15.87,15.87,0,1,0,0,31.73Z" /><path className="cls-2" d="M213.74,365.42a15.87,15.87,0,1,0,0-31.73v-3.33a19.2,19.2,0,1,1,0,38.39Z" /><polygon className="cls-2" points="242.74 368.08 242.74 334.36 234.24 334.36 234.24 331.03 254.96 331.03 254.96 334.36 246.46 334.36 246.46 368.08 242.74 368.08" /><polygon className="cls-2" points="261.48 368.08 261.48 331.03 281.75 331.03 281.75 334.36 265.2 334.36 265.2 347.69 281.2 347.69 281.2 351.03 265.2 351.03 265.2 364.75 281.75 364.75 281.75 368.08 261.48 368.08" /><path className="cls-2" d="M320.49,358.36h4.11a19.16,19.16,0,1,1-3.56-22.5c2.17,2.11,2.61,2.67,3.45,4.67h-4.17a15.52,15.52,0,0,0-12.83-6.84c-8.39,0-15.61,7.39-15.61,15.95,0,8.39,7.27,15.78,15.61,15.78a16.1,16.1,0,0,0,10.33-4.06,14.7,14.7,0,0,0,2.67-3" /><polygon className="cls-2" points="331.94 368.08 331.94 331.03 335.67 331.03 335.67 347.36 354.88 347.36 354.88 331.03 358.55 331.03 358.55 368.08 354.88 368.08 354.88 350.69 335.67 350.69 335.67 368.08 331.94 368.08" /><path className="cls-2" d="M202.06,374.47h2.66a4.09,4.09,0,0,1,3.55,1.44,4.26,4.26,0,0,1,.86,2.73c0,2.37-1.24,4.2-4.29,4.2h-2.78Zm1.69,6.89h1.18c1.81,0,2.52-1.19,2.52-2.7a3.16,3.16,0,0,0-.57-1.88A2.26,2.26,0,0,0,205,376h-1.2Z" /><polygon className="cls-2" points="212.04 374.47 216.74 374.47 216.74 375.95 213.73 375.95 213.73 377.85 216.68 377.85 216.68 379.33 213.73 379.33 213.73 381.36 216.74 381.36 216.74 382.84 212.04 382.84 212.04 374.47" /><path className="cls-2" d="M219.74,374.47h2.53a4.25,4.25,0,0,1,2.5.53,2.75,2.75,0,0,1,1.07,2.27,2.67,2.67,0,0,1-.46,1.56,2.16,2.16,0,0,1-1.38.91l1.87,3.1H224.1L221.85,379h.33a2.53,2.53,0,0,0,1.5-.31,1.56,1.56,0,0,0,.54-1.22,1.43,1.43,0,0,0-.63-1.21,2.22,2.22,0,0,0-1.18-.26h-1v6.89h-1.68Z" /><polygon className="cls-2" points="228.57 382.84 228.57 374.47 230.85 374.47 233 380.48 235.12 374.47 237.4 374.47 237.4 382.84 235.84 382.84 235.89 376.13 233.54 382.84 232.43 382.84 230.08 376.13 230.12 382.84 228.57 382.84" /><path className="cls-2" d="M241.81,382.84H240l3.39-8.37h1.49l3.31,8.37h-1.84l-.61-1.64h-3.31Zm2.23-6.38-1.19,3.39h2.42Z" /><polygon className="cls-2" points="251.13 375.95 249.32 375.95 249.32 374.47 254.61 374.47 254.61 375.95 252.81 375.95 252.81 382.84 251.13 382.84 251.13 375.95" /><path className="cls-2" d="M256.39,378.72a4.4,4.4,0,1,1,4.38,4.28,4.31,4.31,0,0,1-4.38-4.28Zm1.69-.07a2.71,2.71,0,1,0,2.71-2.86,2.75,2.75,0,0,0-2.71,2.86Z" /><polygon className="cls-2" points="268.12 374.47 269.81 374.47 269.81 381.36 272.56 381.36 272.56 382.84 268.12 382.84 268.12 374.47" /><path className="cls-2" d="M274.24,378.72a4.4,4.4,0,1,1,4.38,4.28,4.3,4.3,0,0,1-4.38-4.28Zm1.68-.07a2.71,2.71,0,1,0,2.72-2.86,2.76,2.76,0,0,0-2.72,2.86Z" /><path className="cls-2" d="M292.19,377a3.1,3.1,0,0,0-.62-.69,2.58,2.58,0,0,0-1.6-.55,2.87,2.87,0,0,0,0,5.73,2.82,2.82,0,0,0,1.66-.51,2.21,2.21,0,0,0,.86-1.27h-3.13v-1.36h5.08a5,5,0,0,1-.38,2.11A4.46,4.46,0,0,1,290,383a4.35,4.35,0,1,1,0-8.69,4.39,4.39,0,0,1,4.1,2.72Z" /><polygon className="cls-2" points="299.2 379.84 296.63 374.47 298.45 374.47 300.04 378.27 301.63 374.47 303.44 374.47 300.89 379.84 300.89 382.84 299.2 382.84 299.2 379.84" /><rect className="cls-2" x="307.76" y="377.9" width="50.67" height="2.06" /><rect className="cls-2" x="148.3" y="377.9" width="50.67" height="2.06" /></svg>
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
                    <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103859.82458735061!2d45.30761499479892!3d35.5630978961248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002c0536d143b1%3A0xf791750d4e215dea!2sSulaymaniyah!5e0!3m2!1sen!2siq!4v1644834542461!5m2!1sen!2siq" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact