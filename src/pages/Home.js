import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h4>Welcome to our store</h4>
      <section>
        <h5>Products</h5>
        <Products />
      </section>
    </div>
  );
};

export default Home;
