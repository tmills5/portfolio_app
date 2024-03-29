import IntroSection from './IntroSection';
import About from './About';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';
import ContactSection from './ContactSection';


function Home() {

    return(
      <>
        <IntroSection />
        <ProjectsSection />
        <About />
        <ContactSection />
        <Footer />
      </>
    )
}

export default Home;