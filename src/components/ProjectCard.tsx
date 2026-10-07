import React from 'react';
import { BorderGlow } from './reactbits/BorderGlow';
import { SpecularButton } from './reactbits/SpecularButton';
import { ProjectData } from './ProjectModal';
import { ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectData;
  onPreview: (project: ProjectData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPreview }) => {
  return (
    <div className="relative group/card h-full flex flex-col">
      <BorderGlow
        borderRadius={24}
        edgeSensitivity={35}
        glowRadius={45}
        glowIntensity={1.2}
        coneSpread={30}
        colors={
          project.id === 'ahaar-amrit'
            ? ['#10b981', '#34d399', '#059669']
            : project.id === 'raksha-setu'
            ? ['#ef4444', '#f97316', '#eab308']
            : ['#6366f1', '#8b5cf6', '#3b82f6']
        }
        glowColor={project.glowColor}
        backgroundColor="#0c1017"
        className="h-full flex flex-col p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
      >
        {/* Project Card Content */}
        <div className="flex flex-col h-full space-y-5">
          {/* Top Bar with Category & Tagline */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">{project.subtitle}</span>
          </div>

          {/* Project Screenshot Container */}
          <div 
            onClick={() => onPreview(project)}
            className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/40 border border-white/10 cursor-pointer group/img"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
              loading="lazy"
            />
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-xs font-medium text-white flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                Click to expand preview <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Titles & Description */}
          <div className="space-y-2 flex-grow">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover/card:text-indigo-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-slate-300 line-clamp-1">
              {project.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
              {project.summary}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/10"
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
                lineColor={
                  project.id === 'ahaar-amrit'
                    ? '#34d399'
                    : project.id === 'raksha-setu'
                    ? '#fb923c'
                    : '#818cf8'
                }
                baseColor="#27272a"
                className="w-full sm:w-auto font-semibold"
              >
                Preview Project
              </SpecularButton>
            </div>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Launch Live Demo"
                aria-label="Launch Live Demo"
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
