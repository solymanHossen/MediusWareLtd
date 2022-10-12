import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlinePlus } from 'react-icons/ai'
import logo from "../Assets/logo 1.png"

const NavBar = () => {
  return (
    <div className="container">
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className='navPadding ' >
          <Container fluid>
            <Navbar.Brand href="#"><img src={logo} alt="logo-img" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 <img src={logo} alt="logo" className='w-100' />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 gap-nav ">

                  <Nav.Link href="#action1" className='navFontF'>Home</Nav.Link>
                  <Nav.Link href="#action2" className='navFontF'>Services <span><AiOutlinePlus /></span></Nav.Link>
                  <Nav.Link href="#action2" className='navFontF'>Project</Nav.Link>
                  <Nav.Link href="#action2" className='navFontF'>Careers</Nav.Link>
                  <Nav.Link href="#action2" className='navFontF'>Our team</Nav.Link>
                  <Nav.Link href="#action2" className='navFontF'>Contract</Nav.Link>

                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </div>
  );
};

export default NavBar;