import React from 'react';
import { Fade } from 'react-awesome-reveal';
import simpleTreeLogo from '/Users/MerleTMills/Development/code/portfolio_app/src/assets/images/simpleTreeLogo.png';

function Landing() {

    return(
        <div className="landing-parent-div">
            <a href='/home'>
                <Fade duration='3000' className='center-text'>
                    <img src={simpleTreeLogo} alt=""/>
                </Fade>
            </a>
        </div>
    )
};

export default Landing;