import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';

const projects = [
  {
    title: 'DotCode – AI-Powered Developer Platform',
    description:
      'Full-stack developer tool with real-time collaboration, AI debugging assistance, and snippet versioning.',
    longDescription:
      'Led development of DotCode, a productivity platform featuring collaborative code editing, AI-assisted debugging, JWT-secured authentication, analytics dashboards, and modular snippet management. The platform powers 10+ AI tools and serves over 1k+ snippet interactions per day, boosting developer productivity by ~35%.',
    image: '/dotcode.png',
    tags: ['Full-Stack', 'AI Tools', 'Developer Productivity', 'Real-time Collaboration'],
    category: ['Developer Tools', 'Web Applications'],
    github: 'https://github.com/smdt-project/dot-deploy',
    demo: 'https://dot-deploy-front-end1.vercel.app/',
  },

  {
    title: 'MarketPulse AI – Market Anomaly Detection System',
    description:
      'Neural-network powered anomaly detection pipeline processing 500k+ financial datapoints daily.',
    longDescription:
      'Engineered a deep-learning based anomaly detection system trained on Bloomberg-derived financial indicators. Implemented preprocessing pipelines including resizing, SMOTE, and PCA, improving efficiency by ~35%. The system delivers strategy-driven insights with 91.5% accuracy and includes an AI chatbot for finance analytics queries.',
    image: '/marketpulse.png',
    tags: ['Deep Learning', 'Finance AI', 'Time-Series', 'Data Processing'],
    category: ['AI & Machine Learning', 'Web Applications'],
    github: 'https://github.com/dawit2123/Market-Anomaly-Detection',
    demo: 'https://market-anomaly-detection.streamlit.app/',
  },

  {
    title: 'BrainGuard – MRI Brain Disease Classifier',
    description:
      'Deep-learning classifier for brain MRI scans achieving 98.5% precision and <200ms inference latency.',
    longDescription:
      'Developed a medical imaging classifier capable of categorizing brain MRI scans into three disease types. Built using Python and Keras with optimized inference pipelines to deliver automated diagnostic reports in under 200ms, achieving 98% recall and 98.5% precision for clinical-grade classification workflows.',
    image: '/brainguard.png',
    tags: ['Medical AI', 'Deep Learning', 'Healthcare', 'Image Classification'],
    category: ['AI & Machine Learning', 'Web Applications'],
    github: 'https://github.com/dawit2123/Brain-Tumor-Classification',
    demo: 'https://brain-tumor-classification-qrdbpl2jp63jfajcodxeaz.streamlit.app/',
  },

  {
    title: 'Amharic Hate Speech Detection',
    description:
      'Amharic hate-speech detector using transformers with end-to-end workflows and docs for academic and civic-tech use.',
    longDescription:
      'Built an Amharic hate-speech detection model using transformer architectures and language-aware text preprocessing. Designed dataset labeling workflows, model evaluation metrics, and usage documentation to make the model accessible for academic and civic-tech applications.',
    image: '/amharic-hate-speech.png',
    tags: ['NLP', 'Transformers', 'Text Classification', 'Low-Resource Languages'],
    category: ['AI & Machine Learning'],
    github: 'https://github.com/dawit2123/amharic-hate-speech-detection-using-ML',
    demo: 'https://huggingface.co/spaces/devaprobs/amharic-hate-speech-detection',
  },
  {
    title: 'DocScribe — Intelligent Reasoning Agent',
    description:
      'AI-powered document intelligence agent for entity extraction, multi-document summarization, across large text collections.',
    longDescription:
      'DocScribe is an intelligent NLP-driven analysis agent designed to help analysts process large volumes of unstructured text efficiently. Built as a research-oriented workflow assistant, it combines entity extraction, abstractive and extractive summarization, semantic document retrieval, and multi-step reasoning to synthesize insights across multiple news articles and reports. The system integrates SpaCy, Hugging Face Transformers, TextRank, and T5 summarization, with a Streamlit interface deployed via Colab and Ngrok for live interaction. DocScribe features tool-chaining, cross-document synthesis, session memory, and a semantic cache — enabling users to query topics, extract entities, and generate executive-level intelligence summaries.',
    image: '/docscribe.png',
    tags: ['NLP', 'Document Analysis', 'Summarization', 'Reasoning Agent'],
    category: ['AI & Machine Learning'],
    github: 'https://github.com/dawit2123/DocScribe-AI',
    demo: '#',
  }
  ,

  {
  title: 'EthioChat — Community Messaging App',
  description:
    'Cross-platform Flutter messaging app built for Ethiopian communities, featuring real-time chat, and group conversations.',
  longDescription:
    'Developed a full-featured mobile chat platform enabling users to connect, share experiences, and communicate through secure one-to-one and group messaging. Built using Flutter with RiverPod for scalable state management and Firebase for authentication, cloud storage, and real-time messaging. Implemented multimedia sharing (images, videos, voice messages, emojis) and ephemeral Stories to enhance user engagement. Delivered from concept to production in one month through collaborative team development and rigorous UI/UX planning.',
  image: '/ethiochat.png',
  tags: ['Flutter', 'Firebase', 'Mobile App', 'Real-time Chat'],
  category: ['Mobile Applications'],
  github: 'https://github.com/Bit-SWE-4th-G7/EthioChat-App',
  demo: '#'
}
];


const categories = [
  'All',
  'Web Applications',
  'Mobile Applications',
  'Developer Tools',
  'AI & Machine Learning',
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Projects</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in AI, machine learning, and software engineering.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card overflow-hidden hover-lift"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project image placeholder */}
              <div className="relative h-48 w-full overflow-hidden bg-muted/5">
                {/* project image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full"
                />
                {/* subtle gradient overlay for consistent look */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-60" />
                

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.title ? 1 : 0 }}
                  className="absolute inset-0 bg-background/90 flex items-center justify-center gap-4"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background rounded-xl border border-white/10 shadow-2xl p-6 md:p-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors font-medium"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                      {selectedProject.category.join(' • ')}
                    </span>
                    <h3 className="text-2xl font-display font-bold mt-2">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div className="pt-4">
                    <h4 className="text-sm font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
