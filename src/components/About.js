import TyCoffee from '../assets/images/TyCoffee.jpeg';
import TyFireSelfie from '../assets/images/TyFireSelfie.JPG';
import TyLoveUALatte from '../assets/images/TyLoveUALatte.jpeg';
import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
  width: '100vw',
  height: ['350px', '300px'],
  layout: [1, 4],
  photos: [
    { source: {} },
    { source: `${TyCoffee}` },
    { source: `${TyFireSelfie}` },
    { source: `${TyLoveUALatte}` },
    { source: 'url/image-5.jpg' },
    { source: 'url/image-6.jpg' },
  ],
  showNumOfRemainingPhotos: true
};



function About() {
  
  return (
    <>
    {/* <div className="d-flex p-4 justify-content-between about-container">
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
    </div> */}
      <ReactPhotoCollage {...setting} />
    </>
  )
}

export default About;