import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Shield, ArrowRight } from 'lucide-react';

interface LockInScreenProps {
  isOpen: boolean;
  onUnlocked: () => void;
}

export const LockInScreen: React.FC<LockInScreenProps> = ({ isOpen, onUnlocked }) => {
  const [progress, setProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [istTime, setIstTime] = useState('--:--:--');

  // Real-time IST Clock for Meerut Cantt
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        setIstTime(timeStr);
      } catch {
        setIstTime('20:00:00');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Calibration progress counter
  useEffect(() => {
    if (!isOpen) return;
    setIsExiting(false);
    setIsLocked(false);
    setProgress(0);

    const start = Date.now();
    const duration = 1200; // 1.2 seconds smooth calibration

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setIsLocked(true);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onUnlocked();
          }, 600);
        }, 300);
      }
    }, 24);

    return () => clearInterval(timer);
  }, [isOpen, onUnlocked]);

  const handleManualSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onUnlocked();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 1.02 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#080a10] text-[#f8fafc] p-6 sm:p-10 select-none overflow-hidden"
        >
          {/* Prismatic ambient depth */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(56,189,248,0.1)_0%,_transparent_70%)] blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(244,63,94,0.08)_0%,_transparent_70%)] blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '32px 32px'
              }}
            />
          </div>

          {/* Top Bar: Telemetry & Manual Skip */}
          <div className="relative z-10 flex items-center justify-between font-mono text-xs text-sky-400 tracking-widest uppercase">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>MEERUT CANTT // 28.9845° N · 77.7064° E</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-slate-400">IST {istTime}</span>
              <button
                onClick={handleManualSkip}
                className="cursor-target px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/15 text-slate-200 hover:text-white text-[11px] font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>SKIP TO WORKSPACE</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Center Lock-In Target Reticle */}
          <div className="relative z-10 flex flex-col items-center justify-center max-w-lg mx-auto w-full text-center my-auto">
            {/* Target Reticle Icon */}
            <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
              {/* Outer rotating hairline ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-sky-400/40"
              />
              {/* Corner brackets */}
              <div className="absolute inset-2 border border-white/40 rounded-lg" />
              {/* Center icon */}
              <Target
                className={`w-8 h-8 transition-colors duration-300 ${
                  isLocked ? 'text-white scale-110' : 'text-sky-400'
                }`}
              />
              {/* Ping circle when locked */}
              {isLocked && (
                <div className="absolute inset-0 rounded-full bg-sky-400/25 animate-ping pointer-events-none" />
              )}
            </div>

            {/* Sub-status */}
            <p className="font-mono text-[11px] sm:text-xs text-sky-400 tracking-[0.25em] uppercase mb-3">
              {isLocked ? '● TARGET LOCK ENGAGED' : 'INITIALIZING SYSTEM CALIBRATION'}
            </p>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
              KUSHAGR RANA
            </h1>

            {/* Hairline Multi-Color Progress Rail */}
            <div className="w-full max-w-xs mb-4">
              <div className="h-[3px] w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-rose-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Numerical Progress Count */}
            <div className="flex items-center justify-between w-full max-w-xs font-mono text-xs text-slate-400">
              <span>CALIBRATING</span>
              <span className="text-sky-400 font-bold">{progress.toString().padStart(2, '0')}%</span>
            </div>
          </div>

          {/* Bottom Telemetry Note */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-slate-400 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              <span>HANDCRAFTED SOFTWARE // ZERO PAGE BUILDERS</span>
            </div>
            <div className="mt-2 sm:mt-0 text-slate-400">
              CLASS 10 · ARMY PUBLIC SCHOOL · MEERUT
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LockInScreen;
