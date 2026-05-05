import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Countdown: React.FC = () => {
  // Target Date: 10th May 2026, 12:29 PM
  const weddingDate = new Date('2026-05-10T12:29:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const timeBlocks = [
    { label: 'दिवस', value: timeLeft.days },
    { label: 'तास', value: timeLeft.hours },
    { label: 'मिनिटे', value: timeLeft.minutes },
    { label: 'सेकंद', value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 bg-wedding-red relative text-wedding-cream border-traditional shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] z-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4af37\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl text-wedding-gold mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          अतुलनीय क्षणांची वाट पाहताना
        </motion.h3>

        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-gradient-to-b from-wedding-dark/60 to-wedding-dark/40 backdrop-blur-md border border-wedding-gold/40 rounded-xl p-4 md:p-6 w-24 md:w-36 box-glow-gold relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5 pointer-events-none border-b border-white/5"></div>
              
              <div className="h-16 flex items-center justify-center overflow-hidden mb-2 relative w-full">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={block.value}
                    initial={{ y: 20, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -20, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
                    className="font-heading text-5xl md:text-6xl text-wedding-gold font-bold text-glow-gold absolute"
                  >
                    {block.value.toString().padStart(2, '0')}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-wedding-cream/90 font-medium">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
