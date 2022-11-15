import { useState, useEffect } from "react";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
// useEffect is listening for changes in any one of these state variables.
// second argument is an array of values that we want to listen for.
// fires anytime something changes in those variables

  useEffect(()=> {}, [name])

  return(
    <form>  
      <input 
        name="name" 
        type="text" 
        placeholder="What's your name?" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <input 
        name="subject" 
        type="text" 
        placeholder="Subject" 
        value={subject} 
        onChange={e => setSubject(e.target.value)} 
      />
      <input 
        name="email" 
        type="text" 
        placeholder="What's your email?" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
      />
      <input 
        name="message" 
        type="textbox" 
        placeholder="Leave me a message..." 
        value={message} 
        onChange={e => setMessage(e.target.value)} 
      />
      <button>Submit</button>
    </form>
  );
}

export default ContactForm;