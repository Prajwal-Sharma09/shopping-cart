import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://electronic-ecommerce.herokuapp.com/api/v1/product"
      );
      const response = await res.json();
      console.log(response.data.product);
      setProducts(response.data.product);
    };
    fetchProducts();
  }, []);
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img
            src="https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg"
            alt=""
          />
          <h4 style={{ padding: "5px" }}>{product.name}</h4>
          <h4 style={{ padding: "5px" }}>{product.price}</h4>
          <h4 style={{ padding: "5px" }}>{product.stock}</h4>
          <h4>{product.category[0] + " " + product.category[1]}</h4>
          <button className="btn">ADD TO CART</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
