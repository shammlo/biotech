import React, { useState, useEffect } from 'react'
import axios from 'axios'

import "./brands.css"
import Card from "../../components/brand-card/Card"
function Brands() {
    const [brand, setbrand] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5555/api/brand/").then((response) => {
            setbrand(response.data)

        });
    }, []);
    return (
        <div id='brand-section' className='brands-section'>
            <div className='container-brand '>
                <div class="ccontainer">
                    {
                        brand.map((e) => (
                            <Card name={e.name} logo={e.logo} desc={e.description} />
                        ))
                    }

                </div>
            </div>


        </div>
    )
}

export default Brands