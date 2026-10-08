import React from 'react';
import { BorderGlow } from './reactbits/BorderGlow';
import { SpecularButton } from './reactbits/SpecularButton';
import { ProjectData } from './ProjectModal';
import { ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectData;
  onPreview: (project: ProjectData) => void;
}

const PROJECT_THEMES: Record<
  string,
  {
    glowColors: string[];
    glowColor: string;
    bgCard: string;
    badgeClass: string;
    techBadgeClass: string;
    buttonLine: string;
    buttonBase: string;
    accentColor: string;
    iconColor: string;
  }
> = {
  'raksha-setu': {
    glowColors: ['#f43f5e', '#fb7185', '#f97316'],
    glowColor: 'rgba(244, 63, 94, 0.45)',
    bgCard: '#120d14',
    badgeClass: 'bg-rose-500/10 border-rose-500/30 text-rose-300',
    techBadgeClass: 'bg-rose-950/40 text-rose-300 border-rose-500/25',
    buttonLine: '#fb7185',
    buttonBase: '#250c14',
    accentColor: 'group-hover/card:text-rose-400',
    iconColor: 'text-rose-400'
  },
  'ahaar-amrit': {
    glowColors: ['#10b981', '#34d399', '#f59e0b'],
    glowColor: 'rgba(16, 185, 129, 0.45)',
    bgCard: '#081410',
    badgeClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    techBadgeClass: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/25',
    buttonLine: '#34d399',
    buttonBase: '#082518',
    accentColor: 'group-hover/card:text-emerald-400',
    iconColor: 'text-emerald-400'
  },
  'focus-flow': {
    glowColors: ['#6366f1', '#06b6d4', '#8b5cf6'],
    glowColor: 'rgba(99, 102, 241, 0.45)',
    bgCard: '#0a0d1c',
    badgeClass: 'bg-sky-500/10 border-sky-500/30 text-sky-300',
    techBadgeClass: 'bg-indigo-950/40 text-indigo-300 border-indigo-500/25',
    buttonLine: '#38bdf8',
    buttonBase: '#0e152e',
    accentColor: 'group-hover/card:text-sky-400',
    iconColor: 'text-sky-400'
  }
};

const DEFAULT_THEME = {
  glowColors: ['#38bdf8', '#818cf8', '#fb7185'],
  glowColor: 'rgba(56, 189, 248, 0.45)',
  bgCard: '#0c0f18',
  badgeClass: 'bg-sky-500/10 border-sky-500/30 text-sky-300',
  techBadgeClass: 'bg-slate-800/60 text-slate-200 border-white/10',
  buttonLine: '#38bdf8',
  buttonBase: '#0f172a',
  accentColor: 'group-hover/card:text-sky-400',
  iconColor: 'text-sky-400'
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPreview }) => {
  const theme = PROJECT_THEMES[project.id] ?? DEFAULT_THEME;

  return (
    <div className="relative group/card h-full flex flex-col">
      <BorderGlow
        borderRadius={24}
        edgeSensitivity={35}
        glowRadius={45}
        glowIntensity={1.15}
        coneSpread={30}
        colors={theme.glowColors}
        glowColor={theme.glowColor}
        backgroundColor={theme.bgCard}
        className="h-full flex flex-col p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 border border-white/10 hover:border-white/20"
      >
        {/* Project Card Content */}
        <div className="flex flex-col h-full space-y-5">
          {/* Top Bar with Category & Tagline */}
          <div className="flex items-center justify-between gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${theme.badgeClass}`}
            >
              <Sparkles className={`w-3 h-3 ${theme.iconColor}`} />
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">{project.subtitle}</span>
          </div>

          {/* Project Screenshot Container */}
          <div
            onClick={() => onPreview(project)}
            className="cursor-target relative aspect-[16/10] rounded-xl overflow-hidden bg-black/60 border border-white/10 cursor-pointer group/img"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
              loading="lazy"
            />
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-xs font-medium text-white flex items-center gap-1 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                Click to expand preview <ArrowUpRight className={`w-3.5 h-3.5 ${theme.iconColor}`} />
              </span>
            </div>
          </div>

          {/* Titles & Description */}
          <div className="space-y-2 flex-grow">
            <h3
              className={`text-xl sm:text-2xl font-bold text-white tracking-tight transition-colors ${theme.accentColor}`}
            >
              {project.title}
            </h3>
            <p className="text-sm font-medium text-slate-300 line-clamp-1">{project.tagline}</p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
              {project.summary}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono border ${theme.techBadgeClass}`}
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-500">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center justify-between gap-3 mt-auto">
            <div className="w-full sm:w-auto">
              <SpecularButton
                onClick={() => onPreview(project)}
                size="md"
                textColor="#f8fafc"
                lineColor={theme.buttonLine}
                baseColor={theme.buttonBase}
                className="cursor-target w-full sm:w-auto font-semibold border border-white/15"
              >
                Preview System
              </SpecularButton>
            </div>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target p-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Launch Live System"
                aria-label="Launch Live System"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </BorderGlow>
    </div>
  );
};

export default ProjectCard;
