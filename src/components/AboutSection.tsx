import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Zap, Database } from 'lucide-react';

const expertise = [
  {
    icon: Brain,
    title: 'Deep Learning, NLP & Neural Systems',
    description: 'Designing and training neural networks for classification, anomaly detection, and medical imaging, with experience in NLP, sentiment analysis, transformers, and model optimization for real-world production systems.',
  },
  {
    icon: Code,
    title: 'Full-Stack & Cloud-Based Software Development',
    description: 'Developing scalable web applications and backend services using React, Node.js, Express, and Redis, implementing secure APIs, distributed systems, and cloud-hosted platforms across AWS, GCP, and Azure environments.',
  },
  {
    icon: Zap,
    title: 'Intelligent Systems Engineering & Automation',
    description: 'Building end-to-end machine learning pipelines, inference workflows, and cloud-optimized architectures, with a focus on scalable automation, cost-efficient deployment, and high-performance model execution.',
  },
  {
    icon: Database,
    title: 'Data Engineering, Analytics & Large-Scale Processing',
    description: 'Managing and optimizing large datasets, constructing preprocessing pipelines, applying statistical and predictive modeling techniques, and delivering data-driven insights for finance, healthcare, and market intelligence use cases.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Software Engineer
            <span className="gradient-text"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Software Engineer & AI Engineer with experience across full-stack development, machine learning, cloud computing, and competitive programming. I build production-ready AI systems, optimize large-scale datasets, and develop scalable software solutions used in real-world environments.
          </p>
        </motion.div>

        {/* Expertise grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '4+', label: 'Years Experience' },
            { value: '52+', label: 'Projects Completed' },
            { value: '100%', label: 'On-time Delivery' },
            { value: '800+', label: 'Competitive problems solved' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
