import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-transparent border-t border-white/5 py-8 relative mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-2xl font-bold font-heading tracking-tighter text-primary mb-2">
            Shlok<span className="text-accent">.</span>
          </p>
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Shlok. All rights reserved.
          </p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-500 mb-2 flex items-center justify-center md:justify-end">
            Built with <span className="mx-1 text-primary">⚡</span> using
          </p>
          <div className="flex space-x-2 text-xs font-medium text-gray-400">
            <span className="px-2 py-1 bg-zinc-900 border border-white/5 rounded">React</span>
            <span className="px-2 py-1 bg-zinc-900 border border-white/5 rounded">Node.js</span>
            <span className="px-2 py-1 bg-zinc-900 border border-white/5 rounded">MySQL</span>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 z-20 border border-orange-400"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
