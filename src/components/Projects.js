import SplitScreen from '../layout/SplitScreen.js';
import MBHWalkthrough from '../assets/videos/MBHWalkthrough.mp4';
import ParkItWalkthrough from '../assets/videos/ParkItWalkthrough.mp4';
import MBHScreenShot from '../assets/images/MBHScreenShot.png';



function Projects() {

  return(
    <>
    <SplitScreen>
        <div className='work-pane-left'>
          <video width="90%" height="90%" controls autoplay>
            <source src={MBHWalkthrough} type="video/mp4" />
            <source src={MBHWalkthrough} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='work-pane-right'>
          <div className='project-title'><h1>Mississippi BrewHouse</h1></div>
            <div className='work-pane-text'>
              The Mississippi BrewHouse is a Single Page Application that allows users to login and explore the local breweries in Mississippi. The user has the ability to leave comments on visited   breweries as well as track those comments in their user profile.
              <br/>
              <ul>
                <li>Ruby on Rails</li>
                <li>React Frontend</li>
                <li>Active Record</li>
                <li>BCrypt Gem for encryption</li>
              </ul>
              <div className='project-snapshot-wrapper'>
                {/* <img src={MBHScreenShot} className='project-snapshot' alt="MBH page screenshot"/> */}
              </div>
          </div>
        </div>
    </SplitScreen>
    <SplitScreen>
      <div className='work-pane-left-2'>
        <div className='project-title-2'>
          <h1>ParkIt</h1>
        </div>
          <div className='work-pane-text'>
            ParkIt is an application designed for the outdoor enthusiast in mind. The user has the ability to log in and search for National Parks to gather requisite information. The   "Admin" has full CRUD functionality.
            <br/>
            <ul>
              <li>Ruby</li>
              <li>React Frontend</li>
              <li>Sinatra with Active Record</li>
              <li>Authentication and Authorization</li>
            </ul>
          </div>
      </div>
      <div className='work-pane-left'>
        <video width="90%" height="90%" controls>
            <source src={ParkItWalkthrough} type="video/mp4" />
            <source src={ParkItWalkthrough} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
      </div>
    </SplitScreen>
    </>
  ) 
}

export default Projects;