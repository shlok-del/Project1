import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/#home', id: 'home' },
    { name: 'ABOUT', href: '/#about', id: 'about' },
    { name: 'SKILLS', href: '/#skills', id: 'skills' },
    { name: 'PROJECTS', href: '/#projects', id: 'projects' },
    { name: 'CONTACT', href: '/#contact', id: 'contact' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (location.pathname !== '/') return;
    
    const id = href.replace('/#', '');
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 glass-morphism rounded-xl flex items-center justify-center text-primary border-primary/30 group-hover:border-primary transition-all">
            <Terminal size={20} />
          </div>
          <span className="text-xl font-heading font-black tracking-tighter text-white">
            SHLOK<span className="text-primary">.</span>SYS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 glass-morphism p-1.5 rounded-2xl border-white/5">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative px-5 py-2 text-[10px] font-mono font-bold tracking-widest transition-all ${
                activeSection === link.id 
                ? 'text-white' 
                : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {activeSection === link.id && (
                <motion.div 
                  layoutId="navGlow"
                  className="absolute inset-0 bg-primary/20 rounded-xl border border-primary/30 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden w-10 h-10 glass-morphism rounded-xl flex items-center justify-center text-gray-400"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full glass-morphism border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-mono font-bold p-4 rounded-xl transition-all ${
                    activeSection === link.id ? 'bg-primary/10 text-primary border border-primary/20' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
