import logoWhite from '../assets/images/logoWhite - Edited.png';


function Footer() {
  return(
    <footer>
      <a href='/home'><img src={logoWhite} alt='logo' height="50px" /></a>
      <ul>
        <li>
          <a href='https://github.com/tmills5' target="blank">
            <i className="fa-brands fa-square-github fa-lg"></i>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/tmillsdev' target="blank">
            <i className="fa-brands fa-linkedin fa-lg"></i>
          </a></li>
        <li>
          <a href='https://www.twitter.com/tysonmillsdev' target="blank">
          <i className="fa-brands fa-twitter fa-lg"></i>
          </a>
        </li>
      </ul>
      <p><small>&copy; {new Date().getFullYear()} Copyright:{' '}TMillsDev</small></p>
    </footer>
  )
};

export default Footer;