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
        glowIntensity={1.1}
        coneSpread={30}
        colors={['#d4af37', '#e5c361', '#114432']}
        glowColor="rgba(212, 175, 55, 0.4)"
        backgroundColor="#061c14"
        className="h-full flex flex-col p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4af37]/10 border border-[#d4af37]/20"
      >
        {/* Project Card Content */}
        <div className="flex flex-col h-full space-y-5">
          {/* Top Bar with Category & Tagline */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0a2e20] border border-[#d4af37]/30 text-[#d4af37]">
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#a3b8aa]">{project.subtitle}</span>
          </div>

          {/* Project Screenshot Container */}
          <div 
            onClick={() => onPreview(project)}
            className="cursor-target relative aspect-[16/10] rounded-xl overflow-hidden bg-black/40 border border-[#d4af37]/20 cursor-pointer group/img"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
              loading="lazy"
            />
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#04140e]/90 via-[#04140e]/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-xs font-medium text-[#fbf8f1] flex items-center gap-1 bg-[#061d14]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#d4af37]/30">
                Click to expand preview <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
              </span>
            </div>
          </div>

          {/* Titles & Description */}
          <div className="space-y-2 flex-grow">
            <h3 className="text-xl sm:text-2xl font-bold text-[#fbf8f1] tracking-tight group-hover/card:text-[#d4af37] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-[#d1c7a7] line-clamp-1">
              {project.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#a3b8aa] leading-relaxed line-clamp-3">
              {project.summary}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#d4af37]/15">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#082419] text-[#d4af37] border border-[#d4af37]/25"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-[#789382]">
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
                textColor="#fbf8f1"
                lineColor="#d4af37"
                baseColor="#0a2a1e"
                className="cursor-target w-full sm:w-auto font-semibold border border-[#d4af37]/30"
              >
                Preview System
              </SpecularButton>
            </div>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target p-2.5 rounded-xl border border-[#d4af37]/30 bg-[#082419] hover:bg-[#0c3324] text-[#d4af37] hover:text-[#fbf8f1] transition-colors"
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
