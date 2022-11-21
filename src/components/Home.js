import React from 'react';
// import TopNavbar from './TopNavbar';
import TyHeadshot from '../assets/images/TyHeadshotNoBg.png';
import logoWhite from '../assets/images/logoWhite - Edited.png';
import {Fade} from 'react-awesome-reveal';
import { SplitScreen } from '../layout/SplitScreen';
import Footer from './Footer';
import Navbar from './Navbar';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

// const LeftHomeDiv = () => {
//   return (
//     <img 
//         id="hero-image-left"
//         // src="https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg?auto=compress&cs=tinysrgb&w=1600"
//         src={TyCoffeeNoBg}
//         style={{width: "80vh", height: "100vh"}}
//         alt="Tyson coffee selfie"
//     />
//     );
// }

// const RightHomeDiv = () => {
//   return(
//     <>
//         <Footer />
//     </> 
//   )
// }

function Home() {

    return(
    <MDBContainer className='bg-black home-main'>

        <MDBRow evenly>
            <MDBCol size='4'>
                <img className='img-fluid hero-pic' src={TyHeadshot} alt="hero-pic"/>
            </MDBCol>
            <MDBCol size='8' className='home-right-text'>
                <div className='home-title'>Tyson Mills</div>
                <h5>
                Full Stack Software Engineer - Based in Mississippi, USA
                </h5>
            <hr/>
                <p>
                From career firefighter to software developer...<br/>I bring a strong sense of professionalism, adaptability, and resourcefulness to all of my projects. 
                </p>
            <hr/>
            <div className='social-links'>
            <MDBBtn
          // rippleColor="light"
          color='link'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
          >
            <MDBIcon fab className='fa-linkedin' size='2x'/>
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
            <MDBIcon fab className='fa-twitter' size='2x'/>
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
            <MDBIcon fab className='fa-github' size='2x'/>
        </MDBBtn>
        </div>
            </MDBCol>
          
        </MDBRow>
        <div className="copyright">
        &copy; {new Date().getFullYear()} Copyright:{' '}
        TMillsDev
      </div>
    </MDBContainer>
    )
}


    {/* <div className="home-right-container"> */}
        {/* <hr className='hr-top'/> */}
        {/* <div className='home-title'>Tyson Mills</div>
        <div className='home-subtitle-wrapper'>
            <h6>
                Full Stack Software Engineer - Based in Mississippi, USA
            </h6>
        </div>
        <div className='home-about-text-wrapper'>
            <p >
                From career firefighter to software developer...<br/>I bring a strong sense of professionalism, adaptability, and resourcefulness to all of my projects. 
            </p>
        </div>
        <hr className='hr-bottom'/> */}
    {/* </div> */}
    {/* <nav className='nav-container'>
        <a className="nav-link" href='/projects'>work</a>
        <a className="nav-link" href='/about'>about</a>
        <a className="nav-link" href='/contact'>contact</a>
    </nav> */}
  

      {/* <SplitScreen leftWeight={1} rightWeight={1.5} >
        <div className='home-text-container'>
            <div className='home-subtitle'>Full Stack Software Engineer - Based in Mississippi, USA</div>
            <div className='home-title'>Tyson Mills</div>
            <div className='home-about-text'>
                From career firefighter to software developer...I bring a strong sense of professionalism, adaptability, and resourcesfulness to all of my projects. 
            </div>
        </div>

        <div>
            <LeftHomeDiv />
        </div>
        <div>
            <RightHomeDiv />
        </div>

        </SplitScreen>  */}
        {/* <Footer /> */}


        export default Home;