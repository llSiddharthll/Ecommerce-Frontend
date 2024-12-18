// components/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Great service and amazing products! Highly recommend to everyone.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Jane Smith",
    feedback:
      "ShopEase never disappoints! The quality and service are unmatched.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Samuel Green",
    feedback: "I always find what I need here. Best shopping experience ever!",
    image: "https://via.placeholder.com/150"
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 px-5 lg:px-20 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800">
        What Our Customers Say
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white shadow-lg rounded-lg p-8 text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Customer Image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 mx-auto rounded-full mb-6 border-4 border-blue-500"
            />

            {/* Customer Name */}
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              {testimonial.name}
            </h3>

            {/* Customer Feedback */}
            <p className="text-gray-600 italic leading-relaxed">
              "{testimonial.feedback}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
