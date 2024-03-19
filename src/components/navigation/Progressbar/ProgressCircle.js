import React, { useEffect } from 'react';
import './ProgressCircle.css';

function ProgressCircle() {
  useEffect(() => {
    function updateProgressCircle() {
      const progressElement = document.querySelector('.progress-circle-bar');
      const scrollToTopElement = document.querySelector('.scroll-to-top');
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      let progress = (window.scrollY / totalHeight) * 283;
      progress = Math.min(progress, 283);
      progressElement.style.strokeDashoffset = 283 - progress;
  
      if (window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight) {
        
        scrollToTopElement.style.opacity = '1';
      } else {
        console.log(progress, totalHeight, window.scrollY);
        scrollToTopElement.style.opacity = '0';
      }
    }
  
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    const scrollToTopElement = document.querySelector('.scroll-to-top');
    scrollToTopElement.addEventListener('click', scrollToTop);
  
    updateProgressCircle();
    window.addEventListener('scroll', updateProgressCircle);
    window.addEventListener('resize', updateProgressCircle);
  
    return () => {
      window.removeEventListener('scroll', updateProgressCircle);
      window.removeEventListener('resize', updateProgressCircle);
      scrollToTopElement.removeEventListener('click', scrollToTop);
    };
  }, []);
  

  return (
    <div className="progress-circle-container">
      <svg className="progress-circle" viewBox="0 0 100 100">
        <circle className="progress-background" cx="50" cy="50" r="45"></circle>
        <circle className="progress-circle-bar" cx="50" cy="50" r="45"></circle>
      </svg>
      <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
    </div>
  );
}

export default ProgressCircle;
