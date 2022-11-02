import React from "react";
import { 
  MDBFooter,  
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn } from "mdb-react-ui-kit"
import logo from '/Users/merletmills/Development/portfolio/portfolio_app/src/assets/images/logo.png';

function Footer() {
  return(
    <MDBFooter bgColor='black' className='text-center text-lg-left fixed-bottom'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/TysonMillsDev' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
          {/* need to figure out google profile for future use */}
          {/* <MDBBtn outline color="light" floating className='m-1' href='https://www.google.com/profiles/tmillsdev' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn> */}
          <MDBBtn outline color="light" floating className='m-1' href='https://linkedin.com/in/tmillsdev' role='button'>
            <MDBIcon fab icon='linkedin' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/tmills5' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://tmillsdev.ghost.io'>
          TMillsDev
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;