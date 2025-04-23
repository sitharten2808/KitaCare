// src/components/Preloader.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Preloader = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start('enter');
      await controls.start('floatAndFade');
    };
    sequence();
  }, [controls]);

  const kitaVariants = {
    hidden: { x: '-100vw', opacity: 0 },
    enter: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    floatAndFade: {
      y: '-50vh',
      opacity: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  const careVariants = {
    hidden: { x: '100vw', opacity: 0 },
    enter: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    floatAndFade: {
      y: '-50vh',
      opacity: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative h-screen bg-white dark:bg-gray-900 overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold text-blue-600 dark:text-blue-400 flex space-x-2"
        initial="hidden"
        animate={controls}
      >
        <motion.span variants={kitaVariants}>Kita</motion.span>
        <motion.span variants={careVariants}>Care</motion.span>
      </motion.div>
    </div>
  );
};

export default Preloader;




