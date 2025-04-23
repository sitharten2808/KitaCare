import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const FloatingActionButton = ({ onClick }) => {
  const [isDragging, setIsDragging] = useState(false);
  const buttonRef = useRef(null);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    // Reset position to right corner after drag
    buttonRef.current.style.left = '';
    buttonRef.current.style.right = '20px';
  };

  return (
    <motion.div
      ref={buttonRef}
      className="fixed right-5 bottom-5 z-50 cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-full p-4 shadow-lg transition-colors duration-200"
      drag
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={!isDragging ? onClick : undefined}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    </motion.div>
  );
};

export default FloatingActionButton; 