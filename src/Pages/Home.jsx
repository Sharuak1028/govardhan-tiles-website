import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import ProductCategories from '../components/ProductCategories';
import ProductGallery from '../components/ProductGallery';
import ContactSection from '../components/ContactSection';
import './Home.css';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    // Smooth scroll to gallery section
    setTimeout(() => {
      const galleryElement = document.getElementById('product-gallery');
      if (galleryElement) {
        galleryElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductCategories 
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <div id="product-gallery">
        <ProductGallery selectedCategory={selectedCategory} />
      </div>
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Govardhan Tiles
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for premium tiles and sanitary wares. 
                Quality products, expert service, competitive prices.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Floor Tiles</li>
                <li>Wall Tiles</li>
                <li>Bathroom Fittings</li>
                <li>Cabinet Wash Basins</li>
                <li>Water Closets</li>
                <li>Kitchen Sinks</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-gray-400">
                <p>📍 Ovungal Junction, Kodaly</p>
                <p>Thrissur, Kerala 680699</p>
                <p>📞 +91 808 673 1086</p>
                <p>📞 +91 808 673 1085</p>
                <p>📞 +91 999 516 2939</p>
                <p>🕒 Mon-Sat: 10AM-7PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Govardhan Tiles & Sanitary Wares. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}