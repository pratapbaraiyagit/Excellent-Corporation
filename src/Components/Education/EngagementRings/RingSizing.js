import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import EngagementRingsSidebar from './EngagementRingsSidebar';

export default function RingSizing() {
  return (
    <main>
      <section className="engagement_ring_wrap pb100 pb50-md pb80-lg">
        <Container>
          <h3 className="mb30 mb15-lg">Engagement Rings</h3>
          <Row>
            <Col xxl={2} md={3}>
              <EngagementRingsSidebar />
            </Col>
            <Col xxl={10} md={9}>
              <div className="diamond_detial_box">
                <h4 className="text_primary">Ring Sizing</h4>
                <p>
                  Your engagement ring or wedding band should fit comfortably —
                  not too tight, but not too loose either. The perfect ring fits
                  loose enough to slide over your knuckle and tight enough so
                  that it cannot fall off your finger.
                </p>
                <h5>Online Ring Sizing:</h5>
                <p>
                  Sizing an engagement ring is easier than you think. The online
                  ring sizer is easy to use and offers two options; you can find
                  your ring size by using the ring sizer to measure your finger
                  or you can measure a ring that you already have. Both are
                  accurate and will give you your exact ring size.
                </p>
                <p>
                  *Some rings cannot be resized and will need to be
                  remanufactured. There will be a fee for rings that need to be
                  remanufactured outside the 30-day return policy.
                </p>
                <h5>Tips for Finding Your Ring Size:</h5>
                <p>
                  <b>Measure your finger at the end of the day.</b>
                </p>
                <p>
                  Your finger size changes depending on the weather and time of
                  day. For best results, measure your finger size at the end of
                  the day when your fingers are warm. (Early in the morning,
                  your fingers are cold and therefore smaller.)
                </p>
                <p>
                  <b>Measure a few times.</b>
                </p>
                <p>
                  Be sure to measure your finger size a few times to make sure
                  your calculations are accurate.
                </p>
                <h5>Tips for Buying a Ring as a Surprise:</h5>
                <p>
                  If you don't know your girlfriend's (or boyfriend's) ring
                  size, ask her/his close friends or family members. Tell them
                  to keep it hush-hush so that they don't accidentialy ruin the
                  surprise!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
