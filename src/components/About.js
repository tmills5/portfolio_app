import SplitScreen from '../layout/SplitScreen';
import TyCoffee from '../assets/images/TyCoffee.jpeg';

function About() {
  
  return (
    <>
      <SplitScreen>
        <div style={{'background-color': "green", 'height': '100vh'}}>
          LEFT
        </div>
        <div style={{'background-color': "white", 'height': '100vh'}}>
          RIGHT
        </div>
      </SplitScreen>
{/* Full Stack Developer with experience using front-end and back-end technologies such as Ruby, Rails, JavaScript, and React. Background includes 12 years as a career fire officer and medic, with      strong collaboration and problem-solving skills, by using innovative ideas, and creativity for accomplishing robust and difficult tasks. Lifelong learner that is passionate about staying versed     with the current technology and creating new opportunities. Effective analytical skills and attention to detail while remaining calm under pressure and meeting deadlines in a fast-paced environment.  */}
      <div style={{
        "position": "absolute", 
        "left": '10%',
        "bottom": '50px',
        "height": '80vh',
        "width": '80vw',
        "border": 'solid'
        }}>
          <img src={TyCoffee} height='100%'/>
        </div>
    </>
  )
}

export default About;