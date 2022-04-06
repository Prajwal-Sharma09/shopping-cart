import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Link to="/" exact className="logo">
        SHOPPING CART
      </Link>
      <div>
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/cart" className="navLink">
          Cart
        </Link>
        <span className="cartCount">CART ITEMS : 0</span>
      </div>
    </div>
  );
};

export default Navbar;
