import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FoldText from './reactbits/FoldText';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';

interface CoverScreenProps {
  onEnter: () => void;
  isOpen: boolean;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({ onEnter, isOpen }) => {
  const [isExiting, setIsExiting] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setIsExiting(false);
    }
  }, [isOpen]);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 700);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 1.04 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] px-4 text-center select-none overflow-hidden"
        >
          {/* Ambient background glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#07090e]/60 to-[#07090e] pointer-events-none" />
          
          {/* Subtle grid backdrop */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 backdrop-blur-md text-xs font-medium text-indigo-300 tracking-wide uppercase mb-8 shadow-lg shadow-indigo-950/50"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>Interactive Portfolio Experience</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-1" />
          </motion.div>

          {/* 3D Fold Text Component from React Bits */}
          <div className="relative z-10 max-w-4xl mx-auto px-2 mb-6">
            <FoldText
              text="Welcome to the Portfolio of Kushagr Rana"
              splitBy="word"
              hinge="top"
              trigger="mount"
              duration={1.2}
              stagger={0.12}
              perspective={800}
              creaseShading={0.65}
              fontSize="clamp(2rem, 5.5vw, 4.25rem)"
              fontWeight={800}
              color="#f8fafc"
              className="font-bold tracking-tight drop-shadow-2xl leading-[1.1]"
            />
          </div>

          {/* Subtitle & identity pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="relative z-10 flex flex-col items-center gap-4 max-w-xl mx-auto mb-10"
          >
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
              16-Year-Old Independent Software Builder
              <span className="block text-sm text-slate-500 mt-1">
                Class 10 • Army Public School Meerut • India 🇮🇳
              </span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-slate-400">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 font-mono">React 19</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 font-mono">TypeScript</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 font-mono">WebGL / OGL</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 font-mono">GSAP Animations</span>
            </div>
          </motion.div>

          {/* Enter Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="relative z-10 flex flex-col items-center gap-3"
          >
            <button
              onClick={handleEnter}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 shadow-xl shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-white/10"
            >
              <Terminal className="w-4 h-4 text-indigo-200 transition-transform group-hover:rotate-12" />
              <span>Enter Workspace</span>
              <ArrowRight className="w-4 h-4 text-indigo-200 transition-transform group-hover:translate-x-1" />
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-0 group-hover:opacity-40 blur transition-opacity -z-10" />
            </button>
            <span className="text-xs text-slate-500 font-mono tracking-wider">
              Click to launch the interactive workspace
            </span>
          </motion.div>

          {/* Bottom credit info */}
          <div className="absolute bottom-6 left-0 right-0 text-center text-xs text-slate-600 font-mono">
            Handcrafted with React Bits & First Principles • 2026
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoverScreen;
