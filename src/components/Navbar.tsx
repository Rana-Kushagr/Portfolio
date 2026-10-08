import React, { useState, useEffect } from 'react';
import { Target, Mail, Menu, X } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { TelegramIcon } from './icons/TelegramIcon';
import { DiscordIcon } from './icons/DiscordIcon';

interface NavbarProps {
  onReopenLockIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReopenLockIn }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clock, setClock] = useState('--:--:--');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
        setClock('20:20:00');
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
          ? 'bg-[#04140e]/85 backdrop-blur-xl border-b border-[#d4af37]/15 shadow-2xl py-3'
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
            className="cursor-target group flex items-center gap-2.5 font-bold tracking-tight text-[#fbf8f1] text-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#c29c2d] to-[#8c6b12] p-[1px] shadow-md shadow-[#d4af37]/15">
              <div className="w-full h-full bg-[#04140e] rounded-[10px] flex items-center justify-center group-hover:bg-[#082419] transition-colors">
                <span className="font-mono text-sm font-black text-[#d4af37]">
                  KR
                </span>
              </div>
            </div>
            <span className="font-semibold text-[#fbf8f1] tracking-tight">
              Kushagr Rana<span className="text-[#d4af37]">.</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#082419] border border-[#d4af37]/20 text-[11px] font-mono text-[#a3b8aa]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            <span>MEERUT 28.98° N · {clock} IST</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#061d14]/80 border border-[#d4af37]/20 rounded-full px-4 py-1.5 backdrop-blur-md">
          <button
            onClick={() => scrollTo('hero')}
            className="cursor-target px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#a3b8aa] hover:text-[#d4af37] transition-colors"
          >
            Profile
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="cursor-target px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#a3b8aa] hover:text-[#d4af37] transition-colors"
          >
            Philosophy
          </button>
          <button
            onClick={() => scrollTo('works')}
            className="cursor-target px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#a3b8aa] hover:text-[#d4af37] transition-colors"
          >
            Systems
          </button>
          <button
            onClick={() => scrollTo('stack')}
            className="cursor-target px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#a3b8aa] hover:text-[#d4af37] transition-colors"
          >
            Stack
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="cursor-target px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#a3b8aa] hover:text-[#d4af37] transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* System Lock-in Replay */}
          <button
            onClick={onReopenLockIn}
            className="cursor-target hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-[#d4af37] bg-[#082419] hover:bg-[#0a2e20] border border-[#d4af37]/30 transition-colors shadow-sm"
            title="Re-run Target Lock-In Calibration"
          >
            <Target className="w-3.5 h-3.5" />
            <span>Lock-In</span>
          </button>

          {/* Social Icons (GitHub, Insta, TG, Discord) */}
          <div className="hidden sm:flex items-center gap-1">
            <a
              href="https://github.com/rana-kushagr"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target p-2 rounded-xl text-[#a3b8aa] hover:text-[#fbf8f1] hover:bg-[#082419] transition-colors border border-transparent hover:border-[#d4af37]/20"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/_ranakushagr?obrf=MXMwZ2J4MWlheDZkZw=="
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target p-2 rounded-xl text-[#a3b8aa] hover:text-[#fbf8f1] hover:bg-[#082419] transition-colors border border-transparent hover:border-[#d4af37]/20"
              aria-label="Instagram Profile"
              title="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/Kushagr_Rana"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target p-2 rounded-xl text-[#a3b8aa] hover:text-[#fbf8f1] hover:bg-[#082419] transition-colors border border-transparent hover:border-[#d4af37]/20"
              aria-label="Telegram"
              title="Telegram Channel"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://discord.gg/6ph3WymB"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target p-2 rounded-xl text-[#a3b8aa] hover:text-[#fbf8f1] hover:bg-[#082419] transition-colors border border-transparent hover:border-[#d4af37]/20"
              aria-label="Discord Server"
              title="Discord Server"
            >
              <DiscordIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Contact / Email CTA */}
          <a
            href="mailto:kushagrrana7345@gmail.com"
            className="cursor-target inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#04140e] bg-gradient-to-r from-[#d4af37] via-[#e5c361] to-[#c29c2d] hover:brightness-105 shadow-md shadow-[#d4af37]/15 transition-all font-bold"
          >
            <Mail className="w-3.5 h-3.5 text-[#04140e]" />
            <span className="hidden sm:inline">Get In Touch</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-target md:hidden p-2 rounded-xl text-[#a3b8aa] hover:text-[#fbf8f1] hover:bg-[#082419] transition-colors border border-[#d4af37]/20"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-4 pt-2 bg-[#04140e]/95 backdrop-blur-2xl border-b border-[#d4af37]/20 shadow-2xl">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => scrollTo('hero')}
              className="cursor-target text-left px-4 py-2.5 text-sm font-medium text-[#fbf8f1] hover:bg-[#082419] rounded-xl transition-colors"
            >
              Profile
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="cursor-target text-left px-4 py-2.5 text-sm font-medium text-[#fbf8f1] hover:bg-[#082419] rounded-xl transition-colors"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollTo('works')}
              className="cursor-target text-left px-4 py-2.5 text-sm font-medium text-[#fbf8f1] hover:bg-[#082419] rounded-xl transition-colors"
            >
              Flagship Systems
            </button>
            <button
              onClick={() => scrollTo('stack')}
              className="cursor-target text-left px-4 py-2.5 text-sm font-medium text-[#fbf8f1] hover:bg-[#082419] rounded-xl transition-colors"
            >
              Technical Stack
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="cursor-target text-left px-4 py-2.5 text-sm font-medium text-[#fbf8f1] hover:bg-[#082419] rounded-xl transition-colors"
            >
              Contact
            </button>

            {/* Quick Social Buttons in Mobile Drawer */}
            <div className="pt-2 grid grid-cols-4 gap-1.5 border-t border-[#d4af37]/15">
              <a
                href="https://github.com/rana-kushagr"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target p-2 rounded-xl text-[#a3b8aa] hover:text-[#fbf8f1] bg-[#082419] border border-[#d4af37]/20 flex flex-col items-center justify-center gap-1 text-[10px] font-mono"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/_ranakushagr?obrf=MXMwZ2J4MWlheDZkZw=="
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target p-2 rounded-xl text-[#a3b8aa] hover:text-[#fbf8f1] bg-[#082419] border border-[#d4af37]/20 flex flex-col items-center justify-center gap-1 text-[10px] font-mono"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Insta</span>
              </a>
              <a
                href="https://t.me/Kushagr_Rana"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target p-2 rounded-xl text-[#a3b8aa] hover:text-[#fbf8f1] bg-[#082419] border border-[#d4af37]/20 flex flex-col items-center justify-center gap-1 text-[10px] font-mono"
              >
                <TelegramIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Telegram</span>
              </a>
              <a
                href="https://discord.gg/6ph3WymB"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target p-2 rounded-xl text-[#a3b8aa] hover:text-[#fbf8f1] bg-[#082419] border border-[#d4af37]/20 flex flex-col items-center justify-center gap-1 text-[10px] font-mono"
              >
                <DiscordIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Discord</span>
              </a>
            </div>

            <div className="pt-2 border-t border-[#d4af37]/15 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReopenLockIn();
                }}
                className="cursor-target text-xs font-mono text-[#d4af37] flex items-center gap-1.5 px-3 py-2"
              >
                <Target className="w-3.5 h-3.5" />
                <span>Re-run Lock-In</span>
              </button>
              <span className="text-[11px] font-mono text-[#a3b8aa]">
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
