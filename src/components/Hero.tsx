import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-soft-white to-transparent opacity-50" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-elegant-light bg-opacity-50 backdrop-blur-sm rounded-full text-elegant-dark"
        >
          Welcome to Excellence
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-elegant-dark"
        >
          Crafted with Precision
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-elegant-dark/80 mb-8 max-w-2xl mx-auto"
        >
          Experience design that transcends the ordinary, where every detail is meticulously considered and crafted to perfection.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="px-8 py-3 bg-elegant-dark text-white rounded-lg transition-transform hover:scale-105 active:scale-100">
            Explore More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;