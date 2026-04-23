import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const handleSelectPlan = (plan) => {
    // Dispatch event to open popup and pre-select plan
    window.dispatchEvent(new CustomEvent('open-popup', { detail: { plan } }));
    
    // Also try to scroll down to standard form if they prefer not to use popup
    const formEl = document.getElementById('inquiry');
    if(formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-hover/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-sm tracking-tight">Simple, Transparent Pricing</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary-hover mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the perfect plan to empower your entrepreneurial journey. Upgrade anytime as your business grows.</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Standard Plan */}
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><CheckCircle2 className="text-gray-400" /> Standard</h3>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-gray-900">Basic</span>
            </div>
            <p className="text-gray-600 mb-8 pb-8 border-b border-gray-100">Essential tools and basic guidance to kickstart your journey.</p>
            <ul className="space-y-4 mb-8">
              {[
                "Basic Skill Training Access",
                "Community Group Support",
                "Standard Mentorship Sessions",
                "Limited Resource Library",
                "Email Support"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-light flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleSelectPlan('Standard Plan')}
              className="w-full py-4 rounded-xl font-bold text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              Choose Standard
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div variants={fadeInUp} className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-10 shadow-2xl relative transform md:-translate-y-4 border border-gray-700 overflow-hidden hover:shadow-primary/20 transition-shadow">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-[1.5rem] uppercase tracking-wider flex items-center gap-1 shadow-md">
               <Star size={12} className="fill-white" /> Most Popular
            </div>
            <div className="flex justify-between items-center mb-6 mt-2">
               <h3 className="text-2xl font-bold text-white flex items-center gap-2"><Zap className="text-primary-light fill-primary-light" /> Premium</h3>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-white">Advanced</span>
            </div>
            <p className="text-gray-300 mb-8 pb-8 border-b border-gray-700">Full access to all exclusive resources, priority support, and advanced training.</p>
            <ul className="space-y-4 mb-8">
              {[
                "Advanced Skill & Executive Training",
                "1-on-1 Dedicated Mentorship",
                "Full Job Placement Assistance",
                "Financial & Govt Scheme Assistance",
                "Unlimited Resource Library",
                "24/7 Priority Support"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-light flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleSelectPlan('Premium Plan')}
              className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-primary-hover shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-[1.02]"
            >
              Choose Premium
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
