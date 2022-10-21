import React from 'react';
import TopNavbar from './TopNavbar';
import Footer from './Footer';

function Home() {

    return(
        <div className="home-parent-div">
            <TopNavbar />
            <main>

            MAIN CONTENT

            </main>
            <Footer />
        </div>
    )
}

export default Home;