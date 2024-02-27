import React from 'react';
import './ProjectsList.css';
import { gsap } from "gsap";

function ProjectsList() {
  return (
    <div className="Projects-projects-container">
      <div className="Projects-project-container" id="project-one-background">
        <img src="./assets/images/StreetFighterCover.png" alt="Street Fighter II" className="Projects-project-image" />
        <div className="Projects-project-created">coded</div>
        <div className="Projects-project-title">Street Fighter II</div>
      </div>

      <div className="Projects-project-container" id="project-two-background">
        <div className="Projects-project-created">coded</div>
        <div className="Projects-project-title">Cinema App</div>
      </div>

      <div className="Projects-project-container" id="project-three-background">
        <div className="Projects-project-created">coded</div>
        <div className="Projects-project-title">Video call</div>
      </div>

      <div className="Projects-project-container" id="project-four-background">
        <div className="Projects-project-created">branding & designed</div>
        <div className="Projects-project-title">Horloge app</div>
      </div>
    </div>
  );
}

export default ProjectsList;
