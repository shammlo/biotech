import React, { useState, useEffect } from 'react'
import axios from 'axios'

import "../brands/brands.css"
import CatCard from "../../components/brand-card/CatCard"
import { Link } from "react-router-dom"
function Categories() {
    const [brand, setbrand] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_MAIN_URL}category/`).then((response) => {
            setbrand(response.data)

        });
    }, []);
    return (
        <div id='brand-section' className='brands-section' style={{ marginBottom: "5%" }}>
            <div className='container-brand '>
                <div className="ccontainer">
                    {
                        brand.map((e) => (
                            <Link key={e._id} to={`/category/${e._id}`}>

                                <CatCard
                                    nameKR={e.nameKR}
                                    nameAR={e.nameAR}
                                    logo={e.img}
                                // desc={e.description}
                                />

                            </Link>
                        ))

                    }

                </div>
            </div>


        </div>
    )
}

export default Categories