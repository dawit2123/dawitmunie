import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Download, X, FileText } from 'lucide-react';
import ProfilePicture from './ProfilePicture';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Software Engineer';
  
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Dawit-Munie-Resume.pdf'; // Update with your resume file path
    link.download = 'Dawit-Munie-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-12">
            {/* Right side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card border border-primary/30"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <code className="text-primary text-sm font-mono">
              {'>'} Dawit Munie initialized_
            </code>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">I'm Dawit, </span>
            <span className="gradient-text text-glow">{displayText}</span>
            <span className="border-r-2 border-primary animate-blink ml-1" />
          </motion.h1>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl font-medium text-primary mb-6 flex items-center justify-center lg:justify-start gap-3"
          >
            Dawit Munie
            <a 
              href="mailto:dawit.z.munie@gmail.com"
              className="text-xs px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary hover:bg-primary/20 transition-colors"
            >
              dawit.z.munie@gmail.com
            </a>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Specializing in 
            <span className="text-primary"> Deep Learning</span>,
            <span className="text-secondary">Agentic AI</span>, and
            <span className="text-accent"> Full Stack Development</span>.
            Building scalable AI solutions, high-performance backend services, and data-driven engineering platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => setShowResumeModal(true)}
              className="group flex items-center gap-2 px-6 py-3 bg-secondary/20 border border-secondary/50 hover:border-secondary rounded-lg font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-4 h-4" />
              Resume
            </motion.button>
            
            <motion.button
              onClick={scrollToProjects}
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium magnetic-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            <motion.button
              onClick={scrollToContact}
              className="group flex items-center gap-2 px-6 py-3 border border-border hover:border-primary/50 rounded-lg font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

              {/* Tech stack preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-muted-foreground text-sm"
              >
                <span>Tech Stack:</span>
                <div className="flex flex-wrap items-center gap-2">
                  {['Full Stack development', 'Machine Learning', 'Deep Learning', 'Agentic AI'].map((tech) => (
                    <span key={tech} className="px-3 py-1 glass-card text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Left side - Profile Picture */}
            <div className="flex-shrink-0">
              <ProfilePicture 
                mainImage="/dawit-munie.png"
                digitalImage="/dawit-munie-ai.png"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResumeModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[85vh] flex flex-col bg-background rounded-xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-background/50 backdrop-blur-md">
                <h3 className="text-xl font-display font-bold">Resume Preview</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={downloadResume}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </button>
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <iframe src="/Dawit-Munie-Resume.pdf" className="w-full h-full bg-muted/50" title="Resume PDF" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
