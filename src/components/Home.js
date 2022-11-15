import React from 'react';
// import TopNavbar from './TopNavbar';
// import Footer from './Footer';
import TyCoffee from '../assets/images/TyCoffee.jpeg';
import {Fade} from 'react-awesome-reveal';
import { SplitScreen } from '../layout/SplitScreen';

const LeftHomeDiv = () => {
  return <img src={TyCoffee} alt="Tyson coffee selfie" style={{width: "100%"}}/>;
}

const RightHomeDiv = () => {
  return <h1 style={{ backgroundColor: 'green'}}>BLAH</h1>;
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

        <SplitScreen>
            <div className="">
                <LeftHomeDiv />
            </div>
            <div className="">
                <RightHomeDiv />
            </div>
        </SplitScreen>
    )
}

export default Home;