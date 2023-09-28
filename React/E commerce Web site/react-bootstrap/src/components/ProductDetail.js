import React from "react";
import { useParams } from "react-router-dom";

const productsArr = [
  {
    id: "1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "3",
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductDetail = () => {
  const params = useParams();
  // console.log("inside ProductDetail Comp , paramId= ", params.productId);
  const id = params.productId;
  const product = productsArr.filter(
    (productFromArr) => productFromArr.id === id
  );
  console.log("inside prdoduct detail , product = ", product);
  return (
    <div>
      <h1> {product[0].title}</h1>
      <p>price of this product is {product[0].price} Rs/-</p>
      <img src={product[0].imageUrl} />
      <h3>Reviews</h3>
      <ol>
        <li>This is one of the best product in the market</li>
        <li>Damn good !</li>
        <li>Product is decent as per the price</li>
        <li>I think it could be improved more</li>
      </ol>
    </div>
  );
};

export default ProductDetail;
