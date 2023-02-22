import MBHScreenShot from '../assets/images/MBHScreenShot.png';
import ParkItScreenShot from '../assets/images/ParkItScreenShot.png';
import FireSphereScreenShot from '../assets/images/FireSphereScreenShot.png';
import { Zoom } from 'react-awesome-reveal';


//! deploy and include link

function ProjectsSection () {
  return(
    <div className='projects-section'>
      <section id="projects">
        <h2>
          Projects
        </h2>
        {/* Mississippi BrewHouse */}
        <Zoom triggerOnce='true'>
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
        </Zoom>
        <br/>
        {/* ParkIt */}
        <Zoom triggerOnce='true'>
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
        </Zoom>
        {/* The Fire-Sphere */}
        <Zoom triggerOnce='true'>
        <article>
          <div className='project-text'>
            <h4>In Progress</h4>
            <h3>The Fire Sphere</h3>
            <p className='textbox'>
              The Fire Sphere is a Web Application in development for Fire Department Management. Users can log in to see shift   assignments, view daily schedules, and submit time off requests. The officers with admin access can assign the  apparatus for each shift, approve time off requests, alter schedules, and manage training requirements.
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
              <a href="https://github.com/tmills5/fire-sphere-1" className='project-links' target='blank'>GitHub Repository</a>
          </div>
          <img src={FireSphereScreenShot} alt='Fire Sphere homepage' className='project-img'/>
        </article>
        </Zoom>
      </section>
    </div>
  );
};

export default ProjectsSection;