import { Cpu, Terminal, Layout, Binary, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeader, SkillBadge, Button } from '../components/ui';
import { skillsData } from '../data/skills';

// Helper to pair meaningful icons with categories
function getCategoryIcon(categoryName: string) {
  if (categoryName.toLowerCase().includes('language')) {
    return <Terminal className="w-5 h-5 text-indigo-600" />;
  }
  if (categoryName.toLowerCase().includes('frontend')) {
    return <Layout className="w-5 h-5 text-indigo-600" />;
  }
  if (categoryName.toLowerCase().includes('core') || categoryName.toLowerCase().includes('science')) {
    return <Binary className="w-5 h-5 text-indigo-600" />;
  }
  return <Wrench className="w-5 h-5 text-indigo-600" />;
}

export default function Skills() {
  const totalSkillsCount = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <div className="space-y-12 py-4 sm:py-8 animate-fade-in-up">
      {/* 1. Header */}
      <SectionHeader
        badge="Technical Arsenal"
        badgeIcon={<Cpu className="w-3.5 h-3.5" />}
        title="Skills & Technologies"
        description="A structured overview of core programming languages, modern web frameworks, foundational computer science disciplines, and developer tools."
      />

      {/* 2. Grouped Category Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 space-y-4"
          >
            {/* Category Title & Icon */}
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-100 shrink-0">
                {getCategoryIcon(category.category)}
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  {category.category}
                </h2>
                <p className="text-xs text-slate-500">
                  {category.skills.length} verified technologies
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {category.description}
            </p>

            {/* Badges Matrix */}
            <div className="flex flex-wrap gap-2 pt-2">
              {category.skills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  size="md"
                  variant="default"
                  className="hover:border-indigo-300 hover:text-indigo-900 transition-colors"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Academic & Fundamentals Focus Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-indigo-700 font-bold text-base">
          <CheckCircle2 className="w-5 h-5 text-indigo-600" />
          <span>Undergraduate Computer Science Grounding</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Throughout my Bachelor of Science in Computer Science and Engineering, I developed a strong grasp of data structures, algorithmic complexity, object-oriented software architecture, and database theory. These principles form the bedrock of how I write reliable, performant React and TypeScript code today.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-500 border-t border-slate-100">
          <span>{totalSkillsCount} total technical competencies mapped across 4 disciplines.</span>
          <Button href="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />} iconPosition="right">
            Discuss an Opportunity
          </Button>
        </div>
      </div>
    </div>
  );
}
