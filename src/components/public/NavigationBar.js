import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '../public/NavigationBar.css';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">7EME Arche</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" onClick={toggleNavbar} />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto align-items-lg-center">
            <Nav.Link href="/" className="nav-link-hover" onClick={toggleNavbar}>
              Accueil
            </Nav.Link>
            <NavDropdown title="Mes Articles" id="nav-dropdown" className="nav-link-hover">
              <NavDropdown.Item href="/book">Livres</NavDropdown.Item>
              <NavDropdown.Item href="/ebook">Ebooks</NavDropdown.Item>
              <NavDropdown.Item href="/bd">BD</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/dvd">DVD</NavDropdown.Item>
              <NavDropdown.Item href="/vod">VOD</NavDropdown.Item>
              <NavDropdown.Item href="/bluray">Blu-ray</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/commandes" className="nav-link-hover" onClick={toggleNavbar}>
              Mes commandes
            </Nav.Link>
            <Nav.Link href="/profile" className="nav-link-hover" onClick={toggleNavbar}>
              Mon profil
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link-hover" onClick={toggleNavbar}>
              Contact
            </Nav.Link>
            <Nav.Link href="/login" className="nav-link-hover login-cart" onClick={toggleNavbar}>
               Se connecter <i className="fa-solid fa-user"></i>
            </Nav.Link>

            <Nav.Link href="/cart" className="nav-link-hover " onClick={toggleNavbar}>
             Mon panier <i className="fas fa-shopping-cart"></i> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;















// import React, { useState } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';


// // barre de navigation doit être étendue ou réduite. 
// const NavigationBar = () => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleNavbar = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Navbar expand="lg" bg="dark" variant="dark" expanded={expanded}>
//       <Container>
//         <Navbar.Brand href="/">7EME Arche</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-toggle" onClick={toggleNavbar} />
//         <Navbar.Collapse id="navbar-toggle">
//           <Nav className="ml-auto align-items-lg-center">
//             <Nav.Link href="/" className="nav-link-hover" onClick={toggleNavbar}>
//               Accueil
//             </Nav.Link>
//             <Nav.Link href="/card" className="nav-link-hover" onClick={toggleNavbar}>
//               Mes Articles
//             </Nav.Link>
//             <Nav.Link href="/" className="nav-link-hover" onClick={toggleNavbar}>
//               Mes commandes
//             </Nav.Link>
//             <Nav.Link href="/profile" className="nav-link-hover" onClick={toggleNavbar}>
//               Mon profile
//             </Nav.Link>
//             <Nav.Link href="/contact" className="nav-link-hover" onClick={toggleNavbar}>
//               Contact
//             </Nav.Link>
//             <Nav.Link href="/login" className="nav-link-hover" onClick={toggleNavbar}>
//               <i className="fa-solid fa-user"></i>
//             </Nav.Link>
//             <Nav.Link href="/cart" className="nav-link-hover" onClick={toggleNavbar}>
//             <i className="fas fa-shopping-cart"></i>
            
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavigationBar;
