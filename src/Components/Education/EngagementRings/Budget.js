import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import EngagementRingsSidebar from './EngagementRingsSidebar';

export default function Budget() {
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
                  Buy an Engagement Ring on a Budget
                </h4>
                <p>
                  Here are some basic guidelines on how to buy an engagement
                  ring on a budget:
                </p>
                <h5>A Diamond Certificate Doesn’t Tell You the Whole Story</h5>
                <p>
                  If you base your diamond decision on a laboratory certificate
                  alone, you can end up paying more. Although a certificate is
                  useful for authenticating a diamond and providing basic
                  specifications of a specific stone, a certificate alone
                  doesn’t reflect the true beauty and value of a diamond. Two
                  diamonds can be categorized as having the same characteristics
                  on a diamond certificate, yet be priced differently, and the
                  certificate won’t tell you why. A diamond certificate doesn’t
                  indicate how a stone’s inclusions affect its beauty and value.
                  You need to actually see a diamond to understand the nature of
                  its inclusions.
                </p>
                <h5>A Diamond's Cut and Shape Come First</h5>
                <p>
                  Cut refers to the diamond’s proportion and facets. Shape is
                  the overall geometric form of the stone (e.g. round, square,
                  oval). A diamond’s cut and shape affect many aspects of the
                  stone’s overall appearance and price; cut can be graded,
                  whereas shape cannot. Experts say cut is the most important
                  buying criteria, because it determines the diamond’s sparkle
                  and brilliance, and recommend buying the best possible cut
                  that you can afford.
                </p>
                <p>
                  Diamond shape is a very personal choice and you should go with
                  the shape you like best. If you decide on a shape and cut
                  first, it will be easier to decide on the other C’s. Choosing
                  a cut and shape you love will save you money in the long run,
                  as you’ll be less inclined to change your ring or upgrade down
                  the line.
                </p>
                <h5>
                  Choose a Diamond With a Clarity and Color Grade that Looks
                  "Clean" to the Naked Eye
                </h5>
                <p>
                  When it comes to white (non-fancy) diamonds, most consumers
                  can't tell the difference between diamonds on the very high
                  end of the clarity scale ( like VVS1), and those lower on the
                  scale which contain very slight or slight inclusions (VS1 or
                  SI1). In the case of many SI1 diamonds, for example, the flaws
                  are only visible under 10X magnification, although the price
                  difference between a VVS1 and an SI1 diamond is considerable.
                </p>
                <p>
                  Keep in mind that some diamond cuts, such as the popular round
                  cut, mask inclusions and flaws very well. So if you're on a
                  budget, you don’t necessarily need to buy an internally
                  flawless diamond. A lower-clarity stone that looks clear to
                  the naked eye is probably sufficient.
                </p>
                <p>
                  The same advice applies to a diamond’s Color Grade. The
                  Gemological Institute of America (GIA), the American Gem
                  Society (AGS), and the International Gemological Institute
                  (IGI) grade a diamond’s color on a scale of D (colorless, and
                  most desirable) to Z (least desirable, with a visible yellow
                  tint).
                </p>
                <p>
                  A "D" or "F" diamond (colorless) can easily cost double that
                  of an “I” (near colorless) diamond of the same cut, although
                  most people can’t tell the difference between the two. If
                  you’re on a budget, use your eyes as a guide. You don't need
                  to buy a diamond that's on the highest end of the color scale.
                </p>
                <h5>Good Polish is Good Enough</h5>
                <p>
                  A diamond's polish refers to the smoothness of the exterior
                  surface of the stone. When it comes to diamond's polish, a
                  "good" grade is good enough for most cases. Most consumers
                  can't tell the difference between a diamond with "good" and
                  the more-expensive "excellent" polish.
                </p>
                <h5>White Gold is a Great Alternative to Platinum</h5>
                <p>
                  Although platinum is the preferred ring metal of choice, it is
                  also the most expensive of the precious metals used in
                  jewelry. White gold, on the other hand, is an excellent and
                  affordable alternative to platinum and a great choice for the
                  budget conscious shopper. White gold has a stunning appearance
                  and a white/gray patina that resembles platinum. White gold is
                  also very durable, has a high scratch resistance factor, and
                  does an excellent job of drawing attention to a diamond’s
                  brilliance.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
