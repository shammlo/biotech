import React from 'react'
import "./categoryCard.css"
function CategoryCard() {
    return (
        <>


            <div class="wrapper ">
                <div class="containera">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="left">
                            <div class="details">
                                <h1>Chair</h1>
                                <p>£250</p>
                            </div>
                            {/* <div class="buy"><i class="material-icons">add_shopping_cart</i></div> */}
                        </div>
                        <div class="right">
                            {/* <div class="done"><i class="material-icons">done</i></div> */}
                            <div class="details">
                                <h1>Chair</h1>
                                <p>Added to your cart</p>
                            </div>
                            {/* <div class="remove"><i class="material-icons">clear</i></div> */}
                        </div>
                    </div>
                </div>
                <div class="inside">
                    {/* <div class="icon"><i class="material-icons">info_outline</i></div> */}
                    <div class="contents">
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