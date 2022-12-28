import MBHScreenShot from '../assets/images/MBHScreenShot.png';
import ParkItScreenShot from '../assets/images/ParkItScreenShot.png';


function ProjectsSection () {
  return(
    <div className='section-2ndGreen'>
      <section id="projects">
        <h2>
          Projects
        </h2>
        <article>
          <div className='project-text'>
            <h4>Latest Project</h4>
            <h3>Mississippi BrewHouse</h3>
            <p className='blackbox'>The Mississippi BrewHouse is a Single Page Application that allows users to login and explore the local breweries in Mississippi. The user has the ability to leave comments on visited   breweries as well as track those comments in their user profile. sdfgsdfgsdfgsdfgjdtus;ldhjkgf; lkjas;lkjfg ;lkajsdflkj ;lkajsdf;lkj lkajsdf;lkja slkj lkj laskd jfsdf gsdfg sdfgsdfgsdfgsdfg sdfgsdfgsdfgsdfg sdfgsdfgsdfgs dfgsdfgsdf gsdfgsdfg</p>
            <h4>Technologies Used:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>Material-UI</li>
              </ul>
          </div>
          <img src={MBHScreenShot} alt='MBH homepage' className='project-img'/>
        </article>
        <br/>
        <article className='reverse'>
          <div className='project-text'>
            <h4>Outdoor Fun!</h4>
            <h3>ParkIt</h3>
            <p className='blackbox'>ParkIt is an application designed for the outdoor enthusiast in mind. The user has the ability to log in and search for National Parks to gather requisite information. The   "Admin" has full CRUD functionality.</p>
            <h4>Technologies Used:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>Active Record</li>
                <li>PostgreSQL</li>
                <li>BCrypt Gem</li>
              </ul>
          </div>
          <img src={ParkItScreenShot} alt='parkIt homepage' className='project-img'/>
        </article>
      </section>
    </div>
  );
};

export default ProjectsSection;