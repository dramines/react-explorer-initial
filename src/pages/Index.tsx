import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-white to-soft-white"
    >
      <Hero />
      <Features />
    </motion.div>
  );
};

export default Index;