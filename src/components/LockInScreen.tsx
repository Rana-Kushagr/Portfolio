import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Zap } from 'lucide-react';

interface LockInScreenProps {
  isOpen: boolean;
  onUnlocked: () => void;
}

type ShutterPhase = 'slamming' | 'loading' | 'opening_midway' | 'stutter_recoil' | 'blasting_open' | 'unlocked';

export const LockInScreen: React.FC<LockInScreenProps> = ({ isOpen, onUnlocked }) => {
  const [phase, setPhase] = useState<ShutterPhase>('slamming');
  const [progress, setProgress] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [istTime, setIstTime] = useState('--:--:--');
  const hasTriggeredUnlock = useRef(false);

  // Live IST Clock
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
        setIstTime('20:20:00');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Main Mechanical Shutter Animation Sequence
  useEffect(() => {
    if (!isOpen) return;

    hasTriggeredUnlock.current = false;
    setPhase('slamming');
    setProgress(0);
    setIsShaking(false);

    // 1. Initial Impact Slam (at 320ms shutters collide)
    const slamTimer = setTimeout(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 280);
      setPhase('loading');
    }, 350);

    return () => clearTimeout(slamTimer);
  }, [isOpen]);

  // 2. Loading & Crack Expansion Phase
  useEffect(() => {
    if (phase !== 'loading') return;

    const start = Date.now();
    const duration = 1800; // 1.8s loading progress

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);

        // 3. Reached 100% -> Trigger Shutter Breakout
        // Phase 3A: Opens rapidly to midway
        setPhase('opening_midway');

        // Phase 3B: Hits midway jam / lag after 320ms, recoils slightly
        setTimeout(() => {
          setPhase('stutter_recoil');

          // Phase 3C: Sudden explosive blast open after 420ms lag stutter
          setTimeout(() => {
            setPhase('blasting_open');

            // Complete and unlock
            setTimeout(() => {
              if (!hasTriggeredUnlock.current) {
                hasTriggeredUnlock.current = true;
                setPhase('unlocked');
                onUnlocked();
              }
            }, 550);
          }, 450);
        }, 340);
      }
    }, 36);

    return () => clearInterval(interval);
  }, [phase, onUnlocked]);

  const handleManualSkip = () => {
    if (hasTriggeredUnlock.current) return;
    hasTriggeredUnlock.current = true;
    setPhase('blasting_open');
    setTimeout(() => {
      setPhase('unlocked');
      onUnlocked();
    }, 300);
  };

  if (!isOpen && phase === 'unlocked') return null;

  // Calculate shutter positions based on phase
  const getTopShutterY = () => {
    switch (phase) {
      case 'slamming':
        return 0; // Animating into position
      case 'loading':
        return 0; // Firmly shut
      case 'opening_midway':
        return '-40%'; // Stuck midway
      case 'stutter_recoil':
        return '-32%'; // Lagged backward recoil
      case 'blasting_open':
      case 'unlocked':
        return '-105%'; // Blasted off-screen
    }
  };

  const getBottomShutterY = () => {
    switch (phase) {
      case 'slamming':
        return 0;
      case 'loading':
        return 0;
      case 'opening_midway':
        return '40%';
      case 'stutter_recoil':
        return '32%';
      case 'blasting_open':
      case 'unlocked':
        return '105%';
    }
  };

  // Crack intensity based on progress (0% to 100%)
  const crackOpacity = progress < 25 ? 0 : Math.min(1, (progress - 25) / 50);
  const crackGlow = progress > 70 ? 1 : progress / 70;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={
            isShaking
              ? {
                  x: [0, -3, 3, -2, 2, 0],
                  y: [0, 4, -4, 2, -2, 0]
                }
              : {}
          }
          transition={{ duration: 0.28 }}
          style={{ transform: 'translateZ(0)' }}
          className="fixed inset-0 z-50 overflow-hidden select-none"
        >
          {/* Subtle Royal Green Depth behind the shutters when opening */}
          <div className="absolute inset-0 bg-[#04140e] pointer-events-none" />

          {/* TOP HYDRAULIC SHUTTER */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: getTopShutterY() }}
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
            transition={
              phase === 'slamming'
                ? { duration: 0.35, ease: [0.15, 0.85, 0.2, 1] }
                : phase === 'opening_midway'
                  ? { duration: 0.32, ease: [0.2, 0, 0, 1] }
                  : phase === 'stutter_recoil'
                    ? { duration: 0.22, ease: [0.36, 0, 0.66, -0.5] }
                    : { duration: 0.45, ease: [0.7, 0, 0.84, 0] }
            }
            className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-[#020b08] via-[#04140e] to-[#061d14] border-b-2 border-[#d4af37]/40 shadow-2xl flex flex-col justify-between p-6 sm:p-10 z-20"
          >
            {/* Architectural Grid & Plate Rivets */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)',
                backgroundSize: '36px 36px'
              }}
            />

            {/* Top Bar Telemetry */}
            <div className="relative z-10 flex items-center justify-between font-mono text-xs text-[#d4af37]/75 tracking-widest uppercase">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                <span>HEAVY BLAST SEAL // MEERUT CANTT 28.98° N</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline">IST {istTime}</span>
                <button
                  onClick={handleManualSkip}
                  className="cursor-target px-3 py-1 rounded bg-[#d4af37]/10 hover:bg-[#d4af37]/25 border border-[#d4af37]/30 text-[#d4af37] text-[11px] font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>OVERRIDE</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Shutter Warning Stencil */}
            <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#789382] tracking-[0.25em] uppercase border-t border-[#d4af37]/15 pt-2">
              <span>HYDRAULIC STATUS: {phase.toUpperCase().replace('_', ' ')}</span>
              <span>PRESSURE: {progress}%</span>
            </div>
          </motion.div>

          {/* BOTTOM HYDRAULIC SHUTTER */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: getBottomShutterY() }}
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
            transition={
              phase === 'slamming'
                ? { duration: 0.35, ease: [0.15, 0.85, 0.2, 1] }
                : phase === 'opening_midway'
                  ? { duration: 0.32, ease: [0.2, 0, 0, 1] }
                  : phase === 'stutter_recoil'
                    ? { duration: 0.22, ease: [0.36, 0, 0.66, -0.5] }
                    : { duration: 0.45, ease: [0.7, 0, 0.84, 0] }
            }
            className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-[#020b08] via-[#04140e] to-[#061d14] border-t-2 border-[#d4af37]/40 shadow-2xl flex flex-col justify-between p-6 sm:p-10 z-20"
          >
            {/* Grid background */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)',
                backgroundSize: '36px 36px'
              }}
            />

            {/* Bottom Telemetry Stencil */}
            <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#789382] tracking-[0.25em] uppercase border-b border-[#d4af37]/15 pb-2">
              <span>PORTFOLIO CORE PROTOCOL</span>
              <span>KUSHAGR RANA // CLASS 10 APS</span>
            </div>

            {/* Bottom Credits Footer */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-[#a3b8aa]">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>HANDCRAFTED FIRST-PRINCIPLES CODE</span>
              </div>
              <div className="text-[10px] text-[#789382] mt-1 sm:mt-0">
                ZERO PAGE BUILDERS // ZERO ARTIFICIAL SLOP
              </div>
            </div>
          </motion.div>

          {/* THE SEAM CRACK EFFECT BETWEEN SHUTTERS */}
          <div
            className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-30 transition-opacity duration-300"
            style={{ opacity: crackOpacity }}
          >
            {/* Glowing Fault Line Core */}
            <div
              className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#fbf8f1] to-transparent shadow-[0_0_24px_rgba(212,175,55,1)]"
              style={{
                filter: `drop-shadow(0 0 ${12 * crackGlow}px #d4af37)`
              }}
            />

            {/* Jagged Fissure SVG */}
            <svg
              className="w-full h-8 -mt-4 overflow-visible"
              viewBox="0 0 1200 32"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 16 L120 16 L150 10 L180 22 L210 14 L240 18 L320 16 L370 8 L420 24 L480 15 L530 19 L600 16 L670 12 L720 23 L780 13 L840 20 L910 16 L960 9 L1020 22 L1080 16 L1200 16"
                stroke="#d4af37"
                strokeWidth={progress > 60 ? '2.5' : '1.5'}
                strokeLinecap="round"
                className="opacity-90 animate-pulse"
              />
              <path
                d="M140 13 L170 5 L190 14 M410 20 L440 28 L460 17 M710 18 L735 27 L750 15 M950 11 L980 3 L1000 13"
                stroke="#fbf8f1"
                strokeWidth="1.2"
                strokeLinecap="round"
                className="opacity-75"
              />
            </svg>

            {/* Intense blinding back-glow through the cracks */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/35 to-transparent blur-md h-8 -mt-4 transition-all"
              style={{ opacity: crackGlow }}
            />
          </div>

          {/* CENTER MECHANICAL LOADING GAUGE / CIRCLE (Sits over the seam) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none flex flex-col items-center">
            {/* Shutter Warning / Status Tag */}
            <div className="font-mono text-[10px] text-[#d4af37] tracking-[0.25em] uppercase mb-3 bg-[#04140e]/95 px-3 py-1 rounded-full border border-[#d4af37]/30 shadow-lg flex items-center gap-1.5">
              {phase === 'opening_midway' || phase === 'stutter_recoil' ? (
                <>
                  <Zap className="w-3 h-3 text-[#d4af37] animate-ping" />
                  <span className="text-[#fbf8f1]">HYDRAULIC PRESSURE HICCUP</span>
                </>
              ) : progress >= 100 ? (
                <span>BREACH CONFIRMED</span>
              ) : (
                <span>SEAL INTEGRITY {progress < 50 ? 'NOMINAL' : 'COMPROMISED'}</span>
              )}
            </div>

            {/* The Circular Gauge */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#04140e] border-2 border-[#d4af37]/40 shadow-[0_0_35px_rgba(4,20,14,0.9)] flex items-center justify-center">
              {/* Outer Circular SVG Progress Arc */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 p-1">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="#082419"
                  strokeWidth="4"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="url(#goldGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * progress) / 100}
                  className="transition-all duration-75"
                />
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4af37" />
                    <stop offset="50%" stopColor="#fbf8f1" />
                    <stop offset="100%" stopColor="#c29c2d" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Rotating Hairline Reticle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                className="absolute inset-2 rounded-full border border-dashed border-[#d4af37]/25 pointer-events-none"
              />

              {/* Center Content: Percentage & Name */}
              <div className="text-center z-10">
                <div className="font-mono text-2xl sm:text-3xl font-black text-[#fbf8f1] tracking-tight">
                  {progress.toString().padStart(2, '0')}
                  <span className="text-xs text-[#d4af37] font-semibold">%</span>
                </div>
                <div className="font-mono text-[9px] text-[#a3b8aa] uppercase tracking-wider mt-0.5">
                  {progress >= 100 ? 'UNSEALING' : 'CALIBRATING'}
                </div>
              </div>
            </div>

            {/* Sub-label */}
            <div className="mt-4 font-mono text-[11px] text-[#a3b8aa] tracking-[0.2em] uppercase bg-[#04140e]/90 px-3.5 py-0.5 rounded-full border border-[#d4af37]/20">
              KUSHAGR RANA // BUILDER
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LockInScreen;
