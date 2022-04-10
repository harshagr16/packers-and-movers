import React, { Component } from "react";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
} from "react-bootstrap";
// import {
//   MDBInput,
//   MDBContainer,
//   MDBIcon,
//   MDBRow,
//   MDBCol,
//   MDBBtn,
// } from "mdb-react-ui-kit";
import { Fragment } from "react/cjs/react.development";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar className="first-navbar">
          <Container>
            {/* <Navbar.Brand href="#home"> hello </Navbar.Brand> */}
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <a href="#login">
                  <GoLocation />
                  Track Your Consignment
                </a>{" "}
                <a href="#login">
                  <FiPhoneCall />
                  Call us on 987545865
                </a>
                <a href="#login">
                  <i class="flag flag-india"></i>
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="second-navbar"
          variant="dark"
        >
          <Container>
            <Navbar.Brand>
              {" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" activeKey={window.location.pathname}>
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About Us</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/faq">Faq</Link>
                </Nav.Link>
                <NavDropdown title="Services" id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1">Home Shifting</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">
                   Office Shifting
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">
                    Vehical Shifting
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.4">
                    Building Shifting
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="item-to-left">
                  <Link to="/contact">Contact Us</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link>
                  <Link to="/login">Login</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/signup">Signup</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}
