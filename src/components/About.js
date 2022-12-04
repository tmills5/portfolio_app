import SplitScreen from '../layout/SplitScreen';
import TyCoffee from '../assets/images/TyCoffee.jpeg';




function About() {
  
  return (
    <>
    <div className="d-flex p-4 justify-content-between about-container">
      <img 
        src={TyCoffee}
        height={500}
        alt='' />
    </div>
    <div className="d-flex p-4 justify-content-between about-container">
      <img 
        src={TyCoffee}
        height={500}
        alt='' />
    </div>
    </>
  )
}

export default About;