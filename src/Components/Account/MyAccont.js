import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import AccountSidebar from './AccountSidebar';

export default function MyAccont() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  return (
    <main>
      <section className="my_account_wrapper pb100 pb50-md pb80-lg">
        <Container>
          <Row>
            <Col xxl={2} lg={3}>
              <AccountSidebar />
            </Col>
            <Col xxl={10} lg={9}>
              <Form>
                <div className="edit_profile_wrap mb10">
                  <h6 className="mb30 mb15-xs">Edit Profile</h6>
                  <Row>
                    <Col sm={6}>
                      <Form.Group
                        className="form_group custom_form_group mb25 mb15-sm"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        className="form_group custom_form_group mb25 mb15-sm"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter Phone Number"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        className="form_group custom_form_group mb25 mb15-sm"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last name"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        className="form_group custom_form_group mb25 mb15-sm"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Add Alternative Phone Number</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter Alternative Phone Number"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        className="form_group custom_form_group mb25 mb15-sm"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Email address"
                        />
                      </Form.Group>
                      <Form.Group
                        className="form_group custom_form_group mb25 mb15-sm"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Add Alternative Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Email address"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        className="form_group custom_form_group mb25 mb15-sm"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Shipping Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Enter Address Here..."
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
                <div className="change_passward_wrap mb10">
                  <h6 className="mb30 mb15-xs">Change Passward</h6>
                  <Row>
                    <Col sm={6}>
                      <Form.Group
                        className="custom_form_group mb25 mb15-sm"
                        id="password"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Old Passward</Form.Label>
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Password"
                        />
                        <span
                          className="eye_icon"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <i
                            className={
                              showPassword
                                ? 'fa-solid fa-eye-slash'
                                : 'fa-solid fa-eye'
                            }
                          ></i>
                        </span>
                      </Form.Group>
                      <Form.Group
                        className="custom_form_group mb25 mb15-sm"
                        id="password"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Password"
                        />
                        <span
                          className="eye_icon"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <i
                            className={
                              showPassword
                                ? 'fa-solid fa-eye-slash'
                                : 'fa-solid fa-eye'
                            }
                          ></i>
                        </span>
                      </Form.Group>
                      <Form.Group
                        className="mb25 mb15-sm custom_form_group"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type={confirmPassword ? 'text' : 'password'}
                          placeholder="Confirm Password"
                        />
                        <span
                          className="eye_icon"
                          onClick={() => setConfirmPassword(!confirmPassword)}
                        >
                          <i
                            className={
                              confirmPassword
                                ? 'fa-solid fa-eye-slash'
                                : 'fa-solid fa-eye'
                            }
                          ></i>
                        </span>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
                <div className="text-center">
                  <Button variant="primary" className="rounded btn_shadow">
                    Save Changes
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
