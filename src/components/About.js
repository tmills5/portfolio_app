// import TyCoffee from '../assets/images/TyCoffee.jpeg';
import headshot from '../assets/images/TyHeadshotNoBg.png';
import TyFireSelfie from '../assets/images/TyFireSelfie.JPG';
// import { Fade, Slide } from 'react-awesome-reveal';


// ! Need new images for this section
//! rephrase the about sections. rewrite less robotic
//!pull from cover letter if need be

function About() {
  
  return (
    <div>
      <section id="about">
        <h2>About Me...</h2>
        <article>
          <div className='about-text'>
            <h3>The Early Years</h3>
            <div className="textbox">
              <p>
                I am a highly motivated and driven individual with a  firefighting and software engineering background. In my career   as a firefighter, I gained valuable experience working with a   wide range of people from diverse backgrounds, and I am   exceptionally adaptable in any situation.
              </p>
              <p>
                I also demonstrated leadership ability as a Sergeant, where I   led crews in various situations and worked well under pressure  to meet deadlines. I have excellent verbal and written   communication skills and am known for my positive attitude and  for being easy to work with.
              </p>
              <p>
                As a firefighter, I also gained experience using technology to  write reports and fix problems. I was frequently called upon   to think creatively and outside the box to solve complex  issues.
              </p>
            </div>
          </div>
          <img 
            src={TyFireSelfie}
            alt='Tyson Fire Selfie'
            className='project-img'
            max-height="70%"
          />
        </article>
        <div className='divider'/>
        <article className='reverse'>
          <div className='project-text'>
            <h3>New Passion</h3>
            <div className="textbox">
         
              <p>
                I transitioned into software engineering and attended the   award-winning Flatiron School to further my education and   skills. My degree in Business from the University of Georgia allows me to see the strategic vision while maintaining focus in the code.
              </p>
              <p>
                With a strong foundation in coding, I am excited to continue  learning and growing in this field and committed to making a   positive impact. I am known for my positive attitude and for  being easy to work with. Going outside my comfort zone and   pushing limits is the key to success.
              </p>
              <p>
                My need to think creatively and outside of  the box makes me eager to take on new challenges. 
                
                I possess strong collaboration and problem-solving skills, by using innovative ideas, and creativity for accomplishing robust and difficult tasks. I absolutely love to learn new things and I care about staying versed with the current technology and creating new opportunities.
              </p>
            </div>
          </div>
          <img 
            src={headshot}
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