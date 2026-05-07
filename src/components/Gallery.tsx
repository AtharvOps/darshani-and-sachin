import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import I1 from '../assets/images/I1.jpeg';
import I2 from '../assets/images/I2.jpeg';
import I3 from '../assets/images/I3.jpeg';
import I4 from '../assets/images/I4.jpeg';

const images = [I1, I2, I3, I4];

// Sub-component for subtle floating particles behind the gallery
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      size: Math.random() * 4 + 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-theme-accent/40"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
        />
      ))}
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Rotating auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-theme-light relative overflow-hidden" id="gallery">
      <FloatingParticles />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Mixed Typography Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-body text-theme-dark/50 text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
          >
            A Glimpse Of Us
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-script text-5xl md:text-7xl text-theme-accent mb-2"
          >
            Our Beautiful
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-theme-accent mb-6"
          >
            Moments
          </motion.h3>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-16 bg-theme-accent/40"></div>
            <span className="text-theme-accent text-xl">★</span>
            <div className="h-px w-16 bg-theme-accent/40"></div>
          </motion.div>
        </div>

        {/* Rotating Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-md md:max-w-xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Rectangular Shape with Rounded Edges */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl border-[6px] md:border-[10px] border-theme-light bg-theme-light group transition-all duration-500 hover:border-theme-accent/50 hover:box-glow-gold hover:-translate-y-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Wedding Gallery ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotate: -2 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full object-cover cursor-pointer absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                onClick={() => setSelectedImage(images[currentIndex])}
              />
            </AnimatePresence>

            {/* Click Overlay (View Text) */}
            <div className="absolute inset-0 bg-gradient-to-t from-theme-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center cursor-pointer pointer-events-none">
              <motion.span 
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                className="text-theme-light font-script text-5xl text-glow-gold transform translate-y-8 group-hover:translate-y-0 transition-all duration-500"
              >
                View
              </motion.span>
            </div>
            
            {/* Subtle Shimmer Effect on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent z-10 pointer-events-none mix-blend-overlay"
              initial={{ x: '-100%', opacity: 0 }}
              whileHover={{ 
                x: '100%', 
                opacity: [0, 1, 0],
                transition: { duration: 1.5, ease: "easeInOut" }
              }}
            />
          </div>

          {/* Navigation Controls */}
          <button 
            onClick={handlePrev}
            className="absolute left-[-15px] md:left-[-30px] top-1/2 -translate-y-1/2 w-12 h-12 bg-theme-light text-theme-accent rounded-full shadow-lg flex items-center justify-center border border-theme-accent/20 hover:scale-110 transition-transform z-10"
          >
            <ChevronLeft />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-[-15px] md:right-[-30px] top-1/2 -translate-y-1/2 w-12 h-12 bg-theme-light text-theme-accent rounded-full shadow-lg flex items-center justify-center border border-theme-accent/20 hover:scale-110 transition-transform z-10"
          >
            <ChevronRight />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'bg-theme-accent scale-125' 
                    : 'bg-theme-accent/30 hover:bg-theme-accent/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-theme-dark/95 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="absolute top-6 right-6 text-theme-light bg-theme-accent/50 hover:bg-theme-accent p-3 rounded-full transition-colors z-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Enlarged Wedding Memory" 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-[0_0_40px_rgba(139,107,46,0.4)] border-4 border-theme-accent/40"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
