// pages/projects.js or pages/projects.tsx

import React from 'react';
import styles from '@/styles/Projects.module.css'; // You can create a CSS module file for styling

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    link: 'https://example.com/project-one',
  },
  {
    title: 'Project Two',
    description: 'An overview of Project Two.',
    link: 'https://example.com/project-two',
  },
  {
    title: 'Project Three',
    description: 'Details about Project Three.',
    link: 'https://example.com/project-three',
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
