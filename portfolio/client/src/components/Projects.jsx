import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, ArrowRight, Layers, FileText } from 'lucide-react';
import useFetch from '../hooks/useFetch';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
  const { data: projects, loading, error } = useFetch(`${apiUrl}/projects`);

  const filters = ['All', 'Frontend', 'Backend', 'Full-Stack', 'EC'];

  const filteredProjects = projects ? projects.filter(project => {
    if (filter === 'All') return true;
    const lowerFilter = filter.toLowerCase();

    // Tech keywords for categorization
    const frontendTech = ['react', 'vue', 'html', 'css', 'tailwind', 'next.js', 'javascript'];
    const backendTech = ['node.js', 'express', 'mysql', 'java', 'supabase', 'postgresql'];
    const ecTech = ['arduino', 'esp32', 'raspberry pi', 'embedded', 'iot', 'robotics', 'circuit', 'vhdl', 'matlab', 'proteus', 'microcontroller'];

    const hasFrontend = project.tech_stack?.some(t => frontendTech.includes(t.toLowerCase()));
    const hasBackend = project.tech_stack?.some(t => backendTech.includes(t.toLowerCase()));
    const hasEC = project.tech_stack?.some(t => ecTech.includes(t.toLowerCase()));

    if (lowerFilter === 'frontend') return hasFrontend && !hasBackend && !hasEC;
    if (lowerFilter === 'backend') return hasBackend && !hasFrontend && !hasEC;
    if (lowerFilter === 'full-stack') return hasFrontend && hasBackend;
    if (lowerFilter === 'ec') return hasEC;
    return true;
  }) : [];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="mb-8 md:mb-0">
            <motion.p
              className="font-mono text-primary text-sm mb-2 tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            >
              // selected_works
            </motion.p>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white">PROJECTS<span className="text-primary">.</span></h2>
          </div>

          <div className="flex flex-wrap gap-2 glass-morphism p-1 rounded-2xl border-white/5">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 ${filter === f
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="glass-card p-8 rounded-3xl text-center border-red-500/20">
            <p className="text-red-400 font-mono text-sm">Error: {error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                key={project.id}
                className="group glass-card rounded-3xl overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image_url || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111218] via-transparent to-transparent opacity-60" />

                  {project.featured && (
                    <div className="absolute top-4 right-4 glass-morphism px-3 py-1 rounded-full flex items-center gap-2 border-primary/30">
                      <Star size={12} className="text-primary fill-primary" />
                      <span className="text-[10px] font-mono text-white">FEATURED</span>
                    </div>
                  )}
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-heading font-black text-white mb-3 group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed font-body">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech_stack?.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-3 py-1 glass-morphism rounded-lg text-[10px] font-mono text-gray-300 border-white/5 group-hover:border-primary/20 transition-all">
                        {tech.toUpperCase()}
                      </span>
                    ))}
                    {project.tech_stack?.length > 3 && (
                      <span className="px-3 py-1 glass-morphism rounded-lg text-[10px] font-mono text-gray-500 border-white/5">
                        +{project.tech_stack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex gap-4">
                      {project.github_url && (
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.live_url && (
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.report_url && (
                        <a href={project.report_url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" title="Project Report">
                          <FileText size={20} />
                        </a>
                      )}
                    </div>
                    <Link to={`/project/${project.id}`} className="text-xs font-mono font-bold text-primary flex items-center gap-2 group/link">
                      DETAILS <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!loading && filteredProjects.length === 0 && (
          <div className="glass-card p-20 rounded-3xl text-center border-dashed border-white/10">
            <Layers className="mx-auto mb-4 text-gray-700" size={48} />
            <p className="text-gray-500 font-mono text-sm">No projects matched the current filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
