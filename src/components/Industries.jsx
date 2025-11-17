import React from 'react';
import { motion } from 'framer-motion';
import { Car, FileText, Sparkles } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      id: 'automotive',
      icon: Car,
      title: 'Automotive Industry',
      description: 'Specialized transport solutions for automotive parts, components, and finished vehicles. We understand the critical timing and handling requirements of the automotive supply chain.',
      image: 'Automotive parts and components being loaded onto transport truck',
      features: [
        'Just-in-time delivery',
        'Specialized vehicle carriers',
        'Temperature-controlled transport',
        'Secure handling protocols'
      ]
    },
    {
      id: 'paper',
      icon: FileText,
      title: 'Paper Products',
      description: 'Expert handling and transportation of paper products, from raw materials to finished goods. Our fleet is equipped to handle various paper product formats safely and efficiently.',
      image: 'Pallets of paper products in modern warehouse',
      features: [
        'Moisture protection',
        'Careful load securing',
        'Volume optimization',
        'Damage prevention systems'
      ]
    },
    {
      id: 'cleaning',
      icon: Sparkles,
      title: 'Cleaning Supplies',
      description: 'Safe and compliant transportation of cleaning supplies and chemical products. We ensure proper handling of hazardous and non-hazardous cleaning materials.',
      image: 'Cleaning supplies and chemical products properly stored for transport',
      features: [
        'ADR certified drivers',
        'Chemical compatibility',
        'Safety compliance',
        'Proper documentation'
      ]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Industries We <span className="text-[#c0392b]">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized logistics solutions tailored to the unique requirements of different industries.
          </p>
        </motion.div>

        <div className="space-y-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              id={industry.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="bg-[#c0392b] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <industry.icon className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {industry.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#c0392b] rounded-full mt-2"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-xl overflow-hidden shadow-xl group">
                  <img alt={industry.title} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1698621193747-e8788c620dbc" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
