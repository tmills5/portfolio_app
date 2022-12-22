import React from 'react';
import logoWhite from '../assets/images/logoWhite - Edited.png';


function Nav() {

  return (
    <nav>
      <ul>
        <li><a href='/'><img src={logoWhite} alt='logo'height="50em" /></a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>LinkedIn</a></li>
        <li><a href='#'>Github</a></li>
        <li><a href="#" className='button'>Resume</a></li>
      </ul>
    </nav>
  );
}

export default Nav;