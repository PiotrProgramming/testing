import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Globe, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'ftl-domestic',
      icon: Truck,
      title: 'FTL Transport - Domestic',
      description: 'Full Truckload services across Poland with dedicated vehicles for your cargo. Perfect for large shipments requiring exclusive use of the entire truck.',
      features: ['Dedicated vehicles', 'Direct routes', 'Flexible scheduling', 'Real-time tracking']
    },
    {
      id: 'ftl-international',
      icon: Globe,
      title: 'FTL Transport - International',
      description: 'Full Truckload services throughout Europe with experienced drivers and modern fleet. Reliable cross-border transportation solutions.',
      features: ['EU-wide coverage', 'Customs support', 'Express delivery', 'Insurance included']
    },
    {
      id: 'ltl-domestic',
      icon: Package,
      title: 'LTL Transport - Domestic',
      description: 'Less Than Truckload services for smaller shipments within Poland. Cost-effective solution for partial loads with consolidated shipping.',
      features: ['Cost-effective', 'Frequent departures', 'Secure handling', 'Flexible volumes']
    },
    {
      id: 'ltl-international',
      icon: MapPin,
      title: 'LTL Transport - International',
      description: 'Less Than Truckload services across European markets. Efficient consolidation and distribution network for smaller international shipments.',
      features: ['Multi-country routes', 'Consolidated shipping', 'Competitive rates', 'Door-to-door service']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Our <span className="text-[#c0392b]">Transport Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive transportation solutions tailored to your business needs, covering both domestic and international routes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="bg-[#c0392b] p-4 rounded-lg group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#c0392b] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-[#c0392b] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
