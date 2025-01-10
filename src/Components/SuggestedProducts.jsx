import React from 'react';
import { motion } from 'framer-motion';

const SuggestedProducts = () => {
    const products = [
        { id: 1, name: 'Wireless Earbuds', price: 99.99, image: 'https://placeholder.com/200x200' },
        { id: 2, name: 'Bluetooth Speaker', price: 149.99, image: 'https://placeholder.com/200x200' },
        { id: 3, name: 'Noise-Cancelling Headphones', price: 249.99, image: 'https://placeholder.com/200x200' },
        { id: 4, name: 'Portable Charger', price: 49.99, image: 'https://placeholder.com/200x200' },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
                <motion.div
                    key={product.id}
                    className="bg-white p-4 rounded-lg shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-2" />
                    <h6 className="font-semibold">{product.name}</h6>
                    <p className="text-gray-600">${product.price}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default SuggestedProducts;

