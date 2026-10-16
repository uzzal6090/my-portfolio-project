# Uzzal Hosen | Full-Stack Software Developer Portfolio

A modern, responsive personal portfolio website showcasing my projects, technical skills, education, and Full-Stack Software Development journey.

## About the Project

This portfolio is designed to present my work and technical background in a clean, professional, and user-friendly way. It provides a central place for recruiters, developers, and potential collaborators to explore my projects and contact me.

The website focuses on responsive design, reusable React components, maintainable code, and a consistent visual experience.

## Features

- **Home:** Professional introduction and featured projects.
- **About:** Academic background and engineering interests.
- **Projects:** Project descriptions, technology tags, GitHub repositories, and live demos where available.
- **Skills:** Organized display of technical skills.
- **Resume:** Resume page and PDF download, when configured.
- **Contact:** Contact information and available communication options.
- **Responsive Design:** Layouts for mobile, tablet, and desktop.
- **Reusable Components:** Shared UI components for consistent styling.
- **Animations:** Subtle transitions and interactive effects.
- **Accessible UI:** Semantic HTML, keyboard-friendly interactions, and readable text.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Lucide React

## Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm
- Git (optional, for version control)

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate into the project directory:

   ```bash
   cd my-portfolio-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually:

   `http://localhost:5173`

### Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
my-portfolio-project/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── education.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── types/
│   │   └── portfolio.ts
│   ├── App.tsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

*This structure reflects the intended organization; adjust it if your actual project differs.*

## Customization Guide

### Update Personal Information

Edit:

`src/data/profile.ts`

Update your name, introduction, and other existing profile fields. Keep the property names consistent with the TypeScript types.

### Add a New Project

Edit:

`src/data/projects.ts`

Add a new project object to the existing projects array, following the `Project` type.

Include:
- Project title
- Description
- Technology tags
- GitHub URL, if available
- Live demo URL, if available
- Featured status, if supported

When the Projects page maps over the project data, the new project can appear automatically without manually creating another card.

### Update Skills

Edit:

`src/data/skills.ts`

Add or update skills you genuinely have, using the existing categories and types.

### Update Your Profile Photo

The current profile photo is stored at:

`src/assets/1769625753923.png`

Keep the import path in sync if you intentionally change the asset in the future.

## Project Links

- **Live Demo:** Add your deployed portfolio URL here.
- **GitHub Repository:** Add the repository URL for this portfolio here.
- **GitHub Profile:** https://github.com/uzzal6090
- **LinkedIn:** https://www.linkedin.com/in/uzzal-hosen-b9ba12395/

## Future Improvements

- Further refine responsive layouts and accessibility.
- Improve page transitions and subtle motion effects.
- Add verified projects and screenshots.
- Optimize images and overall loading performance.
- Expand the portfolio as I continue learning and building software.

## Author

**Uzzal Hosen**

Computer Science and Engineering graduate interested in software engineering, modern web technologies, and continuous learning.

- GitHub: https://github.com/uzzal6090
- LinkedIn: https://www.linkedin.com/in/uzzal-hosen-b9ba12395/

---

If you find this portfolio interesting, feel free to explore my projects and connect with me.
