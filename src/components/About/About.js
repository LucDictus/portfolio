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
              <img src="./assets/images/skills-image-1.jpg" alt="Skills" className="About-content-skills-image-top" id="about-skills-image-1" />
              <img src="./assets/images/skills-image-2.jpg" alt="Skills" className="About-content-skills-image-top" id="about-skills-image-2" />
              <img src="./assets/images/skills-image-3.png" alt="Skills" className="About-content-skills-image-bottom" id="about-skills-image-3" />
            </div>
          </div>

          <div className="About-content-about-me-container">
            <div className="About-content-title">Over mij</div>

            <div className="About-content-about-me-content-container">
              <div className="About-content-about-me-image">
                <img src="./assets/images/about-me-image.jpg" alt="About me" className="About-content-about-me-image" />
              </div>

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
