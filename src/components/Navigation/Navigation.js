import React from 'react';
import './Navigation.css';

function Navigation() {
    return ( 
        <>
            <div id='parent'>
                <div id='container'>
                    <div id='Navigation-projects-container'>
                        <a class='Navigation-project'>
                            <div className='Navigation-project-number-container'>
                                <div className='Navigation-project-hashtag'>#</div>
                                <div className='Navigation-project-number'>1</div>
                            </div>
                            <div className='Navigation-project-info'>
                                <div className='Navigation-project-title'>Project Title</div>
                                <div className='Navigation-project-text'>bedrijf/school, jaar</div>
                            </div>
                        </a>

                        <a class='Navigation-project'>
                            <div className='Navigation-project-number-container'>
                                <div className='Navigation-project-hashtag'>#</div>
                                <div className='Navigation-project-number'>2</div>
                            </div>
                            <div className='Navigation-project-info'>
                                <div className='Navigation-project-title'>Project Title</div>
                                <div className='Navigation-project-text'>bedrijf/school, jaar</div>
                            </div>
                        </a>

                        <a class='Navigation-project'>
                            <div className='Navigation-project-number-container'>
                                <div className='Navigation-project-hashtag'>#</div>
                                <div className='Navigation-project-number'>3</div>
                            </div>
                            <div className='Navigation-project-info'>
                                <div className='Navigation-project-title'>Project Title</div>
                                <div className='Navigation-project-text'>bedrijf/school, jaar</div>
                            </div>
                        </a>

                        <a class='Navigation-project'>
                            <div className='Navigation-project-number-container'>
                                <div className='Navigation-project-hashtag'>#</div>
                                <div className='Navigation-project-number'>4</div>
                            </div>
                            <div className='Navigation-project-info'>
                                <div className='Navigation-project-title'>Project Title</div>
                                <div className='Navigation-project-text'>bedrijf/school, jaar</div>
                            </div>
                        </a>

                        <a class='Navigation-project'>
                            <div className='Navigation-project-number-container'>
                                <div className='Navigation-project-hashtag'>#</div>
                                <div className='Navigation-project-number'>5</div>
                            </div>
                            <div className='Navigation-project-info'>
                                <div className='Navigation-project-title'>Project Title</div>
                                <div className='Navigation-project-text'>bedrijf/school, jaar</div>
                            </div>
                        </a>
                    </div>
                    <a href='../AboutMe/AboutMe.js'>
                        <div id='Navigation-name'>
                            Luc Dictus <br></br>
                            <span>Front-End Dev.</span>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Navigation;