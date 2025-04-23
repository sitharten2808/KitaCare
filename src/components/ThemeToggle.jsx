import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div 
      onClick={toggleTheme}
      className={`relative cursor-pointer w-[64px] h-[32px] rounded-full p-1 transition-colors duration-200 ease-in-out ${
        isDarkMode 
          ? 'bg-gray-700' 
          : 'bg-gray-200'
      }`}
    >
      <motion.div
        layout
        className="absolute inset-0 w-full h-full"
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Sliding Circle */}
        <motion.div
          animate={{
            x: isDarkMode ? 34 : 2,
          }}
          className={`absolute top-1 w-[24px] h-[24px] rounded-full shadow-md flex items-center justify-center ${
            isDarkMode ? 'bg-gray-900' : 'bg-white'
          }`}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {isDarkMode ? (
            <motion.svg 
              className="w-3.5 h-3.5 text-blue-200" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </motion.svg>
          ) : (
            <motion.svg 
              className="w-4 h-4 text-yellow-500" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <path 
                fillRule="evenodd" 
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              />
            </motion.svg>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThemeToggle; 