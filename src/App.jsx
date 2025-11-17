import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import About from '@/components/About';
import Fleet from '@/components/Fleet';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Stanisz Transport - Professional Transportation & Logistics Services</title>
        <meta name="description" content="Stanisz Transport offers professional FTL and LTL transportation services for automotive, paper products, and cleaning supplies industries across Poland and Europe." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Services />
        <Industries />
        <About />
        <Fleet />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
