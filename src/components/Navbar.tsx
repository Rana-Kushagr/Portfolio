import React, { useState, useEffect } from 'react';
import { Target, Mail, Menu, X } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

interface NavbarProps {
  onReopenLockIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReopenLockIn }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clock, setClock] = useState('--:--:--');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      try {
        setClock(
          new Date().toLocaleTimeString('en-US', {
            timeZone: 'Asia/Kolkata',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })
        );
      } catch {
        setClock('20:00:00');
      }
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
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
          ? 'bg-[#080a10]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram & Coordinates */}
        <div className="flex items-center gap-3.5">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="cursor-target group flex items-center gap-2.5 font-bold tracking-tight text-white text-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 via-indigo-500 to-rose-500 p-[1.5px] shadow-md shadow-indigo-500/20">
              <div className="w-full h-full bg-[#080a10] rounded-[10px] flex items-center justify-center group-hover:bg-[#101424] transition-colors">
                <span className="font-mono text-sm font-black bg-gradient-to-r from-sky-300 to-rose-300 bg-clip-text text-transparent">
                  KR
                </span>
              </div>
            </div>
            <span className="font-semibold text-white tracking-tight">
              Kushagr Rana<span className="text-sky-400">.</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-white/10 text-[11px] font-mono text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>MEERUT 28.98° N · {clock} IST</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          <button
            onClick={() => scrollTo('hero')}
            className="cursor-target px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-sky-400 transition-colors"
          >
            Profile
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="cursor-target px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-amber-400 transition-colors"
          >
            Philosophy
          </button>
          <button
            onClick={() => scrollTo('works')}
            className="cursor-target px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-rose-400 transition-colors"
          >
            Systems
          </button>
          <button
            onClick={() => scrollTo('stack')}
            className="cursor-target px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-emerald-400 transition-colors"
          >
            Stack
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="cursor-target px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-indigo-400 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* System Lock-in Replay */}
          <button
            onClick={onReopenLockIn}
            className="cursor-target hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-sky-300 bg-sky-950/30 hover:bg-sky-900/40 border border-sky-500/30 transition-colors shadow-sm"
            title="Re-run Target Lock-In Calibration"
          >
            <Target className="w-3.5 h-3.5" />
            <span>Lock-In</span>
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com/rana-kushagr"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Contact / Email CTA */}
          <a
            href="mailto:kushagrrana7345@gmail.com"
            className="cursor-target inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-500 to-rose-500 hover:brightness-110 shadow-md shadow-indigo-500/20 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Get In Touch</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-target md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-4 pt-2 bg-[#080a10]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => scrollTo('hero')}
              className="cursor-target text-left px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Profile
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="cursor-target text-left px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollTo('works')}
              className="cursor-target text-left px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Flagship Systems
            </button>
            <button
              onClick={() => scrollTo('stack')}
              className="cursor-target text-left px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Technical Stack
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="cursor-target text-left px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Contact
            </button>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReopenLockIn();
                }}
                className="cursor-target text-xs font-mono text-sky-400 flex items-center gap-1.5 px-3 py-2"
              >
                <Target className="w-3.5 h-3.5" />
                <span>Re-run Lock-In</span>
              </button>
              <span className="text-[11px] font-mono text-slate-400">
                MEERUT {clock}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
