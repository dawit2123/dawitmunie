import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award, X, Download, ChevronLeft, ChevronRight } from 'lucide-react';

const skillCategories = [
  {
    name: 'Machine Learning & Deep Learning',
    skills: [
      { name: 'Neural Networks (Keras / TensorFlow)', level: 95 },
      { name: 'Scikit-learn & Classical ML', level: 93 },
      { name: 'Deep Learning Optimization', level: 92 },
      { name: 'NLP & Text Classification', level: 91 },
      { name: 'Model Evaluation & Metrics', level: 94 },
      { name: 'Jupyter Notebook & Experimentation', level: 97 },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 94 },
      { name: 'TypeScript', level: 92 },
      { name: 'Python', level: 97 },
      { name: 'Go', level: 90 },
      { name: 'C++', level: 92 },
      { name: 'Java', level: 91 },
      { name: 'C#', level: 90 },
      { name: 'Dart', level: 90 },
      { name: 'PHP', level: 90 },
    ],
  },
  {
    name: 'Full-Stack & Backend Engineering',
    skills: [
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 96 },
      { name: 'NestJS', level: 92 },
      { name: 'REST API Design', level: 96 },
      { name: 'GraphQL', level: 91 },
      { name: 'Authentication & JWT', level: 94 },
      { name: 'System Design & Architecture', level: 93 },
    ],
  },
  {
    name: 'Frontend & UI Development',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Redux / Redux-Saga', level: 93 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'HTML5 & CSS3', level: 96 },
      { name: 'Flutter', level: 90 },
      { name: 'Webpack & Modular Architecture', level: 92 },
    ],
  },
  {
    name: 'Databases & Data Engineering',
    skills: [
      { name: 'MongoDB', level: 95 },
      { name: 'PostgreSQL', level: 92 },
      { name: 'MySQL', level: 94 },
      { name: 'Redis (Caching & Performance)', level: 97 },
      { name: 'T-SQL', level: 91 },
      { name: 'Data Preprocessing & Pipelines', level: 93 },
    ],
  },
  {
    name: 'Cloud Platforms & Infrastructure',
    skills: [
      { name: 'AWS (S3, Compute, Costs Optimization)', level: 94 },
      { name: 'Google Cloud Platform', level: 91 },
      { name: 'Microsoft Azure', level: 90 },
      { name: 'Cloud Storage & Data Lifecycle Management', level: 93 },
      { name: 'Scalable Deployment', level: 92 },
    ],
  },
  {
    name: 'DevOps & Performance Optimization',
    skills: [
      { name: 'Docker', level: 92 },
      { name: 'Kubernetes', level: 90 },
      { name: 'CI/CD Workflows', level: 91 },
      { name: 'Backend Performance Tuning', level: 96 },
      { name: 'Caching & Latency Reduction', level: 97 },
    ],
  },
  {
    name: 'Competitive Programming & CS Foundations',
    skills: [
      { name: 'Data Structures & Algorithms', level: 98 },
      { name: 'Dynamic Programming', level: 95 },
      { name: 'Graphs & Trees', level: 94 },
      { name: 'Problem Solving (800+ Problems)', level: 99 },
      { name: 'Time & Space Complexity', level: 96 },
    ],
  },
  {
    name: 'Tools, Workflows & Collaboration',
    skills: [
      { name: 'Git & GitHub', level: 96 },
      { name: 'Agile & Team Collaboration', level: 93 },
      { name: 'Technical Documentation', level: 92 },
      { name: 'Testing & Debugging', level: 91 },
      { name: 'Project Management & Coordination', level: 94 },
    ],
  },
];



const certifications = [
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    description: 'Mastered the foundations of Deep Learning, understanding how to build neural networks, and how to lead successful machine learning projects. Learned about Convolutional networks, RNNs, LSTM, Adam, Dropout, BatchNorm, Xavier/He initialization, and more.',
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    description: 'Gained a broad introduction to machine learning, datamining, and statistical pattern recognition. Topics included: Supervised learning (parametric/non-parametric algorithms, support vector machines, kernels, neural networks).',
  },
  {
    name: 'CCNA Introduction to Networks',
    issuer: 'Cisco',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    description: 'Covered the architecture, structure, functions, components, and models of the Internet and other computer networks. The principles and structure of IP addressing and the fundamentals of Ethernet concepts, media, and operations were introduced.',
  },
  {
    name: 'Delf B2',
    issuer: 'Institut français',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    description: 'Official diploma awarded by the French Ministry of Education to certify the competency of candidates from outside France in the French language. B2 indicates an upper intermediate level of user.',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const targetScroll = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Skills & Certifications</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-display font-semibold mb-6 gradient-text">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            <Award className="w-6 h-6 inline-block mr-2 text-primary" />
            Certifications
          </h3>
          
          <div
            className="relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/50 backdrop-blur-md border border-white/10 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => handleScroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/50 backdrop-blur-md border border-white/10 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-x-[20px] group-hover:translate-x-0"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>

            <div 
              className="w-full overflow-hidden py-4"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
              <div ref={scrollRef} className="flex gap-6 overflow-x-hidden w-full no-scrollbar">
              {/* Tripling the list ensures smooth infinite scrolling on wider screens */}
              {[...certifications, ...certifications, ...certifications].map((cert, index) => (
                <div
                  key={`${cert.name}-${index}`}
                  className="w-[280px] flex-shrink-0 cursor-pointer group"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="glass-card p-4 h-full hover-lift transition-all duration-300 border border-white/10 hover:border-primary/30">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-muted relative">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-xs font-medium px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm">
                          View Details
                        </span>
                      </div>
                    </div>
                    <h4 className="font-medium text-sm mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                      <p className="text-primary text-xs font-mono bg-primary/10 px-2 py-0.5 rounded">{cert.year}</p>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certification Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card max-w-7xl w-full overflow-hidden relative shadow-2xl flex flex-col md:flex-row bg-background/95"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors z-10"
                >
                  <X size={20} />
                </button>

                <div className="w-full md:w-2/3 h-80 md:min-h-[600px] relative bg-muted">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 font-display">{selectedCert.name}</h3>
                    <p className="text-muted-foreground mb-1">
                      Issued by <span className="text-foreground font-medium">{selectedCert.issuer}</span>
                    </p>
                    <p className="text-sm text-primary font-medium">{selectedCert.year}</p>
                    <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{selectedCert.description}</p>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <a
                      href={selectedCert.link}
                      className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 px-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
