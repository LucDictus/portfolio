import React from 'react';
import './ProjectsList.css';
import { gsap } from "gsap";
import projectsData from './projects.json'; // import the JSON file

function ProjectsList() {
  return (
    <div className="Projects-projects-container">
      {projectsData.projects.map((project, index) => (
        <div 
          className={`Projects-project-container`} 
          id={`project-${index + 1}-background`} 
          key={index}
          style={{ 
            backgroundImage: `url(./${project.image})` 
          }} // set the image as background
        >
          <div className="Projects-project-created">{project.created}</div>
          <div className="Projects-project-title">{project.title}</div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;