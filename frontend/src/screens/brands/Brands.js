import React from 'react'
import "./brands.css"
import Card from "../../components/brand-card/Card"
function Brands() {
    return (
        <div className='brands-section'>
            <div className='container-brand '>
                <div class="ccontainer">

                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div>


        </div>
    )
}

export default Brands