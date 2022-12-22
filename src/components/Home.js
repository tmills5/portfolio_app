import React from 'react';
import IntroSection from './IntroSection';
import Footer from './Footer'
import ContactSection from './ContactSection';
// import Nav from './Nav';
// import TyHeadshot from '../assets/images/TyHeadshotNoBg.png';
// import {Fade, Slide} from 'react-awesome-reveal';

// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function Home() {

    return(
      <>
        <IntroSection />
        <div className='divider'></div>
        <ContactSection />
        <Footer />
      </>
      // <MDBContainer className='container home-main'>
      //   <MDBRow>
      //     <MDBCol className="col-sm-6 col-md-6 col-lg-6">
      //       <Fade duration='3400'>
      //         <div className='hero-pic-wrapper'>
      //           <img 
      //             className='hero-pic'
      //             src={TyHeadshot} 
      //             alt="hero-pic"
      //           />
      //         </div>
      //       </Fade>
      //     </MDBCol>

      //     <MDBCol className='col-sm-6 col-md-6 col-lg-6 home-right-text'>
      //       <div className='home-title'>Tyson Mills</div>
      //       <Slide direction='right'><h5>Full Stack Software Engineer - Based in Mississippi, USA</h5></Slide>
      //       <hr/>
      //       <Slide direction='up'><p>
      //         From career firefighter to software developer...<br/>I bring a strong sense of professionalism, adaptability, and resourcefulness to all of my projects. 
      //         </p></Slide>

      //       <hr/>

      //       <div className='social-links'>
      //         <MDBBtn
      //           color='link'
      //           floating
      //           size="lg"
      //           className='text-dark m-1'
      //           href='https://www.linkedin.com/in/tmillsdev'
      //           role='button'
      //         >
      //           <MDBIcon fab className='fa-linkedin' size='2x'/>
      //         </MDBBtn>

      //         <MDBBtn
      //           rippleColor="dark"
      //           color='link'
      //           floating
      //           size="lg"
      //           className='text-dark m-1'
      //           href='https://www.twitter.com/tysonmillsdev'
      //           role='button'
      //         >
      //           <MDBIcon fab className='fa-twitter' size='2x'/>
      //         </MDBBtn>

      //         <MDBBtn
      //           rippleColor="dark"
      //           color='link'
      //           floating
      //           size="lg"
      //           className='text-dark m-1'
      //           href='https://github.com/tmills5'
      //           role='button'
      //         >
      //           <MDBIcon fab className='fa-github' size='2x'/>
      //         </MDBBtn>
      //       </div>
      //     </MDBCol>
          
      //   </MDBRow>
      //     <div className="copyright">
      //       &copy; {new Date().getFullYear()} Copyright:{' '}
      //       TMillsDev
      //     </div>
      // </MDBContainer>
    )
}

export default Home;