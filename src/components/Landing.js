import React from 'react';
import { Link } from 'react-router-dom';
import { Fade, Zoom, Hinge, Roll, Slide } from 'react-awesome-reveal';

function Landing() {

    return(
        <div className="landing-parent-div">
            {/* <div className="landing-text-container">
            <Fade cascade damping={1.5}>
                <h1>Hi, I'm Tyson.</h1>
                <h2>Developer.</h2>
            </Fade>
            </div> */}
            <section className='home-section a'></section>
            <section className='home-section b'></section>
            <section className='home-section c'></section>
            <a href='/projects'>
                <Fade duration='3000' className='center-text'>
                    Tyson Mills
                </Fade>
            </a>
        </div>
    )
};

export default Landing;