import React from 'react'
import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

const ViewProduct = () => {
  return (
    <div className="shop">
    <div className="shopTitle">
      <h1>LeEyet Shop</h1>
    </div>

    <div className="products">
      {PRODUCTS.map((product) => (
        <Product data={product} />
      ))}
    </div>
  </div>
  )
}

export default ViewProduct