import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageGallery = ({image}) => {
  const images = [
    image,
    'https://placeholder.com/200x200',
    'https://placeholder.com/200x200',
    'https://placeholder.com/200x200',
  ];
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <motion.img
        key={selectedImage}
        src={images[selectedImage]}
        alt={`Product image ${selectedImage + 1}`}
        className="w-full h-96 object-contain rounded-lg shadow-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
              selectedImage === index ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setSelectedImage(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

