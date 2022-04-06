import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3
        style={{
          padding: "20px",
          margin: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        CART
      </h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard">
            <img
              src="https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg"
              alt=""
            />
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <h3>{product.stock}</h3>
            <h3>{product.category[0] + "  " + product.category[1]}</h3>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              REMOVE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
