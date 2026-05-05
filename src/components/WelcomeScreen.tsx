import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import video from assets
import introVideo from '../assets/video/intro.mp4';

interface WelcomeScreenProps {
  isOpen: boolean;
  onOpen: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ isOpen, onOpen }) => {
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Disable scrolling while video is visible
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleFinish = () => {
    if (isExiting) return;
    setIsExiting(true);
    
    // Smooth transition to main site after fade out
    setTimeout(() => {
      onOpen();
    }, 1200); 
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Full-screen Video */}
          <video
            ref={videoRef}
            src={introVideo}
            autoPlay
            muted
            playsInline
            onEnded={handleFinish}
            className="absolute inset-0 w-[100vw] h-[100vh] object-cover pointer-events-none"
          />

          {/* Dark overlay for cinematic feel */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

          {/* Skip Intro Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            onClick={handleFinish}
            className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-50 px-6 py-2 border border-white/40 hover:border-[#D4AF37] text-white/80 hover:text-[#D4AF37] tracking-[0.2em] uppercase text-xs md:text-sm font-body rounded-full backdrop-blur-md transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer"
          >
            Skip Intro
          </motion.button>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
