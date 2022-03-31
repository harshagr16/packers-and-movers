import React, { Component } from "react";
import logo from "../Assets/Images/logo.jpg";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Fragment } from "react/cjs/react.development";


export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <img src={logo} className="App-logo" alt="logo" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}
