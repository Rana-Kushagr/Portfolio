import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Code, Cpu, BookOpen, Sparkles } from 'lucide-react';

interface LearningItem {
  topic: string;
  focus: string;
  status: 'In Progress' | 'Active' | 'Deepening';
}

const LEARNING_TOPICS: LearningItem[] = [
  {
    topic: 'React & Component Architecture',
    focus: 'Custom hooks, memoization patterns, state boundaries, clean props interfaces',
    status: 'In Progress'
  },
  {
    topic: 'JavaScript & Web Platform Depth',
    focus: 'Event loop mechanics, asynchronous concurrency, DOM lifecycle, browser rendering stages',
    status: 'Active'
  },
  {
    topic: 'UI Systems & Information Design',
    focus: 'Typographic hierarchy, consistent 4px/8px spatial rhythm, obvious affordances',
    status: 'Active'
  },
  {
    topic: 'Web Accessibility (a11y)',
    focus: 'Semantic HTML5 structure, keyboard navigation flows, ARIA roles, color contrast ratios',
    status: 'Deepening'
  },
  {
    topic: 'Web Performance & Offline Web',
    focus: 'Bundle optimization, Service Workers, Core Web Vitals (LCP, CLS, INP)',
    status: 'Deepening'
  }
];

const EXPLORING_TOPICS: LearningItem[] = [
  {
    topic: 'AI-Assisted Engineering Workflows',
    focus: 'Pair-programming with LLMs to build ambitious software without losing first-principles understanding',
    status: 'Active'
  },
  {
    topic: 'Product Design & Intentional UX',
    focus: 'Framing problem statements, wireframing workflows, and stripping away unnecessary screens',
    status: 'Active'
  },
  {
    topic: 'Tactile Motion & Micro-Interactions',
    focus: 'Purposeful spring animations with Framer Motion that communicate system status rather than distract',
    status: 'In Progress'
  },
  {
    topic: 'Offline-First Architectures',
    focus: 'LocalStorage caching, client state persistence, resilience against spotty mobile connectivity',
    status: 'Active'
  }
];

export const BuildingSection: React.FC = () => {
  return (
    <section id="building" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#d4af37]/15">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-[#d4af37] tracking-wider uppercase">
            <span className="px-2 py-0.5 rounded bg-[#0a261a] border border-[#d4af37]/30">02</span>
            <span>CURRENTLY BUILDING & LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fbf8f1] tracking-tight">
            Here is what I'm actively building & learning right now.
          </h2>
          <p className="text-sm sm:text-base text-[#fbf8f1]/70 max-w-2xl leading-relaxed">
            As a 16-year-old student developer, my focus is honest progression. A portfolio that says "I know everything" is unconvincing. Here is my active learning roadmap.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#071a12] border border-[#d4af37]/25 text-xs font-mono text-[#d4af37] shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          <span>Class 10 • Daily Coding Cadence</span>
        </div>
      </div>

      {/* Grid: Learning (Depth) vs Exploring (Breadth) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Column 1: Core Fundamentals & Learning Depth */}
        <div className="rounded-2xl bg-[#07150f] border border-[#d4af37]/20 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between border-b border-[#d4af37]/15 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#d4af37]" />
                <h3 className="font-mono text-sm font-bold text-[#fbf8f1] tracking-wider uppercase">
                  LEARNING // DEPTH
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#a3b8aa]">
                Fundamentals First
              </span>
            </div>

            <ul className="space-y-4 font-mono text-xs">
              {LEARNING_TOPICS.map((item, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#04120b] border border-white/5 hover:border-[#d4af37]/30 transition-colors space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[#fbf8f1] font-semibold text-sm">
                    <span className="flex items-center gap-2">
                      <span className="text-[#d4af37]">→</span>
                      <span>{item.topic}</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#0a261a] text-[#d4af37] border border-[#d4af37]/20">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[#a3b8aa] text-xs font-sans pl-5 leading-relaxed">
                    {item.focus}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#a3b8aa]">
            <span>Current Primary Stack:</span>
            <span className="text-[#d4af37]">JavaScript · React · TypeScript</span>
          </div>
        </div>

        {/* Column 2: Exploring & Product Breadth */}
        <div className="rounded-2xl bg-[#07150f] border border-[#d4af37]/20 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between border-b border-[#d4af37]/15 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <h3 className="font-mono text-sm font-bold text-[#fbf8f1] tracking-wider uppercase">
                  EXPLORING // BREADTH
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#a3b8aa]">
                Curiosity & Modern Tools
              </span>
            </div>

            <ul className="space-y-4 font-mono text-xs">
              {EXPLORING_TOPICS.map((item, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#04120b] border border-white/5 hover:border-[#d4af37]/30 transition-colors space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[#fbf8f1] font-semibold text-sm">
                    <span className="flex items-center gap-2">
                      <span className="text-[#d4af37]">→</span>
                      <span>{item.topic}</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#0a261a] text-[#10b981] border border-[#10b981]/25">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[#a3b8aa] text-xs font-sans pl-5 leading-relaxed">
                    {item.focus}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-[#04120b] border border-[#d4af37]/15 text-xs text-[#fbf8f1]/80 space-y-1 font-mono">
            <span className="text-[#d4af37] block font-semibold">
              // Student Mindset
            </span>
            <p className="font-sans text-xs text-[#a3b8aa] leading-relaxed">
              "Building real projects teaches me 10x more than watching tutorials. Every error message is another lesson in how browsers actually work."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingSection;
