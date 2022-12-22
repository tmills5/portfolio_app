import React from 'react';
import logoWhite from '../assets/images/logoWhite - Edited.png';

// !ADD RESUME LINK TO HREF 
function Nav() {

  return (
    <nav>
      <ul>
        <li><a href='/'><img src={logoWhite} alt='logo'height="50rem" /></a></li>
        <li><a href='/projects'>Projects</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
        <li>
          <a href='https://www.linkedin.com/in/tmillsdev'>
            <i className="fa-brands fa-linkedin fa-lg"></i>
          </a>
        </li>
        <li>
          <a href='https://github.com/tmills5'>
            <i className="fa-brands fa-square-github fa-lg"></i>
          </a>
        </li>
        <li><a href="/" className='button'>Resume</a></li>
      </ul>
    </nav>
  );
}

export default Nav;