import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, Mail, Menu, X, RotateCcw } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

interface NavbarProps {
  onReopenCover: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReopenCover }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/80 backdrop-blur-xl border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="group flex items-center gap-2.5 font-bold tracking-tight text-white text-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-[1px] shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-colors">
                <span className="font-mono text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-emerald-300 group-hover:text-white transition-colors">
                  KR
                </span>
              </div>
            </div>
            <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">
              Kushagr<span className="text-indigo-400">.</span>
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Build</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          <button
            onClick={() => scrollTo('hero')}
            className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('works')}
            className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors"
          >
            Works
          </button>
          <button
            onClick={() => scrollTo('stack')}
            className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors"
          >
            Stack
          </button>
          <button
            onClick={() => scrollTo('feedback')}
            className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors"
          >
            Feedback
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onReopenCover}
            title="Replay intro cover screen"
            className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Replay intro"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <a
            href="https://github.com/rana-kushagr"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#07090e]/95 backdrop-blur-2xl border-b border-white/10 space-y-2">
          <button
            onClick={() => scrollTo('hero')}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5"
          >
            About & Bio
          </button>
          <button
            onClick={() => scrollTo('works')}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5"
          >
            Selected Works
          </button>
          <button
            onClick={() => scrollTo('stack')}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5"
          >
            Technology Stack
          </button>
          <button
            onClick={() => scrollTo('feedback')}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5"
          >
            Recruiter Feedback
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5"
          >
            Contact
          </button>
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <a
              href="https://github.com/rana-kushagr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
