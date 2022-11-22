import SplitScreen from '../layout/SplitScreen.js';
import MississippiBrewHouse from '../assets/videos/MississippiBrewHouse.mp4'
import MBHScreenShot from '../assets/images/MBHScreenShot.png';



function Projects() {

  return(
      <SplitScreen>
        <div className='work-pane-left'>
          <div className='project-title'><h1>Mississippi BrewHouse</h1></div>
          <video width="90%" height="90%" controls autoplay>
            <source src={MississippiBrewHouse} type="video/mp4" />
            <source src={MississippiBrewHouse} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='work-pane-right'>
          <div className='work-pane-text'>
            The Mississippi BrewHouse is a Single Page Application that allows users to login and explore the local breweries in Mississippi. The user has the ability to leave comments on visited breweries as well as track those comments in their user profile.
            <br/>
              <ul>
                <li>Ruby on Rails</li>
                <li>React Frontend</li>
                <li>Active Record</li>
                <li>BCrypt Gem for encryption</li>
              </ul>
          <div className='project-snapshop-wrapper'>
            <img src={MBHScreenShot} className='project-snapshot' />
          </div>


          </div>
        </div>

      </SplitScreen>
  ) 
}

export default Projects;