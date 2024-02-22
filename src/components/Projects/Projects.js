import React, { useEffect } from 'react';
import './Projects.css';
import { gsap } from "gsap";

function Projects() {
  useEffect(() => {
    gsap.fromTo('.Projects-title-text', { opacity: 0, y: 150 }, { duration: 1, opacity: 1, y: 0, delay: 0.5 });
  }, []);

  return (
    <div className="Projects-container">
        <div className="background-glow"></div>

        <div className="Projects-title">
            <h1 className="Projects-title-text">
              Een paar van mijn projecten
            </h1>
        </div>

        <div className="Projects-projects-container">
            <div className="Projects-project-container" id="project-one-background">
                <div className="Projects-project-created">coded</div>
                <div className="Projects-project-title">Street Fighter II</div>
            </div>

            <div className="Projects-project-container" id="project-two-background">
                <div className="Projects-project-created">designed & coded</div>
                <div className="Projects-project-title">Cinema App</div>
            </div>

            <div className="Projects-project-container" id="project-three-background">
                <div className="Projects-project-created">coded</div>
                <div className="Projects-project-title">Video call</div>
            </div>

            <div className="Projects-project-container" id="project-four-background">
                <div className="Projects-project-created">branding & designed & coded</div>
                <div className="Projects-project-title">Horloge app</div>
            </div>
        </div>
    </div>
  );
}

export default Projects;
