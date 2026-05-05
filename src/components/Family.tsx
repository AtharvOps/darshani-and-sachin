import React from 'react';
import { motion } from 'framer-motion';

const Family: React.FC = () => {
  const namraLeft = [
    'सौ. लक्ष्मी मारुती पाटील',
    'सौ. सावित्री भिमराव पाटील',
    'सौ. प्रभावती अर्जुन पाटील',
    'सौ. सुजाता धनाजी पाटील',
  ];

  const namraRight = [
    'श्री. मारुती दत्तात्रय पाटील',
    'श्री. भिमराव दत्तात्रय पाटील',
    'श्री. अर्जुन दत्तात्रय पाटील',
    'श्री. धनाजी दत्तात्रय पाटील',
  ];

  const swagatLeft = [
    'सौ. शारदा वसंत पाटील',
    'सौ. माधुरी आनंदा पाटील',
    'सौ. रेखा बाळासाहेब पाटील',
    'सौ. सिंधूताई शिवाजी पाटील',
    'सौ. जयश्री अजित पाटील',
    'सौ. रुपाली अमोल पाटील',
    'सौ. गौरी विजय पाटील',
    'सौ. प्रिती विजय पाटील',
    'श्री. विठ्ठल तुकाराम पाटील'
  ];

  const swagatRight = [
    'श्री. वसंत तुकाराम पाटील',
    'श्री. आनंदा भगवान पाटील',
    'श्री. बाळासाहेब भगवान पाटील',
    'श्री. शिवाजी बापू पाटील',
    'श्री. अजित शिवाजी पाटील',
    'श्री. अमोल राजाराम पाटील',
    'श्री. विजय आनंदा पाटील',
    'श्री. विजय यशवंत पाटील',
  ];

  const renderNamesList = (names: string[], alignRightOnDesktop = false) => (
    <div className={`flex flex-col space-y-6 text-theme-light text-sm md:text-base font-marathi ${alignRightOnDesktop ? 'md:text-right' : 'md:text-left'}`}>
      {names.map((name, index) => (
        <div key={index} className={`border-b border-theme-light/10 pb-2 text-center ${alignRightOnDesktop ? 'md:text-right' : 'md:text-left'} relative`}>
          {alignRightOnDesktop && <div className="hidden md:block absolute bottom-0 right-0 h-px w-full bg-theme-light/10"></div>}
          <span className={alignRightOnDesktop ? 'md:float-right' : ''}>{name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-24 bg-theme-dark relative overflow-hidden">
      {/* Background Particles Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--color-theme-accent) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 flex flex-col items-center text-center">

        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-script text-5xl md:text-7xl text-theme-accent drop-shadow-sm">
            Darshani & Sachin
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-theme-accent/40"></div>
            <span className="text-theme-accent text-xl">♥</span>
            <div className="h-px w-24 bg-theme-accent/40"></div>
          </div>
        </motion.div>

        {/* Aple Namra Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full mb-20"
        >
          <h3 className="font-marathi text-3xl md:text-4xl text-theme-accent mb-12 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-theme-accent hidden md:block"></span>
            आपले नम्र
            <span className="h-px w-12 bg-theme-accent hidden md:block"></span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-4 mb-10">
            <div className="md:text-right">
              {renderNamesList(namraLeft, true)}
            </div>
            <div>
              {renderNamesList(namraRight)}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="font-marathi text-theme-accent text-lg md:text-xl font-semibold border-y border-theme-accent/30 inline-block py-3 px-8 rounded-sm bg-theme-light/5">
              श्रीमती हौसाबाई दत्तात्रय पाटील
            </p>
          </div>
        </motion.div>

        {/* Swagatotsuk Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full mb-20"
        >
          <h3 className="font-marathi text-3xl md:text-4xl text-theme-accent mb-12 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-theme-accent hidden md:block"></span>
            आपले स्वागतोत्सुक
            <span className="h-px w-12 bg-theme-accent hidden md:block"></span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-4">
            <div className="md:text-right">
              {renderNamesList(swagatLeft, true)}
            </div>
            <div>
              {renderNamesList(swagatRight)}
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center w-full pb-10"
        >
          <h3 className="font-marathi text-2xl md:text-3xl text-theme-accent mb-16 leading-relaxed">
            आपली उपस्थिती व शुभाशिर्वाद हाच<br />मोलाचा आहेर...!
          </h3>

          <div className="flex flex-col items-center gap-4 text-theme-light/70 font-marathi text-sm md:text-base mb-8">
            <p>१० मे २०२६ • बाळकृष्ण मल्टीपर्पज हॉल</p>
            <div className="h-px w-12 bg-theme-light/30"></div>
          </div>

          <a 
            href="https://instagram.com/atharv_patil_909" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-script text-theme-accent text-2xl hover:text-white transition-colors duration-300 inline-block hover:-translate-y-1 transform"
          >
            @atharv_patil_909
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Family;
