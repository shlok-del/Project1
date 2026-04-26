import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TechBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <div ref={ref} className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#111218]">
      {/* Base Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Main Collage Layer (Parallax) */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 w-full h-[120vh] bg-cover bg-center pointer-events-none filter brightness-[0.3] saturate-[0.7]"
      >
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" 
          alt="Technical Collage" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Depth Layer 2 (Abstract nodes/symbols) */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 pointer-events-none opacity-20"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
      </motion.div>

      {/* Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111218]/50 via-transparent to-[#111218] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(17,18,24,0.8)_100%)] pointer-events-none" />
      
      {/* Scanline Overlay */}
      <div className="scanline-overlay" />
    </div>
  );
};

export default TechBackground;
