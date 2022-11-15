// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBIcon,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBCollapse
// } from 'mdb-react-ui-kit';
import logoWhite from '../assets/images/logoWhite.png';

// function TopNavbar() {
//   const [showNav, setShowNav] = useState(false);

//   return(
//     <MDBNavbar expand='lg' light bgColor='black'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='/' className='text-white'>
//           <img
//             src={logoWhite}
//             alt="logo"
//             className='navbar-brand-logo bg-transparent'
//             />
//           </MDBNavbarBrand>
//         <MDBNavbarToggler
//           type='button'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setShowNav(!showNav)}
//         >
//           <MDBIcon icon='bars' fas style={{"color": "white"}}/>
//         </MDBNavbarToggler>
//         <MDBCollapse navbar show={showNav}>
//           <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
//             <MDBNavbarItem>
//               {/* <MDBNavbarLink active aria-current='page' href='/home'>
//                 Home
//               </MDBNavbarLink> */}
//             </MDBNavbarItem>
//             <MDBNavbarItem >
//               <MDBNavbarLink href='/projects' className='text-white'>Projects</MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='/about' className='text-white'>About</MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='/contact' className='text-white'>Contact</MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }
// export default TopNavbar;

import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

export default function TopNavbar() {
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <>
      <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-dark" href="/home">
            <img 
              id="navbar-brand-logo" 
              src={logoWhite} 
              alt="tmillsdev"
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            className='ms-auto'
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <MDBIcon icon='bars' fas style={{"color": "white"}}/>
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal}>
        <div className='bg-dark shadow-3 p-4'>
          <MDBBtn block className='border-bottom m-1' color='black' href='/projects'>
           Projects
          </MDBBtn>
          <MDBBtn block className='border-bottom m-1' color='black' href='/about'>
           About
          </MDBBtn>
          <MDBBtn block className='border-bottom m-1' color='black' href='/contact'>
           Contact
          </MDBBtn>
        </div>
      </MDBCollapse>
    </>
  );
}