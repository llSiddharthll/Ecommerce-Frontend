import React from "react";

const ProductCard = ({ image, name, description, price }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border hover:shadow-2xl hover:scale-[1.03] transition-all duration-300">
      <img
        className="w-full h-64 object-contain rounded-t-xl px-4"
        src={image}
        alt={name}
        loading="lazy"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-lg text-gray-800 truncate">{name}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-4 flex justify-between items-center">
        <span className="text-xl font-semibold text-gray-900">
          ${price}
        </span>
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
