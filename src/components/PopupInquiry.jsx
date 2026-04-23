import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { submitInquiry } from '../services/apiService';

const PopupInquiry = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', plan: '', message: ''
  });

  useEffect(() => {
    // Delay to not immediately block the user on page load (wait 1.5 seconds)
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOpenPopup = (e) => {
      setIsOpen(true);
      if (e.detail?.plan) {
        setFormData(prev => ({ ...prev, plan: e.detail.plan }));
      }
    };
    window.addEventListener('open-popup', handleOpenPopup);
    return () => window.removeEventListener('open-popup', handleOpenPopup);
  }, []);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Frontend Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.plan) {
      alert("Please fill in all required fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setStatus('loading');
    try {
      await submitInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        plan: formData.plan,
        message: formData.message || 'No message provided'
      });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', plan: '', message: '' });
      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
      }, 2500);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm overflow-y-auto"
        >
          <div className="min-h-screen flex items-center justify-center w-full py-10">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl md:rounded-3xl shadow-[0_0_40px_rgba(233,30,99,0.15)] border border-primary-light w-full max-w-3xl relative p-6 sm:p-8 md:p-12 my-auto mx-4 sm:mx-auto max-h-[95vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors bg-white/80 backdrop-blur shadow-sm md:shadow-none md:bg-transparent"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8 md:mb-10 mt-4 md:mt-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">Make an Inquiry</h2>
                <div className="w-16 md:w-20 h-1 bg-primary mx-auto rounded-full mb-3 md:mb-4"></div>
                <p className="text-sm sm:text-base text-gray-500">Have questions? Fill out the form below and our team will get back to you.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
                    <input 
                      type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-gray-50 focus:bg-white" 
                      placeholder="Jane Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                    <input 
                      type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-gray-50 focus:bg-white" 
                      placeholder="jane@example.com" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">Phone Number</label>
                    <input 
                      type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-gray-50 focus:bg-white" 
                      placeholder="+1 234 567 890" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">Interested Service</label>
                    <select 
                      name="service" value={formData.service} onChange={handleChange} required
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-gray-50 focus:bg-white text-gray-700"
                    >
                      <option value="" disabled>Select a Service</option>
                      <option value="Skill Training">Skill Development Training</option>
                      <option value="Entrepreneurship">Entrepreneurship Guidance</option>
                      <option value="Job Placement">Job Placement Assistance</option>
                      <option value="Financial Support">Financial & Govt Support</option>
                      <option value="Mentorship">Mentorship and Support</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">Plan Selection</label>
                  <select 
                    name="plan" value={formData.plan} onChange={handleChange} required
                    className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-gray-50 focus:bg-white text-gray-700"
                  >
                    <option value="" disabled>Select a Plan</option>
                    <option value="Standard Plan">Standard Plan</option>
                    <option value="Premium Plan">Premium Plan</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">Message (Optional)</label>
                  <textarea 
                    name="message" value={formData.message} onChange={handleChange} rows="4"
                    className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-gray-50 focus:bg-white resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2"><Loader2 size={20} className="animate-spin" /> Submitting...</span>
                  ) : (
                    <span className="flex items-center gap-2"><Send size={20} /> Submit Inquiry</span>
                  )}
                </motion.button>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-200">
                    <CheckCircle size={24} className="text-green-500" />
                    <p>Thank you! Your inquiry has been sent successfully.</p>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 border border-red-200">
                    <AlertCircle size={24} className="text-red-500" />
                    <p>Oops! Something went wrong. Please try again later.</p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupInquiry;
