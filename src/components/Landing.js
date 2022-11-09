import React from 'react';
import { Fade } from 'react-awesome-reveal';
import logoWhite from '/Users/MerleTMills/Development/code/portfolio_app/src/assets/images/logoWhite.png';

function Landing() {

    return(
        <div className="landing-parent-div">
            <a href='/home'>
                <Fade duration='3000' className='center-text'>
                    <img src={logoWhite} alt=""/>
                </Fade>
            </a>
        </div>
    )
};

export default Landing;