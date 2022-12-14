import SplitScreen from "../layout/SplitScreen";
import Form from "./Form";
import Footer from './Footer';

const ContactPage = () => {
  return(
    <>
      <SplitScreen>
        <div className="contact-pane-left">
          <h1 className="contact-pane-left-text">Contact</h1>
        </div>
        <div className="contact-pane-right">
          <Form />
        </div>
      </SplitScreen>
      <Footer />
    </>
  );
};

export default ContactPage;