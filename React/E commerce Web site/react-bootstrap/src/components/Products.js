import React from "react";
import ProductItem from "./ProductItem";
import Card from "./UI/Card";
import { Link } from "react-router-dom";
const productsArr = [
  {
    id:1,
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id:2,
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id:3,
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:4,
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {productsArr.map(({ title, price, imageUrl ,id }) => {
        return (
          <div>
            <ProductItem title={title} imageUrl={imageUrl} price={price} />
            <div> <Link to={`/products/${id}`}>Details</Link> </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
