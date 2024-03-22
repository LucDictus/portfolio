import React, { useEffect } from 'react';
import './Projects.css';
import { gsap } from "gsap";
import ProjectsList from './ProjectsList/ProjectsList.js';
import Glow from '../Glow/Glow';

function Projects() {
  useEffect(() => {
    gsap.fromTo('.Projects-title-text', { opacity: 0, y: 150 }, { duration: 1, opacity: 1, y: 0, delay: 0.5 });
  }, []);

  return (
    <div className="Projects-container">
        <div className="background-glow">
          <Glow />
        </div>

        <div className="Projects-title">
            <h1 className="Projects-title-text">
              Een paar van mijn projecten
            </h1>
        </div>

        <ProjectsList />
    </div>
  );
}

export default Projects;
