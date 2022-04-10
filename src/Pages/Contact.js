import React, { Component } from "react";
import { Fragment } from "react/cjs/react.development";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { BsFillAlarmFill } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

export default function Contact() {
    return (
      <Fragment>
        <Header></Header>
        <Banner></Banner>
        <Container className="margin-top-bottom page-contact">
          <Row>
            <Col>
              <Card data-aos="flip-left">
                <Card.Body>
                  <Card.Title>Fill your details here</Card.Title>
                  <Card.Text>
                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                      </Row>

                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                      </Form.Group>

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>City</Form.Label>
                          <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>State</Form.Label>
                          <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Label>Zip</Form.Label>
                          <Form.Control />
                        </Form.Group>
                      </Row>

                      <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>

                      <Button className="butn-color" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <h5 className="text-uppercase">contact us</h5>

              <div className="row">
                <div className="col-sm-1 icon-color-contact">
                  <GoLocation /> <br />
                </div>
                <div className="col-sm-11">
                  <p className="para-anch">
                    348 Greenpoint Avenue Brooklyn, NY
                  </p>
                </div>
                <div className="row">
                  <div className="col-sm-1 icon-color-contact">
                    <FiPhoneCall />
                  </div>
                  <div className="col-sm-11">
                    <p className="para-anch">+61 3928 3324</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-1 icon-color-contact">
                    <BsFillAlarmFill />
                  </div>
                  <div className="col-sm-11">
                    <p className="para-anch">Mon - Fri 9am - 5pm</p>
                  </div>
                </div>
              </div>
            </Col>       
          </Row>
        </Container>

        <Footer></Footer>
      </Fragment>
    );
}
