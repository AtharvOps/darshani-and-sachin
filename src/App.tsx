import { useState } from 'react';
import { motion } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Details from './components/Details';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Family from './components/Family';
import Petals from './components/Petals';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [invitationOpen, setInvitationOpen] = useState(false);

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

        {/* Global Music Player */}
        <MusicPlayer />
      </motion.div>
    </div>
  );
}

export default App;
