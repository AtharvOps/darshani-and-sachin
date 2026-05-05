import { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import WelcomeScreen from './components/WelcomeScreen';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Details from './components/Details';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Family from './components/Family';
import Petals from './components/Petals';

function App() {
  const [invitationOpen, setInvitationOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="font-sans antialiased text-theme-dark selection:bg-theme-accent selection:text-white relative min-h-screen bg-theme-light">

      <WelcomeScreen isOpen={invitationOpen} onOpen={() => setInvitationOpen(true)} />

      {/* Main Content - Only visible after welcome screen is dismissed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: invitationOpen ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={invitationOpen ? 'block' : 'hidden'}
      >
        {/* Global falling petals animation overlay */}
        <Petals />

        <Hero />
        <Countdown />
        <Details />
        <Timeline />
        <Gallery />
        <Location />
        <Family />

        {/* Floating Music Button */}
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 p-4 bg-[#B46743] text-white rounded-full shadow-[0_5px_15px_rgba(180,103,67,0.4)] hover:bg-[#9a5636] hover:scale-105 transition-all duration-300"
          aria-label="Toggle Background Music"
        >
          {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6 opacity-80" />}
        </button>
      </motion.div>
    </div>
  );
}

export default App;
