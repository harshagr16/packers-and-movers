import React, { useEffect, useState } from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
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
import { Container } from "react-bootstrap";
import base_url from "../Api/bootapi";
import { axios } from "axios";

export default function Signup() {
  useEffect(() => {
    document.title = "Signup Page";
  }, []);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  
  const register = { firstname, lastname, email, password, mobile, address,username,role };

  const handleform = (e) => {
    console.log(register);
    postData(register);
    e.preventDefault();
  };

  // /orders/addorder

  const postData = (data) => {
    axios.post(`${base_url}/users/signup`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  return (
    <Fragment>
      <Header></Header>

      <Container className="signuppage">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <form className="form-design" onSubmit={handleform}>
                <p className="h5 text-center pt-4 mb-4">Sign Up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Type your first name"
                    icon="lock"
                    group
                    type="text"
                    validate
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <MDBInput
                    label="Type your last name"
                    icon="lock"
                    group
                    type="text"
                    validate
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MDBInput
                    label="Type your username"
                    icon="envelope"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <MDBInput
                    label="Type your mobile"
                    icon="lock"
                    group
                    type="text"
                    validate
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  <MDBInput
                    label="Type your address"
                    icon="lock"
                    group
                    type="text"
                    validate
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                     <Form.Group as={Col} controlId="formGridState">
                    <Form.Select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      defaultValue="Choose..."
                    >
                      <option>Select Role</option>
                      <option>ROLE_ADMIN</option>
                      <option>ROLE_CLIENT</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="text-center butn-signup">
                  <MDBBtn type="submit">SignUp</MDBBtn>
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
