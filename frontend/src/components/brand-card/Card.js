import React from 'react'
import "./card.css"
function Card(props) {
    return (

        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon" style={{ backgroundImage: `url(${props.logo})` }}>
                        <img src={`http://localhost:5555${props.logo}`} />

                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">{props.name}</a>
                    </h3>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>


    )
}

export default Card