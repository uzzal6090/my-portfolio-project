import { ArrowRight, Download, Mail, MapPin, GraduationCap } from 'lucide-react';
import profileImage from '../assets/1769625753923.png';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { Button, SectionHeader, ProjectCard, SkillBadge, GithubIcon, LinkedinIcon } from '../components/ui';

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 2);
  const coreSkills = skillsData.flatMap((cat) => cat.skills).slice(0, 10);

  return (
    <div className="space-y-20 sm:space-y-28 py-4 sm:py-8">
      {/* 1. Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left: Introduction & Actions */}
        <div className="flex-1 space-y-6 text-center lg:text-left animate-fade-in-up">
          {/* Status Badge */}
          {profileData.statusBadge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/90 rounded-full shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{profileData.statusBadge}</span>
            </div>
          )}

          {/* Heading & Subtitle */}
          <div className="space-y-3.5">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Hi, I'm{' '}
              <span className="text-indigo-600">
                {profileData.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-slate-800">
              {profileData.title}
            </p>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              {profileData.tagline}
            </p>
          </div>

          {/* Location & Academic Meta */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-600">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-indigo-600" />
              {profileData.location}
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              BSc in Computer Science &amp; Engineering
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <Button
              href="/projects"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Explore Projects
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="md"
              icon={<Mail className="w-4 h-4" />}
            >
              Get in Touch
            </Button>
            <Button
              href="/about"
              variant="outline"
              size="md"
            >
              About Me
            </Button>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
            {profileData.socialLinks.github && !profileData.socialLinks.github.includes('your-username') && (
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-lg shadow-2xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {profileData.socialLinks.linkedin && !profileData.socialLinks.linkedin.includes('your-username') && (
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-slate-600 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-lg shadow-2xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            {profileData.email && !profileData.email.includes('your.email') && (
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Send Email"
                className="p-2 text-slate-600 hover:text-indigo-600 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-lg shadow-2xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
            <a
              href={profileData.resumeUrl}
              download="resume.pdf"
              aria-label="Download Resume PDF"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-lg border border-slate-200/90 shadow-2xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Right: Substantially Larger, Natural Portrait that Blends with Hero Background */}
        <div className="shrink-0 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] animate-fade-in-scale">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-transparent [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]">
            <img
              src={profileImage}
              alt={`Portrait photograph of ${profileData.name}, Full-Stack Developer`}
              loading="eager"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* 2. Featured Projects Section */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <SectionHeader
            badge="Selected Work"
            title="Featured Projects"
            description="Highlighted software engineering projects and applications."
          />
          <Button href="/projects" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            All Projects
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 3. Core Technologies Section */}
      <section className="space-y-6 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900">Technical Arsenal</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Languages, libraries, and core computer science tools I leverage.
            </p>
          </div>
          <Button href="/skills" variant="ghost" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />} iconPosition="right">
            Full Skills Matrix
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {coreSkills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} size="md" variant="default" />
          ))}
        </div>
      </section>
    </div>
  );
}
