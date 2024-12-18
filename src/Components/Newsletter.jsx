// components/Newsletter.jsx
import React from "react";

const Newsletter = () => {
  return (
    <div className="py-16 px-6 lg:px-24 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white text-center rounded-lg shadow-lg">
      {/* Title */}
      <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">
        Stay Connected with Us
      </h2>
      <p className="text-lg lg:text-xl mb-8 opacity-90">
        Be the first to know about exclusive offers, new arrivals, and updates.
      </p>

      {/* Form */}
      <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-3 w-full sm:w-80 rounded-full focus:outline-none text-gray-800 placeholder-gray-500 shadow-md"
        />
        <button
          type="submit"
          className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-md transform hover:scale-105 transition duration-300"
        >
          Subscribe
        </button>
      </form>

      {/* Decorative Elements */}
      <div className="mt-8 flex justify-center space-x-4">
        <span className="bg-white h-2 w-2 rounded-full animate-pulse"></span>
        <span className="bg-white h-2 w-2 rounded-full animate-pulse"></span>
        <span className="bg-white h-2 w-2 rounded-full animate-pulse"></span>
      </div>
    </div>
  );
};

export default Newsletter;
