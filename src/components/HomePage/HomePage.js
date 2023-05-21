import React from 'react';
import './HomePage.css';
import { navOpen } from '../../App';

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
                    <div id='HomePage-name'>Luc Dictus</div>
                    <div id='HomePage-next' onClick={navOpen}>
                        <svg width="32" height="32" fill="#272727" stroke="#272727" viewBox="0 0 512 512"><path d="M228.418 134.248c-8.331-8.331-21.839-8.331-30.17 0-8.331 8.331-8.331 21.839 0 30.17L289.83 256l-91.582 91.582c-8.331 8.331-8.331 21.839 0 30.17 8.331 8.331 21.839 8.331 30.17 0l106.667-106.667c8.331-8.331 8.331-21.839 0-30.17L228.418 134.248z" /></svg>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default HomePage;