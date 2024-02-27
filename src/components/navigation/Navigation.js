import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './Navigation.css';
import ProgressCircle from "./Progressbar/ProgressCircle";

const Navigation = ({ setActivePage }) => {
    useEffect(() => {
        const openButton = document.querySelector('.Navigation-mobile-button-open');
        const closeButton = document.querySelector('.Navigation-mobile-button-close');
        const menu = document.querySelector('.Navigation-menu');

        openButton.addEventListener('click', () => {
            menu.classList.add('open');
        });

        closeButton.addEventListener('click', () => {
            menu.classList.remove('open');
        });
    }, []);

    const changePage = (page) => {
        setActivePage(page);
    };



    return (
        <div className="Navigation-container">
            <button className="Navigation-mobile-button-open">Menu</button>

            <div className="Navigation-menu navigation-animation">
                <div className="Navigation-menu-items">
                    {/* Use Link components for navigation */}
                    <Link to="/" className="menu-link" onClick={() => changePage('home')}>Home</Link>
                    <Link to="/projects" className="menu-link" onClick={() => changePage('projects')}>Projects</Link>
                    <Link to="/about" className="menu-link" onClick={() => changePage('about')}>About</Link>
                    <Link to="/contact" className="menu-link" onClick={() => changePage('contact')}>Contact</Link>
                </div>

                <button className="Navigation-mobile-button-close">Close</button>
            </div>

            <div className="Navigation-progress-container">
                <ProgressCircle />
            </div>
        </div>
    );
};

export default Navigation;
