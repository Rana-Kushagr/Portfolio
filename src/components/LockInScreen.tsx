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
        setIstTime('19:45:00');
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
    const duration = 1300; // 1.3 seconds smooth calibration

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
        }, 350);
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
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#04140e] text-[#fbf8f1] p-6 sm:p-10 select-none overflow-hidden"
        >
          {/* Subtle Royal Green & Gold ambient depth */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[radial-gradient(circle,_rgba(212,175,55,0.08)_0%,_rgba(11,43,31,0.4)_50%,_transparent_75%)] blur-2xl" />
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)',
                backgroundSize: '28px 28px'
              }}
            />
          </div>

          {/* Top Bar: Telemetry & Manual Skip */}
          <div className="relative z-10 flex items-center justify-between font-mono text-xs text-[#d4af37]/70 tracking-widest uppercase">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              <span>MEERUT CANTT // 28.9845° N · 77.7064° E</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">IST {istTime}</span>
              <button
                onClick={handleManualSkip}
                className="cursor-target px-3 py-1 rounded-md bg-[#d4af37]/10 hover:bg-[#d4af37]/20 border border-[#d4af37]/30 text-[#d4af37] text-[11px] font-semibold transition-colors flex items-center gap-1.5"
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
                className="absolute inset-0 rounded-full border border-dashed border-[#d4af37]/30"
              />
              {/* Corner brackets */}
              <div className="absolute inset-2 border border-[#d4af37]/50 rounded-lg" />
              {/* Center icon */}
              <Target className={`w-8 h-8 transition-colors duration-300 ${isLocked ? 'text-[#fbf8f1] scale-110' : 'text-[#d4af37]'}`} />
              {/* Ping circle when locked */}
              {isLocked && (
                <div className="absolute inset-0 rounded-full bg-[#d4af37]/20 animate-ping pointer-events-none" />
              )}
            </div>

            {/* Sub-status */}
            <p className="font-mono text-[11px] sm:text-xs text-[#d4af37] tracking-[0.25em] uppercase mb-3">
              {isLocked ? '● TARGET LOCK ENGAGED' : 'INITIALIZING SYSTEM TRACE'}
            </p>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl font-black text-[#fbf8f1] tracking-tight mb-6">
              KUSHAGR RANA
            </h1>

            {/* Hairline Progress Rail */}
            <div className="w-full max-w-xs mb-4">
              <div className="h-[2px] w-full bg-[#0a291d] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#f5e6a3]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Numerical Progress Count */}
            <div className="flex items-center justify-between w-full max-w-xs font-mono text-xs text-[#a3b8aa]">
              <span>CALIBRATING</span>
              <span className="text-[#d4af37] font-bold">{progress.toString().padStart(2, '0')}%</span>
            </div>
          </div>

          {/* Bottom Telemetry Note */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-[#789382] pt-4 border-t border-[#d4af37]/10">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>HANDCRAFTED SOFTWARE // ZERO PAGE BUILDERS</span>
            </div>
            <div className="mt-2 sm:mt-0">
              CLASS 10 · ARMY PUBLIC SCHOOL · MEERUT
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LockInScreen;
