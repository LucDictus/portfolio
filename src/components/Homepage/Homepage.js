import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import { gsap } from "gsap";
import ProjectsList from '../Projects/ProjectsList/ProjectsList';
import Glow from '../Glow/Glow';

function Homepage({ setActivePage }) {
    useEffect(() => {
        gsap.fromTo('.Homepage-title-text', { opacity: 0, y: 150 }, { duration: 1, opacity: 1, y: 0, delay: 0.5 });
      }, []);

      const changePage = (page) => {
        setActivePage(page);
    };

  return (
    <div className="Homepage-container">
        <div className="background-glow">
            <Glow />
        </div>

        <div className="Homepage-title">
            <h1 className="Homepage-title-text">
                Heuj, ontdek mijn digitale creaties op men website. Benieuwd? Kom binnen en laat je inspireren!
            </h1>
        </div>

        <ProjectsList />

        <div className="Homepage-footer">
            <div className="Homepage-footer-title">
                Wil je iets creëren of wil je meer weten?  <br></br> 
                <Link to="/contact" className="Homepage-footer-contact-link">Neem contact met mij op.</Link>
            </div>
            <div className="Homepage-footer-socials">
                <a href="https://www.linkedin.com/in/luc-dictus-884394290/" target="_blank" className="Homepage-footer-social-link">LinkedIn</a>
                <a href="https://github.com/LucDictus" target="_blank" className="Homepage-footer-social-link">Github</a>
            </div>
        </div>
    </div>
  );
}

export default Homepage;
