import React from "react";
import { 
  MDBFooter,  
  MDBContainer,
  MDBIcon,
  MDBBtn } from "mdb-react-ui-kit"
import logoWhite from '../assets/images/logoWhite.png';

function Footer() {
  return(
    // <MDBFooter bgColor='black' className='text-center text-lg-left fixed-bottom'>
    //   <MDBContainer className='p-0 pb-1' >
    //     <div className="social-links">
    //       <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/TysonMillsDev' role='button'>
    //         <MDBIcon fab icon='twitter' />
    //       </MDBBtn>
    //       <MDBBtn outline color="light" floating className='m-1' href='https://linkedin.com/in/tmillsdev' role='button'>
    //         <MDBIcon fab icon='linkedin' />
    //       </MDBBtn>
    //       <MDBBtn outline color="light" floating className='m-1' href='https://github.com/tmills5' role='button'>
    //         <MDBIcon fab icon='github' />
    //       </MDBBtn>
    //       <div>&copy; {new Date().getFullYear()} Copyright:{' '}
    //         TMillsDev
    //       </div>
    //     </div>
    //   </MDBContainer>
    // </MDBFooter>

    <div className="footer-main-div">
      <div className="social-links">
        <MDBBtn
          // rippleColor="light"
          color='link'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
        </MDBBtn>
       <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
          >
            <MDBIcon fab className='fa-twitter' />
        </MDBBtn>
        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
          >
            <MDBIcon fab className='fa-github' />
        </MDBBtn>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Copyright:{' '}
        TMillsDev
      </div>
    </div>
  );
}

export default Footer;