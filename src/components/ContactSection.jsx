import React from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageCircle
} from 'lucide-react';
import { Button } from './Button';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      details: [
        'Ovungal Junction, Kodaly',
        'Thrissur, Kerala, India',
        'PIN: 680699'
      ],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us Today',
      details: [
        '+91 808 673 1086',
        '+91 808 673 1085',
        '+91 999 516 2939'
      ],
      action: 'Call Now'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Monday - Saturday: 10:00 AM - 7:00 PM',
        'Sunday: On Demand',
        'Public holidays: Call ahead'
      ],
      action: 'Schedule Visit'
    }
  ];

  const handleCall = () => {
    window.open('tel:+918086731086', '_self');
  };

  const handleDirections = () => {
    const address = encodeURIComponent('Ovungal Junction, Kodaly, Thrissur, Kerala, India, 680699');
    window.open(`https://maps.google.com/?q=${address}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Visit Govardhan Tiles
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience our premium collection in person.
            Step inside and explore our exquisite collection of tiles and sanitary wares—where style meets quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <div className="space-y-2 mb-6">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white transition-all duration-300"
                    onClick={index === 0 ? handleDirections : index === 1 ? handleCall : undefined}
                  >
                    {item.action}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
            <MessageCircle className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Estimate?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's find the perfect products for your project. Call us to discuss options and prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold"
                onClick={handleCall}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Consultation
              </Button>
              <Button
                variant="outline"
                className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white transition-all duration-300 px-8 py-3 rounded-xl font-semibold"
                onClick={handleDirections}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Find Us on Map
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}