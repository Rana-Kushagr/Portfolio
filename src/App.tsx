import React, { useState } from 'react';
import { BackgroundVibe } from './components/BackgroundVibe';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal, ProjectData } from './components/ProjectModal';
import { BuildingSection } from './components/BuildingSection';
import { PhilosophyNotes } from './components/PhilosophyNotes';
import { StackSection } from './components/StackSection';
import { FeedbackSection } from './components/FeedbackSection';
import { LockInScreen } from './components/LockInScreen';
import TargetCursor from './components/reactbits/TargetCursor';
import { PROJECTS } from './data/projects';
import { ArrowUpRight, Terminal, Heart } from 'lucide-react';

export function App() {
  const [showLockIn, setShowLockIn] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const scrollToWorks = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#050e09] text-[#fbf8f1] overflow-x-hidden selection:bg-[#d4af37] selection:text-[#04140e] font-sans">
      {/* 1. Subtle TargetCursor snapping onto .cursor-target elements */}
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2}
        cursorColor="#d4af37"
        cursorColorOnTarget="#fbf8f1"
        hoverDuration={0.2}
      />

      {/* 2. Optional Mechanical Terminal Easter Egg (Available via Navbar or button) */}
      <LockInScreen isOpen={showLockIn} onUnlocked={() => setShowLockIn(false)} />

      {/* 3. The Digital Workshop Canvas (Quiet Grid & Dot Matrix) */}
      <BackgroundVibe />

      {/* 4. Numbered Workshop Navigation Bar */}
      <Navbar onReopenLockIn={() => setShowLockIn(true)} />

      {/* 5. Main Content Hierarchy */}
      <main className="relative z-10">
        {/* Hero Section: Direct, Honest, Impactful */}
        <HeroSection onScrollToWork={scrollToWorks} />

        {/* 01 — SELECTED WORK (Centerpiece Showcase) */}
        <section id="works" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#d4af37]/15">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[#d4af37] tracking-wider uppercase">
                <span className="px-2 py-0.5 rounded bg-[#0a261a] border border-[#d4af37]/30">01</span>
                <span>SELECTED WORK</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#fbf8f1] tracking-tight">
                Real interfaces. Shipped and interactive.
              </h2>
              <p className="text-sm sm:text-base text-[#fbf8f1]/70 max-w-2xl leading-relaxed">
                No fake 3D mockups or AI placeholders. These are actual working web applications designed around real utility, clean architecture, and responsive UX.
              </p>
            </div>

            <div className="font-mono text-xs text-[#a3b8aa] shrink-0">
              <span>Displaying 3 Flagship Projects</span>
            </div>
          </div>

          {/* Project Cards Stack */}
          <div className="space-y-12">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onPreview={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        </section>

        {/* 02 — CURRENTLY BUILDING & LEARNING */}
        <BuildingSection />

        {/* 03 — INTENTIONS & WORKSHOP NOTES */}
        <PhilosophyNotes />

        {/* 04 — TOOLBENCH & STACK */}
        <StackSection />

        {/* 05 — GET IN TOUCH / VISITOR CORNER */}
        <div id="contact">
          <FeedbackSection />
        </div>
      </main>

      {/* 6. Grounded, Thoughtful Developer Footer */}
      <footer className="relative z-10 border-t border-[#d4af37]/15 bg-[#030b07] py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#a3b8aa]">
          {/* Left: Personality line from critique */}
          <div className="space-y-1 text-center md:text-left">
            <p className="text-[#fbf8f1] font-semibold">
              Built by Kushagra Rana
            </p>
            <p className="text-[#789382]">
              With curiosity, clean code & too many open browser tabs.
            </p>
          </div>

          {/* Middle: Location & Year */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#061710] border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span>Meerut Cantt, India • Class 10 APS • 2026</span>
          </div>

          {/* Right: Quick Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Rana-Kushagr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4af37] transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="mailto:kushagrrana7345@gmail.com"
              className="hover:text-[#d4af37] transition-colors flex items-center gap-1"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <button
              onClick={() => setShowLockIn(true)}
              className="text-[#789382] hover:text-[#d4af37] transition-colors text-[11px]"
              title="Launch Calibration Terminal"
            >
              [Terminal]
            </button>
          </div>
        </div>
      </footer>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
