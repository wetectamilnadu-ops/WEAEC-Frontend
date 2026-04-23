import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const GalleryPage = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    fetch('http://localhost:5000/api/gallery')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setGalleryImages(data);
        } else {
          // Fallback if no data from API
          setGalleryImages([]);
        }
      }).catch(err => console.error(err));
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex-grow bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Complete Gallery</h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our extensive collection of moments, events, and milestones that highlight our journey in empowering women across communities.
          </p>
        </div>

        {galleryImages.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-xl">No images found in the gallery yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((item, index) => (
              <motion.div 
                key={item.id || index} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeInUp} 
                className="group relative rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={item.src || item.image} 
                  alt={item.title} 
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  {item.description && <p className="text-gray-300 text-sm mb-3 line-clamp-3">{item.description}</p>}
                  {item.date && (
                    <div className="flex items-center text-primary-light text-sm font-medium">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.date}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
