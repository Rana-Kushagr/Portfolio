import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

interface NavbarProps {
  onReopenLockIn?: () => void;
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
        setClock('21:05:00');
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
          ? 'bg-[#04140e]/90 backdrop-blur-xl border-b border-[#d4af37]/20 shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram & Coordinates */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-target flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#082419] border border-[#d4af37]/30 flex items-center justify-center font-mono text-xs font-bold text-[#d4af37] group-hover:border-[#d4af37] transition-colors">
              KR
            </div>
            <div>
              <span className="font-bold text-sm text-[#fbf8f1] tracking-tight block group-hover:text-[#d4af37] transition-colors">
                Kushagra Rana
              </span>
              <span className="font-mono text-[11px] text-[#a3b8aa] block">
                Frontend Developer
              </span>
            </div>
          </button>

          {/* Meerut IST Telemetry Pill (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#061d14] border border-[#d4af37]/15 text-[11px] font-mono text-[#a3b8aa]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            <span>MEERUT 28.98° N</span>
            <span className="text-[#d4af37] font-semibold">{clock} IST</span>
          </div>
        </div>

        {/* Desktop Workshop Numbered Nav Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-[#a3b8aa]">
          <button
            onClick={() => scrollTo('works')}
            className="cursor-target hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
          >
            <span className="text-[#d4af37]">01.</span>
            <span>WORK</span>
          </button>
          <button
            onClick={() => scrollTo('building')}
            className="cursor-target hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
          >
            <span className="text-[#d4af37]">02.</span>
            <span>LEARNING</span>
          </button>
          <button
            onClick={() => scrollTo('notes')}
            className="cursor-target hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
          >
            <span className="text-[#d4af37]">03.</span>
            <span>NOTES</span>
          </button>
          <button
            onClick={() => scrollTo('stack')}
            className="cursor-target hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
          >
            <span className="text-[#d4af37]">04.</span>
            <span>STACK</span>
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="cursor-target hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
          >
            <span className="text-[#d4af37]">05.</span>
            <span>CONTACT</span>
          </button>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/Rana-Kushagr"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target p-2 rounded-lg text-[#a3b8aa] hover:text-[#fbf8f1] hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <button
            onClick={() => scrollTo('contact')}
            className="cursor-target inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#d4af37] hover:bg-[#e5c361] text-[#04140e] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_2px_10px_rgba(212,175,55,0.25)]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Say Hello</span>
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#fbf8f1] hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#04140e]/95 backdrop-blur-2xl border-b border-[#d4af37]/20 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-sm text-[#fbf8f1]">
            <button
              onClick={() => scrollTo('works')}
              className="text-left py-2 hover:text-[#d4af37] flex items-center gap-2"
            >
              <span className="text-[#d4af37]">01.</span>
              <span>WORK</span>
            </button>
            <button
              onClick={() => scrollTo('building')}
              className="text-left py-2 hover:text-[#d4af37] flex items-center gap-2"
            >
              <span className="text-[#d4af37]">02.</span>
              <span>LEARNING</span>
            </button>
            <button
              onClick={() => scrollTo('notes')}
              className="text-left py-2 hover:text-[#d4af37] flex items-center gap-2"
            >
              <span className="text-[#d4af37]">03.</span>
              <span>NOTES</span>
            </button>
            <button
              onClick={() => scrollTo('stack')}
              className="text-left py-2 hover:text-[#d4af37] flex items-center gap-2"
            >
              <span className="text-[#d4af37]">04.</span>
              <span>STACK</span>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left py-2 hover:text-[#d4af37] flex items-center gap-2"
            >
              <span className="text-[#d4af37]">05.</span>
              <span>CONTACT</span>
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#a3b8aa]">
            <span>MEERUT CANTT</span>
            <span className="text-[#d4af37]">{clock} IST</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
