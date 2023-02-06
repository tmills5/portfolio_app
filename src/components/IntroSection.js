import React from 'react';
import headshot from '../assets/images/TyHeadshotNoBg.png';
import { Slide, Fade } from 'react-awesome-reveal';

function IntroSection() {
  
  return(
    <section id="intro">
      <Fade cascade damping='1' triggerOnce='true'>
        <p className='name'>Welcome, I'm <Slide triggerOnce='true'><span>Tyson.</span></Slide></p>
        <Slide direction='up' ><h2>I'm a Web Developer.</h2></Slide>
      </Fade>
      <p>Full Stack Software Engineer - Based in Mississippi, USA</p>
      <p>
        From career firefighter to software developer - I bring a strong sense of professionalism, adaptability, and resourcefulness to all of my work.
      </p>
      {/* <img src={headshot} alt="Tyson's face" /> */}
    </section>
  )
};

export default IntroSection;