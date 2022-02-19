import React from 'react'
import "./card.css"
function Card() {
    return (

        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                    </h3>
                    <p>This is where I network and build my professional protfolio.</p>
                </div>
            </div>
        </div>


    )
}

export default Card