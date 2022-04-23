import React from 'react';
import './contact.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import bioTechLogo from '../../images/biotech-footer.svg';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    return (
        <div id="contact-section" className="contact-section2 ">
            <div className="contact-content2">
                <div className="contact-card-parent">
                    <div className="contact-card ">
                        <a href="/#" target="_blank" className="contact-link">
                            <div className="card-icon">
                                <FaFacebookF />
                            </div>

                            <div className="card-number">
                                <h2>biotech/facebook</h2>
                            </div>
                        </a>
                    </div>
                    <div className="contact-card">
                        <a href="/#" target="_blank" className="contact-link">
                            <div className="card-icon">
                                <FaInstagram />
                            </div>

                            <div className="card-number">
                                <h2>biotech instagram</h2>
                            </div>
                        </a>
                    </div>
                    <div className="contact-card">
                        <a href="/#" target="_blank" className="contact-link">
                            <div className="card-icon">
                                <AiOutlineMail />
                            </div>

                            <div className="card-number">
                                <h2>biotech.2022@gmail.com</h2>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="contact-card-parent">
                    <div className="contact-card">
                        <h2>المبیعات</h2>
                        <div className="card-number">
                            <h2>0750 102 1920</h2>
                        </div>

                        <h2>{t('dhersh')}</h2>
                        <div className="card-icon">
                            <AiOutlinePhone />
                        </div>
                    </div>
                    <div className="contact-card">
                        <h2>المبیعات</h2>
                        <div className="card-number">
                            <h2>0750 837 0072</h2>
                        </div>

                        <h2>د.بێستوون</h2>
                        <div className="card-icon">
                            <AiOutlinePhone />
                        </div>
                    </div>
                    <div className="contact-card">
                        <h2>المبیعات</h2>
                        <div className="card-number">
                            <h2>0773 011 7344</h2>
                        </div>

                        <h2>د.بەڵێن</h2>
                        <div className="card-icon">
                            <AiOutlinePhone />
                        </div>
                    </div>
                    <div className="contact-card">
                        <h2>المسٶل</h2>
                        <div className="card-number">
                            <h2>0770 222 3200</h2>
                        </div>

                        <h2>د.ئارام</h2>
                        <div className="card-icon">
                            <AiOutlinePhone />
                        </div>
                    </div>
                    <div className="contact-card">
                        <h2>التحصیل</h2>
                        <div className="card-number">
                            <h2>0751 116 1061</h2>
                        </div>

                        <h2>فلاح</h2>
                        <div className="card-icon">
                            <AiOutlinePhone />
                        </div>
                    </div>
                </div>
            </div>
            <div className="created-by">
                Developed and designed by{' '}
                <a href="/#" className="created-by-link">
                    Online Guard
                </a>
                ©2022. all rights reserved
            </div>
        </div>
    );
}

export default Contact;
