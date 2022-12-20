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
import logoWhite from '../assets/images/logoWhite - Edited.png';

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
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBBtn,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBCollapse,
// } from 'mdb-react-ui-kit';

export default function App() {
  // const [showBasic, setShowBasic] = useState(false);

  return (
    <nav>
    <h1>dfghsdfgsdfgsdfg</h1>
    </nav>
    // <MDBNavbar expand='lg' light bgColor='dark'>
    //   <MDBContainer fluid>
    //     <MDBNavbarBrand href='/home'>
    //       <img className='tmd-navbar-brand-logo'src={logoWhite} alt="logo"/>
 
    //     </MDBNavbarBrand>

    //     <MDBNavbarToggler
    //       aria-controls='navbarSupportedContent'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //       onClick={() => setShowBasic(!showBasic)}
    //     >
    //       <MDBIcon icon='bars' fas />
    //     </MDBNavbarToggler>

    //     <MDBCollapse navbar show={showBasic}>
    //       <MDBNavbarNav className='ms-auto mb-2 mb-lg-0 ms-'>
    //         <MDBNavbarItem>
    //           <MDBNavbarLink active aria-current='page' href='/projects'>
    //             Work
    //           </MDBNavbarLink>
    //         </MDBNavbarItem>
    //         <MDBNavbarItem>
    //           <MDBNavbarLink href='/about'>About</MDBNavbarLink>
    //         </MDBNavbarItem>
    //         <MDBNavbarItem>
    //           <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
    //         </MDBNavbarItem>
    //       </MDBNavbarNav>
    //     </MDBCollapse>
    //   </MDBContainer>
    // </MDBNavbar>
  );
}