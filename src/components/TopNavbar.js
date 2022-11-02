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
import simpleTreeLogo from '/Users/merletmills/Development/portfolio/portfolio_app/src/assets/images/simpleTreeLogo.png';

function TopNavbar() {
  const [showNav, setShowNav] = useState(false);

  return(
    <MDBNavbar expand='lg' light bgColor='white'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
          <img
            src={simpleTreeLogo}
            alt="logo"
            className='navbar-brand-logo bg-light rounded'
            />
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
            <MDBNavbarItem >
              <MDBNavbarLink href='/projects' className='text-white'>Projects</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/about' className='text-white'>About</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default TopNavbar;