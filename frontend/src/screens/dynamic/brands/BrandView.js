import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CardContext } from '../../../context/CardContext';
// import Backdrop from '@mui/material/Backdrop';
import axios from 'axios';
import CategoryCard from '../../../components/category-card/CategoryCard';
// import Nav from '../../../components/navigation/Nav';
import './brandview.css';
// import { useTranslation } from 'react-i18next';

import cookies from 'js-cookie';
// import Modal from '../../../components/modal/Modal';
import Modal from '@mui/material/Modal';

import { Swiper, SwiperSlide } from 'swiper/react';

import { ToastContainer, toast } from 'react-toastify';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Fade from '@mui/material/Fade';

// import required modules
import { FreeMode, Navigation } from 'swiper';
import Enav from '../../../components/navigation/Enav';

import Box from '@mui/material/Box';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function BrandView() {
    const params = useParams();
    const id = params.id;
    const [brand, setbrand] = useState([]);
    const [category, setcategory] = useState('');
    const [buttons, setbuttons] = useState([]);
    const [search, setSearch] = useState('');
    // const [bought, setBought] = useState(false);
    const [viewed, setViewed] = useState(false);
    const [clickedItem, setClickedItem] = useState();
    const currentLanguageCode = cookies.get('i18next') || 'kr';
    const [bought, setBought] = useState(false);
    const [searchHist, setSearchHist] = useState('');
    const { cart, setCart } = useContext(CardContext);
    const [slides, setslides] = useState(8);

    useEffect(() => {
        const run = async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}brand/${id}`);
                // console.log(data.products);
                // const newData = data.products.map((item) => {
                //     return {
                //         ...item,
                //         bought: false,
                //     };
                // });
                setbrand(data);
                // console.log(brand)
            } catch (error) {
                console.log(error);
            }
        };
        run();

        // axios.get(`http://localhost:5555/api/brand/${id}`).then((response) => {
        //     setbrand(response.data)
        // });
    }, []);
    useEffect(() => {
        const run = async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}category`);
                setbuttons(data);
            } catch (error) {
                console.log(error);
            }
        };
        run();
        // axios.get(`http://localhost:5555/api/category`).then((response) => {
        //     setbuttons(response.data)
        // });
    }, []);

    const notify = (alert, message) => {
        if (alert === 'warning') {
            return toast.warning(message, {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
            });
        }
        toast.success('Done', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
        });
    };
    useEffect(() => {
        const run = async () => {
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_MAIN_URL}product/${id}/${category}`
                );
                console.log(data);
                setbrand({ ...brand, products: data });
            } catch (error) {
                console.log(error);
            }
        };
        if (category !== '') {
            run();
        }
        // console.log(category)
        // axios.get(`http://localhost:5555/api/product/${id}/${category}`).then((response) => {
        //     setbrand({ ...brand, products: response.data })
        // });
    }, [category, id, brand]);

    useEffect(() => {
        if (window.innerWidth <= 1000) {
            setslides(6);
        }
        if (window.innerWidth <= 800) {
            setslides(4);
        }
        if (window.innerWidth <= 500) {
            setslides(3);
        }
    }, []);

    const filteredProducts = brand.products
        ?.filter(
            (value, index, self) =>
                index ===
                self.findIndex((data) => {
                    return data._id === value._id;
                })
        )
        .filter((product) => {
            // console.log(product);

            // if (product.nameKR) console.log(search);
            // console.log(product.nameKR);
            if (
                product.nameKR.toLowerCase().includes(search) ||
                product.nameAR.toLowerCase().includes(search) ||
                product.nameKR.toLowerCase() === search.toLowerCase() ||
                product.nameAR.toLowerCase() === search.toLowerCase()
            ) {
                return product;
            }
        });
    const closeModal = () => {
        setViewed(false);
    };
    const addToViewed = (id) => {
        // console.log(id);
        const finding = brand.products.find((product) => product._id === id);
        setClickedItem(finding);
        setViewed(!viewed);
    };

    useEffect(() => {
        const searchs = brand?.products?.map((product) => product.nameKR);
        setSearchHist(searchs);
    }, [brand?.products]);
    return (
        <>
            <Enav setSearch={setSearch} search={search} searchHist={searchHist} />

            <div className="category-brand ">
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
                        className="mySwiper"
                    >
                        {buttons &&
                            buttons.map((e) => (
                                <SwiperSlide
                                    style={{ width: 'fit-content' }}
                                    className="btn btn-cut"
                                    onClick={() => setcategory(e._id)}
                                >
                                    <span className="a">
                                        {currentLanguageCode === 'ar' ? e.nameAR : e.nameKR}
                                    </span>
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
                    <CategoryCard loading="lazy" paramID={id} cart={e} notify={notify} addToViewed={addToViewed} />
                    // </Link>
                ))}
                <ToastContainer />

                <Modal
                    open={viewed}
                    onClose={closeModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    closeAfterTransition
                    // BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 400,
                    }}
                >
                    <Fade in={viewed}>
                        <Box className="modal-overlay">
                            <div className="modal-content">
                                <div className="product">
                                    <h1>{clickedItem?.nameKR}</h1>

                                    <p>{clickedItem?.descriptionKR}</p>
                                    <div className="top prod-img">
                                        <img
                                            src={`http://api.biotech.cf${clickedItem?.image}`}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="modal-close" onClick={closeModal}>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        color="#02073E"
                                        height="24px"
                                        width="24px"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ color: 'rgb(2, 7, 62)' }}
                                    >
                                        <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
                                    </svg>
                                </div>
                            </div>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </>
    );
}

export default BrandView;
