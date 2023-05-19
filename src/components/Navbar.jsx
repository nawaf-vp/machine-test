import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">View</Link>
        <Link to="/EditProduct">Edit product</Link>
        <Link to="/updateimage">Update Img</Link>
        <Link to="/deleteProduct">Delete product</Link>
        
      </div>
    </div>
  );
};