// import TyCoffee from '../assets/images/TyCoffee.jpeg';
import headshot from '../assets/images/TyHeadshotNoBg.png';
import TyFireSelfie from '../assets/images/TyFireSelfie.JPG';
// import { Fade, Slide } from 'react-awesome-reveal';
import ContactSection from './ContactSection';
import Footer from './Footer';


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
              <p className='about-p'>
                I am a highly motivated and driven individual with a  firefighting and software engineering background. In my career   as a firefighter, I gained valuable experience working with a   wide range of people from diverse backgrounds, and I am   exceptionally adaptable in any situation.
              </p>
              <p className='about-p'>
                I also demonstrated leadership ability as a Sergeant, where I   led crews in various situations and worked well under pressure  to meet deadlines. I have excellent verbal and written   communication skills and am known for my positive attitude and  for being easy to work with.
              </p>
              <p className='about-p'>
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
         
              <p className='about-p'>
                I transitioned into software engineering and attended the   award-winning Flatiron School to further my education and   skills. My degree in Business from the University of Georgia allows me to see the strategic vision while maintaining focus on the code.
              </p>
              <p className='about-p'>
                With a strong foundation in coding, I am excited to continue  learning and growing in this field and committed to making a   positive impact. Going outside my comfort zone and   pushing limits is the key to success.
              </p>
              <p className='about-p'>
                My need to think creatively drives my ambition to take on new challenges. 
                
                I possess strong collaboration and problem-solving skills, by using innovative ideas, and thinking imaginatively for accomplishing robust and difficult tasks. I absolutely love to learn new things and I care about staying versed with the current technology and creating new opportunities.
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
      <ContactSection />
      <Footer />
    </div>
  )
}

export default About;