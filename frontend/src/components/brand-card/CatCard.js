import React from 'react'
import "./card.css"
import cookies from 'js-cookie';

function Card(props) {
    const currentLanguageCode = cookies.get('i18next') || 'ku';

    return (

        <div className="card">
            <div className="face face1" >
                <div className="content">
                    <div className="icon" style={{ backgroundImage: `url(${props.logo})` }}>
                        <img src={`http://api.biotech.cf${props.logo}`} />

                    </div>
                </div>
            </div>
            <div className="face face2" >
                <div className="content">

                    <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">  <h3>{currentLanguageCode === 'ar'
                        ? props.nameAR
                        : props.nameKR}  </h3></a>

                    <p>{props.desc}</p>
                </div>
            </div>
        </div>


    )
}

export default Card