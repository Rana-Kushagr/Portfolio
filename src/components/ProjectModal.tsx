import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  image: string;
  themeColor: string;
  borderColor: string;
  glowColor: string;
  tags: string[];
  summary: string;
  features: string[];
  techStack: string[];
  impact: string;
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#061d14] border border-[#d4af37]/30 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_50px_rgba(212,175,55,0.15)] text-[#fbf8f1] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#04140e]/95 backdrop-blur-md border-b border-[#d4af37]/20">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 text-xs font-semibold rounded-md uppercase tracking-wider bg-[#0c3927] text-[#e5c361] border border-[#d4af37]/30 font-mono">
                {project.category}
              </span>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#fbf8f1]">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="cursor-target p-2 rounded-lg text-[#fbf8f1]/60 hover:text-[#fbf8f1] hover:bg-[#d4af37]/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Project Hero Image */}
            <div className="relative rounded-xl overflow-hidden border border-[#d4af37]/25 shadow-xl group bg-black/60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[420px] object-contain sm:object-cover mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061d14] via-transparent to-transparent opacity-70" />
            </div>

            {/* Title & Tagline */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase font-semibold">{project.subtitle}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#fbf8f1] tracking-tight mb-2">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-[#fbf8f1]/80 font-medium leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Overview / Summary */}
            <div className="bg-[#04140e]/80 border border-[#d4af37]/20 rounded-xl p-5 space-y-2">
              <h3 className="text-sm font-semibold text-[#e5c361] uppercase tracking-wider flex items-center gap-2 font-mono">
                <Layers className="w-4 h-4 text-[#d4af37]" />
                System Overview & Engineering Mission
              </h3>
              <p className="text-[#fbf8f1]/85 text-sm sm:text-base leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Key Features & Engineering Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider flex items-center gap-2 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  Key Features & Resilience
                </h3>
                <ul className="space-y-2.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#fbf8f1]/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0 shadow-[0_0_6px_#d4af37]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider flex items-center gap-2 font-mono">
                  <Cpu className="w-4 h-4 text-[#d4af37]" />
                  Tech Stack & Engineering
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-[#04140e] text-[#fbf8f1]/90 border border-[#d4af37]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#d4af37]/15">
                  <h4 className="text-xs uppercase tracking-wider text-[#e5c361] font-semibold mb-1 flex items-center gap-1.5 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                    Impact & Significance
                  </h4>
                  <p className="text-xs sm:text-sm text-[#fbf8f1]/70 leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Links and Action Footer */}
            <div className="pt-4 border-t border-[#d4af37]/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d4af37] hover:bg-[#e5c361] text-[#04140e] font-bold text-sm transition-all shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.45)] hover:scale-[1.02]"
                  >
                    <span>Launch Live System</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#04140e] hover:bg-[#0c3927] text-[#fbf8f1] border border-[#d4af37]/30 font-semibold text-sm transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
              <button
                onClick={onClose}
                className="cursor-target px-4 py-2.5 rounded-xl text-[#fbf8f1]/60 hover:text-[#fbf8f1] font-medium text-sm transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
