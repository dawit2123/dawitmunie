import { motion } from 'framer-motion';
import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <Terminal className="w-6 h-6 text-primary" />
            <div>
              <span className="font-display font-bold gradient-text">Software Engineer</span>
              <p className="text-muted-foreground text-sm">Building the future</p>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-1 text-sm text-muted-foreground"
          >
            <span>© {currentYear}</span>
          </motion.div>

          {/* Terminal decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <code className="text-xs text-muted-foreground font-mono">
              {'>'} status: <span className="text-primary">online</span> | latency: <span className="text-accent">10ms</span>
            </code>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
