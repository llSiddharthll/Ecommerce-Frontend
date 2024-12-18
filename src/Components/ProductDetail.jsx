import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Star = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${
      filled ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
    }`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300"
          onClick={() => window.history.back()}
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        className="mb-6 text-gray-600 hover:text-gray-800 transition duration-300"
        onClick={() => window.history.back()}
      >
        ← Back to Products
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Product Image */}
        <div className="relative h-80 md:h-full bg-gray-100 flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain transition-all duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Price and Rating */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-3xl font-bold text-indigo-600">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < Math.round(product.rating.rate)} />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  ({product.rating.count} reviews)
                </span>
              </div>
            </div>

            {/* Category */}
            <div className="mb-6">
              <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            {/* Product Highlights */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Product Highlights
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  High-quality materials
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Trusted brand
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Easy to use and maintain
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Fast delivery guaranteed
                </li>
              </ul>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300"
            onClick={() => alert("Added to cart!")}
          >
            <svg
              className="w-5 h-5 inline mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductDetailSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="h-96 md:h-full bg-gray-200 animate-pulse" />
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="h-10 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-6 animate-pulse" />
            <div className="flex justify-between mb-6">
              <div className="h-8 bg-gray-200 rounded w-24 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-32 animate-pulse" />
            </div>
            <div className="h-6 bg-gray-200 rounded w-24 mb-6 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full mb-8 animate-pulse" />
          </div>
          <div className="h-12 bg-gray-200 rounded w-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
