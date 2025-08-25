import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Heart } from 'lucide-react';
import './ProductGallery.css'

const categoryImages = {
  floor_tiles: [
    '/images/floor16.jpeg',
    '/images/floor17.jpeg',
    '/images/floor29.jpeg',
    '/images/floor30.jpeg',
    '/images/floor33.jpeg',
    '/images/floor34.jpeg',
    '/images/floor35.jpeg',
    '/images/floor36.jpeg',
    '/images/floor37.jpeg',
    '/images/floor39.jpeg',
    '/images/floor40.jpeg',
    '/images/floor41.jpeg',
    '/images/floor44.jpeg',
    '/images/floor45.jpeg',
    '/images/floor46.jpeg',
    '/images/floor56.jpeg',
    '/images/floor57.jpeg',
    '/images/floor60.jpeg',
    '/images/floor63.jpeg',
    '/images/floor64.jpeg',
    '/images/floor66.jpeg',
    '/images/floor67.jpeg',
    '/images/floor68.jpeg'
  ],
  wall_tiles: [
    '/images/wall.jpeg',
    '/images/wall1.jpeg',
    '/images/wall2.jpeg',
    '/images/wall3.jpeg',
    '/images/wall4.jpeg',
    '/images/wall5.jpeg',
    '/images/wall6.jpeg',
    '/images/wall7.jpeg',
    '/images/wall8.jpeg',
    '/images/wall9.jpeg',
    '/images/wall10.jpeg',
    '/images/wall11.jpeg',
    '/images/wall12.jpeg',
    '/images/wall13.jpeg'
  ],
  bathroom_fittings: [
    '/images/rainshower.png',
    '/images/faucets.png',
    '/images/floortraps.png',
    '/images/floortrap1.png',
    '/images/soapdishes.png',
    '/images/taps.png'
  ],
  cabinet_wash_basins: [
    '/images/cabinet.jpeg',
    '/images/cabinet1.jpeg',
    '/images/cabinet2.jpeg',
    '/images/cabinet3.jpeg',
    '/images/cabinet4.jpeg',
    '/images/cabinet6.jpeg',
    '/images/basins1.png'
  ],
  closets: [
    '/images/onepiece.jpeg',
    '/images/onepiece1.jpeg',
    '/images/onepiece2.jpeg',
    '/images/onepiece3.jpeg',
    '/images/closet.png',
    '/images/coloredclosets.png'
  ],
  kitchen_sinks: [
    '/images/sink1.png',
    '/images/sink2.png',
    '/images/sink3.png',
    '/images/sink4.png',
  ]
};

const categoryTitles = {
  floor_tiles: 'Premium Floor Tiles',
  wall_tiles: 'Designer Wall Tiles',
  bathroom_fittings: 'Bathroom Fittings & Accessories',
  cabinet_wash_basins: 'Cabinet Wash Basins',
  closets: 'Water Closets & Toilets',
  kitchen_sinks: 'Kitchen Sinks & Fixtures'
};

export default function ProductGallery({ selectedCategory }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      setTimeout(() => {
        setImages(categoryImages[selectedCategory] || []);
        setLoading(false);
      }, 300);
    }
  }, [selectedCategory]);

  if (!selectedCategory) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Discover Our Products
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Select a category above to explore our carefully curated collection 
              of premium tiles and sanitary fittings.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {categoryTitles[selectedCategory]}
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center py-20"
            >
              <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
              <span className="ml-3 text-lg text-gray-600">Loading products...</span>
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {images.map((imageUrl, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={`${categoryTitles[selectedCategory]} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&auto=format';
                      }}
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-semibold text-lg mb-2">
                        Premium Quality
                      </h4>
                      <p className="text-white/90 text-sm">
                        Crafted with excellence for lasting beauty
                      </p>
                    </div>
                  </div>

                  <button className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}