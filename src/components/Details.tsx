import React from 'react';
import { motion } from 'framer-motion';
import { CalendarHeart, MapPin, Clock } from 'lucide-react';

const Details: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-wedding-cream relative">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4af37\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-wedding-red font-semibold mb-4 drop-shadow-sm"
          >
            विवाहाचा तपशील
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-32 bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {/* Date Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-paper-texture rounded-xl p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-2 border-transparent hover:border-wedding-gold/50 flex flex-col items-center group relative overflow-hidden hover:shadow-[0_0_25px_rgba(139,107,46,0.3)] transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-wedding-gold/20 via-wedding-gold to-wedding-gold/20"></div>
            <div className="w-20 h-20 rounded-full bg-wedding-cream border border-wedding-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-wedding-red transition-all duration-500 shadow-inner">
              <CalendarHeart className="w-10 h-10 text-wedding-red group-hover:text-wedding-gold transition-colors duration-500" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-3xl text-wedding-dark mb-4">दिनांक</h3>
            <p className="text-xl text-wedding-red font-semibold mb-1">रविवार, १० मे २०२६</p>
            <p className="text-sm text-wedding-gold mt-2 tracking-wider uppercase">वैशाख कृ. १० शके १९४८</p>
          </motion.div>

          {/* Time Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-paper-texture rounded-xl p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-2 border-transparent hover:border-wedding-gold/50 flex flex-col items-center group relative overflow-hidden hover:shadow-[0_0_25px_rgba(139,107,46,0.3)] transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-wedding-gold/20 via-wedding-gold to-wedding-gold/20"></div>
            <div className="w-20 h-20 rounded-full bg-wedding-cream border border-wedding-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-wedding-red transition-all duration-500 shadow-inner">
              <Clock className="w-10 h-10 text-wedding-red group-hover:text-wedding-gold transition-colors duration-500" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-3xl text-wedding-dark mb-4">मुहूर्त</h3>
            <p className="text-xl text-wedding-red font-semibold mb-1">१२:२९ दु.</p>
            <p className="text-sm text-wedding-gold mt-2 tracking-wider uppercase">शुभ मुहूर्त</p>
          </motion.div>

          {/* Venue Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-paper-texture rounded-xl p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-2 border-transparent hover:border-wedding-gold/50 flex flex-col items-center group relative overflow-hidden hover:shadow-[0_0_25px_rgba(139,107,46,0.3)] transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-wedding-gold/20 via-wedding-gold to-wedding-gold/20"></div>
            <div className="w-20 h-20 rounded-full bg-wedding-cream border border-wedding-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-wedding-red transition-all duration-500 shadow-inner">
              <MapPin className="w-10 h-10 text-wedding-red group-hover:text-wedding-gold transition-colors duration-500" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-3xl text-wedding-dark mb-4">स्थळ</h3>
            <p className="text-xl text-wedding-red font-semibold mb-1">बाळकृष्ण मल्टीपर्पज हॉल</p>
            <p className="text-sm text-wedding-gold mt-2 tracking-wider uppercase">किर्लोस्करवाडी, रामानंदनगर</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Details;
