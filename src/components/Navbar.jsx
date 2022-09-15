import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import Logo from "../assets/logo-desktop.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navbar() {
  const expand = "sm";
  return (
    <NavBar
      key={expand}
      variant={"light"}
      sticky={"top"}
      bg={"light"}
      expand={expand}
    >
      <Container fluid>
        <NavBar.Brand href="#">
          <img className="logo-style" src={Logo} alt="Logo Santuario Animal" />
        </NavBar.Brand>
        <NavBar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <NavBar.Offcanvas
          placement={"end"}
          className="w-75 background-style"
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbar-expand-${expand}`}
            ></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="menu-style h-100 d-flex-wrow justify-content-around flex-grow-1 pe-3 ">
              <Nav.Link href="#">
                <span className="text-style">HOME</span>
              </Nav.Link>
              <Nav.Link href="#">
                <span className="text-style">SOBRE NOSOTROS</span>
              </Nav.Link>
              <Nav.Link href="#">
                <span className="text-style">ADOPCIONES</span>
              </Nav.Link>
              <Nav.Link href="#">
                <span className="text-style">CÓMO COLABORAR</span>
              </Nav.Link>
              <Nav.Link href="#">
                <span className="text-style">TIENDA</span>
              </Nav.Link>
              <Nav.Link href="#">
                <span className="text-style">CONTACTO</span>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </NavBar.Offcanvas>
      </Container>
    </NavBar>
  );
}

export default Navbar;
