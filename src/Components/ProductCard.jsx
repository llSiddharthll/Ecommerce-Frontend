import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Notify from "./Notify";
import { useState } from "react";

const ProductCard = ({ id, image, name, description, price }) => {
  const [toastMessage, setToastMessage] = useState("");

  function handleCart() {
    const token = localStorage.getItem('auth_token'); // Replace with how you're storing the token

    axios.post(
      'http://127.0.0.1:8000/api/cart/add/',
      {
        product_id: id,
        quantity: 1
      },
      {
        headers: {
          'Authorization': `Token ${token}`, // Send token in the Authorization header
        },
      }
    )
      .then(response => {
        setToastMessage(response.data.message);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error.response.data);
        alert('Failed to add item to cart.');
      });
  }


  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border hover:shadow-2xl hover:scale-[1.03] transition-all duration-300">
      <img
        className="w-full h-64 object-contain rounded-t-xl px-4"
        src={image}
        alt={name}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-lg text-black truncate">{name}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
      </div>
      <div className="px-6 py-2 flex gap-2 items-end">
        <span className="text-xl font-semibold text-gray-900">
          ${price}
        </span>
        <span className="text-sm font-semibold line-through text-gray-500">
          ${(parseFloat(price) + 90).toFixed(2)}
        </span>
        <span className="text-md font-semibold text-red-500">
          12% off
        </span>
      </div>
      <div className="px-6 pt-4 pb-4 flex w-full gap-6 items-center">

        <Link className="w-1/2 text-center bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          Buy Now
        </Link>
        <Link onClick={handleCart} className="w-1/2 text-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          Add to Cart
        </Link>
        {toastMessage && <Notify text={toastMessage}/>}
      </div>
    </div>
  );
};

export default ProductCard;
