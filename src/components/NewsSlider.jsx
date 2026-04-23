import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const NewsSlider = () => {
  const [newsItems, setNewsItems] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch('https://weaec-backend.onrender.com/api/news')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) setNewsItems(data.slice(0, 4));
        else setNewsItems([
          {
            id: 1,
            image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80",
            title: "New Government Grant Launched for Female Founders",
            date: "April 1, 2026",
            summary: "Apply for the new grant dedicated to providing seed funding for women-led startups."
          },
          {
            id: 2,
            image: "https://images.unsplash.com/photo-1531545514251-b159e38e6e5b?auto=format&fit=crop&w=800&q=80",
            title: "Local NGO Partners to Offer Free Hardware Training",
            date: "April 5, 2026",
            summary: "Join the upcoming 3-month free hardware training session available for members."
          },
          {
            id: 3,
            image: "https://images.unsplash.com/photo-1559523161-0fc0d6b63300?auto=format&fit=crop&w=800&q=80",
            title: "Success Story: Turning a Small Loan into a Million Dollar Business",
            date: "April 10, 2026",
            summary: "Read how one of our alumni managed to leverage a micro-loan to boost her business."
          },
          {
            id: 4,
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
            title: "Community Outreach Expanding to Rural Areas",
            date: "April 18, 2026",
            summary: "Our empowerment portal is extending its operations and workshops to 5 new rural communities."
          }
        ]);
      }).catch(err => console.error(err));
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="news" className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Latest News & Updates</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
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

        {/* Scrollable Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newsItems.map((news) => (
            <motion.div key={news.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="min-w-[300px] md:min-w-[400px] snap-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex-shrink-0">
              <div className="relative h-48 overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary rounded-full">
                  {news.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{news.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{news.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSlider;
