import { useState, useEffect } from "react";
import { MDBTextArea, MDBInput, MDBBtn } from "mdb-react-ui-kit";



const Form = () => {

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

// useEffect is listening for changes in any one of these state variables.
// second argument is an array of values that we want to listen for.
// fires anytime something changes in those variables

  useEffect(()=> {}, [name, subject, email, message])



  return(
    <form id="contact-form">
      <MDBInput
        className="form-input"
        contrast
        label="Name" 
        type="text" 
        placeholder="What's your name?" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <MDBInput
        className="form-input"
        contrast
        label="Subject" 
        type="text" 
        value={subject} 
        onChange={e => setSubject(e.target.value)} 
      />
      <MDBInput 
        className="form-input"
        contrast
        label='Email'
        placeholder="What's your email address?" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
      />
      <MDBTextArea 
        className="form-input"
        contrast
        label='Message' 
        rows={4}
        placeholder="What can I help you with..." 
        value={message} 
        onChange={e => setMessage(e.target.value)} 
      />
      <MDBBtn color='light' rippleColor='light' className="form-btn">Submit</MDBBtn>
      <MDBBtn color='danger' outline rippleColor='light' className="form-btn">Reset</MDBBtn>
    </form>
  );
}

export default Form;