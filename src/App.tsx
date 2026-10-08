import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LockInScreen } from './components/LockInScreen';
import { Navbar } from './components/Navbar';
import { HeroArtwork } from './components/HeroArtwork';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal, ProjectData } from './components/ProjectModal';
import { FeedbackSection } from './components/FeedbackSection';
import { StrokeText } from './components/reactbits/StrokeText';
import { BlurText } from './components/reactbits/BlurText';
import TargetCursor from './components/reactbits/TargetCursor';
import { PROJECTS } from './data/projects';
import { GithubIcon } from './components/icons/GithubIcon';
import {
  Compass,
  Terminal,
  Code2,
  Cpu,
  Layers,
  ArrowDown,
  Mail,
  ShieldCheck,
  Zap,
  Copy,
  Check,
  Radio,
  Clock
} from 'lucide-react';

export function App() {
  const [showLockIn, setShowLockIn] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kushagrrana7345@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToWorks = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#04140e] text-[#fbf8f1] overflow-x-hidden selection:bg-[#d4af37] selection:text-[#04140e] font-sans">
      {/* 1. TargetCursor snapping onto .cursor-target elements in Imperial Gold */}
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2}
        cursorColor="#d4af37"
        cursorColorOnTarget="#fbf8f1"
        hoverDuration={0.2}
      />

      {/* 2. Lock-In Preloader & Calibration Screen */}
      <LockInScreen isOpen={showLockIn} onUnlocked={() => setShowLockIn(false)} />

      {/* 3. Regal Dark Green Background with Architectural Gold Hairlines */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Deep ambient radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[750px] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.08)_0%,_rgba(6,29,20,0.6)_45%,_transparent_75%)] blur-2xl" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(11,43,31,0.5)_0%,_transparent_70%)] blur-3xl" />
        
        {/* Architectural hairline grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* Navigation Bar */}
      <Navbar onReopenLockIn={() => setShowLockIn(true)} />

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-4 sm:px-6 max-w-6xl mx-auto">
          {/* Identity & Telemetry Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-2.5 mb-8"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#082419] text-[#d4af37] border border-[#d4af37]/30 backdrop-blur-md font-mono">
              <Terminal className="w-3.5 h-3.5 text-[#d4af37]" />
              16yo Independent Software Builder
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#061d14] text-[#a3b8aa] border border-[#d4af37]/20">
              Class 10 • Army Public School Meerut Cantt
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#082419] text-[#d4af37] border border-[#d4af37]/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              Handcrafted in India 🇮🇳
            </span>
          </motion.div>

          {/* Main Animated Name Display using StrokeText in Imperial Gold & Ivory */}
          <div className="mb-6 -ml-1 overflow-x-auto py-2">
            <StrokeText
              text="Kushagr Rana"
              strokeColor="#d4af37"
              fillColor="#fbf8f1"
              strokeWidth={1.8}
              drawDuration={2.4}
              fillDelay={0.3}
              stagger={0.06}
              fontSize={86}
              fontWeight={900}
              letterSpacing={-3}
              fillMode="fade"
              trigger="scroll"
              active={!showLockIn}
              replayOnScroll={true}
              className="select-none drop-shadow-2xl font-black"
            />
          </div>

          {/* Hero Subtitle & Anti-AI Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-5"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#fbf8f1] font-extrabold tracking-tight leading-tight">
                Software, built with craft<span className="text-[#d4af37]">.</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#d1c7a7] font-medium leading-relaxed">
                I engineer resilient, high-fidelity web systems from first principles. No page builders, no generated bloatware, and zero artificial slop.
              </p>
              <p className="text-sm sm:text-base text-[#a3b8aa] leading-relaxed font-normal">
                I am a 16-year-old student developer from Meerut Cantt, India (Class 10, Army Public School). Every line of client logic, offline service-worker caching, and animation across these systems is written by hand with React 19, TypeScript, and modern browser APIs.
              </p>

              {/* Quick Action Buttons (Featuring "Let's Get Started") */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={scrollToWorks}
                  className="cursor-target group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm text-[#04140e] bg-gradient-to-r from-[#d4af37] via-[#e5c361] to-[#c29c2d] hover:brightness-105 shadow-xl shadow-[#d4af37]/20 transition-all duration-200 active:scale-95"
                >
                  <span>Let's Get Started</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-[#04140e]" />
                </button>

                <a
                  href="https://github.com/rana-kushagr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target inline-flex items-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm text-[#fbf8f1] bg-[#082419] hover:bg-[#0c3324] border border-[#d4af37]/30 transition-colors shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="cursor-target inline-flex items-center gap-2 px-5 py-4 rounded-xl font-mono text-xs font-semibold text-[#d4af37] bg-[#061d14] hover:bg-[#082419] border border-[#d4af37]/25 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#d4af37]" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                </button>
              </div>
            </motion.div>

            {/* Interactive Hero Artwork Centerpiece with PixelSwap */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <HeroArtwork />
            </motion.div>
          </div>

          {/* Stats / Craftsmanship Proof Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-10 border-t border-[#d4af37]/15"
          >
            <div className="p-5 rounded-2xl bg-[#061d14] border border-[#d4af37]/20 shadow-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] font-mono">3+</div>
              <div className="text-xs text-[#a3b8aa] mt-1 font-medium">Flagship Systems Built Solo</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#061d14] border border-[#d4af37]/20 shadow-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#fbf8f1] font-mono">100%</div>
              <div className="text-xs text-[#a3b8aa] mt-1 font-medium">Offline PWA Resilience</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#061d14] border border-[#d4af37]/20 shadow-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] font-mono">16 y/o</div>
              <div className="text-xs text-[#a3b8aa] mt-1 font-medium">Class 10 APS Meerut</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#061d14] border border-[#d4af37]/20 shadow-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#fbf8f1] font-mono">React 19</div>
              <div className="text-xs text-[#a3b8aa] mt-1 font-medium">First-Principles TypeScript</div>
            </div>
          </motion.div>
        </section>

        {/* About & The Craftsmanship Philosophy */}
        <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-5 space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#082419] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-wider text-[#d4af37] font-mono">
                <Compass className="w-3.5 h-3.5" />
                <span>The Engineering Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fbf8f1] tracking-tight leading-tight">
                Why I build by hand, from first principles.
              </h2>
              <p className="text-[#a3b8aa] text-sm sm:text-base leading-relaxed">
                While automated page builders flood the web with brittle, repetitive templates, I build software that feels tactile, fast, and engineered with pride.
              </p>
            </motion.div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-2xl bg-[#061d14] border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-colors shadow-lg"
              >
                <Zap className="w-6 h-6 text-[#d4af37] mb-3" />
                <h3 className="text-base font-bold text-[#fbf8f1] mb-2">High Craft & Tactile Motion</h3>
                <p className="text-xs sm:text-sm text-[#a3b8aa] leading-relaxed">
                  Every interaction should feel crisp and intentional. From GSAP target cursors and pixel-swapped blueprints to SVG drawing, interfaces should reward curiosity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-2xl bg-[#061d14] border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-colors shadow-lg"
              >
                <ShieldCheck className="w-6 h-6 text-[#d4af37] mb-3" />
                <h3 className="text-base font-bold text-[#fbf8f1] mb-2">Real-World Utility</h3>
                <p className="text-xs sm:text-sm text-[#a3b8aa] leading-relaxed">
                  Building tools with tangible utility: panic-proof golden-hour first-aid in RakshaSetu, ancestral Ayurvedic wellness in Ahaar Amrit, and focus in FocusFlow.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-2xl bg-[#061d14] border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-colors shadow-lg"
              >
                <Cpu className="w-6 h-6 text-[#d4af37] mb-3" />
                <h3 className="text-base font-bold text-[#fbf8f1] mb-2">Zero-Bloat Architecture</h3>
                <p className="text-xs sm:text-sm text-[#a3b8aa] leading-relaxed">
                  Deep respect for client compute. Clean bundle splits, strongly typed contracts in TypeScript, and zero reliance on heavy server backends for offline resilience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-2xl bg-[#061d14] border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-colors shadow-lg"
              >
                <Code2 className="w-6 h-6 text-[#d4af37] mb-3" />
                <h3 className="text-base font-bold text-[#fbf8f1] mb-2">Relentless Work Ethic</h3>
                <p className="text-xs sm:text-sm text-[#a3b8aa] leading-relaxed">
                  Balancing Class 10 school examinations with late-night development sessions, testing on physical devices, and refining every edge case.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Selected Works Section with BlurText Header */}
        <section id="works" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
          {/* Section Tag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#082419] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-wider text-[#d4af37] font-mono mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Solo Portfolio Showcase</span>
            </div>

            {/* BlurText component from React Bits */}
            <div className="mb-4">
              <BlurText
                text="My Works as solo developer"
                delay={120}
                stepDuration={0.45}
                animateBy="words"
                className="text-3xl sm:text-5xl font-black text-[#fbf8f1] tracking-tight"
              />
            </div>

            <p className="text-[#a3b8aa] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Three independent flagship web products conceived, architected, and built from scratch as a solo developer.
            </p>
          </motion.div>

          {/* Grid of 3 Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.85, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard
                  project={project}
                  onPreview={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section id="stack" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#061d14] border border-[#d4af37]/25 rounded-3xl p-8 sm:p-12 shadow-2xl"
          >
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082419] border border-[#d4af37]/30 text-xs font-mono text-[#d4af37] uppercase tracking-widest mb-3">
                Technologies & Craft
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#fbf8f1]">
                Tools I use to build fast & durable software
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-semibold">
                  Core Frontend
                </div>
                <ul className="text-sm text-[#a3b8aa] space-y-1 font-mono">
                  <li>React 19</li>
                  <li>TypeScript 5</li>
                  <li>Vite 6</li>
                  <li>JavaScript ESNext</li>
                </ul>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-semibold">
                  Styling & Motion
                </div>
                <ul className="text-sm text-[#a3b8aa] space-y-1 font-mono">
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                  <li>GSAP 3</li>
                  <li>React Bits UI</li>
                </ul>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-semibold">
                  Canvas & Interaction
                </div>
                <ul className="text-sm text-[#a3b8aa] space-y-1 font-mono">
                  <li>SVG Stroke Animation</li>
                  <li>Pixel Grid Transforms</li>
                  <li>HTML5 Canvas</li>
                  <li>Interactive Physics</li>
                </ul>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#d4af37] font-semibold">
                  Architecture & Offline
                </div>
                <ul className="text-sm text-[#a3b8aa] space-y-1 font-mono">
                  <li>Offline-first PWAs</li>
                  <li>Web Speech API</li>
                  <li>Client LocalStorage</li>
                  <li>GitHub Actions CI/CD</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Recruiter & Visitor Feedback Section (With DodgeField & Confetti) */}
        <FeedbackSection />

        {/* Contact & Footer Section */}
        <footer id="contact" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#d4af37]/15 text-[#a3b8aa]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2.5 text-[#fbf8f1] font-bold text-lg">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37] via-[#c29c2d] to-[#8c6b12] p-[1px] flex items-center justify-center shadow-md">
                  <div className="w-full h-full bg-[#04140e] rounded-[7px] flex items-center justify-center">
                    <span className="font-mono text-xs font-black text-[#d4af37]">KR</span>
                  </div>
                </div>
                <span>Kushagr Rana</span>
              </div>
              <p className="text-xs sm:text-sm text-[#a3b8aa] max-w-md">
                16-year-old Independent Software Builder based in Meerut Cantt, India. Open to internships, exciting engineering collaborations, and hackathons.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:kushagrrana7345@gmail.com"
                className="cursor-target inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c361] to-[#c29c2d] hover:brightness-105 text-[#04140e] text-xs font-bold transition-all shadow-md shadow-[#d4af37]/15"
              >
                <Mail className="w-3.5 h-3.5 text-[#04140e]" />
                <span>kushagrrana7345@gmail.com</span>
              </a>
              <a
                href="https://github.com/rana-kushagr"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#082419] hover:bg-[#0c3324] text-[#fbf8f1] text-xs font-semibold border border-[#d4af37]/25 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-[#d4af37]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#789382] font-mono">
            <div>
              © {new Date().getFullYear()} Kushagr Rana. Handcrafted with React & TypeScript.
            </div>
            <div className="flex items-center gap-4">
              <span>MEERUT CANTT // 28.9845° N · 77.7064° E 🇮🇳</span>
              <span>•</span>
              <span>Class 10 · APS Meerut</span>
            </div>
          </div>
        </footer>
      </main>

      {/* Interactive Project Preview Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
