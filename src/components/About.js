import SplitScreen from '../layout/SplitScreen';
import TyCoffee from '../assets/images/TyCoffee.jpeg';

function About() {
  
  return (
    <>
      <SplitScreen>
        <div style={{'background-color': "black", 'height': '100vh'}}>

        </div>
        <div style={{'background-color': "white", 'height': '100vh'}}>

        </div>
      </SplitScreen>
      <div style={{
        "position": "absolute", 
        "left": '10%',
        "bottom": '50px',
        "height": '80vh',
        "width": '80vw',
        "border": 'solid'
        }}
        >
          {/* <div style={{"height": "100vh", "width": "20px"}}></div> */}
          <img src={TyCoffee} height='100%' alt=""/>
          {/* <span className="work-pane-text-wrapper">Full Stack Developer with experience using front-end and back-end technologies such as Ruby, Rails, JavaScript, and React. Background includes 12 years as a career fire officer and medic, with      strong collaboration and problem-solving skills, by using innovative ideas, and creativity for accomplishing robust and difficult tasks. Lifelong learner that is passionate about staying versed     with the current technology and creating new opportunities. Effective analytical skills and attention to detail while remaining calm under pressure and meeting deadlines in a fast-paced environment.</span> */}
        </div>
    </>
  )
}

export default About;