import React from 'react';
import IntroSection from './IntroSection';
import Footer from './Footer'
import ContactSection from './ContactSection';
import ProjectsSection from './ProjectsSection';
// import Nav from './Nav';
// import TyHeadshot from '../assets/images/TyHeadshotNoBg.png';
// import {Fade, Slide} from 'react-awesome-reveal';

// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function Home() {

    return(
      <>
        <IntroSection />
        <ProjectsSection />
        <ContactSection />

        <Footer />
      </>
    )
}

export default Home;