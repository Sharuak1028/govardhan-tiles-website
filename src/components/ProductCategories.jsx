import React from 'react';
import { motion } from 'framer-motion';
import './ProductCategories.css';

const categories = [
    {
        id: 'floor_tiles',
        name: 'Floor Tiles',
        imageName: 'floortiles.png',
        description: 'Premium flooring solutions for every space',
    },
    {
        id: 'wall_tiles',
        name: 'Wall Tiles',
        imageName: 'walltiles.png',
        description: 'Elegant wall coverings and decorative tiles',
    },
    {
        id: 'bathroom_fittings',
        name: 'Bathroom Fittings',
        imageName: 'fittings.png',
        description: 'Complete bathroom hardware and accessories',
    },
    {
        id: 'wash_basins',
        name: 'Wash Basins',
        imageName: 'basins.png',
        description: 'Stylish basins with integrated storage',
    },
    {
        id: 'closets',
        name: 'Closets',
        imageName: 'closets.png',
        description: 'Water closets and toilet solutions',
    },
    {
        id: 'kitchen_sinks',
        name: 'Kitchen Sinks',
        imageName: 'sinks.png',
        description: 'Durable sinks for modern kitchens',
    }
];

export default function ProductCategories({ selectedCategory, onCategorySelect }) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Our Product Categories
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore our comprehensive range of tiles and sanitary products,
                        carefully curated for quality and style.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {categories.map((category, index) => {
                        const isSelected = selectedCategory === category.id;

                        // This is the simplified, hardcoded path
                        const imagePath = `/images/${category.imageName}`;

                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className={`relative group cursor-pointer category-card ${isSelected ? 'selected' : ''}`}
                                onClick={() => onCategorySelect(category.id)}
                                style={{
                                    backgroundImage: `url('${imagePath}')`,
                                }}
                            >
                                <div className="card-overlay">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {category.description}
                                    </p>
                                    {isSelected && (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute bottom-0 left-0 h-1 bg-amber-500 rounded-b-2xl"
                                        />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}