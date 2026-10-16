import type { SkillCategory } from '../types/portfolio';

export const skillsData: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages learned throughout academic coursework and project development.',
    skills: [
      { name: 'JavaScript (ES6+)' },
      { name: 'TypeScript' },
      { name: 'C / C++' },
      { name: 'Java' },
      { name: 'Python' },
    ],
  },
  {
    category: 'Frontend & Web Development',
    description: 'Modern libraries and tools used for building interactive web interfaces.',
    skills: [
      { name: 'React 19' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'React Router' },
      { name: 'Vite' },
    ],
  },
  {
    category: 'Computer Science Core',
    description: 'Foundational engineering disciplines from BSc in Computer Science & Engineering.',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'Object-Oriented Programming (OOP)' },
      { name: 'Database Management Systems (DBMS)' },
      { name: 'Operating Systems' },
      { name: 'Software Engineering Principles' },
    ],
  },
  {
    category: 'Tools & Version Control',
    description: 'Essential developer tools for building, versioning, and debugging software.',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'npm' },
      { name: 'REST APIs' },
    ],
  },
];
