import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./pages/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="image-gallery" element={<GalleryPage />} />
         <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
