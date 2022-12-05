import TyCoffee from '../assets/images/TyCoffee.jpeg';
import TyFireSelfie from '../assets/images/TyFireSelfie.JPG';
import TyLoveUALatte from '../assets/images/TyLoveUALatte.JPG';
import { Fade, Slide } from 'react-awesome-reveal';

// going outside my comfort zone is how i succeed and i love to push my own limits

function About() {
  
  return (
    <>
    <div className="d-flex p-4 justify-content-between about-container">
      <Fade duration='2000'>
      <img 
        src={TyFireSelfie}
        height={500}
        alt='' />
      </Fade>
      <Fade duration='2000'>
      <img 
        src={TyLoveUALatte}
        height={500}
        alt=''/>
      </Fade>
    </div>
    </>
  )
}

export default About;