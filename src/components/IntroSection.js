import React from 'react';
import headshot from '../assets/images/TyHeadshotNoBg.png';
import { Slide, Fade } from 'react-awesome-reveal';

function IntroSection() {
  
  return(
    <div className='intro-section'>
    <section id="intro">
      <article>
      <div className='intro-text'>
        <Fade cascade damping='1' triggerOnce='true'>
          <p className='name'>Welcome, I'm <Slide triggerOnce='true'><span>Tyson.</span></Slide></p>
          <Slide triggerOnce='true'><h2>I'm a Web Developer.</h2></Slide>
        </Fade>
        <p>Full Stack Software Engineer - Based in Mississippi, USA</p>
        <p>
          From career firefighter to software developer - I bring a strong sense of professionalism, adaptability, and resourcefulness to all of my work.
        </p>
        {/* <div className="arrow"></div> */}
      </div>
      <img src={headshot} alt="Tyson's face" />

      </article>
      <hr/>
    </section>
    </div>
  )
};

export default IntroSection;