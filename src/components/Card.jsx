import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white border border-primary-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col items-center text-center group"
    >
      {icon && <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">{icon}</div>}
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
      {description && <p className="text-gray-600 text-sm mt-2">{description}</p>}
    </motion.div>
  );
};

export default Card;
