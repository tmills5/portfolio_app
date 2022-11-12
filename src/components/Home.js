import React from 'react';
// import TopNavbar from './TopNavbar';
// import Footer from './Footer';
import TyCoffee from '../assets/images/TyCoffee.jpeg';
import {Fade} from 'react-awesome-reveal';



function Home() {

    return(
        <>
            {/* <TopNavbar /> */}

            <main className="home-parent-div">
                <section className="jumbotron">
                    <img src={TyCoffee} alt="" id="jumbotron-side-pic"/>
                <h1 className="jumbotron-text">
                    I'm Tyson Mills!
                    <br/>
                    <br/>
                    <Fade duration="5000">Web Developer.</Fade>
                </h1>   

                </section>
                <hr/>
                
            </main>
        </>
    )
}

export default Home;