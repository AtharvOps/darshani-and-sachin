import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/video/Background.mp4';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-[#FFF5E1] p-4 md:p-8 overflow-hidden pt-24 pb-20">

      {/* Cinematic Video Background Layer */}
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ opacity: { duration: 2 }, scale: { duration: 15, ease: "easeOut" } }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        {/* Fallback color via background, Video on top */}
        <div className="absolute inset-0 bg-[#FFF5E1]"></div>
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Main Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full max-w-2xl min-h-[85vh] bg-[#FFF8EB] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col items-center justify-between z-10 p-6 md:p-12 overflow-hidden mt-8 md:mt-0 rounded-xl"
      >
        {/* Thin Elegant Border to match the reference photo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-4 border border-[#D4AF37]/50 rounded-xl"></div>

          {/* Corner Motifs (Simple lines as in reference) */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-[#D4AF37]"></div>
          <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-[#D4AF37]"></div>
          <div className="absolute bottom-6 left-6 w-6 h-6 border-b border-l border-[#D4AF37]"></div>
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-[#D4AF37]"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full flex flex-col items-center flex-grow justify-start space-y-8 py-4 text-center">

          {/* Header Texts */}
          <div className="space-y-1 mb-2">
            <p className="font-marathi text-[#8A6A1C] text-sm md:text-base tracking-widest font-medium">
              ।। श्री गजानन प्रसन्न ।।
            </p>
            <p className="font-marathi text-[#8A6A1C] text-sm md:text-base tracking-widest font-medium">
              ।। श्री जोतिबा प्रसन्न ।। श्री मानकेश्वर प्रसन्न ।।
            </p>
          </div>

          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            {/* Simple Ganesh Icon or Om */}
            <span className="text-4xl md:text-5xl text-[#D4AF37] font-marathi">ॐ</span>
          </div>

          {/* Bride Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center w-full"
          >
            <h1 className="font-marathi text-4xl md:text-5xl lg:text-6xl text-[#8A6A1C] font-bold mb-2 drop-shadow-sm">
              चि.सौ.कां. दर्शनी
            </h1>
            <p className="text-[#A68A40] font-semibold text-sm md:text-base tracking-widest mb-3 uppercase">
              BE Eele Eng.
            </p>
            <p className="text-[#5C4515] text-xs md:text-sm font-marathi leading-relaxed max-w-md mx-auto">
              (कै. आनंदराव अंबाजी भोकरे यांची नात व श्री. दिपक आनंदराव भोकरे व सौ. सुवर्णा दिपक भोकरे रा. पलूस, जि. सांगली यांची द्वितीय सुकन्या)
            </p>
          </motion.div>

          {/* Separator - आणि */}
          <div className="flex items-center justify-center gap-4 w-full max-w-xs my-2">
            <div className="h-[1px] bg-[#D4AF37]/50 flex-1"></div>
            <span className="text-[#D4AF37] text-xl font-marathi font-medium">आणि</span>
            <div className="h-[1px] bg-[#D4AF37]/50 flex-1"></div>
          </div>

          {/* Groom Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center w-full"
          >
            <h1 className="font-marathi text-4xl md:text-5xl lg:text-6xl text-[#8A6A1C] font-bold mb-2 drop-shadow-sm">
              चि. सचिन
            </h1>
            <p className="text-[#A68A40] font-semibold text-sm md:text-base tracking-widest mb-3 uppercase">
              BE Mech.Eng. MS Robotics U.K.
            </p>
            <p className="text-[#5C4515] text-xs md:text-sm font-marathi leading-relaxed max-w-md mx-auto">
              (कै. दत्तात्रय भैरू जाधव-पाटील रा. रामानंदनगर, ता. तासगाव, जि. सांगली यांचे नातू व श्री. मारुती दत्तात्रय जाधव-पाटील व सौ. लक्ष्मी मारुती जाधव-पाटील रा. सांगली, यांचे चिरंजीव)
            </p>
          </motion.div>

          {/* Invitation Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8 pt-8 px-4"
          >
            <p className="font-marathi text-[#4A3205] text-sm md:text-base font-medium leading-relaxed max-w-md mx-auto">
              दर्शनी आणि सचिन यांच्या शुभ विवाह सोहळ्यासाठी पाटील व भोकरे परिवार आपणांस सस्नेह आमंत्रित करीत आहे.
            </p>
          </motion.div>

          <div className="pt-4 flex flex-col items-center">
            <p className="text-[#D4AF37] font-semibold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-2 font-body opacity-80">Scroll</p>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-[#D4AF37] opacity-60">
              ↓
            </motion.div>
          </div>

        </div>

      </motion.div>

      {/* Floating Scroll Down Button outside the card */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToNext}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#B64A31] flex items-center justify-center text-white shadow-[0_5px_15px_rgba(182,74,49,0.4)] hover:bg-[#8E3A26] transition-all duration-300 z-50 cursor-pointer"
        aria-label="Sound Toggle"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5 10v4a2 2 0 002 2h2l4 4V4L9 8H7a2 2 0 00-2 2z" />
        </svg>
      </motion.button>

    </section>
  );
};

export default Hero;
