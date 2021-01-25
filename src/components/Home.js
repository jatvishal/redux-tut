import React from "react";

function Home(props) {
  console.warn("props", props);
  return (
    <div>
      <h1>home component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.91-img.com/gallery_images_uploads/4/9/492817cdb88e11602bc4c8fd8681f87e03a11560.jpg?w=0&h=901&q=80&c=1" />
        </div>
        <div className="text-wrapper item">
          <span>I-phone Price:</span>
          <span>1000$</span>
        </div>
        <div className="btn-wrapper item">
          <button 
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "i-phone 11 " })
            }
          >
            add to cart
          </button>
          <button className='remove-cart-btn'
          onClick={() => props.removeToCartHandler()}>
            Remove to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
