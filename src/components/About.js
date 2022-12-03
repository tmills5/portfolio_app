import SplitScreen from '../layout/SplitScreen';
import TyCoffee from '../assets/images/TyCoffee.jpeg';
import Card from './Card';



function About() {
  
  return (
    <div className="d-flex p-4 justify-content-evenly about-container">
      <Card />
      <Card />
      <Card />
      {/* <div className="item">Transition</div>
      <div className="item">Now</div> */}
    </div>
  )
}

export default About;