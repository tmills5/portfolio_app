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
          <div className='skills'>
            <h2>Skills</h2>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>

              </ul>

          </div>



          {/* <img 
            src={TyFireSelfie}
            alt='Tyson Fire Selfie'
            className='project-img'
            max-height="70%"
          /> */}

        </article>
        <div className='divider'/>
        <article className='reverse'>
          <div className='project-text'>
            <h3>New Passion</h3>
            <div className="textbox">
         
              <p>
                I transitioned into software engineering and attended the   award-winning Flatiron School to further my education and   skills. My degree in Business from the University of Georgia allows me to see the strategic vision while maintaining focus on the code.
              </p>
              <p>
                With a strong foundation in coding, I am excited to continue  learning and growing in this field and committed to making a   positive impact. Going outside my comfort zone and   pushing limits is the key to success.
              </p>
              <p>
                My need to think creatively drives my ambition to take on new challenges. 
                
                I possess strong collaboration and problem-solving skills, by using innovative ideas, and thinking imaginatively for accomplishing robust and difficult tasks. I absolutely love to learn new things and I care about staying versed with the current technology and creating new opportunities.
              </p>
            </div>
          </div>
          <div className='skills-reverse'>
            <h2>Skills</h2>
              <ul>
                <li><img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt='html icon' className='skills-icon'/></li>
                <li><img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt='css icon' className='skills-icon'/></li>
                <li><img src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" alt='js icon' className='skills-icon'/></li>
                <li><img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt='react icon' className='skills-icon'/></li>
                <li><img src="https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg" alt='ruby icon' className='skills-icon'/></li>
                <li><img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt='git icon' className='skills-icon'/></li>
                <li><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt='postman icon' className='skills-icon'/></li>
                <li><img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt='postgres icon' className='skills-icon'/></li>
                <li><img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt='node icon' className='skills-icon'/></li>
                <li><img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt='mongo icon' className='skills-icon'/></li>
              </ul>
          </div>
          {/* <img 
            src={headshot}
            alt='Tyson Fire Selfie'
            className='project-img'
            // height='500px'
          /> */}
        </article>
      </section>
      {/* <ContactSection /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default About;