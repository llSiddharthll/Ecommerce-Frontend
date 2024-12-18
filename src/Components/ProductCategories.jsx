// components/ProductCategories.jsx
import React from "react";

const categories = [
  { name: "Electronics", image: "https://via.placeholder.com/150" },
  { name: "Fashion", image: "https://via.placeholder.com/150" },
  { name: "Home & Kitchen", image: "https://via.placeholder.com/150" },
  { name: "Sports", image: "https://via.placeholder.com/150" }
];

const ProductCategories = () => {
  return (
    <div className="py-10 px-5 lg:px-20">
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
