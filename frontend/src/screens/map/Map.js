import React from 'react'
import { useTranslation } from "react-i18next";
import "./map.css"
import bioTechLogo from '../../images/biotech-footer.svg';
function Map() {
    const { t } = useTranslation();

    return (
        <div id='map-section' className='contact-section '>
            <div className='contact-logo-parent ' >
                <img className="footer-logo" width="200px" src={bioTechLogo} alt="biotech logo" />
            </div>
            <div className='contact-container '>
                <div className='contact-content'>
                    <h2>{t("owrpharmacys")}</h2>
                </div>
                <div className='contact-map '>
                    {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1QxxmFMHrm-d_jfarL6c-X7Q0mRgU2M9h&ehbc=2E312F" ></iframe> */}
                    <iframe title='location' src="https://www.google.com/maps/d/u/0/embed?mid=1QxxmFMHrm-d_jfarL6c-X7Q0mRgU2M9h&ehbc=2E312F" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Map