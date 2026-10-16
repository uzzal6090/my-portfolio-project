import { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, AlertCircle, ArrowUpRight, Copy, Check } from 'lucide-react';
import { SectionHeader, Button, GithubIcon, LinkedinIcon } from '../components/ui';
import { profileData } from '../data/profile';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose a direct mailto URI to launch the user's email client with pre-filled content
    const mailtoBody = encodeURIComponent(
      `Hi Uzzal,\n\n${formData.message}\n\nRegards,\n${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoSubject = encodeURIComponent(formData.subject);
    const mailtoUrl = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="space-y-12 py-4 sm:py-8 animate-fade-in-up">
      {/* 1. Header */}
      <SectionHeader
        badge="Get in Touch"
        badgeIcon={<Mail className="w-3.5 h-3.5" />}
        title="Let's Connect"
        description="Whether you have an engineering opportunity, a project collaboration, or a technical inquiry, my inbox is open."
      />

      {/* 2. Contact Details & Form Grid */}
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Left: Verified Contact Channels (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-5">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-900">Direct Contact</h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Reach out directly via email or professional profiles.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {/* Email Card with Quick Copy */}
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-slate-500 block">Email</span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-indigo-600 truncate block transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900">
                    {profileData.location}
                  </span>
                </div>
              </div>

              {/* LinkedIn Card */}
              {profileData.socialLinks.linkedin && !profileData.socialLinks.linkedin.includes('your-username') && (
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-100/70 flex items-center justify-between gap-3 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 block">LinkedIn</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        /in/uzzal-hosen
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </a>
              )}

              {/* GitHub Card */}
              {profileData.socialLinks.github && !profileData.socialLinks.github.includes('your-username') && (
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-100/70 flex items-center justify-between gap-3 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-100 text-slate-800 shrink-0">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 block">GitHub</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        @uzzal6090
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right: Functional, Accessible Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-6">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-900">Send a Direct Message</h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Fill in your message below. Submitting will open your default email application with pre-composed details.
              </p>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 text-xs sm:text-sm text-indigo-900 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold">Email Composer Launched</p>
                  <p className="text-slate-600">
                    If your email client didn't open automatically, you can send directly to{' '}
                    <a href={`mailto:${profileData.email}`} className="font-semibold text-indigo-600 underline">
                      {profileData.email}
                    </a>.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200/90 hover:border-slate-300'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-600 flex items-center gap-1 pt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200/90 hover:border-slate-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 flex items-center gap-1 pt-0.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-bold text-slate-700">
                  Subject <span className="text-rose-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.subject ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200/90 hover:border-slate-300'
                  }`}
                />
                {errors.subject && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 pt-0.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-bold text-slate-700">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200/90 hover:border-slate-300'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 pt-0.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Action */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={<Send className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
