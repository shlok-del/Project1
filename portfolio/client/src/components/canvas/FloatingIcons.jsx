import { motion } from 'framer-motion';

const TECH_STICKERS = [
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', size: 40 },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', size: 35 },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', size: 38 },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', size: 42 },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', size: 40 },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg', size: 35 },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', size: 38 },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', size: 32 },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg', size: 30 },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', size: 35 },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg', size: 32 },
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg', size: 38 },
];

const STICKER_DATA = TECH_STICKERS.map((tech, i) => ({
  ...tech,
  id: i,
  left: `${5 + ((i * 127 + 19) % 90)}%`,
  top:  `${5 + ((i * 83 + 41) % 90)}%`,
  delay: (i * 0.8) % 4,
  duration: 6 + (i * 1.5) % 4,
  rotate: [-(5 + i % 10), (5 + i % 10), -(5 + i % 10)],
  opacity: 0.1 + (i % 5) * 0.02,
}));

const FloatingIcons = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -10 }}>
    {STICKER_DATA.map((item) => (
      <motion.div
        key={item.id}
        className="absolute select-none opacity-20 filter grayscale hover:grayscale-0 transition-all duration-700"
        style={{ left: item.left, top: item.top, opacity: item.opacity }}
        animate={{ 
          y: [-15, 15, -15], 
          rotate: item.rotate,
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: item.duration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: item.delay,
        }}
      >
        <img 
          src={item.icon} 
          style={{ width: item.size, height: item.size }} 
          alt="tech icon"
          className="sticker-glow"
        />
      </motion.div>
    ))}
  </div>
);

export default FloatingIcons;
