// pages/projects.js or pages/projects.tsx

import React from 'react';
import styles from '@/styles/Projects.module.css'; // You can create a CSS module file for styling
import { Navbar } from '@/components/navbar'; 
 

const projects = [
  {
    title: 'Maths yn Gymraeg',
    description: 'This is a simple flashcard website I made to help me practice for teaching maths in Welsh.',
    link: 'maths-yn-gymraeg.vercel.app/',
  },
  {
    title: 'All I ate',
    description: 'A recipe website to save all our favourite meals.',
    link: 'https://all-i-ate.vercel.app/',
  },
  {
    title: 'Health and fitness database',
    description: 'In another life I might have been a PT... Here is how I would organise my data.',
    link: 'https://github.com/laylaksn/Health-and-fitness-database/blob/main/README.md',
  },
  {
    title: 'Least-Squares PGD Mimetic SEM for first-order PDEs',
    description: 'Research from my PhD thesis in computational maths.',
    link: 'https://github.com/laylaksn/PhD-findings',
  },
  {
    title: 'Modelling Calcium Signalling in Fertilsation',
    description: 'Research from my MPhil in mathematical biology.',
    link: 'https://github.com/laylaksn/MPhil-Thesis',
  },
  {
    title: 'Maths tools',
    description: 'Website for some simple maths tools, using Python.',
    link: 'https://github.com/laylaksn/maths_tools',
  },
];

const Projects = () => {
  return (
    <div> <Navbar/>
    <div className={styles.projectsContainer}>
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
    </div>
  );
};

export default Projects;
