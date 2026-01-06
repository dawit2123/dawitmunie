import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedDeliveryProps {
  faceSrc?: string;
  isActive: boolean;
  onComplete: () => void;
}

type AnimationState = 'IDLE' | 'RUNNING' | 'DELIVERED';

const AnimatedDelivery: React.FC<AnimatedDeliveryProps> = ({
  faceSrc = '/favicon.ico',
  isActive,
  onComplete
}) => {
  const [animState, setAnimState] = useState<AnimationState>('IDLE');

  // React to prop change
  useEffect(() => {
    if (isActive && animState === 'IDLE') {
      setAnimState('RUNNING');
    }
  }, [isActive, animState]);

  // Logic to handle state transitions
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (animState === 'DELIVERED') {
      // Show delivered state for 2 seconds then complete
      timeout = setTimeout(() => {
        setAnimState('IDLE');
        onComplete();
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [animState, onComplete]);

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const limbTransition = { duration: 0.6, repeat: Infinity, ease: "linear" };
  const staticTransition = { duration: 0 };

  const leftLegVariants = {
    run: { d: ["M 50 60 L 30 90", "M 50 60 L 70 90", "M 50 60 L 30 90"], transition: limbTransition },
    idle: { d: "M 50 60 L 50 90", transition: staticTransition }
  } as any;

  const rightLegVariants = {
    run: { d: ["M 50 60 L 70 90", "M 50 60 L 30 90", "M 50 60 L 70 90"], transition: limbTransition },
    idle: { d: "M 50 60 L 50 90", transition: staticTransition }
  } as any;

  const leftArmVariants = {
    run: { d: ["M 50 35 L 70 50", "M 50 35 L 30 50", "M 50 35 L 70 50"], transition: limbTransition },
    idle: { d: "M 50 35 L 50 55", transition: staticTransition }
  } as any;

  const rightArmVariants = {
    run: { d: ["M 50 35 L 30 50", "M 50 35 L 70 50", "M 50 35 L 30 50"], transition: limbTransition },
    idle: { d: "M 50 35 L 50 55", transition: staticTransition }
  } as any;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="delivery-overlay pointer-events-none fixed inset-0 z-50 flex items-end pb-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="runner-track w-full relative h-[150px]">
            {/* Runner Container */}
            <motion.div
              className="absolute bottom-8 z-10"
              initial={{ left: "-100px" }}
              animate={{
                left: animState === 'RUNNING' ? "calc(100% - 140px)" : animState === 'DELIVERED' ? "calc(100% - 140px)" : "-100px",
              }}
              transition={{
                left: { duration: 4, ease: "linear" }
              }}
              onAnimationComplete={(definition: any) => {
                if (animState === 'RUNNING') {
                  setAnimState('DELIVERED');
                }
              }}
              style={{ width: 100, height: 120 }}
            >
              <svg width="100" height="120" viewBox="0 0 100 120" className="overflow-visible">
                {/* Stick Body */}
                <motion.line x1="50" y1="30" x2="50" y2="60" stroke="#fff" strokeWidth="3" strokeLinecap="round" />

                {/* Legs */}
                <motion.path
                  variants={leftLegVariants}
                  animate={animState === 'RUNNING' ? "run" : "idle"}
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <motion.path
                  variants={rightLegVariants}
                  animate={animState === 'RUNNING' ? "run" : "idle"}
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Arms */}
                <motion.path
                  variants={leftArmVariants}
                  animate={animState === 'RUNNING' ? "run" : "idle"}
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <motion.path
                  variants={rightArmVariants}
                  animate={animState === 'RUNNING' ? "run" : "idle"}
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Head (Favicon) */}
                <foreignObject x="30" y="0" width="40" height="40">
                  <div className="w-full h-full">
                    <img src={faceSrc} alt="face" className="w-full h-full object-contain" />
                  </div>
                </foreignObject>

                {/* Message Envelope */}
                <motion.g
                  animate={animState === 'RUNNING' ? { y: [0, -2, 0] } : { y: 0 }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                >
                  <rect x="70" y="45" width="20" height="14" rx="2" fill="white" />
                  <path d="M70 45 L80 52 L90 45" stroke="#e53935" strokeWidth="1" fill="none" />
                </motion.g>
              </svg>
            </motion.div>

            {/* Success Popup */}
            <AnimatePresence>
              {animState === 'DELIVERED' && (
                <motion.div
                  className="absolute right-8 bottom-24 bg-white text-black px-3 py-1 rounded-lg font-bold text-sm shadow-xl z-20"
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: -10 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  Sent!
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Target Gmail Icon */}
            <motion.div
              className="gmail-target absolute right-10 bottom-8 w-16 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg z-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6L12 13L22 6V18H2V6Z" fill="white" stroke="#D14836" strokeWidth="2" strokeLinejoin="round" />
                <path d="M2 6L12 13L22 6" stroke="#D14836" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedDelivery;
