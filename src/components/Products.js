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
    <div>
      {products.map((product) => (
        <div>
          {" "}
          <h5>{product.name}</h5>
          <h5>{product.price}</h5>
          <h5>{product.stock}</h5>
          <h5>{product.category[0] + " " + product.category[1]}</h5>
        </div>
      ))}
    </div>
  );
};

export default Products;
