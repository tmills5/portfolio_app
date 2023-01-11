import React from 'react';
import { Slide, Fade } from 'react-awesome-reveal';

function IntroSection() {
  
  return(
    <section id="intro">
      <Fade cascade damping='1'>
        <p className='name'>Welcome, I'm <Slide><span>Tyson.</span></Slide></p>
        <Slide direction='up' ><h2>I'm a Web Developer.</h2></Slide>
      </Fade>
      <p>Full Stack Software Engineer - Based in Mississippi, USA</p>
      <p>
        From career firefighter to software developer - I bring a strong sense of professionalism, adaptability, and resourcefulness to all of my work.
      </p>
    </section>
  )
};

export default IntroSection;