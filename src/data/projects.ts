import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Bangla News 24 - A Modern News Portal',
    image: 'src/assets/banglanews24.png',
    description: 'Bangla News 24 is a modern, responsive news portal built with React 19, TypeScript, Tailwind CSS v4, Vite, and React Router. It features a clean and user-friendly interface, allowing users to easily browse and read news articles across various categories.',
    tags: ['React', 'TypeScript', 'Next.js', 'MongoDB', 'Tailwind CSS', 'Vite', 'React Router'],
    githubUrl: 'https://github.com/uzzal6090/bangla-news-24',
    liveUrl: 'https://bangla-news-24-two.vercel.app/',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'BazarDor',
    image: 'src/assets/bazardor.png',
    description: 'BazarD is a modern, responsive multi-page e-commerce website built with React 19, TypeScript, Tailwind CSS v4, and REST API integration.',
    tags: ['Next.js', 'react-hot-toast', 'DaisyUI', 'BettherAuth(MongoDB Adapter)', 'TypeScript', 'REST API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/uzzal6090/bazardor',
    liveUrl: 'https://bazardor.vercel.app/',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'DevStack',
    image: 'src/assets/devstack.png',
    description: 'DevStack is a modern, responsive developer portfolio built with React 19, TypeScript, Tailwind CSS v4, and React Router. It features a clean and user-friendly interface, allowing users to easily browse and read information about the developer\'s projects and skills.',
    tags: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'React Router'],
    githubUrl: 'https://github.com/uzzal6090/devstack',
    liveUrl: 'https://devstack.vercel.app/',
    featured: false,
  },
];
