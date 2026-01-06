import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Competitive Programmer',
    company: 'Africa to Silicon Valley (A2SV)',
    location: 'California, USA — Remote',
    period: 'Feb 2025 – Present',
    description:
      'Selected trainee in A2SV competitive programming program, solving algorithmic challenges and strengthening problem-solving skills for top-tier tech engineering roles.',
    achievements: [
      'Solved 800+ algorithm problems across LeetCode, Codeforces, and other platforms',
      'Improved algorithmic thinking, optimization, and data structures expertise',
      'Participated in intensive weekly coding reviews and mock interview sessions',
      'Strengthened problem-solving accuracy and execution speed under constraints',
      'Prepared for large-scale engineering problem solving in real-world systems',
    ],
    technologies: [
      'Data Structures',
      'Algorithms',
      'Dynamic Programming',
      'Graphs',
      'Greedy',
      'Time Complexity',
      'Python',
      'C++',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Intrepid Prime AI',
    location: 'USA — Remote',
    period: 'Feb 2025 – Jun 2025',
    description:
      'Worked on AI-driven financial analytics platform, building sentiment analysis and scalable cloud data systems for market intelligence workflows.',
    achievements: [
      'Led development of sentiment analysis feature for financial news insights',
      'Optimized 10+ TB dataset stored in AWS S3 improving retrieval and organization',
      'Reduced cloud operational cost by ~30% through infrastructure optimization',
      'Coordinated and organized engineering tasks across remote team members',
      'Contributed to data processing workflows supporting large-scale analytics',
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'NLP',
      'AWS',
      'S3',
      'Cloud Architecture',
      'Data Processing',
    ],
  },
  {
    title: 'Software Engineering Resident',
    company: 'Headstarter AI',
    location: 'New York, USA — Remote',
    period: 'Dec 2024 – May 2025',
    description:
      'Participated in high-intensity engineering residency building AI, ML, and full-stack systems in collaborative product-focused environments.',
    achievements: [
      'Built 14+ full-stack, AI-engineering, and ML projects in team environments',
      'Architected 5+ neural networks in Python with 12% faster inference latency',
      'Collaborated with mentors from Google, Tesla, Two Sigma, and Citadel',
      'Developed scalable backend integrations and ML-powered application features',
      'Strengthened engineering foundations in applied AI systems development',
    ],
    technologies: [
      'Python',
      'Machine Learning',
      'Neural Networks',
      'Backend Engineering',
      'React',
      'Node.js',
      'APIs',
    ],
  },
  {
    title: 'Open Source Contributor',
    company: 'Chapa Financial Technologies S.C',
    location: 'Addis Ababa, Ethiopia',
    period: 'Jun 2024 – Sep 2024',
    description:
      'Contributed to Chapa Payment Gateway platform supporting large-scale fintech transactions across local and international markets.',
    achievements: [
      'Contributed to payment infrastructure processing 30+ billion ETB in transactions',
      'Authored 1,500+ lines of production-ready code across SDK and integrations',
      'Resolved 20+ bugs improving platform stability and compatibility',
      'Updated WooCommerce SDK improving UX for 10,000+ merchants',
      'Ensured seamless cross-platform integration across multiple ecosystems',
    ],
    technologies: [
      'PHP',
      'WooCommerce',
      'Payment SDK',
      'Open Source',
      'API Integration',
      'Bug Fixing',
      'WordPress',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Addis Software PLC',
    location: 'Addis Ababa, Ethiopia',
    period: 'Jun 2024 – Sep 2024',
    description:
      'Worked on enterprise ERP platform, contributing to backend performance optimization, system maintenance, and feature enhancements.',
    achievements: [
      'Led team operations for 2 weeks during critical delivery period',
      'Developed and maintained RESTful APIs using Express.js',
      'Improved backend performance by 55.7% via Redis caching optimization',
      'Contributed to development, testing, and documentation workflows',
      'Deployed backend services on AWS increasing system reliability and uptime',
    ],
    technologies: [
      'Node.js',
      'Express.js',
      'Redis',
      'REST APIs',
      'AWS',
      'MongoDB',
      'Team Leadership',
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Experience</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-6 md:p-8 hover-lift"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{exp.description}</p>

              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-secondary/20 text-secondary rounded-full border border-secondary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
