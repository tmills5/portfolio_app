// import TyCoffee from '../assets/images/TyCoffee.jpeg';
import headshot from '../assets/images/TyHeadshotNoBg.png';
import TyFireSelfie from '../assets/images/TyFireSelfie.JPG';
// import { Fade, Slide } from 'react-awesome-reveal';


// going outside my comfort zone is how i succeed and i love to push my own limits

function About() {
  
  return (
    <div>
      <section id="about">
        <h2>About Me...</h2>
        <article>
          <div className='project-text'>
            <h3>Early Years</h3>
            <p className="blackbox">Boijs  kfhjswlsdhjf skdiu osi idhjfi osidfh losdi osdifhj osdi odsifj lidsit ysklij ldsoh . sli hfi kosdiu .s ksikfjed kj d./ djkf jskdj ndiu nfks jndfrgkihj kjdekuhf </p>
          </div>
          <img 
            src={headshot}
            alt='Tyson Fire Selfie'
            className='project-img'
            // height='500px'
          />
        </article>
        <article className='reverse'>
          <div className='project-text'>
            <h3>Early Years</h3>
            <p className="blackbox">Boijs  kfhjswlsdhjf skdiu osi idhjfi osidfh losdi osdifhj osdi odsifj lidsit ysklij ldsoh . sli hfi kosdiu .s ksikfjed kj d./ djkf jskdj ndiu nfks jndfrgkihj kjdekuhf </p>
          </div>
          <img 
            src={TyFireSelfie}
            alt='Tyson Fire Selfie'
            className='project-img'
            // height='500px'
          />
        </article>
      </section>
    </div>


    // <div className='about-container'>

    //   <article className='about-section-main'>
    //     <header className='about-section-header'>
    //       <div className='about-section-header-title'>
    //         About
    //       </div>
    //     </header>
    //     <div className='about-divider'></div>

    //     <div className='about-section-inner-top'>
    //       <div className='inner-top-title'>
    //         <div>I've dedicated my life to helping to people. Now, let me help you with your software development needs.
    //         </div>
    //       </div>
    //       <div className='inner-top-subtitle'>
    //         <div className='inner-top-subtitle-text'>
    //           Full Stack Developer with experience using front-end and back-end technologies such as Ruby, Rails, JavaScript, and React. Background includes 12 years as a career fire officer and medic, with strong collaboration and problem-solving skills, by using innovative ideas, and creativity for accomplishing robust and difficult tasks. Lifelong learner that is passionate about staying versed with the current technology and creating new opportunities. Effective analytical skills and attention to detail while remaining calm under pressure and meeting deadlines curated from previous roles in the medical field.
    //         </div>
    //       </div>
    //     </div>


    //     <div className='about-section-inner-middle'>MIDDLE</div>
    //     <div className='about-section-inner-bottom'>BOTTOM</div>

    //   </article>



    // </div>
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