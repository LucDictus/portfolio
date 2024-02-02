import React, { useEffect } from 'react';
import './Homepage.css';
import { gsap } from "gsap";

function Homepage() {
    useEffect(() => {
        gsap.fromTo('.Homepage-title-text', { opacity: 0, y: 150 }, { duration: 1, opacity: 1, y: 0, delay: 0.5 });
      }, []);

  return (
    <div className="Homepage-container">
        <div className="Homepage-background-glow"></div>

        <div className="Homepage-title">
            <h1 className="Homepage-title-text">
                Hé daar, ontdek mijn digitale creaties op mijn website. Benieuwd? Kom binnen en laat je inspireren!
            </h1>
        </div>

        <div className="Homepage-projects-container">
            <div className="Homepage-project-container" id="project-one-background">
                <div className="Homepage-project-created">coded</div>
                <div className="Homepage-project-title">Street Fighter II</div>
            </div>

            <div className="Homepage-project-container" id="project-two-background">
                <div className="Homepage-project-created">designed & coded</div>
                <div className="Homepage-project-title">Cinema App</div>
            </div>

            <div className="Homepage-project-container" id="project-three-background">
                <div className="Homepage-project-created">coded</div>
                <div className="Homepage-project-title">Video call</div>
            </div>

            <div className="Homepage-project-container" id="project-four-background">
                <div className="Homepage-project-created">branding & designed & coded</div>
                <div className="Homepage-project-title">Horloge app</div>
            </div>
        </div>

        <div className="Homepage-footer">
            <div className="Homepage-footer-title">
                Wil je iets creëren of wil je meer weten? Neem contact met mij op.
            </div>
        </div>
    </div>
  );
}

export default Homepage;
