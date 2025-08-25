import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Truck, Tags, Award } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Professional Tiles Showroom Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/shop.png')`
          }}
        />

        {/* Overlay - Now more transparent */}
        <div className="absolute inset-0 bg-black-overlay-30 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-7xl font-bold text-beige mb-6 tracking-tight drop-shadow-lg">
                Govardhan
              </h1>
              <p className="text-2xl md:text-3xl text-beige-light font-light mb-4 drop-shadow-sm">
                Tiles & Sanitary Wares
              </p>
              <div className="w-24 h-1 bg-gradient-r mx-auto rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-beige-light mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
            >
              Transform your spaces with our premium collection of tiles and sanitary fittings. 
              Quality craftsmanship meets elegant design.
            </motion.p>

            {/* Existing Contact Widgets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="p-3 bg-bisque-10 backdrop-blur-sm rounded-full border border-bisque-20">
                  <MapPin className="w-5 h-5 text-amber-300" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-beige-dark drop-shadow-sm">Location</p>
                  <p className="text-sm text-beige-light">Ovungal Junction, Kodaly, Thrissur, India</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="p-3 bg-bisque-10 backdrop-blur-sm rounded-full border border-bisque-50">
                  <Phone className="w-5 h-5 text-amber-300" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-beige-dark drop-shadow-sm">Call Us</p>
                  <p className="text-sm text-beige-light">+919995162939 / +918086731085</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="p-3 bg-bisque-10 backdrop-blur-sm rounded-full border border-bisque-20">
                  <Clock className="w-5 h-5 text-amber-300" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-beige-dark drop-shadow-sm">Working Hours</p>
                  <p className="text-sm text-beige-light">Mon - Sat: 10AM-7PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-bisque-50 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-bisque-80 rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* Promise Section */}
      <section id="promise" className="promise-section">
        <h2>Our Promises to You</h2>
        <div className="promises">
          <div className="promise-item">
            <Truck className="promise-icon" />
            <strong>Home Delivery</strong>
            <p>Fast and reliable delivery right to your doorstep.</p>
          </div>
          <div className="promise-item">
            <Tags className="promise-icon" />
            <strong>Competitive Prices</strong>
            <p>From the cheapest to premium collections, we have it all.</p>
          </div>
          <div className="promise-item">
            <Award className="promise-icon" />
            <strong>Quality Guaranteed</strong>
            <p>Every product meets our strict standards of quality.</p>
          </div>
        </div>
      </section>
    </>
  );
}