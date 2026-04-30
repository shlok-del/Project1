import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import useFetch from '../hooks/useFetch';

const ProjectDetail = () => {
  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL || '/api';
  const { data: project, loading, error } = useFetch(`${apiUrl}/projects/${id}`);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-transparent">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-transparent">
        <h2 className="text-4xl font-heading font-bold text-red-500 mb-4 drop-shadow-md">Project Not Found</h2>
        <p className="text-gray-400 mb-8 text-lg">{error || "The project you're looking for doesn't exist."}</p>
        <Link to="/" className="text-primary hover:text-orange-400 hover:underline flex items-center transition-colors">
          <ArrowLeft className="mr-2" size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16 md:py-24 max-w-4xl relative"
    >
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>
      
      <Link to="/#projects" className="inline-flex items-center text-primary hover:text-orange-400 hover:scale-105 transition-all mb-8 uppercase tracking-widest text-sm font-bold">
        <ArrowLeft className="mr-2" size={20} /> Back to Projects
      </Link>

      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
        <img 
          src={project.image_url} 
          alt={project.title} 
          className="w-full h-64 md:h-[500px] object-cover rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-white/10 mb-10 transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 border-b border-white/5 pb-8">
        <div>
          <h1 className="text-5xl md:text-6xl font-heading font-black text-white drop-shadow-xl">{project.title}</h1>
        </div>
        <div className="flex space-x-4">
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all transform hover:scale-105 shadow-lg">
              <Github size={20} className="mr-2" /> Code
            </a>
          )}
          {project.live_url && (
            <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-primary text-white border border-orange-400 rounded-full hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all transform hover:scale-105 shadow-lg">
              <ExternalLink size={20} className="mr-2" /> Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        {project.tech_stack && project.tech_stack.map((tech, index) => (
          <span key={index} className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-bold tracking-wider uppercase shadow-[0_0_10px_rgba(249,115,22,0.1)]">
            {tech}
          </span>
        ))}
      </div>

      <div className="prose prose-invert max-w-none text-xl leading-relaxed text-gray-300 bg-zinc-900/30 p-8 rounded-3xl border border-white/5 shadow-inner">
        <p>{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
