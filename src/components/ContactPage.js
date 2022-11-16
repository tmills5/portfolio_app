import { SplitScreen } from "../layout/SplitScreen";
import Form from "./Form";


const ContactPage = () => {

  return(
    <SplitScreen>
      <div className="contact-pane-left">
        <h1 className="contact-page-leftside-text">Contact</h1>
      </div>
      <div className="contact-pane-right">
        <Form />
      </div>
    </SplitScreen>
  );
};

export default ContactPage;