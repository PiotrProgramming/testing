import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Truck, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'FTL Transport - Domestic', href: '#ftl-domestic' },
    { name: 'FTL Transport - International', href: '#ftl-international' },
    { name: 'LTL Transport - Domestic', href: '#ltl-domestic' },
    { name: 'LTL Transport - International', href: '#ltl-international' },
  ];

  const industries = [
    { name: 'Automotive Industry', href: '#automotive' },
    { name: 'Paper Products', href: '#paper' },
    { name: 'Cleaning Supplies', href: '#cleaning' },
  ];

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
      {/* Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+48123456789" className="flex items-center gap-2 hover:text-[#c0392b] transition-colors">
              <Phone size={14} />
              <span>+48 123 456 789</span>
            </a>
            <a href="mailto:contact@stanisz-transport.com" className="flex items-center gap-2 hover:text-[#c0392b] transition-colors">
              <Mail size={14} />
              <span>contact@stanisz-transport.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="bg-[#c0392b] p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Truck className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">STANISZ</h1>
              <p className="text-xs text-gray-600 uppercase tracking-wider">Transport & Logistics</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-black hover:text-[#c0392b] font-medium transition-colors">
              Home
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center gap-1 text-black hover:text-[#c0392b] font-medium transition-colors">
                Services
                <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden"
                  >
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="block px-6 py-3 text-black hover:bg-[#c0392b] hover:text-white transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {service.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('industries')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center gap-1 text-black hover:text-[#c0392b] font-medium transition-colors">
                Industries
                <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg overflow-hidden"
                  >
                    {industries.map((industry, index) => (
                      <a
                        key={index}
                        href={industry.href}
                        className="block px-6 py-3 text-black hover:bg-[#c0392b] hover:text-white transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {industry.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#about" className="text-black hover:text-[#c0392b] font-medium transition-colors">
              About Us
            </a>
            <a href="#fleet" className="text-black hover:text-[#c0392b] font-medium transition-colors">
              Fleet
            </a>
            <a href="#contact" className="bg-[#c0392b] text-white px-6 py-2 rounded-lg hover:bg-[#a02f23] transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-black hover:text-[#c0392b] transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              <a href="#home" className="block py-2 text-black hover:text-[#c0392b] font-medium transition-colors">
                Home
              </a>
              
              <div className="space-y-1">
                <p className="py-2 text-black font-bold">Services</p>
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="block py-2 pl-4 text-gray-700 hover:text-[#c0392b] transition-colors"
                  >
                    {service.name}
                  </a>
                ))}
              </div>

              <div className="space-y-1">
                <p className="py-2 text-black font-bold">Industries</p>
                {industries.map((industry, index) => (
                  <a
                    key={index}
                    href={industry.href}
                    className="block py-2 pl-4 text-gray-700 hover:text-[#c0392b] transition-colors"
                  >
                    {industry.name}
                  </a>
                ))}
              </div>

              <a href="#about" className="block py-2 text-black hover:text-[#c0392b] font-medium transition-colors">
                About Us
              </a>
              <a href="#fleet" className="block py-2 text-black hover:text-[#c0392b] font-medium transition-colors">
                Fleet
              </a>
              <a href="#contact" className="block py-2 text-black hover:text-[#c0392b] font-medium transition-colors">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
