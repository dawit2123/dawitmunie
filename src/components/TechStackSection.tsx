import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techStack = [
  // Programming Languages
  { name: 'Python', icon: '🐍', category: 'Language' },
  { name: 'JavaScript', icon: '⚙️', category: 'Language' },
  { name: 'TypeScript', icon: '📘', category: 'Language' },
  { name: 'SQL', icon: '🗄️', category: 'Language' },
  
  // Deep Learning & AI
  { name: 'TensorFlow', icon: '🧠', category: 'ML Framework' },
  { name: 'PyTorch', icon: '🔥', category: 'ML Framework' },
  { name: 'Keras', icon: '🤖', category: 'ML Framework' },
  { name: 'Hugging Face', icon: '🤗', category: 'AI' },
  
  // Web Scraping & Automation
  { name: 'Selenium', icon: '🕷️', category: 'Scraping' },
  { name: 'BeautifulSoup', icon: '🍜', category: 'Scraping' },
  { name: 'Scrapy', icon: '📡', category: 'Scraping' },
  { name: 'FastAPI', icon: '⚡', category: 'Backend' },
  
  // Data Science
  { name: 'Pandas', icon: '📊', category: 'Data' },
  { name: 'NumPy', icon: '🔢', category: 'Data' },
  { name: 'Scikit-learn', icon: '📈', category: 'Data' },
  { name: 'Power BI', icon: '📉', category: 'Visualization' },
  
  // Databases
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'MySQL', icon: '🐬', category: 'Database' },
  { name: 'Cassandra', icon: '💾', category: 'Database' },
  
  // Cloud & DevOps
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'GCP', icon: '🌐', category: 'Cloud' },
  { name: 'Azure', icon: '🔷', category: 'Cloud' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  
  // Frontend & Web
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Flask', icon: '🍶', category: 'Backend' },
  { name: 'Git', icon: '🔀', category: 'Tools' },
  { name: 'CI/CD', icon: '🔄', category: 'DevOps' },
  { name: 'Jupyter', icon: '📓', category: 'Tools' },
  { name: 'VS Code', icon: '💻', category: 'Tools' },
  { name: 'Postman', icon: '📮', category: 'Tools' },
  { name: 'GitHub', icon: '🐙', category: 'Tools' },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Tech Stack</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
            Tools I <span className="gradient-text">Work With</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-card p-4 text-center cursor-pointer group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <div className="text-sm font-medium">{tech.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
