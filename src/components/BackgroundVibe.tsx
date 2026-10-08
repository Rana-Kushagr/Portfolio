import React from 'react';

export const BackgroundVibe: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform',
        contain: 'strict'
      }}
      aria-hidden="true"
    >
      {/* 1. Base Royal Green Canvas */}
      <div className="absolute inset-0 bg-[#04140e]" />

      {/* 2. Deep Ambient Radial Glows (Imperial Gold & Forest Emerald) - Pure smooth CSS gradients without GPU-heavy blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] lg:w-[1100px] h-[500px] sm:h-[650px] lg:h-[750px] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.07)_0%,_rgba(6,29,20,0.55)_35%,_rgba(4,20,14,0.2)_60%,_transparent_80%)]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] sm:w-[650px] lg:w-[750px] h-[400px] sm:h-[650px] lg:h-[750px] bg-[radial-gradient(circle,_rgba(11,43,31,0.45)_0%,_rgba(6,29,20,0.2)_45%,_transparent_75%)]" />
      <div className="absolute top-[45%] -left-[10%] w-[350px] sm:w-[500px] lg:w-[600px] h-[350px] sm:h-[500px] lg:h-[600px] bg-[radial-gradient(circle,_rgba(16,185,129,0.045)_0%,_rgba(6,29,20,0.15)_40%,_transparent_70%)]" />

      {/* 3. Architectural Hairline Grid in Gold */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* 4. Precision 24px Dot Matrix */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.75) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
};

export default BackgroundVibe;
