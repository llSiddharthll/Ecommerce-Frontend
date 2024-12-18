import React, { useState } from "react";

const ProductFilterSidebar = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(500);
  const [selectedRating, setSelectedRating] = useState(0);

  const categories = ["Electronics", "Fashion", "Books", "Beauty", "Sports"];

  const handleFilterChange = () => {
    onFilterChange({
      category: selectedCategory,
      price: priceRange,
      rating: selectedRating
    });
  };

  const resetFilters = () => {
    setSelectedCategory("");
    setPriceRange(500);
    setSelectedRating(0);
    onFilterChange({ category: "", price: 500, rating: 0 });
  };

  return (
    <div className="sticky top-20 w-full bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Category</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-gray-700">{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full accent-indigo-600"
        />
        <p className="text-gray-600 mt-2">Up to ₹{priceRange}</p>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Rating</h3>
        <div className="flex space-x-2">
          {[4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => setSelectedRating(rating)}
              className={`text-yellow-500 font-semibold ${
                selectedRating === rating
                  ? "text-yellow-600 scale-110"
                  : "opacity-50 hover:opacity-100"
              } transition transform duration-200`}
            >
              {"⭐".repeat(rating)} & Up
            </button>
          ))}
        </div>
      </div>

      {/* Apply and Reset Buttons */}
      <div className="flex flex-col space-y-3">
        <button
          onClick={handleFilterChange}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-700"
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md font-semibold hover:bg-gray-300"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default ProductFilterSidebar;
