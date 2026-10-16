import { useState, useMemo } from 'react';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';
import { SectionHeader, ProjectCard } from '../components/ui';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  // Extract unique technology tags from actual data
  const filterOptions = useMemo(() => {
    const allTags = new Set<string>();
    projectsData.forEach((project) => {
      project.tags.forEach((tag) => allTags.add(tag));
    });
    return ['All', 'Featured', ...Array.from(allTags)];
  }, []);

  // Filter projects based on selection
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return projectsData;
    if (selectedFilter === 'Featured') return projectsData.filter((p) => p.featured);
    return projectsData.filter((p) => p.tags.includes(selectedFilter));
  }, [selectedFilter]);

  return (
    <div className="space-y-12 py-4 sm:py-8 animate-fade-in-up">
      {/* 1. Page Header */}
      <div className="space-y-4">
        <SectionHeader
          badge="Portfolio Gallery"
          badgeIcon={<FolderGit2 className="w-3.5 h-3.5" />}
          title="Featured Projects & Work"
          description="Explore software engineering applications, academic capstones, and web projects built with React, TypeScript, and modern tools."
        />

        {/* 2. Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2" aria-label="Filter projects by category or technology">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mr-1">
            <Filter className="w-3.5 h-3.5 text-indigo-600" />
            <span>Filter:</span>
          </div>
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200/90 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                {filter === 'Featured' && <Sparkles className="w-3 h-3 inline mr-1 text-amber-300" />}
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Project Cards Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-white border border-slate-200/90 space-y-3">
          <p className="text-base font-semibold text-slate-800">No projects found</p>
          <p className="text-sm text-slate-500">
            No projects matched the selected filter: <span className="font-medium">{selectedFilter}</span>
          </p>
          <button
            type="button"
            onClick={() => setSelectedFilter('All')}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 underline"
          >
            Reset filter to show all
          </button>
        </div>
      )}

      {/* 4. Bottom Note */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <span>
          Showing {filteredProjects.length} of {projectsData.length} projects from verified project records.
        </span>
        <span className="text-slate-400">
          Source code links are verified before being enabled.
        </span>
      </div>
    </div>
  );
}
