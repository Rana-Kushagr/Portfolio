import React from 'react';
import { Code2, Layers, Terminal, Sparkles, Cpu, Wrench } from 'lucide-react';

interface ToolCategory {
  category: string;
  badge: string;
  tools: { name: string; note: string }[];
}

const TOOLKIT: ToolCategory[] = [
  {
    category: 'Core Web Platform',
    badge: 'LANGUAGES & FUNDAMENTALS',
    tools: [
      { name: 'JavaScript (ES6+)', note: 'Event loops, async/await, DOM APIs, modern array methods' },
      { name: 'TypeScript', note: 'Interfaces, strict type contracts, type-safe props' },
      { name: 'HTML5 Semantic Web', note: 'Accessible structure, semantic landmarks, valid markup' },
      { name: 'CSS3 / Modern CSS', note: 'Flexbox, Grid, container queries, custom properties, CSS animations' }
    ]
  },
  {
    category: 'Libraries & Frameworks',
    badge: 'UI & MOTION',
    tools: [
      { name: 'React 19', note: 'Modern functional components, state machines, custom hooks' },
      { name: 'Tailwind CSS', note: 'Utility-first spatial rhythms, responsive styling, design tokens' },
      { name: 'Framer Motion', note: 'Spring physics, layout transitions, gesture physics' },
      { name: 'Lucide Icons', note: 'Clean, pixel-aligned iconography system' }
    ]
  },
  {
    category: 'Build, Tooling & Workflow',
    badge: 'DEV WORKFLOW',
    tools: [
      { name: 'Vite 6', note: 'Lightning fast HMR, Rollup production bundling' },
      { name: 'Git & GitHub', note: 'Version control, atomic commits, branch workflows' },
      { name: 'Chrome DevTools', note: 'Performance auditing, network timing, CSS grid inspection' },
      { name: 'VS Code & Cursor', note: 'AI-assisted pairing, multi-cursor editing, keyboard speed' }
    ]
  },
  {
    category: 'Design & Craft Thinking',
    badge: 'PRODUCT DESIGN',
    tools: [
      { name: 'Figma', note: 'Quick component prototyping, wireframing, asset export' },
      { name: 'UI Hierarchy', note: 'Spacing grids, typography scales, contrast checking' },
      { name: 'First-Principles UX', note: 'Reducing click friction, eliminating unnecessary screens' }
    ]
  }
];

export const StackSection: React.FC = () => {
  return (
    <section id="stack" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#d4af37]/15">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#d4af37] tracking-wider uppercase">
          <span className="px-2 py-0.5 rounded bg-[#0a261a] border border-[#d4af37]/30">04</span>
          <span>TOOLBENCH & STACK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fbf8f1] tracking-tight">
          Tools I build with every day.
        </h2>
        <p className="text-sm sm:text-base text-[#fbf8f1]/70 max-w-2xl leading-relaxed">
          I prioritize tools that stay close to the web platform and let me turn ideas into responsive, accessible code quickly.
        </p>
      </div>

      {/* Grid of Tooling categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TOOLKIT.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-[#07150f] border border-[#d4af37]/20 p-6 sm:p-7 space-y-4 hover:border-[#d4af37]/45 transition-colors shadow-lg"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-3 font-mono">
              <h3 className="text-base font-bold text-[#fbf8f1]">{cat.category}</h3>
              <span className="text-[10px] uppercase tracking-wider text-[#d4af37] px-2 py-0.5 rounded bg-[#0a261a] border border-[#d4af37]/20">
                {cat.badge}
              </span>
            </div>

            <div className="space-y-3 font-mono">
              {cat.tools.map((tool, tIdx) => (
                <div
                  key={tIdx}
                  className="p-3 rounded-xl bg-[#04120b] border border-white/5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5"
                >
                  <span className="text-xs font-semibold text-[#fbf8f1] flex items-center gap-2">
                    <span className="text-[#d4af37]">▸</span>
                    {tool.name}
                  </span>
                  <span className="text-[11px] font-sans text-[#a3b8aa] sm:text-right">
                    {tool.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackSection;
