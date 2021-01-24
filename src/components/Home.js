import React from 'react';

function Home()
{
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://www.kindpng.com/picc/m/121-1218722_ecommerce-shopping-cart-png-image-cart-png-transparent.png"/>
            </div>

            <h1>home component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.91-img.com/gallery_images_uploads/4/9/492817cdb88e11602bc4c8fd8681f87e03a11560.jpg?w=0&h=901&q=80&c=1" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-phone
                    </span>
                    <span>
                        Price
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;