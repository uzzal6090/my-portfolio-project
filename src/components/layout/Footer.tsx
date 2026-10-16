import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200/80 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="text-center sm:text-left space-y-1">
            <div className="font-bold text-slate-900 text-sm sm:text-base">
              {profileData.name}
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              {profileData.title} &amp; Computer Science and Engineering graduate based in {profileData.location}.
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
            <Link to="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-indigo-600 transition-colors">
              About
            </Link>
            <Link to="/projects" className="hover:text-indigo-600 transition-colors">
              Projects
            </Link>
            <Link to="/skills" className="hover:text-indigo-600 transition-colors">
              Skills
            </Link>
            <Link to="/resume" className="hover:text-indigo-600 transition-colors">
              Resume
            </Link>
            <Link to="/contact" className="hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            {profileData.socialLinks.github && !profileData.socialLinks.github.includes('your-username') && (
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
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
                className="p-2 text-slate-600 hover:text-blue-600 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            {profileData.email && !profileData.email.includes('your.email') && (
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email Me"
                className="p-2 text-slate-600 hover:text-indigo-600 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <p className="text-slate-400">
            Built with React 19, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
