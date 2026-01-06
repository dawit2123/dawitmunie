import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

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
  { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', year: '2023' },
  { name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI', year: '2023' },
  { name: 'CCNA Introduction to Networks', issuer: 'Cisco', year: '2022' },
  { name: 'Delf B2', issuer: 'Institut français', year: '2021' },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card p-4 text-center hover-lift group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium text-sm mb-1 line-clamp-2">{cert.name}</h4>
                <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                <p className="text-primary text-xs mt-1">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
