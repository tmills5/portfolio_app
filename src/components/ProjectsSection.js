import MBHScreenShot from '../assets/images/MBHScreenShot.png';
import ParkItScreenShot from '../assets/images/ParkItScreenShot.png';
import ContactSection from './ContactSection';
import Footer from './Footer';

//! deploy and include link

function ProjectsSection () {
  return(
    <div className='projects-section'>
      <section id="projects">
        <h2>
          Projects
        </h2>
        <article>
          <div className='project-text'>
            <h4>Latest Project</h4>
            <h3>Mississippi BrewHouse</h3>
            <p className='textbox'>
              The Mississippi BrewHouse is a Single Page Application that allows users to login and explore the local breweries in Mississippi. The user has the ability to leave comments on visited   breweries as well as track those comments in their user profile.
            </p>
            <h4>Technologies Used:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>Active Record</li>
                <li>PostgreSQL</li>
                <li>Material-UI</li>
              </ul>
              <a href="https://github.com/tmills5/MississippiBrewHouse" className='project-links' target='blank'>GitHub Repository</a>
              <a href="https://www.youtube.com/watch?v=7QCDnaLYCTQ" className='project-links' target='blank'>Video Demo</a>
          </div>
          <img src={MBHScreenShot} alt='MBH homepage' className='project-img'/>
        </article>
        <br/>
        <article className='reverse'>
          <div className='project-text'>
            <h4>Outdoor Fun!</h4>
            <h3>ParkIt</h3>
            <p className='textbox'>
              ParkIt is an application designed for the outdoor enthusiast in mind. The user has the ability to log in and search for National Parks to gather requisite information. The   "Admin" has full CRUD functionality.
            </p>
            <h4>Technologies Used:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>Active Record</li>
                <li>PostgreSQL</li>
                <li>BCrypt</li>
              </ul>
              <a href="https://github.com/tmills5/parkIt" className='project-links' target='blank'>GitHub Repository</a>
              <a href="https://www.youtube.com/watch?v=eBRX8kT4M68" className='project-links' target='blank'>Video Demo</a>
          </div>
          <img src={ParkItScreenShot} alt='parkIt homepage' className='project-img'/>
        </article>
      </section>
    </div>
  );
};

export default ProjectsSection;