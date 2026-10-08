import React, { useState } from 'react';
import { ArrowDown, Mail, Copy, Check, Terminal, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

interface HeroSectionProps {
  onScrollToWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToWork }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kushagrrana7345@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct, Honest Identity Hierarchy */}
        <div className="lg:col-span-8 space-y-7">
          {/* 1. Small Label: KUSHAGRA RANA / FRONTEND DEVELOPER */}
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-[#082419] text-[#d4af37] border border-[#d4af37]/30 tracking-wider font-semibold">
              KUSHAGRA RANA / FRONTEND DEVELOPER
            </span>
            <span className="px-3 py-1 rounded-full bg-[#061d14] text-[#a3b8aa] border border-white/5">
              Meerut Cantt, India 🇮🇳
            </span>
          </div>

          {/* 2. Huge Heading: I build things for the web. */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#fbf8f1] tracking-tight leading-[1.08]">
            I build things <br />
            <span className="text-[#d4af37]">for the web.</span>
          </h1>

          {/* 3. Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#fbf8f1]/80 max-w-2xl leading-relaxed font-normal">
            Student developer exploring frontend development, product design, and AI-assisted development. I like turning ideas into interfaces that actually feel usable.
          </p>

          {/* 4. Action Buttons: [View my work] [GitHub] [Copy Email] */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onScrollToWork}
              className="cursor-target inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#d4af37] hover:bg-[#e5c361] text-[#04140e] font-bold text-sm tracking-wide uppercase transition-all shadow-[0_4px_16px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_22px_rgba(212,175,55,0.4)] hover:scale-[1.02]"
            >
              <span>View my work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href="https://github.com/Rana-Kushagr"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#071811] hover:bg-[#0b281d] text-[#fbf8f1] border border-[#d4af37]/30 font-semibold text-sm transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-[#d4af37]" />
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#a3b8aa]" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="cursor-target inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#071811] hover:bg-[#0b281d] text-[#a3b8aa] hover:text-[#fbf8f1] border border-white/10 text-xs font-mono transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#10b981]" />
                  <span className="text-[#10b981]">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#d4af37]" />
                  <span>kushagrrana7345@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* 5. Very small learning badge: Currently learning → React / UI Engineering */}
          <div className="pt-3 flex items-center gap-2 font-mono text-xs text-[#a3b8aa]">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span>Currently learning</span>
            <span className="text-[#d4af37]">→ React / UI Engineering & Component Architecture</span>
          </div>
        </div>

        {/* Right Column: Workshop Developer Notebook Card */}
        <div className="lg:col-span-4 w-full">
          <div className="rounded-2xl bg-[#06150f] border border-[#d4af37]/25 p-6 space-y-5 shadow-2xl relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#d4af37]/15 pb-3 font-mono text-xs text-[#a3b8aa]">
              <span className="flex items-center gap-1.5 text-[#d4af37]">
                <Terminal className="w-3.5 h-3.5" />
                WORKSHOP NOTEBOOK
              </span>
              <span>2026 // v1.4</span>
            </div>

            {/* Quick Specs */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-[#a3b8aa]">ROLE</span>
                <span className="text-[#fbf8f1] font-semibold">Student Developer (16 y/o)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-[#a3b8aa]">SCHOOL</span>
                <span className="text-[#fbf8f1]">APS Meerut Cantt (Class 10)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-[#a3b8aa]">ACTIVE PROJECTS</span>
                <span className="text-[#d4af37] font-bold">3 Live Systems</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-[#a3b8aa]">DEV PHILOSOPHY</span>
                <span className="text-[#fbf8f1]">First Principles & Practicality</span>
              </div>
            </div>

            {/* Quote */}
            <div className="p-3.5 rounded-xl bg-[#030f0a] border border-[#d4af37]/15 text-xs text-[#fbf8f1]/80 font-mono space-y-1">
              <span className="text-[#d4af37] block font-semibold text-[11px] uppercase tracking-wider">
                // Developer Note
              </span>
              <p className="text-xs text-[#a3b8aa] font-sans leading-relaxed">
                "I focus on understanding every layer I touch. No copy-pasting code without knowing why it works."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
