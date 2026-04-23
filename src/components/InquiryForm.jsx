import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { submitInquiry } from '../services/apiService';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', plan: '', message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Frontend Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.plan || !formData.message) {
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
      await submitInquiry(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', plan: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="inquiry" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_0_40px_rgba(233,30,99,0.1)] border border-primary-light"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Make an Inquiry</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-500">Have questions? Fill out the form below and our team will get back to you.</p>
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
              <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
              <textarea 
                name="message" value={formData.message} onChange={handleChange} required rows="4"
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
    </section>
  );
};

export default InquiryForm;
