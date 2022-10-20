import React from 'react';
import { Link } from 'react-router-dom';


function Landing() {
    return(
        <div className="landing-parent-container">
            <h1>
                <span>I'm&nbsp;</span>
                <span>Tyson.&nbsp;</span>
                <span>Former Firefighter.&nbsp;</span><br/>
                <span>Father.&nbsp;</span>
                <span>Husband.&nbsp;</span><br/>
                <span>Now,&nbsp;</span>
                <span>I'm&nbsp;</span>
                <span>a&nbsp;</span>
                <span>web&nbsp;</span>
                <span>developer.&nbsp;</span>
                <span><Link to="/home">Enter</Link></span>
            </h1>
        </div>
    )
};

export default Landing;