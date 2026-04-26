import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    skills: [
      { name: "React",      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
      { name: "Tailwind",   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Next.js",    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
    ]
  },
  {
    title: "Backend & Systems",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    skills: [
      { name: "Node.js",  icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
      { name: "Python",   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "Java",     icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
      { name: "Express",  icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
      { name: "Supabase", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg" },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    skills: [
      { name: "Docker",   icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
      { name: "Git",      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
      { name: "PostgreSQL",icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL",    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
      { name: "Figma",    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" },
    ]
  }
];

const Skills = () => (
  <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
        <div>
          <motion.p
            className="font-mono text-primary text-sm mb-2 tracking-[0.3em] uppercase"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            // technical_stack
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white">TOOLKIT<span className="text-primary">.</span></h2>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-gray-500 font-mono text-xs max-w-[200px]">
            System initialized. Loading assets... 100% complete.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card rounded-3xl p-8 group hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 glass-morphism rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src={category.icon} className="w-6 h-6 grayscale group-hover:grayscale-0" alt={category.title} />
              </div>
              <h3 className="text-xl font-heading font-bold text-white tracking-tight">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex items-center gap-2 px-3 py-2 glass-morphism rounded-xl border-white/5 hover:border-primary/50 cursor-default"
                >
                  <img src={skill.icon} className="w-5 h-5" alt={skill.name} />
                  <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
