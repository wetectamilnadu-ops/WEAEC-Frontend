import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../assets/work_img1.jpg';
import img2 from '../assets/work_img2.jpg';
import img3 from '../assets/work_img3.jpg';

const Hero = () => {
  const images = [img1, img2, img3];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="relative py-32 px-4 overflow-hidden flex items-center min-h-[80vh]">

      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIdx}
            src={images[currentIdx]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
            alt="Women Empowerment Background"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-white/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent z-10 w-2/3"></div>
      </div>

      <div className="container mx-auto text-left max-w-4xl relative z-20">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-primary mb-6 leading-tight drop-shadow-sm"
        >
          Start Your Entrepreneurship<br />Journey Today!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-gray-800 mb-10 font-medium max-w-2xl"
        >
          Empowering women with training, employment, and entrepreneurship support.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <a
            href="#services"
            className="inline-block bg-primary hover:bg-primary-hover text-white text-lg font-semibold py-4 px-10 rounded-full shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
