import React from 'react';
import { Fade } from 'react-awesome-reveal';
import logoBlack from '../assets/images/logoBlack.png';

function Landing() {

    return(
        <div className="landing-parent-div">
            <a href='/home'>
                <Fade duration='3000' className='logo-div'>
                    <img src={logoBlack} alt=""/>
                </Fade>
            </a>
        </div>
    )
};

export default Landing;