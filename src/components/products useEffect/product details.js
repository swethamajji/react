import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ImageComponent from "../image/image";
import "./details.css";

import RotatingLineSpinner from "../spinners/spinners";
import NavBar from "../navbar/navbar";

function ProductDetailComponent() {
  const paramsFromURL = useParams();
  console.log("paramsFromURL: ", paramsFromURL);
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    fetchEachProduct();
  },[]);

  const fetchEachProduct = async () => {
    const { status, data } = await axios.get(
      `https://fakestoreapi.com/products/${paramsFromURL.productId}`
    );
    if (status === 200) {
      setProductDetails(data);
    }
  };

  return (
    <div className="product-detail-container">
      <NavBar/>
      {Object.keys(productDetails).length > 0 ? (
        <>
          <h3 className="product-title">{productDetails.title}</h3>
          <h3 className="product-price">${productDetails.price}</h3>
          <ImageComponent
            src={productDetails.image}
            className="product-image"
          />
          <p className="product-description">{productDetails.description}</p>
          <p className="product-category">
            Category: {productDetails.category}
          </p>
          <p className="product-rating">
            Rating: {productDetails.rating.rate} ({productDetails.rating.count}{" "}
            reviews)
          </p>
        </>
      ) : (
        <div className="spinner-container">
          <RotatingLineSpinner/>
        </div>
      )}
    </div>
  );
}

export default ProductDetailComponent;