import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <img alt="Modern logistics warehouse with trucks" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1565891741441-64926e441838" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-[#c0392b] px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              Professional Transport Solutions
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Partner in
              <span className="text-[#c0392b]"> Transportation & Logistics</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Stanisz Transport delivers reliable FTL and LTL services across Poland and Europe, specializing in automotive, paper products, and cleaning supplies industries.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#c0392b]" size={24} />
                <span className="text-lg">Domestic & International Transport</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#c0392b]" size={24} />
                <span className="text-lg">Modern Fleet & Professional Drivers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#c0392b]" size={24} />
                <span className="text-lg">24/7 Customer Support</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-[#c0392b] hover:bg-[#a02f23] text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get a Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg"
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img alt="Stanisz Transport truck on highway" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562527132-2175ae10a068" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#c0392b] p-3 rounded-lg">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-black">15+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
