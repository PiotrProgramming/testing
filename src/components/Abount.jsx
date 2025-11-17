import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Shield, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Satisfied Clients' },
    { icon: Shield, value: '99.9%', label: 'On-Time Delivery' },
    { icon: Clock, value: '24/7', label: 'Customer Support' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              About <span className="text-[#c0392b]">Stanisz Transport</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in the transportation and logistics industry, Stanisz Transport has established itself as a trusted partner for businesses across Poland and Europe.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We specialize in providing comprehensive FTL and LTL transport solutions, with particular expertise in serving the automotive, paper products, and cleaning supplies industries. Our commitment to reliability, safety, and customer satisfaction has made us the preferred choice for companies seeking professional logistics services.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our modern fleet, experienced drivers, and advanced tracking systems ensure that your cargo arrives safely and on time, every time. We pride ourselves on building long-term partnerships with our clients through consistent, high-quality service.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <stat.icon className="text-[#c0392b] mb-3" size={32} />
                  <p className="text-3xl font-bold text-black mb-1">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img alt="Stanisz Transport team and fleet" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579309146858-0d65cf259744" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#c0392b] p-8 rounded-xl shadow-xl text-white">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-lg">Customer Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
