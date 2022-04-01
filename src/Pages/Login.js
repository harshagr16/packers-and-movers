import React, { Component } from "react";
import { Fragment } from "react/cjs/react.development";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {  Container } from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>

        <Container className="loginpage">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <form>
                  <p className="h5 text-center mb-4">Login in</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn>Login</MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Container>

        <Footer></Footer>
      </Fragment>
    );
  }
}
