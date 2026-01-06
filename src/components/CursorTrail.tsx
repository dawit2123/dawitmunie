import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Trail {
  id: number;
  x: number;
  y: number;
}

const CursorTrail = () => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail: Trail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
      };

      setTrails((prev) => [...prev, newTrail].slice(-20));
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Clean up old trails
  useEffect(() => {
    const cleanup = setInterval(() => {
      setTrails((prev) => prev.slice(-15));
    }, 50);

    return () => clearInterval(cleanup);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.img
            key={trail.id}
            src="/favicon.ico"
            alt="trail"
            initial={{
              opacity: 0.8,
              scale: 1,
              x: trail.x - 10,
              y: trail.y - 10
            }}
            animate={{
              opacity: 0,
              scale: 0.2,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            className="absolute w-5 h-5 rounded-full object-cover pointer-events-none"
            style={{
              boxShadow: `0 0 ${10 + index}px hsl(var(--primary) / 0.3)`,
              left: 0,
              top: 0,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main cursor glow */}
      {trails.length > 0 && (
        <motion.img
          src="/favicon.ico"
          alt="cursor"
          className="absolute w-8 h-8 rounded-full pointer-events-none object-cover z-50"
          animate={{
            x: trails[trails.length - 1]?.x - 16 || 0,
            y: trails[trails.length - 1]?.y - 16 || 0,
          }}
          transition={{ duration: 0 }}
          style={{
            boxShadow: '0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.2)',
          }}
        />
      )}
    </div>
  );
};

export default CursorTrail;
