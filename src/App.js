import './App.css';
import HomePage from './components/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import AboutMe from './components/AboutMe/AboutMe';
import React, { useState } from 'react';



const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleShowNavigation = () => {
    setShowAboutMe(false);
  };

  const [showAboutMe, setShowAboutMe] = useState(false);

  const handleShowAboutMe = () => {
    setShowAboutMe(true);
  };

  return (
    <div className="container">
      {!showAboutMe && (
        <div className={`flip-card ${isVisible ? 'show' : 'hide'}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <HomePage />
              <div id='HomePage-next' onClick={toggleVisibility}>
                  <svg width="32" height="32" fill="#272727" stroke="#272727" viewBox="0 0 512 512"><path d="M228.418 134.248c-8.331-8.331-21.839-8.331-30.17 0-8.331 8.331-8.331 21.839 0 30.17L289.83 256l-91.582 91.582c-8.331 8.331-8.331 21.839 0 30.17 8.331 8.331 21.839 8.331 30.17 0l106.667-106.667c8.331-8.331 8.331-21.839 0-30.17L228.418 134.248z" /></svg>
              </div>
              <div id='Navigation-name' onClick={handleShowAboutMe}>
                  Luc Dictus <br></br>
                  <span>Front-End Dev.</span>
              </div>
            </div>
            <div className="flip-card-back"></div>
          </div>
          {!isVisible && (
          <div className="second-flip-card-inner">
            <div className="second-flip-card-front">
              <Navigation />
              <div id='Navigation-name' onClick={handleShowAboutMe}>
                  Luc Dictus <br></br>
                  <span>Front-End Dev.</span>
              </div>
            </div>
            <div className="second-flip-card-back"></div>
          </div>
          )}
        </div>
      )}

      {showAboutMe && 
        <>
          <AboutMe />
          <div id='AboutMe-back' onClick={handleShowNavigation}>
            &lt;-Go back
          </div>
        </>
      }
    </div>
  )
};

export default App;