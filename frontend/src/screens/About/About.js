import React from 'react'
import "./about.css"
import { useTranslation } from "react-i18next";

import pic from "../../images/about.svg"
function About() {
    const { t } = useTranslation();

    return (
        <div dir='rtl' id='about-section' className='about-section container'>
            <div className='text-wrapper'>
                <h1 className='about-title'>
                    {t("about_us")}
                </h1>
                <p className='about-body'>
                    {t("about_info")}                </p>
            </div>
            <div className='about-pic'>
                <img src={pic} />
            </div>
        </div>
    )
}

export default About