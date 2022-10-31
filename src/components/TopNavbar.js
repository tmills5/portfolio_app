import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBIcon,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
// import logo from '/Users/merletmills/Development/portfolio/portfolio_app/src/assets/images/logo.png';

function TopNavbar() {
  const [showNav, setShowNav] = useState(false);

  return(
    <MDBNavbar expand='lg' light bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>LOGO HERE
          {/* <img
            src={logo}
            alt="TMillsDev"
            className='navbar-brand-logo'
            /> */}
          </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav  right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              {/* <MDBNavbarLink active aria-current='page' href='/home'>
                Home
              </MDBNavbarLink> */}
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/projects'>Projects</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/about'>About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              {/* <MDBNavbarLink disabled href='/' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink> */}
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default TopNavbar;