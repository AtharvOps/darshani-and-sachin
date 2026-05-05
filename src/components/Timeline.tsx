import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Flame } from 'lucide-react';

const events = [
  {
    title: 'हळदी समारंभ',
    date: 'रविवार, १० मे २०२६',
    time: '०९:०० स.',
    description: 'विवाहाच्या उत्सवाची सुरुवात आनंदाने आणि रंगांनी भरलेली एक सकाळ.',
    align: 'left',
    icon: Sun,
    color: 'text-yellow-500'
  },
  {
    title: 'विवाह सोहळा',
    date: 'रविवार, १० मे २०२६',
    time: '१२:२९ दु.',
    description: 'तो शुभ क्षण जेव्हा आम्ही विवाहबंधनात अडकू आणि तुमचे आशीर्वाद घेऊ.',
    align: 'right',
    icon: Flame,
    color: 'text-orange-500'
  }
];

const Timeline: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background mandala decoration */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4af37\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] rounded-full opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-wedding-red font-semibold mb-4"
          >
            कार्यक्रमांची रूपरेषा
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-32 bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto"
          ></motion.div>
        </div>

        <div className="relative">
          {/* Center Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-[2px] bg-gradient-to-b from-wedding-gold via-wedding-red to-wedding-gold z-0"
          ></motion.div>

          <div className="flex flex-col gap-12">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-start md:items-center relative ${event.align === 'right' ? 'md:flex-row-reverse' : ''} pl-12 md:pl-0`}>
                  
                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: event.align === 'left' ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`w-full md:w-5/12 p-6 bg-wedding-cream rounded-2xl border border-wedding-gold/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative z-10`}
                  >
                    <div className={`absolute top-0 w-2 h-full bg-wedding-gold rounded-l-2xl ${event.align === 'left' ? 'left-0' : 'right-0 rounded-r-2xl rounded-l-none'}`}></div>
                    
                    <h3 className="font-heading text-2xl md:text-3xl text-wedding-red mb-2">{event.title}</h3>
                    <div className="text-wedding-gold font-medium mb-4 flex flex-col md:flex-row gap-2">
                      <span>{event.date}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{event.time}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">{event.description}</p>
                  </motion.div>

                  {/* Center Node */}
                  <div className="absolute left-[11px] md:left-1/2 transform -translate-x-1/2 md:translate-x-0 w-full md:w-2/12 flex justify-center z-20 top-6 md:top-auto">
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="w-12 h-12 rounded-full bg-white border-4 border-wedding-gold shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center -ml-6 md:ml-0"
                    >
                      <Icon className={`w-5 h-5 ${event.color}`} />
                    </motion.div>
                  </div>

                  {/* Empty Space for alignment */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
