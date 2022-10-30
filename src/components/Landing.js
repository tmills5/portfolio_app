import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

function Landing() {

    return(
        <div className="landing-parent-div">
            <div className="landing-text-container">
            <Fade cascade damping={1.5}>
                <h1>Hi, I'm Tyson.</h1>
                <h2>Developer.</h2>
            </Fade>
            </div>
            <section className='home-section'></section>
            <section className='home-section'></section>
            <section className='home-section'></section>
        </div>
    )
};

export default Landing;