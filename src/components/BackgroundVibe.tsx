import React from 'react';

export const BackgroundVibe: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Dark Slate/Forest Canvas */}
      <div className="absolute inset-0 bg-[#050e09]" />

      {/* 2. Soft, Static Subtle Ambient Depth (No erratic moving blobs) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.05)_0%,_rgba(16,185,129,0.04)_40%,_transparent_75%)] blur-2xl" />
      <div className="absolute top-[45%] left-1/4 w-[700px] h-[600px] bg-[radial-gradient(circle,_rgba(6,35,24,0.4)_0%,_transparent_70%)] blur-3xl" />

      {/* 3. The "Vibecoder" Technical Grid (Very Low Opacity, Architectural Framing) */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212, 175, 55, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 25%, #000 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 25%, #000 40%, transparent 95%)'
        }}
      />

      {/* 4. Precision 24px Dot Matrix Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.7) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 85% 75% at 50% 30%, #000 35%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 30%, #000 35%, transparent 90%)'
        }}
      />

      {/* 5. Linear / Vercel Tactile Noise (2.5% opacity, eliminating banding) */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
    </div>
  );
};

export default BackgroundVibe;
