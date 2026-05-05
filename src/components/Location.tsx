import React from 'react';
import { motion } from 'framer-motion';
import venueImg from '../assets/images/venu/venu.jpg';

const Location: React.FC = () => {
  return (
    <section className="py-24 bg-theme-light relative">
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
            Where Love Awaits
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-script text-5xl md:text-7xl text-theme-accent mb-4"
          >
            Our Cherished
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-marathi text-4xl md:text-5xl text-theme-accent mb-8"
          >
            विवाह स्थळ
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

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-[#FAF6EC] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-theme-accent/10"
        >
          {/* Venue Image with Cinematic Overlay */}
          <div className="w-full h-72 md:h-[500px] relative overflow-hidden">
            <motion.img
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.05 }}
              transition={{ duration: 15, ease: "easeOut" }}
              src={venueImg}
              alt="Premium Wedding Venue"
              className="w-full h-full object-cover"
            />

            {/* Cinematic Dark Overlay & Gradient */}
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EC] via-black/40 to-transparent"></div>

            {/* Elegant Text Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
            >
              <h4 className="font-script text-4xl md:text-6xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] tracking-wide" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Welcome to Our Wedding
              </h4>
            </motion.div>
          </div>

          <div className="p-8 md:p-12 text-center -mt-10 relative z-10">
            <h3 className="font-marathi text-3xl md:text-4xl text-theme-dark mb-6">
              बाळकृष्ण मल्टीपर्पज हॉल
            </h3>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-theme-accent/40"></div>
              <span className="text-theme-accent text-xl">♥</span>
              <div className="h-px w-16 bg-theme-accent/40"></div>
            </div>

            <div className="space-y-2 mb-10">
              <p className="text-theme-dark/70 text-lg md:text-xl font-marathi">पुणे-पंढरपूर रोड, रामानंदनगर, किर्लोस्करवाडी</p>
              <p className="text-theme-dark/60 text-base md:text-lg font-marathi">तालुका: पलूस, जिल्हा: सांगली</p>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-inner border border-theme-accent/20">
              <iframe
                src="https://maps.google.com/maps?q=Balkrishna%20Multipurpose%20Hall%20Kirloskarwadi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Map"
                className="filter contrast-[1.05] saturate-[1.2] opacity-90 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>

            <div className="mt-8">
              <a
                href="https://maps.google.com/?q=Ramanandnagar+Sangli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-3 border border-theme-accent text-theme-accent hover:bg-theme-accent hover:text-theme-light font-marathi tracking-wider rounded-full transition-all duration-300"
              >
                मार्ग शोधा
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
