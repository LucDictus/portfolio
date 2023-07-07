import React from 'react';
import './Navigation.css';

function Navigation() {
    return ( 
        <>
            <div id='parent'>
                <div id='container'>
                    <div id='Navigation-projects-container' class="Nav-slide-left">
                        <a class='Navigation-project'>
                            <div className='Navigation-project-number-container'>
                                <div className='Navigation-project-hashtag' id="hashtag-1">#</div>
                                <div className='Navigation-project-number'>1</div>
                            </div>
                            <div className='Navigation-project-info'>
                                <div className='Navigation-project-title'>COMING SOON</div>
                                <div className='Navigation-project-text'>Personal, 2023</div>
                            </div>
                        </a>

                        <a class='Navigation-project'>
                            <div className='Navigation-project-number-container'>
                                <div className='Navigation-project-hashtag' id='hashtag-2'>#</div>
                                <div className='Navigation-project-number'>2</div>
                            </div>
                            <div className='Navigation-project-info'>
                                <div className='Navigation-project-title'>COMING SOON</div>
                                <div className='Navigation-project-text'>. . . . . . . . . . , 20''</div>
                            </div>
                        </a>

                        <a class='Navigation-project'>
                            <div className='Navigation-project-number-container'>
                                <div className='Navigation-project-hashtag' id='hashtag-3'>#</div>
                                <div className='Navigation-project-number'>3</div>
                            </div>
                            <div className='Navigation-project-info'>
                                <div className='Navigation-project-title'>COMING SOON</div>
                                <div className='Navigation-project-text'>. . . . . . . . . . , 20''</div>
                            </div>
                        </a>

                        <a class='Navigation-project'>
                            <div className='Navigation-project-number-container'>
                                <div className='Navigation-project-hashtag' id='hashtag-4'>#</div>
                                <div className='Navigation-project-number'>4</div>
                            </div>
                            <div className='Navigation-project-info'>
                                <div className='Navigation-project-title'>COMING SOON</div>
                                <div className='Navigation-project-text'>. . . . . . . . . . , 20''</div>
                            </div>
                        </a>

                        <a class='Navigation-project'>
                            <div className='Navigation-project-number-container'>
                                <div className='Navigation-project-hashtag' id='hashtag-5'>#</div>
                                <div className='Navigation-project-number'>5</div>
                            </div>
                            <div className='Navigation-project-info'>
                                <div className='Navigation-project-title'>COMING SOON</div>
                                <div className='Navigation-project-text'>. . . . . . . . . . , 20''</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation;