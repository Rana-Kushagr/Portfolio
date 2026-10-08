import React from 'react';

export const BackgroundVibe: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Royal Green Canvas */}
      <div className="absolute inset-0 bg-[#04140e]" />

      {/* 2. Deep Ambient Radial Glows (Imperial Gold & Forest Emerald) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[750px] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.08)_0%,_rgba(6,29,20,0.6)_45%,_transparent_75%)] blur-2xl" />
      <div className="absolute bottom-0 right-1/4 w-[750px] h-[750px] bg-[radial-gradient(circle,_rgba(11,43,31,0.5)_0%,_transparent_70%)] blur-3xl" />
      <div className="absolute top-[45%] -left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(16,185,129,0.05)_0%,_transparent_70%)] blur-3xl" />

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
