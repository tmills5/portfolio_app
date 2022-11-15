import React from "react";
import { 
  MDBFooter,  
  MDBContainer,
  MDBIcon,
  MDBBtn } from "mdb-react-ui-kit"
import logoWhite from '../assets/images/logoWhite.png';

function Footer() {
  return(
    <MDBFooter bgColor='black' className='text-center text-lg-left fixed-bottom'>
      <MDBContainer className='p-4 pb-0'>
        <section >
          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/TysonMillsDev' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://linkedin.com/in/tmillsdev' role='button'>
            <MDBIcon fab icon='linkedin' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/tmills5' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        {/* <a className='text-dark' href='https://tmillsdev.ghost.io'>
          <img id="logo-footer" src={logoWhite} alt="tmillsdev"/>
        </a> */}
    </MDBFooter>
  );
}

export default Footer;