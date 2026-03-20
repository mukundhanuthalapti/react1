import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="about-us">About Us</Link>
      <Link to="products">Products</Link>
      <Link to="image-gallery">Gallery</Link>
      <Link to="contact-us">Contact Us</Link>
    </nav>
  );
};

export default NavBar;
