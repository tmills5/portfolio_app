import SplitScreen from "../layout/SplitScreen";
import Form from "./Form";
import Footer from './Footer';
import headshot from '../assets/images/TyHoodie.jpeg';

const ContactPage = () => {
  return(
    <>
      <SplitScreen>
        <div id="contact-pane-left">
          <h3 className="contact-pane-left-text">Contact</h3>
          <img src={headshot} alt='Tyson in Workspace'/>
        </div>
        <div id="contact-pane-right">
          <Form />
        </div>
      </SplitScreen>
      <Footer />
    </>
  );
};

export default ContactPage;