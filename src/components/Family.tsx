import React from 'react';
import { motion } from 'framer-motion';

const Family: React.FC = () => {
  const namraList = [
    'सौ. लक्ष्मी मारुती पाटील',
    'सौ. सावित्री भिमराव पाटील',
    'सौ. प्रभावती अर्जुन पाटील',
    'सौ. सुजाता धनाजी पाटील',
    'श्री. मारुती दत्तात्रय पाटील',
    'श्री. भिमराव दत्तात्रय पाटील',
    'श्री. अर्जुन दत्तात्रय पाटील',
    'श्री. धनाजी दत्तात्रय पाटील',
    'श्रीमती हौसाबाई दत्तात्रय पाटील',
  ];

  const swagatList = [
    'सौ. शारदा वसंत पाटील',
    'सौ. माधुरी आनंदा पाटील',
    'सौ. रेखा बाळासाहेब पाटील',
    'सौ. सिंधूताई शिवाजी पाटील',
    'सौ. जयश्री अजित पाटील',
    'सौ. रुपाली अमोल पाटील',
    'सौ. गौरी विजय पाटील',
    'सौ. प्रिती विजय पाटील',
    'श्री. विठ्ठल तुकाराम पाटील',
    'श्री. वसंत तुकाराम पाटील',
    'श्री. आनंदा भगवान पाटील',
    'श्री. बाळासाहेब भगवान पाटील',
    'श्री. शिवाजी बापू पाटील',
    'श्री. अजित शिवाजी पाटील',
    'श्री. अमोल राजाराम पाटील',
    'श्री. विजय आनंदा पाटील',
    'श्री. विजय यशवंत पाटील',
  ];

  return (
    <section className="py-12 md:py-24 bg-[#FFF5E1] relative flex justify-center px-2 md:px-4">
      {/* Container simulating a traditional printed card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-[1100px] bg-paper-texture rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden flex border border-[#8B6B2E]/30"
      >
        {/* Decorative inner border */}
        <div className="absolute inset-2 border border-[#8B6B2E]/20 pointer-events-none rounded-lg"></div>
        <div className="absolute inset-3 border border-[#8B6B2E]/10 pointer-events-none rounded-lg"></div>

        {/* 1. Red Vertical Strip (Jahir Nimantrak) */}
        <div className="w-10 md:w-16 bg-[#8B0000] flex items-center justify-center py-8 z-10 shrink-0 shadow-inner">
          <h2 
            className="text-[#FAF6EC] font-marathi text-xs md:text-xl font-bold tracking-[0.3em] md:tracking-[0.4em]"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            जाहीर निमंत्रक
          </h2>
        </div>

        {/* 3 & 4. Main Content Area */}
        <div className="flex-1 flex flex-col px-2 py-6 md:px-10 md:py-12 z-10 bg-[#FAF6EC]">
          
          {/* Top Header */}
          <div className="text-center mb-6 md:mb-10">
            <h1 className="font-script text-3xl md:text-5xl text-[#8B6B2E]">Darshani & Sachin</h1>
            <div className="text-[#8B0000] text-lg md:text-2xl mt-1 md:mt-2">♥</div>
            {/* Subtle floral/decorative element */}
            <div className="flex items-center justify-center gap-2 mt-2 opacity-60">
              <span className="w-10 md:w-20 h-px bg-[#8B6B2E]"></span>
              <span className="text-[#8B6B2E] text-[10px] md:text-xs">❁</span>
              <span className="w-10 md:w-20 h-px bg-[#8B6B2E]"></span>
            </div>
          </div>

          {/* Strict 2 Column Layout */}
          {/* Using grid-cols-2 forces 2 columns even on the smallest phones */}
          <div className="grid grid-cols-2 gap-2 md:gap-12 mb-8 md:mb-12 flex-1">
            
            {/* Left Column: आपले नम्र */}
            <div className="flex flex-col items-center">
              <h3 className="font-marathi text-[11px] md:text-2xl text-[#8B0000] font-bold border-b border-[#8B6B2E]/30 pb-1 md:pb-2 mb-3 md:mb-6 w-full text-center">
                आपले नम्र
              </h3>
              <ul className="text-[#8B6B2E] font-marathi text-[8px] md:text-lg space-y-1.5 md:space-y-4 text-center leading-relaxed">
                {namraList.map((name, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            </div>

            {/* Right Column: आपले स्वागतोत्सुक */}
            <div className="flex flex-col items-center">
              <h3 className="font-marathi text-[11px] md:text-2xl text-[#8B0000] font-bold border-b border-[#8B6B2E]/30 pb-1 md:pb-2 mb-3 md:mb-6 w-full text-center">
                आपले स्वागतोत्सुक
              </h3>
              <ul className="text-[#8B6B2E] font-marathi text-[8px] md:text-lg space-y-1.5 md:space-y-4 text-center leading-relaxed">
                {swagatList.map((name, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* Mitra Parivar & Chote Nimantrak Section */}
          <div className="flex flex-col items-center mt-4 md:mt-8 mb-6 md:mb-10 w-full border-t border-[#8B6B2E]/20 pt-6 md:pt-10">
            <div className="grid grid-cols-2 gap-2 md:gap-12 w-full mb-6">
              <div className="text-[#8B6B2E] font-marathi text-[8px] md:text-lg text-center leading-loose">
                चि. प्रमोद बाळसो पाटील<br/>
                चि. विनोद बाळसो पाटील<br/>
                चि. विशाल वसंत पाटील<br/>
                चि. श्रीकांत वसंत पाटील
              </div>
              <div className="text-[#8B6B2E] font-marathi text-[8px] md:text-lg text-center leading-loose">
                चि. शिवराज अर्जुन पाटील<br/>
                चि. कुणाल अर्जुन पाटील<br/>
                चि. ओंकार धनाजी पाटील<br/>
                चि. अथर्व धनाजी पाटील
              </div>
            </div>

            <div className="bg-[#8B0000] text-[#FAF6EC] font-marathi px-4 py-1.5 md:px-8 md:py-3 rounded-full mb-6 font-bold text-[9px] md:text-xl shadow-md border border-[#8B6B2E]/30">
              * समस्त जाधव-पाटील व मित्र परिवार, राजापूर *
            </div>

            <h3 className="font-marathi text-[11px] md:text-2xl text-[#8B0000] font-bold mb-2">
              * छोटे निमंत्रक *
            </h3>
            <p className="text-[#8B6B2E] font-marathi text-[9px] md:text-xl font-semibold text-center px-4">
              चि. पार्थ, स्वरांज, आराध्या, मिथुला, नित्याश्री.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-auto pt-4 md:pt-6 border-t border-[#8B6B2E]/20">
            <p className="font-marathi text-[#8B6B2E] text-[9px] md:text-xl font-bold mb-3 md:mb-6">
              आपली उपस्थिती व शुभाशिर्वाद हाच मोलाचा आहेर...!
            </p>
            <p className="font-marathi text-[#8B0000] text-[8px] md:text-lg mb-2 md:mb-3">
              १० मे २०२६ • बाळकृष्ण मल्टीपर्पज हॉल
            </p>
            <a 
              href="https://instagram.com/atharv_patil_909" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-script text-[#8B6B2E] text-[10px] md:text-xl hover:text-[#8B0000] transition-colors"
            >
              @atharv_patil_909
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Family;
