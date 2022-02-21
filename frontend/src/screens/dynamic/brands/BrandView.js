import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import axios from 'axios';
import CategoryCard from '../../../components/category-card/CategoryCard';
import Nav from '../../../components/navigation/Nav';
import "./brandview.css"
function BrandView() {
    const params = useParams();
    const id = params.id;
    const [brand, setbrand] = useState([]);
    const [category, setcategory] = useState([]);
    const [buttons, setbuttons] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5555/api/brand/${id}`).then((response) => {
            setbrand(response.data)

        });
    }, []);
    useEffect(() => {
        axios.get(`http://localhost:5555/api/category`).then((response) => {
            setbuttons(response.data)

        });
    }, []);


    useEffect(() => {
        axios.get(`http://localhost:5555/api/product/${id}/${category}`).then((response) => {
            setbrand({ ...brand, products: response.data })

        });
    }, [category]);
    return (
        <>
            <Nav />
            <div className='category-brand '>
                <div className="multi-button">
                    {buttons &&
                        buttons.map((e) => (

                            <button className="btn btn-cut"
                                onClick={() =>
                                    setcategory(e._id)

                                }>
                                <span className="a">{e.nameAR}</span>
                                <span className="b"><i className="fas fa-cut"></i></span>
                            </button>

                        ))

                    }

                </div>
            </div>
            <div className='category-cards'>
                {brand && brand.products &&
                    brand.products.map((e) => (
                        <Link to={`/brands/${e._id}`}>
                            <CategoryCard />

                        </Link>
                    ))

                }

            </div>


        </>
    )
}

export default BrandView