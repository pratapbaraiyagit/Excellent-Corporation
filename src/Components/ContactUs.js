import React from 'react';
import {
  Accordion,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Tab,
  Tabs,
} from 'react-bootstrap';

export default function ContactUs() {
  return (
    <div className="contact_us_wrapper pb100 pb50-md pb80-lg">
      <Container>
        <div className="contact_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.4170945937!2d72.73989525689291!3d21.159340298699995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1698667464289!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="contact_form_wrap">
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="contact_form_inner_wrap">
                <h4 className="text_primary mb25 mb15-xs">Get in touch</h4>
                <Row>
                  <Col md={6}>
                    <Form.Group
                      className="form_group custom_form_group mb25 mb15-xs"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      className="form_group custom_form_group mb25 mb15-xs"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Last name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      className="form_group custom_form_group mb25 mb15-xs"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      className="form_group custom_form_group mb25 mb15-xs"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Contact</Form.Label>
                      <Form.Control type="number" placeholder="Enter Contact" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group
                      className="form_group custom_form_group mb25 mb15-xs"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter Here..."
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" className="rounded btn_shadow w-100">
                  Send message
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
