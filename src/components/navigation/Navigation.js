import React from "react";
import "./Navigation.css";
import { gsap } from "gsap";


function NavigationMobileButton() {
    // const openNavButton = document.querySelector(".Navigation-mobile-button-open");
    // const closeNavButton = document.querySelector(".Navigation-mobile-button-close");
    // const navMenu = document.querySelector(".Navigation-mobile-menu");
    // const navItems = document.querySelectorAll(".Navigation-mobile-menu-items a");

    // var tl = gsap.timeline({ paused: true });

    // tl.to(navMenu, {
    //     duration: 1,
    //     opacity: 1,
    //     height: '100vh', // change this to 100vh for full-height menu
    //     ease: 'expo.inOut',
    // })
    // tl.from(navItems, {
    //     duration: 1,
    //     opacity: 0,
    //     y: 20,
    //     stagger: 0.1,
    //     ease: 'expo.inOut',
    // }, "-=0.5");
    
    // tl.reverse();
    
    // openNavButton.addEventListener('click', () => {
    //     tl.reversed(!tl.reversed());
    // });

    return (
        <div className="Navigation-mobile-container">
            <button className="Navigation-mobile-button-open">Menu</button>

            <div className="Navigation-mobile-menu navigation-animation">
                <div className="Navigation-mobile-menu-items">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>

                <button className="Navigation-mobile-button-close">Close</button>
            </div>
        </div>
    );
}

export default NavigationMobileButton;
