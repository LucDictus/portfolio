import React from 'react';
import './HomePage.css';

function HomePage() {
    const date = new Date();
    const fullYear = date.getFullYear();

    return ( 
        <>
            <div id='parent'>
                <div id='container'>
                    <div id='HomePage-work-name'>Front-End Developer</div>
                    <div id='HomePage-date'>{fullYear}</div>
                    <div id='HomePage-title'>
                        <div id='HomePage-title-text'>PORT-FOLIO</div>
                        <div id='HomePage-title-background' className='HomePage-slide-left'></div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default HomePage;