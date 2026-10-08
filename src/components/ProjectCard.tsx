import React from 'react';
import { ElectricBorder } from './reactbits/ElectricBorder';
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
    electricColor: string;
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
    electricColor: '#f43f5e',
    bgCard: '#120d16',
    badgeClass: 'bg-rose-500/10 border-rose-500/30 text-rose-300',
    techBadgeClass: 'bg-rose-950/40 text-rose-300 border-rose-500/25',
    buttonLine: '#fb7185',
    buttonBase: '#250c14',
    accentColor: 'group-hover/card:text-rose-400',
    iconColor: 'text-rose-400'
  },
  'ahaar-amrit': {
    electricColor: '#10b981',
    bgCard: '#081410',
    badgeClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    techBadgeClass: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/25',
    buttonLine: '#34d399',
    buttonBase: '#082518',
    accentColor: 'group-hover/card:text-emerald-400',
    iconColor: 'text-emerald-400'
  },
  'focus-flow': {
    electricColor: '#38bdf8',
    bgCard: '#0a0d1e',
    badgeClass: 'bg-sky-500/10 border-sky-500/30 text-sky-300',
    techBadgeClass: 'bg-indigo-950/40 text-indigo-300 border-indigo-500/25',
    buttonLine: '#38bdf8',
    buttonBase: '#0e152e',
    accentColor: 'group-hover/card:text-sky-400',
    iconColor: 'text-sky-400'
  }
};

const DEFAULT_THEME = {
  electricColor: '#38bdf8',
  bgCard: '#0c0f1a',
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
      <ElectricBorder
        color={theme.electricColor}
        speed={1.1}
        chaos={0.14}
        borderRadius={24}
        className="h-full transition-transform duration-300 group-hover/card:-translate-y-1.5"
      >
        <div
          className="h-full flex flex-col p-6 sm:p-7 rounded-[24px] border border-white/10 shadow-2xl backdrop-blur-xl transition-colors duration-300"
          style={{ backgroundColor: theme.bgCard }}
        >
          {/* Top Bar with Category & Tagline */}
          <div className="flex items-center justify-between gap-2 mb-5">
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
            className="cursor-target relative aspect-[16/10] rounded-xl overflow-hidden bg-black/60 border border-white/10 cursor-pointer group/img mb-5"
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
          <div className="space-y-2 flex-grow mb-5">
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
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10 mb-5">
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
      </ElectricBorder>
    </div>
  );
};

export default ProjectCard;
