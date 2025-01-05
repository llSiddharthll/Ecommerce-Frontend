import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import HomePage from "./HomePage";
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";
import AppNavbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/ContactUs";
import Login from "./Components/login";
import Signup from "./Components/signup";
// import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <AppNavbar />
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productslug" element={<ProductDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add routes for About and Contact as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
