import React from 'react';
import { Truck, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#c0392b] p-2 rounded-lg">
                <Truck className="text-white" size={28} />
              </div>
              <div>
                <p className="text-xl font-bold">STANISZ</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Transport & Logistics</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in professional transportation and logistics services across Poland and Europe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#c0392b] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#c0392b] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#ftl-domestic" className="text-gray-400 hover:text-[#c0392b] transition-colors">FTL Domestic</a></li>
              <li><a href="#ftl-international" className="text-gray-400 hover:text-[#c0392b] transition-colors">FTL International</a></li>
              <li><a href="#ltl-domestic" className="text-gray-400 hover:text-[#c0392b] transition-colors">LTL Domestic</a></li>
              <li><a href="#ltl-international" className="text-gray-400 hover:text-[#c0392b] transition-colors">LTL International</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><a href="#automotive" className="text-gray-400 hover:text-[#c0392b] transition-colors">Automotive</a></li>
              <li><a href="#paper" className="text-gray-400 hover:text-[#c0392b] transition-colors">Paper Products</a></li>
              <li><a href="#cleaning" className="text-gray-400 hover:text-[#c0392b] transition-colors">Cleaning Supplies</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#c0392b] transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>ul. Transportowa 123, 00-001 Warsaw, Poland</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+48123456789" className="hover:text-[#c0392b] transition-colors">+48 123 456 789</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:contact@stanisz-transport.com" className="hover:text-[#c0392b] transition-colors">contact@stanisz-transport.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Stanisz Transport. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#c0392b] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#c0392b] transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#c0392b] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
