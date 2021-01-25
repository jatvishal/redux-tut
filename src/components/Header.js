import React from "react";

function Header(props) {
  console.warn("Header", props.data)
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://www.kindpng.com/picc/m/121-1218722_ecommerce-shopping-cart-png-image-cart-png-transparent.png" />
      </div>

     
    </div>
  );
}

export default Header;
