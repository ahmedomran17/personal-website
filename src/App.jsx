import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';


// Project Detail Pages
import CNC_CAD from './pages/projects/CNC_CAD';
import CrosswalkModel from './pages/projects/CrosswalkModel';
import EmbeddedSystems from './pages/projects/EmbeddedSystems';

import GearBox from './pages/projects/GearBox';
import Piston from './pages/projects/Piston';
import RoboticHand from './pages/projects/RoboticHand';
import SteeringAssembly from './pages/projects/SteeringAssembly';
import SkinCancerClassification from './pages/projects/SkinCancerClassification';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans transition-colors duration-200">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Navigate to="/about" replace />} />

            
            {/* Project Detail Routes */}
            <Route path="/projects/cnc-cad" element={<CNC_CAD />} />
            <Route path="/projects/crosswalk-model" element={<CrosswalkModel />} />
            <Route path="/projects/embedded-systems" element={<EmbeddedSystems />} />

            <Route path="/projects/gear-box" element={<GearBox />} />
            <Route path="/projects/piston" element={<Piston />} />
            <Route path="/projects/robotic-hand" element={<RoboticHand />} />
            <Route path="/projects/steering-assembly" element={<SteeringAssembly />} />
            <Route path="/projects/skin-cancer-classification" element={<SkinCancerClassification />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
