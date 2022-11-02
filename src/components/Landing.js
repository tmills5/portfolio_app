import React from 'react';
import { Fade } from 'react-awesome-reveal';
import simpleTreeLogo from '/Users/merletmills/Development/portfolio/portfolio_app/src/assets/images/simpleTreeLogo.png';

function Landing() {

    return(
        <div className="landing-parent-div">
            <a href='/home'>
                <Fade duration='3000' className='center-text'>
                    <img src={simpleTreeLogo} />
                </Fade>
            </a>
        </div>
    )
};

export default Landing;