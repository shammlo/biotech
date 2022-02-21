import React from 'react'
import "./categoryCard.css"
function CategoryCard() {
    return (
        <>


            <div className="wrapper ">
                <div className="containera">
                    <div className="top"></div>
                    <div className="bottom">
                        <div className="left">
                            <div className="details">
                                <h1>Chair</h1>
                                <p>£250</p>
                            </div>
                            {/* <div className="buy"><i className="material-icons">add_shopping_cart</i></div> */}
                        </div>
                        <div className="right">
                            {/* <div className="done"><i className="material-icons">done</i></div> */}
                            <div className="details">
                                <h1>Chair</h1>
                                <p>Added to your cart</p>
                            </div>
                            {/* <div className="remove"><i className="material-icons">clear</i></div> */}
                        </div>
                    </div>
                </div>
                <div className="inside">
                    {/* <div className="icon"><i className="material-icons">info_outline</i></div> */}
                    <div className="contents">
                        <p>
                            description
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryCard