import TyCoffee from '../assets/images/TyCoffee.jpeg';
import TyFireSelfie from '../assets/images/TyFireSelfie.JPG';
import TyLoveUALatte from '../assets/images/TyLoveUALatte.JPG';
import { Fade, Slide } from 'react-awesome-reveal';
import { LoremIpsum } from "react-lorem-ipsum";

// going outside my comfort zone is how i succeed and i love to push my own limits

function About() {
  
  return (
    <div className='about-container'>
      <header className='about-section-header'>about <hr/></header>

      <article className='about-section-main'>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        {/* <div className='about-section-inner-top'></div>
        <div className='about-section-inner-middle'></div>
        <div className='about-section-inner-bottom'></div> */}
      </article>

      <aside className='about-aside-1'>aside 1</aside>
      <aside className='about-aside-2'>aside-2</aside>


    </div>
    // <>
    // <div className="d-flex p-4 justify-content-between about-container">
    //   <Fade duration='2000'>
    //   <img 
    //     src={TyFireSelfie}
    //     height={500}
    //     alt='' />
    //   </Fade>
    //   <Fade duration='2000'>
    //   <img 
    //     src={TyLoveUALatte}
    //     height={500}
    //     alt=''/>
    //   </Fade>
    // </div>
    // </>
  )
}

export default About;