import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import CategoryCard from '../../components/category-card/CategoryCard';
// import Nav from '../../../components/navigation/Nav';
import "./brands/brandview.css"
// import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

// import cookies from 'js-cookie';

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Navigation } from "swiper";
import Enav from '../../components/navigation/Enav';

function CategoryView() {

    const params = useParams();
    const id = params.id;
    const [brand, setbrand] = useState([]);
    const [category, setcategory] = useState('');
    const [buttons, setbuttons] = useState([]);
    const [search, setSearch] = useState('');

    const currentLanguageCode = i18next.language || 'kr';
    console.log(currentLanguageCode)


    useEffect(() => {


        console.log("asdfafad")


    }, [i18next.language])

    const notify = () =>
        toast.success('Done', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,

        });

    useEffect(() => {

        const run = async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}category/${id}`);
                setbrand(data)
                // console.log(brand)
            } catch (error) {
                console.log(error)
            }
        }
        run();

        // axios.get(`http://localhost:5555/api/brand/${id}`).then((response) => {
        //     setbrand(response.data)
        // });
    }, []);
    useEffect(() => {
        const run = async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}category`);
                setbuttons(data)
            } catch (error) {
                console.log(error)

            }
        }
        run();
        // axios.get(`http://localhost:5555/api/category`).then((response) => {
        //     setbuttons(response.data)
        // });
    }, []);


    useEffect(() => {

        const run = async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}category/${category}`);
                setbrand(data)
            } catch (error) {
                console.log(error)
            }
        }
        if (category !== '') {
            run();

        }
        // console.log(category)
        // axios.get(`http://localhost:5555/api/product/${id}/${category}`).then((response) => {
        //     setbrand({ ...brand, products: response.data })
        // });
    }, [category]);
    const [slides, setslides] = useState(8);

    useEffect(() => {
        if (window.innerWidth <= 1000) {
            setslides(6)


        }
        if (window.innerWidth <= 800) {
            setslides(4)


        }
        if (window.innerWidth <= 500) {
            setslides(3)



        }


    }, []);

    const filteredProducts = brand.products?.filter((product) => {
        if (
            product.nameKR.toLowerCase().includes(search) ||
            product.nameAR.toLowerCase().includes(search)
        ) {
            return product;
        }
    });
    return (
        <>
            <Enav setSearch={setSearch} search={search} />
            <div className='category-brand '>
                <div className="multi-button">
                    <Swiper
                        slidesPerView={slides}
                        spaceBetween={10}
                        navigation={true}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode]}
                        className="mySwiper" >
                        {buttons &&
                            buttons.map((e) => (

                                <SwiperSlide style={{ width: "fit-content" }} className="btn btn-cut"
                                    onClick={() =>
                                        setcategory(e._id)

                                    }>
                                    <span className="a">{currentLanguageCode === 'ar'
                                        ? e.nameAR
                                        : e.nameKR}</span>
                                    {/* <span className="b"><i className="fas fa-cut"></i></span> */}
                                </SwiperSlide>

                            ))}

                    </Swiper>
                    {/* {buttons &&
                        buttons.map((e) => (
                            <button className="btn btn-cut"
                                onClick={() =>
                                    setcategory(e._id)
                                }>
                                <span className="a">{e.nameAR}</span>
                                <span className="b"><i className="fas fa-cut"></i></span>
                            </button>
                        ))
                    } */}

                </div>

            </div>
            <div className="category-cards">
                {filteredProducts?.map((e) => (
                    // <Link to={/brands/${e._id}}>
                    <CategoryCard cart={e} notify={notify} />
                    // </Link>
                ))}
                <ToastContainer />
            </div>


        </>
    )
}

export default CategoryView