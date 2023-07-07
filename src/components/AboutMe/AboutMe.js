import React from 'react';
import './AboutMe.css';

function AboutMe() {

    return ( 
        <>
            <div id='parent'>
                <div id='container'>
                    <div id='AboutMe-Photo-Container'>
                        <div id='AboutMe-Photo'></div>
                        <div id='AboutMe-Photo-Name'>Luc</div>
                        <div id='AboutMe-Photo-Background'></div>
                    </div>
                    <div id='AboutMe-Text'>
                        Hello.
                        I’m a Web development Student.
                        This portfolio will present some of
                        the project I’ve been making in
                        the past couple of years. I hope
                        you will enjoy. And thank you
                        for your attention.
                        <br></br>
                        <br></br>
                        <br></br>
                        Currently I’m studying at the
                        ROC Tilburg in the Netherlands.
                        I’m in my second year of the
                        Web development course.
                        At the moment I’m learning React
                        and I’m really enjoying it.
                        So I've started a new project
                        with React. That's coming soon
                        as a project on my portfolio.
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;