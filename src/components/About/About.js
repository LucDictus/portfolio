import React, { useEffect } from 'react';
import './About.css';
import { gsap } from "gsap";

function About() {
  useEffect(() => {
    gsap.fromTo('.About-title-text', { opacity: 0, y: 150 }, { duration: 1, opacity: 1, y: 0, delay: 0.5 });
  }, []);

  return (
    <div className="About-container">
        <div className="background-glow"></div>

        <div className="About-title">
            <h1 className="About-title-text">
              Over mij
            </h1>
        </div>

        <div className="About-content">
          <div className="About-content-skills-container">
            <div className="About-content-skills-text-container">
              <div className="About-content-skills-title">Mijn skills</div>
              <div className="About-content-skills-text">
                Ik ben een creatieve front-end developer met een passie voor design en user experience. Ik ben gespecialiseerd in het ontwikkelen van websites en webapplicaties met HTML, CSS en JavaScript. Ik ben ook bekend met React, Node.js, Express en MongoDB. Ik ben altijd op zoek naar nieuwe technologieën en frameworks om mijn kennis uit te breiden.
              </div>
            </div>

            <div className="About-content-skills-image-container">
              <img src="./assets/images/AboutMeSkills-1.png" alt="Skills" className="About-content-skills-image-top" />
              <img src="./assets/images/AboutMeSkills-2.png" alt="Skills" className="About-content-skills-image-top" />
              <img src="./assets/images/AboutMeSkills-3.png" alt="Skills" className="About-content-skills-image-bottom" />
            </div>
          </div>

          <div className="About-content-about-me-container">
            <div className="About-content-about-me-image-container">
              <img src="./assets/images/AboutMeImage.png" alt="About me" className="About-content-about-me-image" />
              <div className="About-content-about-me-image-name">Luc Dictus</div>
            </div>

            <div className="About-content-about-me-text-container">
              <div className="About-content-about-me-title">Over mij</div>
              <div className="About-content-about-me-text">
                Ik ben een creatieve front-end developer met een passie voor design en user experience. Ik ben gespecialiseerd in het ontwikkelen van websites en webapplicaties met HTML, CSS en JavaScript. Ik ben ook bekend met React, Node.js, Express en MongoDB. Ik ben altijd op zoek naar nieuwe technologieën en frameworks om mijn kennis uit te breiden.
              </div>
            </div>
          </div>

          <div className="About-content-blog-container">

          </div>
        </div>
    </div>
  );
}

export default About;
