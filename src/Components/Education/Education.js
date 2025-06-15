import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import AboutBanner from '../../Assets/Images/about-us-banner.jpg';
import LooseDiamond from '../../Assets/Images/education/loose-diamond.jpg';
import EngagementRing from '../../Assets/Images/education/engagement-ring.jpg';
import NaturalGemstone from '../../Assets/Images/education/natural-gemstone.jpg';
import WeddingRings from '../../Assets/Images/education/wedding-rings.jpg';
import FineJewellery from '../../Assets/Images/education/fine-jewellery.jpg';
import { useNavigate } from 'react-router-dom';

export default function Education() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="jewellary_banner education_banner">
        <Container>
          <h1 className="text-white mb15">Education Center</h1>
          <p className="text-white mb30">
            Crafting Brilliance: The Artistry and Legacy
            <span className="d-block">of Excellent corporation</span>
          </p>
          <Button variant="outline-light" className="rounded-pill px30">
            Know More
          </Button>
        </Container>
      </section>
      <section className="education_sec pt50 pb100 pb50-md pb80-lg">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <div className="education_box mb35">
                <div className="eduaction_left_img">
                  <img src={LooseDiamond} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>Loose Diamond</h5>
                  <p>
                    Loose diamonds are the purest form of the gem, and they
                    serve as the foundation for creating exquisite jewelry.
                    These diamonds are carefully cut and polished to bring out
                    their natural brilliance, making them ideal for customizing
                    jewelry pieces according to your unique preferences and
                    style.
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() => navigate('/education/4cs')}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box mb35">
                <div className="eduaction_left_img">
                  <img src={EngagementRing} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>Engagement Rings</h5>
                  <p>
                    An engagement ring is a symbol of love and commitment, often
                    featuring a stunning diamond as its centerpiece. Explore our
                    collection of engagement rings, each crafted with precision
                    to capture the essence of your special moment. Discover a
                    range of styles, from timeless classics to modern designs,
                    to find the perfect ring to express your love.
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() => navigate('/education/ring-types')}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box mb35">
                <div className="eduaction_left_img">
                  <img src={NaturalGemstone} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>Natural Gemstone</h5>
                  <p>
                    Our natural gemstone collection features a stunning array of
                    precious and semi-precious stones, each with its unique
                    beauty and charm. Sourced from the Earth over millions of
                    years, they offer a diverse range of colors, shapes, and
                    properties. Explore their allure, significance in jewelry,
                    astrology, and more.
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() => navigate('/education/sapphires')}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box mb35">
                <div className="eduaction_left_img">
                  <img src={WeddingRings} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>Wedding Rings</h5>
                  <p>
                    Wedding rings are a symbol of eternal love and unity.
                    Explore our exquisite collection of wedding bands designed
                    to complement your engagement ring or stand alone in
                    timeless elegance. Discover various metals, styles, and
                    customization options to find the perfect symbol of your
                    lifelong commitment.
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() =>
                      navigate('/education/natural-gemstone-styles')
                    }
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box">
                <div className="eduaction_left_img">
                  <img src={FineJewellery} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>Fine Jewellery</h5>
                  <p>
                    Diamond jewelry is a timeless expression of elegance and
                    luxury. Our curated selection features a range of exquisite
                    pieces, including necklaces, earrings, bracelets, and more.
                    Explore the world of diamond jewelry, where each piece is
                    crafted to enhance your beauty and make a lasting
                    impression.
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() => navigate('/education/diamond-studs')}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
