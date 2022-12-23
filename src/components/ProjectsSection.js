import MBHScreenShot from '../assets/images/MBHScreenShot.png'

function ProjectsSection () {
  return(
    <div className='section-2ndGreen'>
      <section id="projects">
        <h2>
          Projects
        </h2>
        <article>
          <div className='project-text'>
            <h4>Latest Projects</h4>
            <h3>Mississippi BrewHouse</h3>
            <p className='blackbox'>The Mississippi BrewHouse is a Single Page Application that allows users to login and explore the local breweries in Mississippi. The user has the ability to leave comments on visited   breweries as well as track those comments in their user profile. sdfgsdfgsdfgsdfgjdtus;ldhjkgf; lkjas;lkjfg ;lkajsdflkj ;lkajsdf;lkj lkajsdf;lkja slkj lkj laskdjfsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfg sdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfg</p>
            <h4>Technologies Used:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>Material-UI</li>
              </ul>
          </div>
          <img src={MBHScreenShot} alt='MBH homepage' className='project-img'/>
        </article>
      </section>
    </div>
  );
};

export default ProjectsSection;