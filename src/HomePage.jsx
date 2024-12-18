import React from "react";
import HeroSection from "./Components/HeroSection";
import ProductCategories from "./Components/ProductCategories";
import FeaturedProducts from "./Components/FeaturedProducts";
import Testimonials from "./Components/Testimonials";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
