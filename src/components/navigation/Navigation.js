import React from "react";
import "./Navigation.css";
import { gsap } from "gsap";
import { useEffect } from "react";

function NavigationMobileButton() {

    return (
        <div className="Navigation-container">
            <button className="Navigation-mobile-button-open">Menu</button>

            <div className="Navigation-menu navigation-animation">
                <div className="Navigation-menu-items">
                    <a className="menu-link" href="#home">Home</a>
                    <a className="menu-link" href="#about">About</a>
                    <a className="menu-link" href="#services">Services</a>
                    <a className="menu-link" href="#contact">Contact</a>
                </div>

                <button className="Navigation-mobile-button-close">Close</button>
            </div>
        </div>
    );
}

export default NavigationMobileButton;
