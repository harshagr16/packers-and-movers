import React, { Component } from "react";
import logo from "../Assets/Images/logo.jpg";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Dropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";
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
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="second-navbar"
          bg="primary"
          variant="dark"
        >
          <Container>
            <Navbar.Brand>
              {" "}
              <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
              
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" activeKey={window.location.pathname}>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#jobs">Jobs</Nav.Link>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink} />
                  <Dropdown.Menu className="large-dropdown-menu">
                    <div className="dropdown-menu-wrapper">
                      <div>
                        <ul>
                          <li className="dropdown-header">
                            <div className="menu-icon-wrapper">
                              <div>
                                <i className="col-2 fa fa-2x fa-graduation-cap main-theme-color" />
                              </div>
                              <div>
                                <NavDropdown.Item href="#schools">
                                  <b>Schools</b>
                                </NavDropdown.Item>
                              </div>
                            </div>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-1">
                              Example-1
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-2">
                              Example-2
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-3">
                              Example-3
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-4">
                              Example-4
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-5">
                              Example-5
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-6">
                              Example-6
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-7">
                              Example-7
                            </NavDropdown.Item>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li className="dropdown-header">
                            <div className="menu-icon-wrapper">
                              <div>
                                <i className="col-2 fa fa-2x fa-flask main-theme-color" />
                              </div>
                              <div>
                                <NavDropdown.Item href="#science">
                                  <b>Science</b>
                                </NavDropdown.Item>
                              </div>
                            </div>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-1">
                              Example-1
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-2">
                              Example-2
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-3">
                              Example-3
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-4">
                              Example-4
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-5">
                              Example-5
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-6">
                              Example-6
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-7">
                              Example-7
                            </NavDropdown.Item>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li className="dropdown-header">
                            <div className="menu-icon-wrapper">
                              <div>
                                <i className="col-2 fa fa-2x fa-envira main-theme-color" />
                              </div>
                              <div>
                                <NavDropdown.Item href="#environment">
                                  <b>Environment</b>
                                </NavDropdown.Item>
                              </div>
                            </div>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-1">
                              Example-1
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-2">
                              Example-2
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-3">
                              Example-3
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-4">
                              Example-4
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-5">
                              Example-5
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-6">
                              Example-6
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-7">
                              Example-7
                            </NavDropdown.Item>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li className="dropdown-header">
                            <div className="menu-icon-wrapper">
                              <div>
                                <i className="col-2 fa fa-2x fa-microchip main-theme-color" />
                              </div>
                              <div>
                                <NavDropdown.Item href="#technology">
                                  <b>Technology</b>
                                </NavDropdown.Item>
                              </div>
                            </div>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-1">
                              Example-1
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-2">
                              Example-2
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-3">
                              Example-3
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-4">
                              Example-4
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-5">
                              Example-5
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-6">
                              Example-6
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-7">
                              Example-7
                            </NavDropdown.Item>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li className="dropdown-header">
                            <div className="menu-icon-wrapper">
                              <div>
                                <i className="col-2 fa fa-2x fa-car main-theme-color" />
                              </div>
                              <div>
                                <NavDropdown.Item href="#automotive">
                                  <b>Automotive</b>
                                </NavDropdown.Item>
                              </div>
                            </div>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-1">
                              Example-1
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-2">
                              Example-2
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-3">
                              Example-3
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-4">
                              Example-4
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-5">
                              Example-5
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-6">
                              Example-6
                            </NavDropdown.Item>
                          </li>
                          <li className="job-sub-tabs">
                            <NavDropdown.Item href="#example-7">
                              Example-7
                            </NavDropdown.Item>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link href="#news" className="item-to-left">
                  News
                </Nav.Link>
                <NavDropdown title="" className="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#blog">Blogs</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}
