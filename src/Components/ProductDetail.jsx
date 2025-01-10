import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "./ImageGallary";
import ProductInfo from './ProductInfo';
import SuggestedProducts from './SuggestedProducts';
import ReviewsComments from './ReviewsComments';
import Footer from "./Footer";

const ProductDetail = () => {
  const { productslug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/products/${productslug}`);
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productslug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="loader w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (product) {
    return (
      <div>
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image Gallery */}
          <div className="space-y-6">
            <ImageGallery image={product.image} />
          </div>

          {/* Product Info & Reviews */}
          <div className="space-y-12">
            {/* Product Information */}
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Suggested Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">You May Also Like</h2>
          <SuggestedProducts />
        </div>

        {/* Reviews & Comments */}
        <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Reviews & Comments</h2>
              <ReviewsComments />
            </div>

            
      </div><Footer/>
      </div>
    );
  }

  return null;
};

export default ProductDetail;
