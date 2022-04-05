import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <span>SHOPPING CART</span>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <span>CART ITEMS : 0</span>
      </div>
    </div>
  );
};

export default Navbar;
