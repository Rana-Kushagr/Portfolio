import React from 'react';
import { Sparkles, Terminal, CheckCircle2, Eye, Wrench, Lightbulb } from 'lucide-react';

export const PhilosophyNotes: React.FC = () => {
  return (
    <section id="notes" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#d4af37]/15">
      {/* Section Header */}
      <div className="space-y-2 mb-10">
        <div className="flex items-center gap-2 font-mono text-xs text-[#d4af37] tracking-wider uppercase">
          <span className="px-2 py-0.5 rounded bg-[#0a261a] border border-[#d4af37]/30">03</span>
          <span>INTENTIONS & WORKSHOP NOTES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fbf8f1] tracking-tight">
          Things I genuinely enjoy building.
        </h2>
        <p className="text-sm sm:text-base text-[#fbf8f1]/70 max-w-2xl leading-relaxed">
          The principles and questions that guide how I approach software, design, and code.
        </p>
      </div>

      {/* 3 Core Principles from the critique */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Note 1 */}
        <div className="rounded-2xl bg-[#07150f] border border-[#d4af37]/20 p-6 space-y-4 hover:border-[#d4af37]/45 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#04140e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <Eye className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs text-[#d4af37] tracking-wider uppercase">
              01 // SIMPLICITY
            </span>
          </div>

          <h3 className="text-lg font-bold text-[#fbf8f1] tracking-tight">
            Interfaces that feel obvious.
          </h3>
          <p className="text-xs sm:text-sm text-[#fbf8f1]/75 leading-relaxed">
            If a user has to stop and think about where to click or how something works, the interface has failed. Good frontend gets out of the way and lets people focus on their intent.
          </p>
        </div>

        {/* Note 2 */}
        <div className="rounded-2xl bg-[#07150f] border border-[#d4af37]/20 p-6 space-y-4 hover:border-[#d4af37]/45 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#04140e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <Wrench className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs text-[#d4af37] tracking-wider uppercase">
              02 // PRACTICAL UTILITY
            </span>
          </div>

          <h3 className="text-lg font-bold text-[#fbf8f1] tracking-tight">
            Small tools that solve annoying problems.
          </h3>
          <p className="text-xs sm:text-sm text-[#fbf8f1]/75 leading-relaxed">
            Like study timers that don't force you to sign up with Google, or emergency guides that actually load when network connectivity completely drops in remote areas.
          </p>
        </div>

        {/* Note 3 */}
        <div className="rounded-2xl bg-[#07150f] border border-[#d4af37]/20 p-6 space-y-4 hover:border-[#d4af37]/45 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#04140e] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <Lightbulb className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs text-[#d4af37] tracking-wider uppercase">
              03 // EXPERIMENTATION
            </span>
          </div>

          <h3 className="text-lg font-bold text-[#fbf8f1] tracking-tight">
            Experiments that test new ideas.
          </h3>
          <p className="text-xs sm:text-sm text-[#fbf8f1]/75 leading-relaxed">
            Curious prototypes that test what browsers can do with CSS math, web audio, and lightweight motion—learning how rendering engines handle real interactions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyNotes;
