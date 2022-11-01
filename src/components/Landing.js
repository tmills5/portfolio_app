import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Landing() {

    return(
        <div className="landing-parent-div">
            <section className='landing-section a'></section>
            <section className='landing-section b'></section>
            <section className='landing-section c'></section>
            <a href='/home'>
                <Fade duration='3000' className='center-text'>
                    Tyson Mills
                </Fade>
            </a>
        </div>
    )
};

export default Landing;