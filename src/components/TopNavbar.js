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
import logoTrees from '/Users/merletmills/Development/portfolio/portfolio_app/src/assets/images/logoTrees.png';

function TopNavbar() {
  const [showNav, setShowNav] = useState(false);

  return(
    <MDBNavbar expand='lg' light bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
          <img
            src={logoTrees}
            alt="TMillsDev"
            className='navbar-brand-logo'
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