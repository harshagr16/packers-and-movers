import React, { useEffect, useState } from "react";
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
import { Button, Card, Form, Row, Col, Container } from "react-bootstrap";
import base_url from "../Api/bootapi";
import { axios } from "axios";

export default function Login() {
  useEffect(() => {
    document.title = "Login Page";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const register = { email, password, username };

  const handleform = (e) => {
    console.log(register);
    postData(register);
    e.preventDefault();
  };

  const postData = (data) => {
    axios.post(`${base_url}/signin`, data).then(
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

      <Container className="loginpage">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <form className="form-design" onSubmit={handleform}>
                <p className="h5 text-center pt-4 mb-4">Login in</p>
                <div className="grey-text">
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
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Select
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      defaultValue="Choose..."
                    >
                      <option>Choose</option>
                      <option>ROLE_ADMIN</option>
                      <option>ROLE_CLIENT</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="text-center butn-signup">
                  <MDBBtn type="submit">Login</MDBBtn>
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
