import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Landing() {

    return(
        <div className="landing-parent-div">
            <section className='home-section a'></section>
            <section className='home-section b'></section>
            <section className='home-section c'></section>
            <a href='/home'>
                <Fade duration='3000' className='center-text'>
                    Tyson Mills
                </Fade>
            </a>
        </div>
    )
};

export default Landing;