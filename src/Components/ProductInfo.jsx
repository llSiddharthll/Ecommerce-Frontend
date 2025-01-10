import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

function ProductInfo({ product }) {
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center space-x-2">
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400" fill={i < 4 ? "currentColor" : "none"} />
                    ))}
                </div>
                <span className="text-gray-600">({product.reviews.length} reviews)</span>
            </div>
            <p className="text-2xl font-semibold">${product.price}</p>
            <p className="text-gray-600">
                {product.description}
            </p>
            <div className="mt-6 space-y-4">
                <h2 className="text-xl font-semibold">Product Details</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>High-fidelity sound with 40mm dynamic drivers</li>
                    <li>Active Noise Cancellation (ANC) technology</li>
                    <li>Up to 30 hours of battery life</li>
                    <li>Comfortable over-ear design with premium materials</li>
                    <li>Bluetooth 5.0 with multi-device pairing</li>
                </ul>
            </div>
            <div className="flex space-x-4">
                <motion.button
                    className="bg-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Buy Now</span>
                </motion.button>
                <motion.button
                    className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                </motion.button>
                <motion.button
                    className={`border border-gray-300 px-4 py-2 rounded-full ${isWishlisted ? 'text-red-500' : 'text-gray-600'
                        }`}
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Heart className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} />
                </motion.button>

            </div>
        </div>
    );
};

export default ProductInfo;

