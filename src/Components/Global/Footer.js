import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FooterLogo from '../../Assets/Images/logo-light.svg';
import Facebook from '../../Assets/Images/facebook.svg';
import Instagram from '../../Assets/Images/instagram.svg';
import Linkedin from '../../Assets/Images/linkedin.svg';
import Pinterest from '../../Assets/Images/pinterest.svg';
import Twitter from '../../Assets/Images/twitter.svg';
import Youtube from '../../Assets/Images/youtube.svg';

export default function Footer() {
  return (
    <footer>
      <section className="newsletter_wrapper">
        <Container>
          <div className="newsletter_wrapper_inner px20 pt80 pb80 pt50-md pb50-md pt30-xs pb30-xs">
            <div className="newsletter_wrapper_form">
              <h2 className="mb25">
                Sign up for our <span>Newsletter</span>
              </h2>
              <div className="newsletter_Form_wrap mb20">
                <Form>
                  <Form.Group
                    controlId="exampleForm.ControlInput1"
                    className="form_group_wrap"
                  >
                    <Form.Control type="email" placeholder="Email address..." />
                  </Form.Group>
                  <Button variant="primary">Explore</Button>
                </Form>
              </div>
              <p className="m0">
                By signing up you agree with our Terms & Conditions and Privacy
                Policy. To opt out, click Unsubscribe in our emails.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="main_footer bg_secondary">
        <div className="footer_link_wrapper">
          <Container>
            <Row>
              <Col lg={2}>
                <div className="footer_logo">
                  <img src={FooterLogo} alt="" />
                </div>
              </Col>
              <Col lg={7}>
                <Row className="pt30-md pb30-md">
                  <Col sm={3}>
                    <div className="footer_link">
                      <h6>COMPANY</h6>
                      <ul>
                        <li>
                          <Link to="/">Our Stores</Link>
                        </li>
                        <li>
                          <Link to="/">Our Materials</Link>
                        </li>
                        <li>
                          <Link to="/">Sustainability</Link>
                        </li>
                        <li>
                          <Link to="/">Careers</Link>
                        </li>
                        <li>
                          <Link to="/">Sitemap</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col sm={3}>
                    <div className="footer_link">
                      <h6>HELP</h6>
                      <ul>
                        <li>
                          <Link to="/">FAQ</Link>
                        </li>
                        <li>
                          <Link to="/">Size Guide</Link>
                        </li>
                        <li>
                          <Link to="/">Delivery & Returns</Link>
                        </li>
                        <li>
                          <Link to="/">Warranty</Link>
                        </li>
                        <li>
                          <Link to="/">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col sm={3}>
                    <div className="footer_link">
                      <h6>QUICK LINKS</h6>
                      <ul>
                        <li>
                          <Link to="/">Bestsellers</Link>
                        </li>
                        <li>
                          <Link to="/">Combos</Link>
                        </li>
                        <li>
                          <Link to="/">Stocks</Link>
                        </li>
                        <li>
                          <Link to="/">Face Masks</Link>
                        </li>
                        <li>
                          <Link to="/">Gifting Guide</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col sm={3}>
                    <div className="footer_link">
                      <h6>SHOP DIAMOND</h6>
                      <ul>
                        <li>
                          <Link to="/">Round</Link>
                        </li>
                        <li>
                          <Link to="/">Oval</Link>
                        </li>
                        <li>
                          <Link to="/">Emerald</Link>
                        </li>
                        <li>
                          <Link to="/">Marquise</Link>
                        </li>
                        <li>
                          <Link to="/">Cushion</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={3}>
                <div className="footer_link social_icon_wrap">
                  <h6>GET IN TOUCH</h6>
                  <ul className="social_icon">
                    <li>
                      <Link to="/">
                        <img src={Facebook} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={Instagram} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={Linkedin} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={Pinterest} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={Twitter} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={Youtube} alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="copyright_wrapper">
          <Container>
            <p className="text-center m0">
              Copyright © 2023 Excellent. All Rights Reserved
            </p>
          </Container>
        </div>
      </section>
    </footer>
  );
}
