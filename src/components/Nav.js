import logoWhite from '../assets/images/logoWhite - Edited.png';
// import test from '../assets/documents/AppBreweryCornellNotesTemplate.pdf';

// !ADD RESUME LINK TO HREF 
// !research uploading a resume file to the website

function Nav() {

  return (
    <nav>
      <ul>
        <li><a href='/home'><img src={logoWhite} alt='logo' className='logo' /></a></li>
        <li><a href='/#projects'>Projects</a></li>
        <li><a href='/#about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
        <li>
          <a href='https://www.linkedin.com/in/tmillsdev' target="blank">
            <i className="fa-brands fa-linkedin fa-lg"></i>
          </a>
        </li>
        <li>
          <a href='https://github.com/tmills5' target="blank">
            <i className="fa-brands fa-square-github fa-lg"></i>
          </a>
        </li>
        {/* <li><a href='/resume' className='button'>Resume</a></li> */}
      </ul>
    </nav>
  );
}

export default Nav;