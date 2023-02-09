import React from 'react';
import { Fade } from 'react-awesome-reveal';
import logoWhite from '../assets/images/logoWhite.png';

function Landing() {

    return(
        <div className="landing-parent-div">
            <a href='/home'>
                {/* <Fade duration='3000' className='logo-div'> */}
                    <img src={logoWhite} alt="" className='landing-logo'/>
                {/* </Fade> */}
            </a>

            <Fade  duration='3000'>
                <p style={{"textAlign": "center"}}>&#8593;</p>
                <p style={{"textAlign": "center"}}>Enter</p>
            </Fade>
        </div>
    )
};

export default Landing;