import { useState, useEffect } from "react";
// import { 
//   MDBTextArea, 
//   MDBInput,
//   MDBBtn
// } from "mdb-react-ui-kit";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
// } from "mdb-react-ui-kit";

const Form = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');


// useEffect is listening for changes in any one of these state variables.
// second argument is an array of values that we want to listen for.
// fires anytime something changes in those variables

  useEffect(()=> {}, [message, name, company, email, url])



  return (


<div class="contact">
<div id="container">
  <h5>Got an idea for a project?</h5>
  <form action="#" method="post" id="contact_form">
    <div class="form-name">
      <label for="name"></label>
      <input type="text" placeholder="name" name="name" id="name_input" required/>
    </div>
    <div class="email">
      <label for="email"></label>
      <input type="email" placeholder="e-mail" name="email" id="email_input" required/>
    </div>
    <div class="company">
      <label for="company"></label>
      <input type="text" placeholder="company" name="company" id="company_input"/>
    </div>
    <div class="phone">
      <label for="phone"></label>
      <input type="text" placeholder="phone" name="phone" id="phone_input" />
    </div>
    <div class="url">
      <label for="url"></label>
      <input type="text" placeholder="website" name="url" id="url_input" required/>
    </div>

    <div class="message">
      <label for="message"></label>
      <textarea name="message" placeholder="message" id="message_input" cols="30" rows="5" required></textarea>
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