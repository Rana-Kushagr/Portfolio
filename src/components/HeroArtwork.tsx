import React from 'react';
import PixelSwap from './reactbits/PixelSwap';
import { Compass, Terminal } from 'lucide-react';
import DecryptedText from './reactbits/DecryptedText';

export const HeroArtwork: React.FC = () => {
  const [pixelSize, setPixelSize] = React.useState(48);

  React.useEffect(() => {
    const updateSize = () => {
      setPixelSize(window.innerWidth < 640 ? 72 : 48);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto">
      <PixelSwap
        pixelSize={pixelSize}
        gap={2}
        pixelRadius={12}
        pixelScale={0.3}
        duration={1200}
        pixelDuration={400}
        pattern="diagonal"
        fade={true}
        trigger="click"
        aspectRatio="16 / 10"
        className="cursor-target rounded-2xl border border-[#d4af37]/35 bg-[#061d14] shadow-2xl shadow-[#04140e]/90 overflow-hidden hover:border-[#d4af37]/60 transition-colors"
        firstContent={
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#061d14] via-[#092b1e] to-[#04140e] text-[#fbf8f1] select-none relative overflow-hidden">
            {/* Geometric Gold Hairline Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#d4af37]/15 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-[#d4af37]/25 rounded-full pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between font-mono text-[11px] text-[#d4af37] tracking-wider uppercase z-10">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
                MEERUT CANTT // 28.98° N
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[10px]">
                CREST // 2026
              </span>
            </div>

            {/* Center Monogram Crest */}
            <div className="my-auto text-center z-10">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#d4af37] via-[#c29c2d] to-[#8c6b12] p-[1.5px] shadow-lg shadow-[#d4af37]/20 flex items-center justify-center">
                <div className="w-full h-full bg-[#061d14] rounded-[14px] flex items-center justify-center">
                  <span className="font-mono text-xl font-black text-[#d4af37]">KR</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#fbf8f1] mb-1">
                <DecryptedText
                  text="Kushagr Rana"
                  speed={40}
                  animateOn="view"
                  className="font-bold text-[#fbf8f1] tracking-tight"
                />
              </h3>
              <p className="font-mono text-xs text-[#a3b8aa]">
                Handcrafted Software Architecture
              </p>
            </div>

            {/* Footer Prompt */}
            <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#789382] border-t border-[#d4af37]/15 pt-3 z-10">
              <span className="text-[#a3b8aa]">ZERO PAGE BUILDERS</span>
              <span className="text-[#d4af37] font-semibold animate-pulse">
                [ CLICK TO PIXEL-SWAP BLUEPRINT ]
              </span>
            </div>
          </div>
        }
        secondContent={
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#082419] via-[#051811] to-[#03110b] text-[#fbf8f1] select-none relative overflow-hidden">
            {/* Architectural Grid */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* Top Bar */}
            <div className="flex items-center justify-between font-mono text-[11px] text-[#d4af37] tracking-wider uppercase z-10">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#d4af37]" />
                TECHNICAL SCHEMATIC
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[10px]">
                3 FLAGSHIP SYSTEMS
              </span>
            </div>

            {/* Center Schematics List */}
            <div className="space-y-2.5 my-auto z-10">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/35 border border-[#d4af37]/20 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <span className="font-bold text-[#fbf8f1]">RakshaSetu</span>
                  <span className="text-[10px] font-mono text-[#a3b8aa]">Offline First-Aid Protocol</span>
                </div>
                <span className="font-mono text-[10px] text-[#d4af37]">PWA · TS</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/35 border border-[#d4af37]/20 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <span className="font-bold text-[#fbf8f1]">Ahaar Amrit</span>
                  <span className="text-[10px] font-mono text-[#a3b8aa]">Ayurvedic Nutrition Engine</span>
                </div>
                <span className="font-mono text-[10px] text-[#d4af37]">React 19</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/35 border border-[#d4af37]/20 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <span className="font-bold text-[#fbf8f1]">FocusFlow</span>
                  <span className="text-[10px] font-mono text-[#a3b8aa]">Productivity & Audio Worker</span>
                </div>
                <span className="font-mono text-[10px] text-[#d4af37]">WebGL</span>
              </div>
            </div>

            {/* Bottom Prompt */}
            <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#789382] border-t border-[#d4af37]/15 pt-3 z-10">
              <span>FIRST PRINCIPLES CODE</span>
              <span className="text-[#d4af37] font-semibold animate-pulse">
                [ CLICK TO REVERT CREST ]
              </span>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default HeroArtwork;
