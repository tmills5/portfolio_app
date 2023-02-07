// import TyCoffee from '../assets/images/TyCoffee.jpeg';
import headshot from '../assets/images/TyHeadshotNoBg.png';
import TyFireSelfie from '../assets/images/TyFireSelfie.JPG';
// import { Fade, Slide } from 'react-awesome-reveal';
import ContactSection from './ContactSection';
import Footer from './Footer';



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
                I began my software engineering journey in the summer of 2020. This launch involved   dabbling in resources on the internet, such as freecodecamp.org, Codecademy.com, and  Udemy.com. At the time, I served as a career firefighter/AEMT, which I’ve been doing   for the past twelve years in South Atlanta and Athens, GA. Holding the ranks of   Sergeant and Corporal in the fire service, I have demonstrated leadership abilities,  excellent verbal and written communication skills, and a strong work ethic. I’m known  for my positive attitude and for being easy to work with, and I love being around  people.
              </p>
              <p>
                I planned to supplement our family’s income with web development while I was away from  the station. The more I learned, the more I fell in love with it. I knew that if I   wanted to do this, I needed the structure of formal schooling. I applied, was accepted,   and enrolled in the Full Stack Software Engineering program in July 2021 at Flatiron  School.
              </p>
            </div>
          </div>
          <div className='skills'>
            <h2>Skills</h2>
              <ul>
                <li>Communication</li>
                <li>Leadership</li>
                <li>Creative Problem-solving</li>
                <li>Social Competence</li>
                <li>Emotional Awareness</li>
                <li>Time-management</li>
                <li>Adaptability</li>
                <li>Effective Collaboration</li>
                <li>Strategic Thinking</li>
                <li>Teamwork</li>
                <li>Empathy</li>
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
                I transitioned into software engineering after graduating from the Flatiron program in  September 2022. I also have a degree in Business from the University of Georgia, which   allows me to see the strategic vision of a project while maintaining focus on the code.
              </p>
              <p>
                With a strong foundation in coding, I am excited to continue learning and growing in  this field and committed to making a positive impact. Going outside my comfort zone and  pushing limits is the key to success.
              </p>
              <p>
                My need to think creatively drives my ambition to take on new challenges. I love  learning new things and care about staying versed with current technology and creating   new opportunities.
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