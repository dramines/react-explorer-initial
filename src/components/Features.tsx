import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Precision Design",
    description: "Every pixel carefully placed with purpose and intention.",
  },
  {
    title: "Thoughtful Interactions",
    description: "Smooth, intuitive experiences that delight and inspire.",
  },
  {
    title: "Refined Details",
    description: "Meticulous attention to every aspect of the experience.",
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-soft-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white bg-opacity-50 backdrop-blur-sm border border-elegant-light/20 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-elegant-dark">
                {feature.title}
              </h3>
              <p className="text-elegant-dark/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;