// components/FeaturedProducts.jsx
import React from "react";

const products = [
  { name: "Product 1", price: "$99", image: "https://via.placeholder.com/300" },
  {
    name: "Product 2",
    price: "$149",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Product 3",
    price: "$199",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Product 4",
    price: "$249",
    image: "https://via.placeholder.com/300"
  },
  { name: "Product 5", price: "$299", image: "https://via.placeholder.com/300" }
];

const FeaturedProducts = () => {
  return (
    <div className="py-16 px-5 lg:px-20 bg-gray-100">
      {/* Section Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Product Name */}
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {product.name}
            </h3>

            {/* Product Price */}
            <p className="text-lg font-medium text-blue-600 mb-4">
              {product.price}
            </p>

            {/* Add to Cart Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
