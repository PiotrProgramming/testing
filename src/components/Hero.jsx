import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { videos } from '@/config/videos';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[currentVideoIndex];
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, [currentVideoIndex]);

  const features = [
    "Domestic & International Transport",
    "Modern Fleet & Professional Drivers",
    "24/7 Customer Support",
  ];

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        >
          {/* The source will be set dynamically by the useEffect hook */}
        </video>
      </div>

      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl text-left">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
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
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Trusted Partner in <span className="block">Transportation & <span className="text-[#c0392b]">Logistics</span></span>
            </h1>
            
            <p className="text-lg text-gray-200 mb-8 max-w-xl">
              Stanisz Transport delivers reliable FTL and LTL services across Poland and Europe, specializing in automotive, paper products, and cleaning supplies industries.
            </p>

            <ul className="space-y-3 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="text-[#c0392b] mr-3 flex-shrink-0" size={22} />
                  <span className="text-lg text-gray-200">{feature}</span>
                </motion.li>
              ))}
            </ul>
            
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
