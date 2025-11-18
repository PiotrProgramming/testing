import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Gauge, Shield, Zap } from 'lucide-react';

const Fleet = () => {
  const fleetFeatures = [
    {
      icon: Truck,
      title: 'Modern Vehicles',
      description: 'Our fleet consists of the latest Euro 6 compliant trucks, ensuring efficiency and environmental responsibility.'
    },
    {
      icon: Gauge,
      title: 'GPS Tracking',
      description: 'Real-time tracking systems on all vehicles provide complete visibility of your shipments at all times.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Regular maintenance schedules and safety inspections ensure the highest standards of operational safety.'
    },
    {
      icon: Zap,
      title: 'Fuel Efficient',
      description: 'Advanced engine technology and route optimization reduce fuel consumption and environmental impact.'
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Our <span className="text-[#c0392b]">Modern Fleet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art vehicles equipped with the latest technology to ensure safe and efficient transportation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {fleetFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-[#c0392b] w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img alt="Stanisz Transport truck front view" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1680015237530-9ab8bc4f8feb" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white font-bold text-xl p-6">Tractor Units</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img alt="Semi-trailer for transport" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white font-bold text-xl p-6">Semi-Trailers</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img alt="Refrigerated transport truck" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1600333078107-d6844b754f41" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white font-bold text-xl p-6">Refrigerated Units</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Fleet;
