import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NaturalGemstoneSidebar from './NaturalGemstoneSidebar';

export default function GreenEmeralds() {
  return (
    <main>
      <section className="natural_gemstone_wrap pb100 pb50-md pb80-lg">
        <Container>
          <h3 className="mb30 mb15-lg">Natural Gemstone</h3>
          <Row>
            <Col xxl={2} md={3}>
              <NaturalGemstoneSidebar />
            </Col>
            <Col xxl={10} md={9}>
              <div className="diamond_detial_box">
                <h4 className="text_primary">Green Emeralds</h4>
                <p>
                  Recently chosen as Pantone “Color of the Year” for 2013;
                  emeralds are among the most precious of natural gemstones,
                  alongside rubies, sapphires and diamonds. Emerald is a type of
                  the mineral beryl. Its green color is a result of small
                  amounts chromium and sometimes vanadium within the gemstone.
                  Depending on the amount of these elements, the emerald can
                  appear light green to a very deep, dark green. Emeralds are by
                  far the most stunning and popular of the green color
                  gemstones. For centuries, they have been among the most sought
                  after and valuable gemstones symbolizing rebirth and love.
                </p>
                <h5>Color</h5>
                <p>
                  The color of a gemstone is considered to be the most defining
                  characteristic when evaluating the overall appearance. Color
                  is the most important factor when pricing emeralds and is
                  broken down into three components: hue, saturation and tone.
                  An ideal emerald for an engagement ring is well saturated and
                  bright.
                </p>
                <p>
                  Emeralds are found in hues ranging from yellow-green to
                  blue-green, with the primary hue being green. The most
                  desirable emerald colors are bluish green to green, with vivid
                  saturation and medium to medium dark tone. The most prized
                  emeralds are highly transparent with even color distribution
                  and no eye visible color zoning. Secondary hues found in
                  emeralds are usually yellow and blue however, when the hue is
                  too yellowish or bluish the stone is no longer considered an
                  emerald but will be considered a different beryl. (Gray is the
                  saturation modifier or mask found in emeralds.)
                </p>
                <p>
                  Beryl is a relatively common mineral and is associated with
                  many gemstones. For instance, beryl that is yellow or orange
                  is usually called Heliodor, pink or salmon colored beryl is
                  called Morganite and the rarest type of beryl, bixbite is a
                  deep, intense red. Emerald usually comes in a deep, intense
                  green. However, it is sometimes found as a light green or even
                  to have a tinge of yellow in the stone.
                </p>
                <h5>Clarity</h5>
                <p>
                  Emerald tends to have numerous inclusions and surface breaking
                  fissures. Unlike a diamond, where the loupe standard, i.e. 10X
                  magnification, is used to grade clarity, emerald is graded by
                  eye. Thus, if an emerald has no visible inclusions to the eye
                  (assuming normal visual acuity) it is considered flawless.
                  Stones that lack surface breaking fissures are extremely rare
                  and therefore almost all emeralds are treated, "oiled", to
                  enhance the apparent clarity. The most expensive emeralds are
                  eye-clean stones of an intense primary green hue with no more
                  than 15% of any secondary hue or combination of a medium-dark
                  tone.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
