import React from 'react';
// import TopNavbar from './TopNavbar';
import TyCoffeeNoBg from '../assets/images/TyCoffeeNoBg.png';
import {Fade} from 'react-awesome-reveal';
import { SplitScreen } from '../layout/SplitScreen';
import Footer from './Footer';
import TopNavbar from './TopNavbar';

const LeftHomeDiv = () => {
  return (
    <img 
        id="hero-image-left"
        // src="https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg?auto=compress&cs=tinysrgb&w=1600"
        src={TyCoffeeNoBg}
        style={{width: "80vh", height: "100vh"}}
        alt="Tyson coffee selfie"
    />
    );
}

const RightHomeDiv = () => {
  return(
    <>
        <Footer />
    </>
    
  ) 
  
  
}

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
<>
      <SplitScreen leftWeight={1} rightWeight={1.5} >
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

        </SplitScreen>
        </>
    )
}
export default Home;