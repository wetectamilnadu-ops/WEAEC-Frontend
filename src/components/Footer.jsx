import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import certIAF from '../assets/cert_IAF.png';
import certMHRD from '../assets/cert_MHRD.png';
import certMinistry from '../assets/cert_Ministry of skill india.png';
import certNSDC from '../assets/cert_NSDC.jpg';
import certSkillIndia from '../assets/cert_skillindia.webp';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
      
      {/* Affiliated and Supported by Section */}
      <div className="bg-white/5 border-b border-white/10 py-10 relative z-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-white uppercase tracking-wider">Affiliated and Supported By</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[ 
              { src: certMinistry, alt: 'Ministry of Skill India' },
              { src: certNSDC, alt: 'NSDC' },
              { src: certSkillIndia, alt: 'Skill India' },
              { src: certMHRD, alt: 'MHRD' },
              { src: certIAF, alt: 'IAF' }
            ].map((logo, index) => (
              <div key={index} className="bg-white rounded-lg p-2 md:p-3 shadow-sm hover:scale-105 transition-transform duration-300">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-16 md:h-20 w-auto object-contain mix-blend-multiply" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-primary-light mb-6">Women Entrepreneur Training and Employment Centre</h3>
          <p className="text-gray-300 leading-relaxed font-light">
             பெண்கள் வளர்ச்சி நாட்டின் வளர்ச்சி<br/>
             சுயநிறைவு, சக்திவாய்ந்த பெண்கள்<br/>
             உங்கள் கனவு, உங்கள் தொழில், உங்கள் வெற்றி
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#home" className="text-gray-400 hover:text-primary-light transition-colors">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-primary-light transition-colors">About</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-primary-light transition-colors">Services</a></li>
            <li><a href="#inquiry" className="text-gray-400 hover:text-primary-light transition-colors">Inquiry</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <Phone size={20} className="text-primary-light" />
            <span>84892 11999</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <Mail size={20} className="text-primary-light" />
            <a href="mailto:wetectamilnadu@gmail.com">wetectamilnadu@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <MapPin size={20} className="text-primary-light" />
            <span>Tamil Nadu, India</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
        <p>© 2026 Women Entrepreneur Training and Employment Centre. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
