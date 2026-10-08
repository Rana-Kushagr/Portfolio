import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundVibe: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Layer: Deep Royal Green Ambient Canvas */}
      <div className="absolute inset-0 bg-[#04140e]" />

      {/* 2. Option 2: Ambient Glowing Glassmorphism Orbs (Emerald + Imperial Gold) */}
      {/* Hero Top Halo */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.65, 0.85, 0.65]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[600px] sm:h-[750px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.09)_0%,_rgba(16,185,129,0.06)_35%,_rgba(6,29,20,0.6)_60%,_transparent_75%)] blur-[140px] sm:blur-[180px]"
      />

      {/* Mid Left Emerald Nebula (Showcase Section) */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
          opacity: [0.45, 0.65, 0.45]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-[35%] -left-[10%] w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.08)_0%,_rgba(6,44,30,0.5)_45%,_transparent_70%)] blur-[130px] sm:blur-[170px]"
      />

      {/* Lower Right Deep Forest Glow (Philosophy & Feedback Section) */}
      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 30, 0],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-[65%] -right-[10%] w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full bg-[radial-gradient(circle,_rgba(212,175,55,0.05)_0%,_rgba(12,57,39,0.5)_40%,_transparent_70%)] blur-[140px] sm:blur-[190px]"
      />

      {/* 3. Option 1: The "Vibecoder" Blueprint Grid Lines & Dot Matrix Pattern */}
      {/* Precision 56px Hairline Grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212, 175, 55, 0.65) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.65) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 85% 75% at 50% 30%, #000 30%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 30%, #000 30%, transparent 95%)'
        }}
      />

      {/* 28px Precision Dot Matrix for Engineering Texture */}
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.8) 1.2px, transparent 0)
          `,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 35%, #000 25%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 35%, #000 25%, transparent 90%)'
        }}
      />

      {/* 4. Option 3: Linear / Vercel Ultra-Fine Tactile Noise & Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      {/* 5. Vignette Frame: Soft edge falloff to ensure pure focus on content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 55%, rgba(4, 20, 14, 0.65) 100%)'
        }}
      />
    </div>
  );
};

export default BackgroundVibe;
