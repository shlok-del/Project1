import { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, Copy, Check, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copied, setCopied] = useState(false);
  
  const email = "shlok.katare24@vit.edu";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-transparent">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white drop-shadow-lg">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind, looking for a developer, or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-zinc-900/40 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/5 h-full relative overflow-hidden hover:border-primary/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 mix-blend-screen"></div>
              
              <h3 className="text-2xl font-heading font-bold mb-8 text-white">Connect</h3>
              
              <div className="mb-10 p-5 bg-black/40 rounded-2xl shadow-sm border border-white/5 flex items-center justify-between group hover:border-primary/50 hover:bg-black/60 transition-colors cursor-pointer" onClick={copyEmail}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1 group-hover:text-gray-300">Email</p>
                    <a href={`mailto:${email}`} className="font-medium text-gray-300 group-hover:text-white transition-colors text-sm break-all">{email}</a>
                  </div>
                </div>
                <button className="text-gray-500 group-hover:text-primary transition-colors p-2" title="Copy email">
                  {copied ? <Check size={18} className="text-green-500 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]" /> : <Copy size={18} />}
                </button>
              </div>

              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">Social Profiles</h4>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-black/40 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 shadow-sm border border-white/5 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(255,255,255,0.2)]">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/shlok-katare-722388334/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-black/40 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white transition-all duration-300 shadow-sm border border-white/5 hover:-translate-y-1 hover:border-[#0A66C2] hover:shadow-[0_5px_15px_rgba(10,102,194,0.4)]">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-black/40 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 shadow-sm border border-white/5 hover:-translate-y-1 hover:border-[#1DA1F2] hover:shadow-[0_5px_15px_rgba(29,161,242,0.4)]">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-zinc-900/40 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/5 hover:border-primary/20 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 pt-6 pb-2 rounded-xl border border-white/10 bg-black/50 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all peer"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute left-4 top-4 text-sm font-medium text-gray-500 transition-all peer-focus:text-xs peer-focus:top-2 peer-focus:text-primary peer-focus:font-bold peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2 cursor-text">Name</label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 pt-6 pb-2 rounded-xl border border-white/10 bg-black/50 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all peer"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-4 top-4 text-sm font-medium text-gray-500 transition-all peer-focus:text-xs peer-focus:top-2 peer-focus:text-primary peer-focus:font-bold peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2 cursor-text">Email</label>
                </div>
              </div>
              
              <div className="relative mb-8">
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 pt-6 pb-2 rounded-xl border border-white/10 bg-black/50 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all resize-none peer"
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className="absolute left-4 top-4 text-sm font-medium text-gray-500 transition-all peer-focus:text-xs peer-focus:top-2 peer-focus:text-primary peer-focus:font-bold peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2 cursor-text">Message</label>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-[#ff8c3a] text-white font-bold rounded-xl border border-[#ffb17a]/50 hover:shadow-[0_0_35px_rgba(249,115,22,0.8)] hover:scale-[1.02] transition-all flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden uppercase tracking-widest text-sm ring-2 ring-primary/30 ring-offset-2 ring-offset-[#111218]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                {isSubmitting ? (
                  <span className="animate-pulse relative z-10 flex items-center">Sending...</span>
                ) : (
                  <span className="relative z-10 flex items-center">Send Message <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-500/10 text-green-400 rounded-xl text-center font-medium flex items-center justify-center border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                >
                  <Check size={18} className="mr-2" /> Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
