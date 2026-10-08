import React from 'react';
import { ProjectData } from './ProjectModal';
import { ArrowUpRight, Globe, Layers } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

interface ProjectCardProps {
  project: ProjectData;
  onPreview: (project: ProjectData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPreview }) => {
  return (
    <article className="group/card relative rounded-2xl bg-[#07130e] border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden shadow-xl flex flex-col">
      {/* 1. Technical Card Header */}
      <div className="p-6 sm:p-7 border-b border-[#d4af37]/15 bg-[#04140e]/60">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 font-mono">
            <span className="text-sm font-bold text-[#d4af37] tracking-wider px-2 py-0.5 rounded bg-[#0a261a] border border-[#d4af37]/30">
              {project.number || '01'}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#a3b8aa]">
              {project.category}
            </span>
          </div>
          <span className="text-xs font-mono text-[#d4af37]/80">
            {project.subtitle}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#fbf8f1] group-hover/card:text-[#d4af37] transition-colors">
            {project.title}
          </h3>
          <p className="text-base text-[#fbf8f1]/80 leading-relaxed font-normal">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* 2. Realistic Browser Frame (Screenshot Centerpiece) */}
      <div className="p-4 sm:p-6 bg-[#030e0a]">
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#061811] shadow-2xl transition-transform duration-500 group-hover/card:border-[#d4af37]/40">
          {/* Browser Frame Title Bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#04140e] border-b border-white/10">
            {/* Traffic Lights */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            {/* Address Bar Pill */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#071d14] border border-white/10 max-w-[260px] sm:max-w-md w-full justify-center">
              <Globe className="w-3 h-3 text-[#d4af37]" />
              <span className="text-xs font-mono text-[#a3b8aa] truncate tracking-tight">
                {project.displayUrl || 'rana-kushagr.github.io'}
              </span>
            </div>

            {/* Inspect Modal Trigger */}
            <button
              onClick={() => onPreview(project)}
              className="text-xs font-mono text-[#a3b8aa] hover:text-[#d4af37] transition-colors flex items-center gap-1 px-2 py-0.5 rounded hover:bg-white/5"
              title="Inspect specifications"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Inspect</span>
            </button>
          </div>

          {/* Actual Interface Screenshot */}
          <button
            type="button"
            onClick={() => onPreview(project)}
            aria-label={`Inspect ${project.title} specifications and architecture`}
            className="cursor-target relative aspect-[16/10] w-full text-left overflow-hidden bg-black/60 cursor-pointer group/screenshot block border-0 p-0"
          >
            <img
              src={project.image}
              alt={`${project.title} live interface`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/screenshot:scale-[1.02]"
              loading="lazy"
            />
            {/* Subtle hover prompt */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#04140e]/80 via-transparent to-transparent opacity-0 group-hover/screenshot:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 pointer-events-none">
              <span className="text-xs font-mono text-[#fbf8f1] bg-[#04140e]/90 px-3 py-1.5 rounded-lg border border-[#d4af37]/30 flex items-center gap-1.5 backdrop-blur-md">
                Click to expand specs & deep dive
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* 3. Engineering Spec Table (Notebook / Workshop Format) */}
      <div className="p-6 sm:p-7 space-y-4 flex-grow bg-[#051610]/70 border-t border-[#d4af37]/10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-mono">
          {/* ROLE */}
          <div className="p-3 rounded-lg bg-[#04140e] border border-white/5 space-y-1">
            <span className="text-[#d4af37] block font-semibold uppercase tracking-wider">
              ROLE
            </span>
            <span className="text-[#fbf8f1]/90 block">
              {project.role || 'Solo Frontend Builder'}
            </span>
          </div>

          {/* STACK */}
          <div className="p-3 rounded-lg bg-[#04140e] border border-white/5 space-y-1">
            <span className="text-[#d4af37] block font-semibold uppercase tracking-wider">
              STACK
            </span>
            <span className="text-[#fbf8f1]/90 block truncate" title={project.stackSummary}>
              {project.stackSummary || project.techStack.slice(0, 3).join(' · ')}
            </span>
          </div>

          {/* FOCUS */}
          <div className="p-3 rounded-lg bg-[#04140e] border border-white/5 space-y-1">
            <span className="text-[#d4af37] block font-semibold uppercase tracking-wider">
              FOCUS
            </span>
            <span className="text-[#fbf8f1]/90 block truncate" title={project.focusSummary}>
              {project.focusSummary || 'Responsive UI & UX'}
            </span>
          </div>
        </div>

        {/* Tags pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[11px] font-mono rounded bg-[#082015] text-[#a3b8aa] border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 4. Action Footer */}
      <div className="p-5 sm:p-6 bg-[#04140e] border-t border-[#d4af37]/15 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4af37] hover:bg-[#e5c361] text-[#04140e] font-bold text-xs tracking-wider uppercase transition-all shadow-[0_2px_12px_rgba(212,175,55,0.25)] hover:shadow-[0_2px_18px_rgba(212,175,55,0.4)]"
            >
              <span>View live →</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#082419] hover:bg-[#0c3927] text-[#fbf8f1] border border-[#d4af37]/25 text-xs font-mono transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>View code →</span>
            </a>
          )}
        </div>

        <button
          onClick={() => onPreview(project)}
          className="cursor-target text-xs font-mono text-[#a3b8aa] hover:text-[#d4af37] transition-colors underline underline-offset-4"
        >
          Detailed specs & notes ↘
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
