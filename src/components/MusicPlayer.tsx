import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import musicSrc from '../assets/audio/music.mp3';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    const tryPlay = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Wait for user interaction
          const startOnInteraction = () => {
            audio.play().then(() => setIsPlaying(true));
          };

          document.addEventListener('click', startOnInteraction, { once: true });
          document.addEventListener('touchstart', startOnInteraction, { once: true });
        });
    };

    tryPlay();
  }, []);

  return (
    <>
      <audio ref={audioRef} src={musicSrc} loop preload="auto" />

      {/* 🎵 Indicator only (no toggle) */}
      <motion.div
        className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-50 w-12 h-12
                   rounded-full backdrop-blur-md bg-white/20 border border-white/40 
                   flex items-center justify-center text-xl shadow-md"
        animate={
          isPlaying
            ? { scale: [1, 1.1, 1] }
            : { scale: 1 }
        }
        transition={{
          duration: 2,
          repeat: isPlaying ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        🎵
      </motion.div>
    </>
  );
};

export default MusicPlayer;