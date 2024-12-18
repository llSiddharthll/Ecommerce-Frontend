// components/HeroSection.jsx
import React from "react";
import Slider from "react-slick";
import "../App.css"

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  const slides = [
    {
      title: "Welcome to ShopEase",
      description: "Discover the best products at unbeatable prices.",
      image:
        "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?crop=entropy&cs=tinysrgb&w=1200&h=600&fit=crop",
      buttonText: "Shop Now"
    },
    {
      title: "Exclusive Deals",
      description: "Up to 50% off on top categories.",
      image:
        "https://images.unsplash.com/photo-1516214104705-6d7d4d3b276e?crop=entropy&cs=tinysrgb&w=1200&h=600&fit=crop",
      buttonText: "Explore Deals"
    },
    {
      title: "New Arrivals",
      description: "Check out the latest trends.",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&w=1200&h=600&fit=crop",
      buttonText: "Discover Now"
    }
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div
              className="w-full h-[70vh] bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-5 lg:px-20">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg lg:text-xl mb-6">{slide.description}</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
