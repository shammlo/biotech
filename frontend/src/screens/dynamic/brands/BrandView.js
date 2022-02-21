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
        axios.get(`http://localhost:5555/api/brand/${id}/${category}`).then((response) => {
            setbrand(response.data)

        });
    }, [category]);
    return (
        <>
            <Nav />
            <div className='category-brand '>
                <div class="multi-button">
                    {buttons === null || undefined || 0 ? null :
                        buttons.map((e) => (
                            <Link to={`/brands/${e._id}`}>
                                <button class="btn btn-cut">
                                    <span class="a">{e.nameAR}</span>
                                    <span class="b"><i class="fas fa-cut"></i></span>
                                </button>
                            </Link>
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