import { Download, FileText, Mail, MapPin, ExternalLink, GraduationCap, Code2, Briefcase, Info } from 'lucide-react';
import { SectionHeader, GithubIcon, LinkedinIcon } from '../components/ui';
import { profileData } from '../data/profile';
import { educationData } from '../data/education';
import { skillsData } from '../data/skills';
import { projectsData } from '../data/projects';

export default function Resume() {
  const edu = educationData[0];

  return (
    <div className="space-y-10 py-4 sm:py-8 animate-fade-in-up">
      {/* 1. Page Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-2 border-b border-slate-200/80">
        <SectionHeader
          badge="Curriculum Vitae"
          badgeIcon={<FileText className="w-3.5 h-3.5" />}
          title="Resume"
          description="A structured overview of education, technical proficiencies, and software development projects."
        />

        <div className="shrink-0">
          <a
            href={profileData.resumeUrl}
            download="resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>

      {/* 2. Document-Style Résumé Viewport */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 max-w-4xl mx-auto space-y-10 text-slate-800">
        {/* Résumé Header */}
        <div className="border-b border-slate-100 pb-8 space-y-3 text-center sm:text-left">
          <div className="space-y-1">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {profileData.name}
            </h2>
            <p className="text-lg font-semibold text-indigo-600">
              {profileData.title}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-sm text-slate-500 pt-1">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" />
              {profileData.location}
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-slate-400" />
              {profileData.email}
            </span>
            <span className="text-slate-300">•</span>
            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 underline"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={profileData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 underline"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
            Professional Summary
          </h3>
          <p className="text-sm sm:text-base text-slate-650 leading-relaxed">
            {profileData.bio}
          </p>
        </div>

        {/* Education Section */}
        <div className="space-y-3.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
            Education
          </h3>

          <div className="p-4 sm:p-5 rounded-xl bg-slate-50/70 border border-slate-100 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h4 className="text-base font-bold text-slate-900">
                {edu.degree} in {edu.field}
              </h4>
              <span className="text-xs font-medium text-slate-500">
                {edu.graduationYear}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-indigo-600 font-semibold">
              {edu.institution}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 pt-1 leading-relaxed">
              {edu.description}
            </p>

            {edu.highlights && edu.highlights.length > 0 && (
              <ul className="text-xs text-slate-500 space-y-1 pt-2 list-disc list-inside">
                {edu.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Technical Skills Summary */}
        <div className="space-y-3.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-indigo-600" />
            Technical Competencies
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            {skillsData.map((cat) => (
              <div key={cat.category} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 space-y-1">
                <span className="font-bold text-slate-900 block">{cat.category}</span>
                <span className="text-slate-600">
                  {cat.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Projects Summary */}
        <div className="space-y-3.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
            Selected Projects
          </h3>

          <div className="space-y-3">
            {projectsData.map((project) => (
              <div key={project.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900 text-sm">{project.title}</h4>
                  <span className="text-xs text-slate-400 font-mono">
                    {project.tags.slice(0, 3).join(' • ')}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Bottom Notice & Action */}
      <div className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>
            To update the downloadable document, place your finalized <code>resume.pdf</code> into the <code>public/</code> folder.
          </span>
        </div>

        <a
          href={profileData.resumeUrl}
          download="resume.pdf"
          className="inline-flex items-center gap-1.5 px-4 py-2 font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          Download PDF
        </a>
      </div>
    </div>
  );
}
