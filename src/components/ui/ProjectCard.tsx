import { useState } from 'react';
import { ExternalLink, FolderCode, Sparkles } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { GithubIcon } from './Icons';
import SkillBadge from './SkillBadge';

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

/**
 * Validates whether a URL is a genuine, actionable link rather than
 * a template placeholder (e.g. contains 'your-username' or 'example.com').
 */
export function isValidProjectUrl(url?: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed || trimmed === '#' || trimmed === '/') return false;

  // Filter out placeholder keywords
  const placeholderPatterns = [
    'your-username',
    'your-portfolio-demo.com',
    'project-two-demo.com',
    'project-three-demo.com',
    'example.com',
    '[',
    ']',
  ];

  if (placeholderPatterns.some((pattern) => trimmed.includes(pattern))) {
    return false;
  }

  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  const hasValidGithub = isValidProjectUrl(project.githubUrl);
  const hasValidLiveDemo = isValidProjectUrl(project.liveUrl);
  const hasAnyValidLink = hasValidGithub || hasValidLiveDemo;

  return (
    <article
      className={`group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 hover:-translate-y-1.5 motion-reduce:hover:transform-none transition-all duration-300 overflow-hidden ${className}`.trim()}
    >
      {/* Top Banner: Project Image or Graceful Fallback */}
      <div className="relative w-full h-44 sm:h-48 bg-slate-50 overflow-hidden flex items-center justify-center border-b border-slate-100">
        {project.image && !imageError ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot preview`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center space-y-2 select-none">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100 group-hover:scale-105 transition-transform">
              <FolderCode className="w-8 h-8" />
            </div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {project.tags[0] || 'Software Project'}
            </span>
          </div>
        )}

        {/* Featured Ribbon Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full shadow-2xs backdrop-blur-xs">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Featured</span>
          </div>
        )}
      </div>

      {/* Card Content Area */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-4 pt-2">
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <SkillBadge key={tag} name={tag} size="sm" variant="muted" />
            ))}
          </div>

          {/* Action Links or Pending Notice */}
          <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
            {hasValidGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg border border-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}

            {hasValidLiveDemo && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            {/* When URLs are placeholder templates, display a safe non-clickable status indicator */}
            {!hasAnyValidLink && (
              <span className="text-xs text-slate-400 italic">
                Links pending (add repository in data file)
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
