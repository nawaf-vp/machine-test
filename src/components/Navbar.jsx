import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> view </Link>
        <Link to="/EditProduct">Edit product</Link>
        <Link to="/updateimg">Update Img</Link>
        <Link to="/contact">Delete product</Link>
        
      </div>
    </div>
  );
};