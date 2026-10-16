import { GraduationCap, Code2, Layers, BookOpen, MapPin, Mail, ArrowRight, Download } from 'lucide-react';
import profileImage from '../assets/1769625753923.png';
import { profileData } from '../data/profile';
import { educationData } from '../data/education';
import { SectionHeader, Button } from '../components/ui';

export default function About() {
  const edu = educationData[0];

  return (
    <div className="space-y-16 sm:space-y-24 py-4 sm:py-8">
      {/* 1. Header */}
      <SectionHeader
        badge="Biography"
        badgeIcon={<BookOpen className="w-3.5 h-3.5" />}
        title="About Me"
        description="Background, academic training, and development focus as a software engineer."
      />

      {/* 2. Top Profile Section: Photo + Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start animate-fade-in-up">
        {/* Real Profile Image: Large, Borderless, Natural Cropping with Seamless Blending */}
        <div className="lg:col-span-5 w-full max-w-[360px] sm:max-w-[420px] mx-auto lg:mx-0">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-transparent [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)]">
            <img
              src={profileImage}
              alt={`Portrait photograph of ${profileData.name}`}
              loading="eager"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Story & Background */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3.5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
              Engineering web solutions with solid foundational roots
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              I am {profileData.name}, a {profileData.title} based in {profileData.location}. Having recently graduated with a Bachelor of Science in Computer Science and Engineering, I combine fundamental engineering disciplines with modern web technologies.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {profileData.bio}
            </p>
          </div>

          {/* Key Quick Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                <span>Location</span>
              </div>
              <div className="text-sm font-semibold text-slate-800">
                {profileData.location}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                <span>Degree</span>
              </div>
              <div className="text-sm font-semibold text-slate-800">
                BSc in Computer Science &amp; Eng.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Focus Areas</span>
              </div>
              <div className="text-sm font-semibold text-slate-800">
                Full-Stack &amp; React Ecosystem
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                <span>Status</span>
              </div>
              <div className="text-sm font-semibold text-slate-800">
                {profileData.statusBadge || 'Available for Hire'}
              </div>
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Button
              href="/projects"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              View My Work
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="md"
              icon={<Mail className="w-4 h-4" />}
            >
              Hire Me
            </Button>
            <Button
              href={profileData.resumeUrl}
              variant="outline"
              size="md"
              icon={<Download className="w-4 h-4" />}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Academic Background */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Academic Background
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Undergraduate computer science and engineering coursework.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {edu.degree} in {edu.field}
              </h3>
              <p className="text-sm text-indigo-600 font-medium">
                {edu.institution}
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 w-fit">
              {edu.graduationYear}
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-650 leading-relaxed">
            {edu.description}
          </p>

          {edu.highlights && edu.highlights.length > 0 && (
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Highlights &amp; Coursework:
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {edu.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 4. Engineering Mindset & Approach */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Development Mindset
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Guiding engineering principles for building robust software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 w-fit">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Core CS Foundations
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Applying sound data structures, object-oriented patterns, and algorithmic thinking to write scalable and maintainable logic.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 w-fit">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Modern Web Stack
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Leveraging React 19, TypeScript type contracts, and utility styling to deliver fast, responsive, and accessible user interfaces.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 w-fit">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Continuous Learning
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Staying active in modern development practices, learning evolving backend frameworks, and consistently expanding technical knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Contact Invitation Callout */}
      <section className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Let's build something together
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            I'm currently open to engineering roles, collaborations, and technical discussions.
          </p>
        </div>
        <Button href="/contact" variant="primary" size="md" icon={<Mail className="w-4 h-4" />}>
          Get in Touch
        </Button>
      </section>
    </div>
  );
}
