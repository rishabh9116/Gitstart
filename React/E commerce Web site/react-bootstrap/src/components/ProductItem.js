import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
import Card from "./UI/Card";

const ProductItem = ({ title, price, imageUrl }) => {
  const cartCtx = useContext(CartContext);

  const clickHandler = () => {
    cartCtx.addItem({
      title: title,
      imageUrl: imageUrl,
      price: price,
      amount: 1,
    });

    const postData = {
      title: title,
      imageUrl: imageUrl,
      price: price,
      amount: 1,
    }
    fetch("https://crudcrud.com/api/72f92d5c160f4249bc7a2a0ac2d5999a/cartabcgmailcom",{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(postData),
    }).then(res => {
      if(!res.ok) {
        throw new Error (`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {

      console.log('POST request successful:',data);
    })
    .catch(error => {
      //  
    })
  };

  return (
    <Card>
      <div
        style={{
          fontFamily: "sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>{title}</h2>
      </div>
      <div>
        <img src={imageUrl} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <span style={{ fontFamily: "sans-serif", fontSize: "25px" }}>
          ${price}
        </span>

        <button
          onClick={clickHandler}
          style={{
            fontFamily: "sans-serif",
            fontSize: "25px",
            backgroundColor: "aqua",
          }}
        >
          ADD TO CART
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
