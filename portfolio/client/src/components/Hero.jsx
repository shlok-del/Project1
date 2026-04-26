import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Terminal, Code2, Cpu, X } from 'lucide-react';
import ShapeCanvas from './canvas/Shape';

const CodeWindow = () => (
  <motion.div
    className="w-full max-w-lg rounded-xl overflow-hidden glass-card shadow-2xl border border-white/10"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
  >
    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">bash — 80x24</div>
    </div>
    <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
      <div className="flex gap-2">
        <span className="text-primary">➜</span>
        <span className="text-accent">~/portfolio</span>
        <span className="text-gray-500">git:(main)</span>
      </div>
      <div className="mt-2 text-white">
        <span className="text-primary">$</span> npm run build
      </div>
      <div className="mt-2 text-gray-500">
        &gt; Building production ready portfolio...
        <br />
        &gt; Compiling technical themes...
        <br />
        &gt; Integrating Supabase...
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-green-400">✓</span>
        <span>Build successful in 1.2s</span>
      </div>
      <div className="mt-4 animate-pulse">
        <span className="text-primary">$</span><span className="ml-1 w-2 h-4 bg-primary inline-block" />
      </div>
    </div>
  </motion.div>
);

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-8 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Side: Identity */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex flex-col items-start text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 relative inline-block group cursor-pointer"
            onClick={() => setIsImageExpanded(true)}
          >
            {/* Squircle Container */}
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-[3rem] p-1 bg-gradient-to-br from-primary via-accent to-primary shadow-[0_0_30px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all duration-500">
              <div className="w-full h-full rounded-[2.7rem] overflow-hidden border-4 border-[#111218] bg-[#111218]">
                <img 
                  src="/profile.jpg.jpeg" 
                  alt="Shlok Katare" 
                  className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
            {/* Status Indicator */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-[#111218] shadow-[0_0_15px_rgba(34,197,94,0.6)] z-10" />
            
            {/* Decorative Background Element */}
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl -z-10 group-hover:bg-primary/10 transition-all duration-500" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-6 text-white leading-tight">
            I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Shlok</span><span className="text-primary">.</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-lg mb-10 leading-relaxed font-body">
            Electronic and Telecommunication Student & Full-Stack Developer. I build high-performance technical solutions with a focus on clean code and immersive UX.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="terminal-button bg-primary text-white hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] px-10 py-4 text-lg">
              Initialize Projects
            </a>
            <a href="#" className="terminal-button border border-white/20 text-gray-300 hover:border-primary/50 px-10 py-4 text-lg">
              Fetch Resume
            </a>
          </div>

          <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <Code2 size={32} />
            <Cpu size={32} />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Terminal size={32} />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Immersive 3D Focus */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Large 3D Shape */}
          <div className="absolute inset-0 opacity-80 scale-150">
            <ShapeCanvas />
          </div>

          {/* Depth Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-700" />

          {/* Floating Stickers (Fewer and more subtle) */}
          <motion.div
            className="absolute top-10 right-10 p-5 glass-card rounded-3xl border-white/20 sticker-glow"
            animate={{ y: [-15, 15, -15], rotate: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" className="w-16 h-16" alt="React" />
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-0 p-4 glass-card rounded-2xl border-white/20 sticker-glow"
            animate={{ y: [15, -15, 15], rotate: [8, -8, 8] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          >
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" className="w-12 h-12" alt="Node.js" />
          </motion.div>
        </div>

      </div>
      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {isImageExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsImageExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-12 right-0 p-2 text-white hover:text-primary transition-colors"
                onClick={() => setIsImageExpanded(false)}
              >
                <X size={32} />
              </button>
              <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_50px_rgba(249,115,22,0.3)]">
                <img 
                  src="/profile.jpg.jpeg" 
                  alt="Shlok Katare" 
                  className="w-full h-auto object-contain max-h-[80vh]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
