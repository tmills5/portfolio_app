import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  //id's for emails.js
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

    // useEffect is listening for changes in any one of these state variables.
    // second argument is an array of values that we want to listen for.
    // fires anytime something changes in those variables
  useEffect(()=> {}, [name, email, company, phone, url, message])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });

  return (

<div class="contact">
<div id="container">
  <h5>Got an idea for a project?</h5>
  <form onSubmit={handleFormSubmit} id="contact_form">
    <div class="form-name">
      <label for="name"></label>
      <input 
        type="text" 
        placeholder="name" 
        name="name" 
        id="name_input"
        onChange={e => setName(e.target.value)}
        value={name}
        required
      />
    </div>
    <div class="email">
      <label for="email"></label>
      <input 
      type="email" 
      placeholder="e-mail" 
      name="email" 
      id="email_input" 
      onChange={e => setEmail(e.target.value)}
      value={email}
      required
    />
    </div>
    <div class="company">
      <label for="company"></label>
      <input 
        type="text" 
        placeholder="company" 
        name="company" 
        id="company_input"
        onChange={e => setCompany(e.target.value)}
        value={company}
      />
    </div>
    <div class="phone">
      <label for="phone"></label>
      <input 
        type="text" 
        placeholder="phone" 
        name="phone" 
        id="phone_input" 
        onChange={e => setPhone(e.target.value)}
        value={phone}
      />
    </div>
    <div class="url">
      <label for="url"></label>
      <input 
        type="text" 
        placeholder="website" 
        name="url" 
        id="url_input" 
        onChange={e => setUrl(e.target.value)}
        value={url}
        required
      />
    </div>
    <div class="message">
      <label for="message"></label>
      <textarea 
        name="message" 
        placeholder="message"
        id="message_input" 
        cols="30" 
        rows="5" 
        onChange={e => setMessage(e.target.value)}
        value={message}
        required 
      />
    </div>
    <div class="submit">
      <input type="submit" value="submit" id="form_button"/>
    </div>
  </form>
</div>
</div>




//     <div id="contact-form">


//         <input
//           className="form-input"
//           type="textarea"
//           placeholder="Tell me about the product we can create..." 
//           value={message} 
//           onChange={e => setMessage(e.target.value)} 
//         />

//       <input
//         className="form-input"
//         contrast
//         // label="Name" 
//         type="text" 
//         placeholder="Your Name" 
//         value={name} 
//         onChange={e => setName(e.target.value)} 
//       />

//       <input
//         className="form-input"
//         contrast
//         // label="Subject"
//         placeholder='Your Company'
//         type="text" 
//         value={company} 
//         onChange={e => setCompany(e.target.value)} 
//       />
//       <input 
//         className="form-input"
//         contrast
//         id='typeEmail'
//         type='email'
//         // label='Email input'
//         placeholder="Your Email Address" 
//         value={email} 
//         onChange={e => setEmail(e.target.value)} 
//       />

//       <input 
//         className="form-input" 
//         contrast 
//         type="url" 
//         placeholder="Your website URL"
//         value={url}
//         onChange={e => setUrl(e.target.value)}
//       />

// <button type="button" class="btn btn-primary">Button</button>
// <MDBBtn>Button</MDBBtn>
//       <MDBBtn>Get it Touch</MDBBtn>
//       <MDBBtn>Reset</MDBBtn>


//       <form>
//         <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
//       </form>
//     </div>
  );
}

export default Form;