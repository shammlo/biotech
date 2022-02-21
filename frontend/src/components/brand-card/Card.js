import React from 'react'
import "./card.css"
function Card(props) {
    return (

        <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="icon" style={{ backgroundImage: `url(${props.logo})` }}>
                        <img src={`http://localhost:5555${props.logo}`} />

                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">

                    <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">  <h3>{props.name}  </h3></a>

                    <p>{props.desc}</p>
                </div>
            </div>
        </div>


    )
}

export default Card