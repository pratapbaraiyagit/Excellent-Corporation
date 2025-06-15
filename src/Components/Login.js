import React, { useEffect, useRef } from 'react';
import { ErrorMessage, Formik } from 'formik';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import googleIcon from '../Assets/Images/google.svg';
import LoginImg from '../Assets/Images/login-img.jpg';
import Loader from './Global/Loader';
import { login } from './Redux/reducers/auth.slice';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitRef = useRef(null);
  const { isLogin, loginLoading } = useSelector(({ auth }) => auth);
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required!'),
    password: Yup.string().required('Password is Required!'),
  });
  const initialValues = {
    email: '',
    password: '',
  };
  useEffect(() => {
    if (isLogin) {
      navigate('/dashboardcontent');
    }
  }, [isLogin, navigate]);
  return (
    <main>
      <section className="login_wrapper pb100 pt40-xl pb50-md">
        {loginLoading && <Loader />}
        <Container>
          <Row className="align-items-center">
            <Col xl={6} className="d-none d-xl-block">
              <div className="login_img_wrap mb30-xl">
                <img src={LoginImg} alt="" />
              </div>
            </Col>
            <Col xl={6}>
              <div className="login_form_wrapper">
                <Button variant="light" className="btn_google">
                  <img src={googleIcon} alt="" /> Log In with Google
                </Button>

                <div className="devider">
                  <span>or</span>
                </div>
                <Formik
                  initialValues={initialValues}
                  innerRef={submitRef}
                  validationSchema={loginSchema}
                  onSubmit={values => {
                    dispatch(login(values));
                    submitRef && submitRef.current.resetForm();
                    navigate.replace();
                  }}
                >
                  {({ handleChange, handleSubmit, values }) => (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group
                        className="mb25"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={e => {
                            handleChange('email')(e.target.value);
                          }}
                          placeholder="Enter YourEmail"
                        />
                        <span className="text-error">
                          <ErrorMessage name="email" />
                        </span>
                      </Form.Group>
                      <Form.Group
                        className="mb25"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="password"
                          name="Password"
                          value={values.password}
                          onChange={e => {
                            handleChange('password')(e.target.value);
                          }}
                          placeholder="Enter Your Password"
                        />
                        <span className="text-error">
                          <ErrorMessage name="password" />
                        </span>
                      </Form.Group>
                      <div className="text-end mb40">
                        <Link>Forgot Password?</Link>
                      </div>
                      <Button
                        variant="primary"
                        type="submit"
                        className="rounded-pill w-100 btn_shadow mb35"
                      >
                        Login
                      </Button>
                    </Form>
                  )}
                </Formik>
                <div className="text-center">
                  <p>
                    Dont’t have an account? <Link to="/sign-up">Sign Up</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
