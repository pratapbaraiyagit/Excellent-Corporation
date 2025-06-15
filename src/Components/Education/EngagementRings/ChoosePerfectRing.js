import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import EngagementRingsSidebar from './EngagementRingsSidebar';

export default function ChoosePerfectRing() {
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
                <h4 className="text_primary">
                  How to Choose the Perfect Engagement Ring
                </h4>
                <p>
                  A diamond engagement ring represents love and commitment. It
                  is an outward sign of the inward love you have for your
                  bride-to-be. Before purchasing your diamond engagement ring,
                  there are a few things to consider.
                </p>
                <h5>The 4Cs of Diamond Quality</h5>
                <p>
                  Diamonds are priced according to the 4 C’s: cut, color,
                  clarity, and carat weight. Please read our diamond education,
                  as well as "How to Choose the Perfect Diamond," to learn about
                  each attribute in detail and what diamond grade offers the
                  best value for your budget.
                </p>
                <p>
                  In addition to the 4 C’s, shape (e.g. round, pear, marquise,
                  oval, heart, etc.), brilliance, dispersion and scintillation
                  determine a diamond's value.
                </p>
                <h5>Select Your Metal First</h5>
                <p>
                  Engagement rings are typically made from one of three metals:
                  platinum, white gold, or yellow gold. Platinum is the most
                  expensive metal as it resists tarnishing, but it is also the
                  most expensive to repair if damaged.
                </p>
                <p>
                  Yellow gold rings are the most popular and are available in
                  14-karat or 18-karat gold. Although this type of ring can show
                  scratches and other abrasions, repairs come easy.
                </p>
                <p>
                  White gold rings have a silver-like appearance which will
                  eventually wear off and need to be replaced. The appeal of
                  white gold is that it easily matches most other jewelry.
                </p>
                <h5>Choose Your Setting Wisely</h5>
                <p>
                  Engagement ring styles are individual and should match the
                  personality of the person who will be wearing it. There are
                  endless options of standard and custom engagement ring
                  settings from simple solitaire settings to contemporary
                  tension settings. Prong settings are among the most popular
                  settings as they make the center diamond appear as though it
                  is hanging, which creates an attractive sparkle. To learn more
                  about setting options, check out our education center.
                </p>
                <h5>Certificate of Appraisal</h5>
                <p>
                  Upon purchasing your diamond and setting, you will receive a
                  certificate of authenticity. This certificate will confirm the
                  engagement ring's value and is what you will need if you
                  choose to insure your purchase. Most certificates are issued
                  by the American Gem Society (A.G.S.) or the Gemological
                  Institute of America (G.I.A.), two of the most widely accepted
                  certifying organizations for the diamond industry.
                </p>
                <h5>A Guarantee or Warranty</h5>
                <p>
                  Depending on the jeweler, some type of guarantee or warranty
                  may be offered with your purchase. Many jewelers provide a
                  limited time money back guarantee while others will give to
                  you a lifetime warranty. Understand what you are buying and
                  the policy before you make your purchase.
                </p>
                <p>
                  If you have any questions or need any help selecting the
                  perfect engagement ring, feel free to call our gemologists or
                  customer service experts, available 24/7.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
