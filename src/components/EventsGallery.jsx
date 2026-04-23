import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

import gallery1 from '../assets/work_img7.jpg';
import gallery2 from '../assets/work_img8.jpg';
import gallery3 from '../assets/work_img9.jpeg';
import gallery4 from '../assets/work_img10.jpeg';
import gallery5 from '../assets/work_img11.jpeg';

const EventsGallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/gallery')
      .then(res => res.json())
      .then(data => {
        if(data && data.length > 0) setGalleryImages(data.slice(0, 5));
        else setGalleryImages([
          { id: 1, src: gallery1, title: "Women's Day Summit", date: "March 8, 2026" },
          { id: 2, src: gallery2, title: "Tech Skill Workshop", date: "April 15, 2026" },
          { id: 3, src: gallery3, title: "Entrepreneurship Bootcamp", date: "May 22, 2026" },
          { id: 4, src: gallery4, title: "Financial Literacy Class", date: "June 10, 2026" },
          { id: 5, src: gallery5, title: "Leadership Seminar", date: "July 2, 2026" }
        ]);
      }).catch(err => console.error(err));
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="gallery" className="container mx-auto px-4 py-16 max-w-6xl relative">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Events gallery</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl">Explore our gallery of upcoming events designed to empower, educate, and inspire women across communities.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </motion.div>

      <div 
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {galleryImages.map((item) => (
          <motion.div key={item.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="min-w-[280px] md:min-w-[320px] snap-center group relative rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex-shrink-0">
            <img src={item.src} alt={item.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              {item.description && <p className="text-gray-300 text-sm mb-2 line-clamp-2">{item.description}</p>}
              <div className="flex items-center text-gray-300 text-sm">
                <Calendar size={16} className="mr-2" />
                <span>{item.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsGallery;
