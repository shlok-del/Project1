import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import TechBackground from './components/canvas/TechBackground';
import FloatingIcons from './components/canvas/FloatingIcons';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative text-gray-200">
        {/* Global Background */}
        <TechBackground />
        <FloatingIcons />
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-40">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-primary/5 to-transparent rounded-full blur-[100px] opacity-80"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-600/10 via-orange-500/5 to-transparent rounded-full blur-[120px] opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent rounded-full blur-[80px]"></div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent origin-left z-[100]"
          style={{ scaleX }}
        />
        
        {/* Custom Cursor */}
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[100] hidden md:block mix-blend-screen shadow-[0_0_10px_rgba(249,115,22,0.8)]"
          animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
          transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
        />
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[100] hidden md:block mix-blend-screen shadow-[0_0_8px_rgba(251,146,60,1)]"
          animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
          transition={{ type: 'spring', stiffness: 1000, damping: 40, mass: 0.1 }}
        />

        <Navbar />
        <main className="flex-grow pt-16 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
