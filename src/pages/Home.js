import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="heading">Welcome to our store</h2>
      <section>
        <h3 style={{ padding: "20px" }}> Our Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
