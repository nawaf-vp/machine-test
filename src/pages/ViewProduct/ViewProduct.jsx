import React from 'react'
import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./";

const ViewProduct = () => {

    const {datas,error,loading} = useFetch("http://apitextile.eyeterp.com/product/viewproduct")
  console.log(datas)
    return (

   
    <div className="shop">
    <div className="shopTitle">
      <h1>LeEyet Shop</h1>
    </div>

    <div className="products">
      
    </div>
  </div>
  )
}

export default ViewProduct