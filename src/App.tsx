import React, { useState } from 'react';
import { CoverScreen } from './components/CoverScreen';
import { Navbar } from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal, ProjectData } from './components/ProjectModal';
import { FeedbackSection } from './components/FeedbackSection';
import { StrokeText } from './components/reactbits/StrokeText';
import { BlurText } from './components/reactbits/BlurText';
import Plasma from './components/reactbits/Plasma';
import GlowCursor from './components/reactbits/GlowCursor';
import { PROJECTS } from './data/projects';
import { GithubIcon } from './components/icons/GithubIcon';
import {
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Layers,
  ArrowDown,
  Mail,
  ExternalLink,
  Heart,
  CheckCircle2,
  Compass,
  Zap,
  ShieldCheck,
  Send,
  Copy,
  Check
} from 'lucide-react';

export function App() {
  const [showCover, setShowCover] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kushagr.rana2009@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToWorks = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white font-sans">
      {/* 1. Cover Screen Intro (Animated entrance with FoldText) */}
      <CoverScreen isOpen={showCover} onEnter={() => setShowCover(false)} />

      {/* 2. WebGL Plasma Fluid Background Shader (Optimized for 60fps butter-smooth rendering) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-25">
        <Plasma
          color="#6366f1"
          speed={0.35}
          direction="forward"
          scale={1.2}
          opacity={0.3}
          mouseInteractive={false}
          renderScale={0.22}
          iterations={18}
          targetFps={35}
          maxDpr={1.0}
        />
      </div>

      {/* Ambient gradient meshes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[160px]" />
      </div>

      {/* 3. Interactive WebGL Glow Cursor Ribbon Trail (Viewport-fixed overlay, ultra-lightweight) */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        <GlowCursor
          color="#818cf8"
          secondaryColor="#34d399"
          trailLength={22}
          trailWidth={6}
          glowIntensity={1.5}
          glowSpread={0.9}
          followSpeed={0.22}
          noiseStrength={0}
          maxDevicePixelRatio={1.0}
          className="w-full h-full"
        />
      </div>

      {/* Navigation Bar */}
      <Navbar onReopenCover={() => setShowCover(true)} />

      <main className="relative z-10">
          {/* Hero Section */}
          <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-4 sm:px-6 max-w-6xl mx-auto">
            {/* Identity Badge Row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-md">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                16yo Frontend Dev & Vibecoder
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                Class 10 • APS Meerut Cantt
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Shipping from India 🇮🇳
              </span>
            </div>

            {/* Main Animated Name Display using StrokeText from React Bits */}
            <div className="mb-6 -ml-1 overflow-x-auto py-2">
              <StrokeText
                text="Kushagr Rana"
                strokeColor="#818cf8"
                fillColor="#f8fafc"
                strokeWidth={1.8}
                drawDuration={1.8}
                fillDelay={0.3}
                fontSize={86}
                fontWeight={900}
                letterSpacing={-3}
                fillMode="wipe"
                trigger="mount"
                className="select-none drop-shadow-2xl font-black"
              />
            </div>

            {/* Hero Subtitle & Bio Statement */}
            <div className="max-w-3xl space-y-4 mb-10">
              <p className="text-xl sm:text-2xl text-slate-200 font-medium leading-relaxed">
                Crafting high-fidelity, resilient web applications that marry deep frontend architecture with the rapid velocity of modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 font-semibold">vibecoding</span>.
              </p>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
                I am a 16-year-old student developer from Meerut, India. When I am not in class at Army Public School, I engineer production-grade client applications with React 19, TypeScript, WebGL shaders, and offline-first PWA architectures.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToWorks}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/25 transition-all duration-200 active:scale-95"
              >
                <span>Explore Solo Works</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <a
                href="https://github.com/rana-kushagr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-semibold text-slate-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Stats / Proof Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">3+</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Flagship Systems Built</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Offline PWA Resilience</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">16 y/o</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Passionate Builder</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">React 19</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Modern Web Architecture</div>
              </div>
            </div>
          </section>

          {/* About & The Philosophy of Vibecoding */}
          <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  <Compass className="w-3.5 h-3.5" />
                  <span>The Engineering Mindset</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Why I build, and what "Vibecoding" really means.
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Too many people view AI-assisted coding as cutting corners. For me, <span className="text-slate-200 font-medium">vibecoding</span> is the superpower of multiplying high-taste vision into reality at the speed of thought.
                </p>
              </div>

              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/30 transition-colors">
                  <Zap className="w-6 h-6 text-indigo-400 mb-3" />
                  <h3 className="text-base font-bold text-white mb-2">High Craft & Tactile Motion</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Every interaction should feel alive. From GSAP SVG stroke animations and 3D folding panels to WebGL fluid shaders, interfaces should reward curiosity.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 mb-3" />
                  <h3 className="text-base font-bold text-white mb-2">Real Indian & Global Utility</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Building tools that actually help people: lifesaving emergency first-aid in RakshaSetu, ancestral Ayurvedic wellness in Ahaar Amrit, and focus in FocusFlow.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-colors">
                  <Cpu className="w-6 h-6 text-purple-400 mb-3" />
                  <h3 className="text-base font-bold text-white mb-2">Zero-Bloat Architecture</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Deep respect for client compute. Clean bundle splits, typed data contracts in TypeScript, and zero reliance on heavy server backends for offline resilience.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-colors">
                  <Code2 className="w-6 h-6 text-amber-400 mb-3" />
                  <h3 className="text-base font-bold text-white mb-2">Speed Meets Relentless Grit</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Juggling Class 10 school examinations with late-night coding sessions, shipping real software, testing on physical devices, and refining every edge case.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Selected Works Section with BlurText Header and BorderGlow + SpecularButton Cards */}
          <section id="works" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
            {/* Section Tag */}
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>Solo Portfolio Showcase</span>
              </div>

              {/* BlurText component from React Bits */}
              <div className="mb-4">
                <BlurText
                  text="My Works as solo developer"
                  delay={80}
                  animateBy="words"
                  className="text-3xl sm:text-5xl font-black text-white tracking-tight"
                />
              </div>

              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Three independent flagship web products conceived, architected, and built from scratch as a solo developer.
              </p>
            </div>

            {/* Grid of 3 Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {PROJECTS.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onPreview={(p) => setSelectedProject(p)}
                />
              ))}
            </div>
          </section>

          {/* Tech Stack Grid */}
          <section id="stack" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12">
              <div className="text-center max-w-xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                  Technologies & Craft
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Tools I use to build fast & durable software
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                    Core Frontend
                  </div>
                  <ul className="text-sm text-slate-300 space-y-1 font-mono">
                    <li>React 19</li>
                    <li>TypeScript 5</li>
                    <li>Vite 6</li>
                    <li>JavaScript ESNext</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Styling & Motion
                  </div>
                  <ul className="text-sm text-slate-300 space-y-1 font-mono">
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                    <li>GSAP 3</li>
                    <li>React Bits UI</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
                    Canvas & WebGL
                  </div>
                  <ul className="text-sm text-slate-300 space-y-1 font-mono">
                    <li>OGL 1.0 (GLSL)</li>
                    <li>Raymarched Shaders</li>
                    <li>HTML5 Canvas</li>
                    <li>SVG Path Animation</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                    Architecture & APIs
                  </div>
                  <ul className="text-sm text-slate-300 space-y-1 font-mono">
                    <li>Offline-first PWAs</li>
                    <li>Web Speech API</li>
                    <li>Client LocalStorage</li>
                    <li>GitHub Pages CI/CD</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Recruiter Feedback Section (With DodgeField & Confetti) */}
          <FeedbackSection />

          {/* Contact & Footer Section */}
          <footer id="contact" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/10 text-slate-400">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-lg">
                  <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-xs font-mono">
                    KR
                  </div>
                  <span>Kushagr Rana</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md">
                  16-year-old Frontend Developer & Vibecoder based in Meerut, India. Open to internships, exciting freelance collaborations, and hackathons.
                </p>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:kushagr.rana2009@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors shadow-md shadow-indigo-600/20"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>kushagr.rana2009@gmail.com</span>
                </a>
                <a
                  href="https://github.com/rana-kushagr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
              <div>
                © {new Date().getFullYear()} Kushagr Rana. Built with React Bits & Vibecoding.
              </div>
              <div className="flex items-center gap-4">
                <span>Meerut Cantt, India 🇮🇳</span>
                <span>•</span>
                <span>Army Public School Class 10</span>
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
