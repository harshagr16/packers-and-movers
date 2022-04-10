import React, { Component } from "react";
import { Button, Card, Form, Row, Col, Container } from "react-bootstrap";
import logo from "../Assets/Images/shifting-banner.jpg";

export default class Comp1 extends Component {
  render() {
    return (
      <Container className="margin-top-bottom">
        <h1 className="text-center">Shiting Details</h1>
        <Row>
          <Col>
            <Container className="card-fill">
              <Card data-aos="flip-left" data-aos-duration="1500">
                <Card.Body>
                  <Card.Title>Shift Your Packages</Card.Title>
                  <Card.Text>
                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Moving From</Form.Label>
                          <Form.Control type="text" placeholder="Moving From" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Moving To</Form.Label>
                          <Form.Control type="text" placeholder="Moving To" />
                        </Form.Group>
                      </Row>

                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="formGridAddress1"
                        >
                          <Form.Label>Moving Date</Form.Label>
                          <Form.Control type="date" placeholder="Moving Date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>Services</Form.Label>
                          <Form.Select defaultValue="Choose...">
                            <option>Choose Service...</option>
                            <option>Home Shifting</option>
                            <option>Office Shifting</option>
                            <option>Vehical Shifting</option>
                            <option>Building Shifting</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control type="text" placeholder="Full Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                      </Row>

                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="formGridAddress2"
                        >
                          <Form.Label>Address</Form.Label>
                          <Form.Control type="text" placeholder="Address" />
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="formGridAddress2"
                        >
                          <Form.Label>Mobile</Form.Label>
                          <Form.Control type="text" placeholder="Mobile" />
                        </Form.Group>
                      </Row>

                      <Button className="butn-color" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
          <Col data-aos="flip-right" data-aos-duration="1500">
            <img src={logo} className="" alt="shifting-banner" />
          </Col>
        </Row>
      </Container>
    );
  }
}
