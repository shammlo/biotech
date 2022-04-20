import React from 'react'
import Cart from '../components/OrderCart/Cart'
import About from './About/About'
import Brands from './brands/Brands'
import Categories from './categories/Categories'
import Contact from './contact/Contact'
import Header from './Header/Header'
import Map from './map/Map'

function Home() {
    return (
        <div >
            <Header />
            <Brands />
            <Categories />
            <About />
            <Map />
            <Contact />
        </div>
    )
}

export default Home