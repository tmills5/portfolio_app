import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

function Landing() {

    return(
        <div className="landing-parent-div">
            <div className="landing-text-container">
                <h1>
                    <Fade><Link to="/home">Enter</Link></Fade>
                </h1>
            </div>
        </div>
    )
};

export default Landing;