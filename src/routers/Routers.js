import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/Notfound";
import Blogs from "../pages/Blog/Blogs";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<CarListing />} />
            <Route path="/cars/:slug" element={<CarDetails />} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

export default Routers;