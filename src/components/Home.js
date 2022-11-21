import React from 'react';
// import TopNavbar from './TopNavbar';
import TyHeadshot from '../assets/images/TyHeadshot.jpeg';
import logoWhite from '../assets/images/logoWhite - Edited.png';
import {Fade} from 'react-awesome-reveal';
import { SplitScreen } from '../layout/SplitScreen';
import Footer from './Footer';
import TopNavbar from './TopNavbar';

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
        // <>
        //     {/* <TopNavbar /> */}

        //     <main className="home-parent-div">
        //          <section className="jumbotron">
        //             {/* <img src={TyCoffee} alt="" id="jumbotron-side-pic"/> */}
        //         {/* <h1 className="jumbotron-text">
        //             Tyson Mills
        //             <Fade duration="5000">Web Developer.</Fade>
        //         </h1>    */}

        //         </section>
        //         {/* <hr/> */}
                
        //     </main>
        // </>

// Passing in the left/right weight as props to adjust sizes
// on this component only
<main className='home-parent-div-container'>
    <img className='tmd-logo-white'src={logoWhite} alt="logo"/>
    <figure>
        <img className='hero-pic' src={TyHeadshot} alt="hero-pic"/>
    </figure>
    <div className="home-right-container">
        <hr className='hr-top'/>
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
    </div>
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
        <Footer />
</main>
    )
}
export default Home;