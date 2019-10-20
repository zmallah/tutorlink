import React from 'react';
import logo from '../assets/logo.png';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const Navigation = (props) => {

  const {user, logout} = props;
  const genNavLinks = () => {
    var navPages = [];
    const pages = [];
    for (var page in pages) {
      navPages.push(
        <NavLink key={pages[page]} className="NavLink" to={`/${pages[page]}`}>{pages[page].toUpperCase()}</NavLink>
      );
    }
    return navPages;
  }

  return (
    <Container className="NavContainer" style =  {{backgroundColor: "#F9564F"}}>
      <Navbar variant="light" expand="lg" className="NavBar" >
        <Navbar.Brand>
          <img
            src={logo}
            height="30"
            width="130"
            className="d-inline-block logoNav"
            alt="Tutorlink"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="NavBarCollapse">
          <Nav className="mr-auto items">
          </Nav>
          <Nav className="float-right">
            {
              <NavDropdown
                variant=''
                title={user.username}
                id="dropdown-menu-align-right"
                className="DropDown"
              >
                <NavDropdown.Item to="/profile" as={NavLink}>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => logout()}>Log Out</NavDropdown.Item>
              </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )

}

export default Navigation;