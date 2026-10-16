import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive multi-page developer portfolio built with React 19, TypeScript, Tailwind CSS v4, and React Router.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router'],
    githubUrl: 'https://github.com/your-username/my-portfolio-project',
    liveUrl: 'https://your-portfolio-demo.com',
    featured: true,
  },
  {
    id: 'project-2',
    title: '[Project 2 Title - e.g. Full-Stack Web Application]',
    description: '[Brief description of what your second project does, what problem it solves, and its architecture.]',
    tags: ['React', 'TypeScript', 'REST API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/your-username/project-two',
    liveUrl: 'https://project-two-demo.com',
    featured: true,
  },
  {
    id: 'project-3',
    title: '[Project 3 Title - e.g. Algorithm Visualizer / Academic Project]',
    description: '[Brief description of your third project, highlighting core algorithms, data structures, or engineering concepts.]',
    tags: ['JavaScript', 'Algorithms', 'CSS3', 'Data Structures'],
    githubUrl: 'https://github.com/your-username/project-three',
    liveUrl: 'https://project-three-demo.com',
    featured: false,
  },
];
