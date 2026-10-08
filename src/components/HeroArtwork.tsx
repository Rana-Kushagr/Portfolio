import React from 'react';
import PixelSwap from './reactbits/PixelSwap';
import { Compass, Terminal, Shield, HeartPulse, Focus } from 'lucide-react';
import DecryptedText from './reactbits/DecryptedText';

export const HeroArtwork: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <PixelSwap
        pixelSize={48}
        gap={2}
        pixelRadius={12}
        pixelScale={0.3}
        duration={1200}
        pixelDuration={400}
        pattern="diagonal"
        fade={true}
        trigger="click"
        aspectRatio="16 / 10"
        className="cursor-target rounded-2xl border border-white/15 bg-[#0a0d18] shadow-2xl shadow-black/80 overflow-hidden hover:border-white/25 transition-colors"
        firstContent={
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0e1222] via-[#090c16] to-[#060810] text-[#f8fafc] select-none relative overflow-hidden">
            {/* Prismatic ambient glows inside card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-dashed border-sky-400/20 rounded-full pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between font-mono text-[11px] text-sky-400 tracking-wider uppercase z-10">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                MEERUT CANTT // 28.98° N
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] text-amber-300 font-semibold">
                ID BADGE // 2026
              </span>
            </div>

            {/* Center Monogram Crest */}
            <div className="my-auto text-center z-10">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-500 to-rose-500 p-[2px] shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                <div className="w-full h-full bg-[#0a0d18] rounded-[14px] flex items-center justify-center">
                  <span className="font-mono text-xl font-black bg-gradient-to-r from-sky-300 via-white to-rose-300 bg-clip-text text-transparent">
                    KR
                  </span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1">
                <DecryptedText
                  text="Kushagr Rana"
                  speed={40}
                  animateOn="view"
                  className="font-bold text-white tracking-tight"
                />
              </h3>
              <p className="font-mono text-xs text-slate-400">
                Independent Software Architecture
              </p>
            </div>

            {/* Footer Prompt */}
            <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-slate-400 border-t border-white/10 pt-3 z-10">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                HANDCRAFTED CODE
              </span>
              <span className="text-sky-400 font-semibold animate-pulse">
                [ CLICK TO PIXEL-SWAP BLUEPRINT ]
              </span>
            </div>
          </div>
        }
        secondContent={
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0c0f1c] via-[#090b14] to-[#06070e] text-[#f8fafc] select-none relative overflow-hidden">
            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* Top Bar */}
            <div className="flex items-center justify-between font-mono text-[11px] text-sky-400 tracking-wider uppercase z-10">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                SYSTEM BLUEPRINTS
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-[10px] text-sky-300">
                3 FLAGSHIP ENGINES
              </span>
            </div>

            {/* Multi-Color System Nodes */}
            <div className="space-y-2.5 my-auto z-10">
              {/* RakshaSetu Node (Coral / Rose) */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-rose-950/20 border border-rose-500/25 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                  <span className="font-bold text-white">RakshaSetu</span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Offline First-Aid SOS
                  </span>
                </div>
                <span className="font-mono text-[10px] text-rose-300 font-semibold px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">
                  PWA · TS
                </span>
              </div>

              {/* Ahaar Amrit Node (Emerald / Amber) */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/25 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-white">Ahaar Amrit</span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Ayurvedic Nutrition
                  </span>
                </div>
                <span className="font-mono text-[10px] text-emerald-300 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  React 19
                </span>
              </div>

              {/* FocusFlow Node (Indigo / Cyan) */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-sky-950/20 border border-sky-500/25 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span className="font-bold text-white">FocusFlow</span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Cognitive Workspace
                  </span>
                </div>
                <span className="font-mono text-[10px] text-sky-300 font-semibold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                  WebGL
                </span>
              </div>
            </div>

            {/* Bottom Prompt */}
            <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-slate-400 border-t border-white/10 pt-3 z-10">
              <span className="text-amber-400">FIRST PRINCIPLES CODE</span>
              <span className="text-sky-400 font-semibold animate-pulse">
                [ CLICK TO REVERT BADGE ]
              </span>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default HeroArtwork;
