import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { value: '0', label: 'Years Experience' },
    { value: '0', label: 'Projects Built' },
    { value: '10+', label: 'Technologies' },
  ];

  return (
    <section id="about" className="py-20 bg-transparent relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -left-40 top-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 mix-blend-screen"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          <motion.div
            className="w-full md:w-1/2 relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Profile Image */}
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-[50%] transition-all duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl group-hover:ring-primary/50 transition-colors duration-500 shadow-[inset_0_0_20px_rgba(249,115,22,0.2)]"></div>

              {/* Overlay Gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
            </motion.div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10 group-hover:bg-primary/40 group-hover:scale-150 transition-all duration-700 mix-blend-screen"></div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 relative inline-block text-white">
              About Me
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></span>
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed mt-4">
              I am a passionate Full-Stack Developer with a strong focus on building scalable web applications and seamless user experiences. I thrive on solving complex problems and turning ideas into reality using modern web technologies.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on software architecture.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5 text-center hover:bg-zinc-800/80 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all cursor-default group"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl md:text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium tracking-wider uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
