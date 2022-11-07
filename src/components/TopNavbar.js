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
import simpleTreeLogo from '../assets/images/simpleTreeLogo.png';

function TopNavbar() {
  const [showNav, setShowNav] = useState(false);

  return(
    <MDBNavbar expand='lg' light bgColor='black'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/' className='text-white'>
          <img
            src={simpleTreeLogo}
            alt="logo"
            className='navbar-brand-logo bg-transparent'
            />
          </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas style={{"color": "white"}}/>
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
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