import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PETAL_COLORS = ['#FFB6C1', '#FFC0CB', '#FF69B4', '#FA8072', '#E9967A', '#DC143C']; 
const PETAL_PATHS = [
  "M0,15 C0,15 5,0 15,0 C25,0 30,15 30,15 C30,15 25,30 15,30 C5,30 0,15 0,15 Z", // Symmetric petal
  "M0,10 C5,0 15,0 20,10 C25,20 15,30 10,25 C0,15 0,10 0,10 Z", // Asymmetric/curved petal
  "M5,0 C15,-5 25,10 20,20 C15,30 0,25 5,15 C10,5 5,0 5,0 Z" // Organic wavy petal
];

const Petals: React.FC = () => {
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    // Generate petals only on client to avoid hydration mismatch
    const generatedPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      startX: Math.random() * 100, // 0 to 100 vw
      delay: Math.random() * 15, // random delay up to 15s so they don't fall all at once
      duration: 10 + Math.random() * 10, // 10s to 20s fall duration
      size: 15 + Math.random() * 25, // 15px to 40px
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      path: PETAL_PATHS[Math.floor(Math.random() * PETAL_PATHS.length)],
      blurAmount: Math.random() > 0.6 ? 2 + Math.random() * 4 : 0, // 40% chance of being blurred for depth
      opacity: 0.4 + Math.random() * 0.5,
      drift: -50 + Math.random() * 100, // random horizontal drift
      rotation: Math.random() * 360,
    }));
    setPetals(generatedPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-[-60px]"
          style={{
            left: `${p.startX}vw`,
            width: p.size,
            height: p.size,
            filter: `blur(${p.blurAmount}px)`,
          }}
          initial={{ 
            y: -60, 
            x: 0, 
            rotate: p.rotation, 
            opacity: 0 
          }}
          animate={{
            y: '110vh',
            x: [0, p.drift / 2, p.drift, p.drift / 2, 0],
            rotate: [p.rotation, p.rotation + 180, p.rotation + 360],
            opacity: [0, p.opacity, p.opacity, 0] // Fade in, stay, fade out at bottom
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 30 30" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <path d={p.path} fill={p.color} style={{ mixBlendMode: 'multiply' }} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default Petals;
