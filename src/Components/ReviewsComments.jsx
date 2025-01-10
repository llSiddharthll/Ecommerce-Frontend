import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ThumbsUp, ThumbsDown, MessageCircle, User } from 'lucide-react';

const ReviewsComments = () => {
  const [reviews, setReviews] = useState([
    { id: 1, user: 'John D.', rating: 5, comment: 'Excellent sound quality and comfortable fit!', likes: 12, dislikes: 1, replies: [] },
    { id: 2, user: 'Sarah M.', rating: 4, comment: 'Great headphones, but battery life could be better.', likes: 8, dislikes: 2, replies: [] },
    { id: 3, user: 'Mike R.', rating: 5, comment: 'Best headphones I\'ve ever owned. Worth every penny!', likes: 15, dislikes: 0, replies: [] },
  ]);

  const [activeReply, setActiveReply] = useState(null);
  const [newReview, setNewReview] = useState({ user: '', rating: 0, comment: '' });

  const handleLike = (id) => {
    setReviews(reviews.map(review =>
      review.id === id ? { ...review, likes: review.likes + 1 } : review
    ));
  };

  const handleDislike = (id) => {
    setReviews(reviews.map(review =>
      review.id === id ? { ...review, dislikes: review.dislikes + 1 } : review
    ));
  };

  const handleReply = (id, replyText) => {
    setReviews(reviews.map(review =>
      review.id === id ? { ...review, replies: [...review.replies, { user: 'You', comment: replyText }] } : review
    ));
    setActiveReply(null);
  };

  const handleAddReview = () => {
    if (newReview.user && newReview.rating && newReview.comment) {
      setReviews([
        ...reviews,
        {
          id: reviews.length + 1,
          user: newReview.user,
          rating: newReview.rating,
          comment: newReview.comment,
          likes: 0,
          dislikes: 0,
          replies: [],
        },
      ]);
      setNewReview({ user: '', rating: 0, comment: '' });
    } else {
      alert('Please fill out all fields before submitting.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Add Your Review</h2>
        <div className="space-y-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Name"
            value={newReview.user}
            onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
          />
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
          >
            <option value="0">Select Rating</option>
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Star{i > 0 ? 's' : ''}
              </option>
            ))}
          </select>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Write your review..."
            rows="4"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          />
          <motion.button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleAddReview}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Review
          </motion.button>
        </div>
      </div>

      {reviews.map((review) => (
        <motion.div
          key={review.id}
          className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 text-white rounded-full p-2">
                <User className="w-6 h-6" />
              </div>
              <span className="font-semibold text-lg">{review.user}</span>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400" fill={i < review.rating ? 'currentColor' : 'none'} />
              ))}
            </div>
          </div>
          <p className="text-gray-700 mb-4">{review.comment}</p>
          <div className="flex space-x-4 mb-4">
            <motion.button
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-500"
              onClick={() => handleLike(review.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThumbsUp className="w-5 h-5" />
              <span>{review.likes}</span>
            </motion.button>
            <motion.button
              className="flex items-center space-x-1 text-gray-600 hover:text-red-500"
              onClick={() => handleDislike(review.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThumbsDown className="w-5 h-5" />
              <span>{review.dislikes}</span>
            </motion.button>
            <motion.button
              className="flex items-center space-x-1 text-gray-600 hover:text-green-500"
              onClick={() => setActiveReply(activeReply === review.id ? null : review.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Reply</span>
            </motion.button>
          </div>
          <AnimatePresence>
            {activeReply === review.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4"
              >
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Write your reply..."
                  rows="3"
                ></textarea>
                <motion.button
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleReply(review.id, document.querySelector('textarea').value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Post Reply
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
          {review.replies.length > 0 && (
            <div className="mt-4 space-y-2">
              {review.replies.map((reply, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-md">
                  <p className="font-semibold">{reply.user}</p>
                  <p className="text-gray-700">{reply.comment}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ReviewsComments;
