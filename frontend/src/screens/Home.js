import React from 'react'
import About from './About/About'
import Brands from './brands/Brands'
import Contact from './contact/Contact'
import Header from './Header/Header'

function Home() {
    return (
        <div >
            <Header />
            <About />
            <Brands />
            <Contact />
        </div>
    )
}

export default Home