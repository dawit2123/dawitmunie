import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProfilePictureProps {
  mainImage?: string;
  digitalImage?: string;
}

const ProfilePicture = ({ 
  mainImage = '/dawit-munie.jpg',
  digitalImage = '/dawit-munie-ai.png'
}: ProfilePictureProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showScanEffect, setShowScanEffect] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFadingBack, setIsFadingBack] = useState(false);

  // keep the scan visible until the animation completes (handled by onAnimationComplete)
  useEffect(() => {
    return () => {};
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        ref={containerRef}
        className="relative w-56 h-[380px] md:w-[450px] md:h-[700px] cursor-pointer group rounded-3xl overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Main image (always visible base) */}
        <img
          src={mainImage}
          alt="Profile"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Scanning rectangle effect on page load - reveals digital version inside a moving band */}
        {showScanEffect && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ ['--scan-top' as any]: '-25%', ['--scan-bottom' as any]: '10%' }}
            animate={{ ['--scan-top' as any]: '100%', ['--scan-bottom' as any]: '135%' }}
            transition={{ duration: 2.2, ease: 'easeInOut', repeat: 1, repeatType: 'reverse' }}
            onAnimationComplete={() => setShowScanEffect(false)}
            style={{
              // CSS variables used by the mask below
              ['--scan-top' as any]: '-25%',
              ['--scan-bottom' as any]: '10%',
              maskImage:
                'linear-gradient(to bottom, transparent 0%, transparent var(--scan-top), black var(--scan-top), black var(--scan-bottom), transparent var(--scan-bottom), transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0%, transparent var(--scan-top), black var(--scan-top), black var(--scan-bottom), transparent var(--scan-bottom), transparent 100%)',
            } as React.CSSProperties}
          >
            {/* Digital image - visible only inside the band defined by --scan-top / --scan-bottom */}
            <img
              src={digitalImage}
              alt="AI portrait scan"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Leading bright edge (follow the top variable) */}
            <motion.div
              className="absolute left-0 right-0 h-28 bg-gradient-to-b from-primary/90 to-transparent blur-2xl pointer-events-none"
              style={{ top: 'calc(var(--scan-top))' }}
              initial={{ top: '-30%' }}
              animate={{ top: '100%' }}
              transition={{ duration: 2.2, ease: 'easeInOut', repeat: 1, repeatType: 'reverse' }}
            />

            {/* Trailing soft edge (follow the bottom variable) */}
            <motion.div
              className="absolute left-0 right-0 h-28 bg-gradient-to-b from-transparent to-accent/60 blur-2xl pointer-events-none"
              style={{ top: 'calc(var(--scan-bottom))' }}
              initial={{ top: '0%' }}
              animate={{ top: '135%' }}
              transition={{ duration: 2.2, ease: 'easeInOut', repeat: 1, repeatType: 'reverse' }}
            />
          </motion.div>
        )}
        
        {/* Digital/AI image with circular reveal mask - only shows when hovering */}
        {isHovering && (
          <img
            src={digitalImage}
            alt="AI portrait"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              maskImage: `radial-gradient(circle 180px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 50%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle 180px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 50%, transparent 100%)`,
            }}
          />
        )}
        
        {/* Cursor-tracking glow aura (similar to background orbs) */}
        {isHovering && (
          <div 
            className="absolute pointer-events-none transition-opacity duration-200"
            style={{
              left: mousePosition.x - 120,
              top: mousePosition.y - 120,
              width: 240,
              height: 240,
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, hsl(var(--secondary) / 0.2) 50%, transparent 100%)',
              filter: 'blur(50px)',
            }}
          />
        )}
      </motion.div>

      {/* Cool hover tagline below image */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 text-center"
      >
        <p className="text-muted-foreground text-sm mb-3">
          {isHovering ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block"
            >
              ✨ Hover to see AI version
            </motion.span>
          ) : (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block"
            >
              🚀 Top 0.04% competitive programmer
            </motion.span>
          )}
        </p>
        <motion.div
          className="flex gap-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">Full Stack Developement</span>
          <span className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-full">AI</span>
          <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full">Automation</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfilePicture;
