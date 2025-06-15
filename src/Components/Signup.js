import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import googleIcon from '../Assets/Images/google.svg';
import SignupImg from '../Assets/Images/signup-bg.jpg';
import Loader from './Global/Loader';
import { registration } from './Redux/reducers/auth.slice';
import {
  getCityList,
  getCountryList,
  getStateList,
} from './Redux/reducers/dashboard.slice';

export default function Signup() {
  const submitRef = useRef(null);
  const dispatch = useDispatch();
  const { countryList, locationLoader, stateList, cityList } = useSelector(
    ({ dashboard }) => dashboard,
  );
  const finalCountry = useMemo(() => {
    return (
      countryList?.map(data => {
        return { label: data.Text, value: data.Value };
      }) || []
    );
  }, [countryList]);
  const finalState = useMemo(() => {
    return (
      stateList?.map(data => {
        return { label: data.Text, value: data.Value };
      }) || []
    );
  }, [stateList]);
  const finalCity = useMemo(() => {
    return (
      cityList?.map(data => {
        return { label: data.Text, value: data.Value };
      }) || []
    );
  }, [cityList]);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const initialValues = {
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    natureOfBusiness: '',
    contactNo: '',
    agree: false,
    country: '',
    state: '',
    city: '',
    whatsappNo: '',
    companyAddress: '',
    member: '',
    otherMember: '',
  };

  useEffect(() => {
    dispatch(getCountryList());
  }, [dispatch]);

  const signUpSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('Password is required')
      .when('password', {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          'Both password need to be the same',
        ),
      }),
    email: Yup.string().email('Invalid email').required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    companyName: Yup.string().required('Required'),
    contactNo: Yup.string()
      .required('Required')
      .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits'),
    country: Yup.string().required('Required'),
    natureOfBusiness: Yup.object().required('Required'),
    state: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    companyAddress: Yup.string().required('Required'),
    member: Yup.object().required('Required'),
    otherMember: Yup.string().when(['member'], {
      is: member => member && member?.value === 'Other',
      then: Yup.string().required('Required'),
    }),
    // otherMember: Yup.string().required("Required"),
    // password: Yup.string()
    //   .required("Required")
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    //   ),
    // confirmPassword: Yup.string()
    //   .required("Required")
    //   .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  return (
    <main>
      <section className="login_wrapper signup_wrapper pb100 pb50-md">
        {locationLoader && <Loader />}
        <Container>
          <Row>
            <Col xl={5} className="d-none d-xl-block">
              <div className="login_img_wrap">
                <img src={SignupImg} alt="" />
              </div>
            </Col>
            <Col xl={7}>
              <div className="login_form_wrapper mt40">
                <Formik
                  initialValues={initialValues}
                  innerRef={submitRef}
                  validationSchema={signUpSchema}
                  onSubmit={async (values, { resetForm }) => {
                    dispatch(registration({ ...values }));
                    submitRef && submitRef.current.resetForm();
                  }}
                >
                  {({ handleSubmit, handleChange, values }) => (
                    <Form onSubmit={handleSubmit}>
                      <div className="google_wrapper">
                        <Button
                          variant="light"
                          className="btn_google"
                          autoFocus
                        >
                          <img src={googleIcon} alt="" /> Log In with Google
                        </Button>

                        <div className="devider">
                          <span>or</span>
                        </div>
                      </div>
                      {/*  <div className="supplyer_wrap mb25">
                        <Form.Select
                          aria-label="Default select example"
                          className="select_wrapper"
                          name="roll"
                          value={values.roll}
                          onChange={e => handleChange('roll')(e.target.value)}
                        >
                          <option>Select Roll</option>
                          <option value="1">For Supplier</option>
                          <option value="2">For Supplier</option>
                          <option value="3">For Supplier</option>
                        </Form.Select>
                      </div> */}
                      <Row>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              name="companyName"
                              value={values.companyName}
                              onChange={e => {
                                handleChange('companyName')(e.target.value);
                              }}
                              placeholder="Enter Compony Name"
                            />
                            <span className="text-error">
                              <ErrorMessage name="companyName" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Select
                            aria-label="Default select example"
                            className="mb25 form_group"
                            name="natureOfBusiness"
                            value={values.natureOfBusiness}
                            onChange={e =>
                              handleChange('natureOfBusiness')(e.target.value)
                            }
                          >
                            <option>Nature of Business</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Select>
                          <span className="text-error">
                            <ErrorMessage name="natureOfBusiness" />
                          </span>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              name="firstName"
                              value={values.firstName}
                              onChange={e =>
                                handleChange('firstName')(e.target.value)
                              }
                              placeholder="Enter first name"
                            />
                            <span className="text-error">
                              <ErrorMessage name="firstName" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              name="lastName"
                              value={values.lastName}
                              onChange={e =>
                                handleChange('lastName')(e.target.value)
                              }
                              placeholder="Enter Last name"
                            />
                            <span className="text-error">
                              <ErrorMessage name="lastName" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="email"
                              name="email"
                              value={values?.email}
                              onChange={e =>
                                handleChange('email')(e.target.value)
                              }
                              placeholder="Your business email"
                            />
                            <span className="text-error">
                              <ErrorMessage name="email" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          {/*  <PhoneWithCountry
                            value={values.contactNo}
                            handlePhoneChange={
                              (value, country) =>
                              // handleChange('contactNo')(e.target.value)
                            }
                          /> */}
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="number"
                              name="contactNo"
                              value={values?.contactNo}
                              onChange={e => {
                                if (e.target.value?.length < 11) {
                                  handleChange('contactNo')(e.target.value);
                                }
                              }}
                              placeholder="Your Contact no"
                            />
                            <span className="text-error">
                              <ErrorMessage name="contactNo" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            id="password"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type={showPassword ? 'text' : 'password'}
                              name="password"
                              autoComplete="new-password"
                              value={values.password}
                              onChange={e =>
                                handleChange('password')(e.target.value)
                              }
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
                          <span className="text-error">
                            <ErrorMessage name="password" />
                          </span>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type={confirmPassword ? 'text' : 'password'}
                              placeholder="Confirm Password"
                              name="confirmPassword"
                              value={values.confirmPassword}
                              onChange={e =>
                                handleChange('confirmPassword')(e.target.value)
                              }
                            />
                            <span
                              className="eye_icon"
                              onClick={() =>
                                setConfirmPassword(!confirmPassword)
                              }
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
                          <span className="text-error">
                            <ErrorMessage name="confirmPassword" />
                          </span>
                        </Col>
                        <Col md={6}>
                          <Form.Select
                            aria-label="Default select example"
                            className="mb25 form_group"
                            name="country"
                            value={values.country}
                            onChange={e => {
                              handleChange('country')(e.target.value);
                              if (e.target?.value) {
                                dispatch(
                                  getStateList({
                                    CountryID: parseInt(e.target.value),
                                  }),
                                );
                              } else {
                                handleChange('state')('');
                              }
                            }}
                          >
                            <option value="">Select Country</option>
                            {finalCountry?.map(item => {
                              return (
                                <option value={item.value}>{item.label}</option>
                              );
                            })}
                          </Form.Select>
                          <span className="text-error">
                            <ErrorMessage name="country" />
                          </span>
                        </Col>
                        <Col md={6}>
                          <Form.Select
                            aria-label="Default select example"
                            className="mb25 form_group"
                            name="state"
                            value={values.state}
                            onChange={e => {
                              handleChange('state')(e.target.value);
                              if (e.target?.value) {
                                dispatch(
                                  getCityList({
                                    CountryID: values.country
                                      ? parseInt(values.country)
                                      : '',
                                    StateID: parseInt(e.target.value),
                                  }),
                                );
                              }
                            }}
                          >
                            <option value="">Select State</option>
                            {finalState?.map(item => {
                              return (
                                <option value={item.value}>{item.label}</option>
                              );
                            })}
                          </Form.Select>
                          <span className="text-error">
                            <ErrorMessage name="state" />
                          </span>
                        </Col>
                        <Col md={6}>
                          <Form.Select
                            aria-label="Default select example"
                            className="mb25 form_group"
                            name="city"
                            value={values.city}
                            onChange={e => handleChange('city')(e.target.value)}
                          >
                            <option value="">Select City</option>
                            {finalCity?.map(item => {
                              return (
                                <option value={item.value}>{item.label}</option>
                              );
                            })}
                          </Form.Select>
                          <span className="text-error">
                            <ErrorMessage name="city" />
                          </span>
                        </Col>
                        <Col md={12}>
                          <Form.Group
                            className="mb40 form_group input_checkbox d-flex"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Check
                              type="checkbox"
                              id="terms_condition"
                              className="mr10"
                            />
                            <label htmlFor="terms_condition">
                              I accept <Link to="/">terms & condition</Link>
                            </label>
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          variant="primary"
                          type="submit"
                          className="rounded-pill btn_shadow large_padding mb25"
                        >
                          Sign Up
                        </Button>
                        <p className="m0">
                          Already have an account?{' '}
                          <Link to="/login">Log In</Link>
                        </p>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
