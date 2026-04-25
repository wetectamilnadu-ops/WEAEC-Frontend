import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/wetec logo .jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Home', 'About', 'Services', 'Gallery', 'News', 'Inquiry', 'Contact'];

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 flex-1 hover:opacity-90 transition-opacity">
          <img src={logo} alt="Women Empowerment Logo" className="w-8 h-8 md:w-10 md:h-10 object-cover bg-white rounded-full p-0.5" />
          <h1 className="text-lg md:text-2xl font-bold tracking-wide">
            Women Entrepreneur Training and Employment Centre
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((link) => {
            const href = link === 'Gallery' ? '/gallery' : `/#${link.toLowerCase()}`;
            return (
              <a key={link} href={href} className="font-medium hover:text-primary-light transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white ml-4 flex items-center gap-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-primary-hover px-4 pb-4 pt-2 flex flex-col gap-4 shadow-inner">
          {links.map((link) => {
            const href = link === 'Gallery' ? '/gallery' : `/#${link.toLowerCase()}`;
            return (
              <a
                key={link}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-white font-medium hover:text-primary-light transition-colors py-2 border-b border-primary-light/20 last:border-0"
              >
                {link}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
