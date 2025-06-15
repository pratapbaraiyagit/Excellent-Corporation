import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import EngagementRingsSidebar from './EngagementRingsSidebar';

export default function SettingTypes() {
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
                <h4 className="text_primary">Setting Types</h4>
                <p>
                  An engagement ring should be a reflection of the person
                  wearing it.
                </p>
                <p>Here are a few tips to help begin:</p>
                <p>
                  A woman with simpler, more streamlined taste may prefer a
                  beautifully-made solitaire setting with one fantastic diamond.
                  For women who like a lot of sparkle, an intricate pave setting
                  with rows of diamonds might be preferable. A vintage setting
                  with delicate engraving might appeal to a woman who has a
                  penchant for the classics. Beautiful baguette side stones give
                  a more contemporary feel to a ring, and gemstone settings are
                  great for a woman who loves color. Tension settings will
                  likely appeal to a more modern woman. Consider the woman, and
                  the right style will become clear. Remember that the wedding
                  band that will follow will need to match the engagement ring
                  in terms of style and metal. The width of the ring is also a
                  factor, since it will soon have a wedding ring next to it. A
                  woman with small hands will want a narrower band on her rings,
                  while a woman with larger hands might prefer a wider band.
                </p>
                <h5>Prongs</h5>
                <p>
                  Prongs are the most traditional setting technique. Prongs
                  allow for maximum exposure of the diamond and minimize the
                  presence of metal (gold or platinum). In turn, more light is
                  able to pass through the diamond, which only adds to its
                  brilliance.
                </p>
                <h5>Bezel</h5>
                <p>
                  This setting style, primarily known for its simplicity and
                  durability, encases the surrounding outer edge of the diamond
                  in a fine frame of metal (gold or platinum). When using white
                  gold or platinum it can often give the diamond a larger
                  appearance. The bezel setting is a versatile one because it
                  can accommodate every diamond shape.
                </p>
                <h5>Tension</h5>
                <p>
                  A tension setting is a modern and beautiful method of setting
                  a diamond into a ring. In tension-set rings, the diamond is
                  essentially "squeezed" into a small groove that is cut into
                  the tension mounting. The mountings are manufactured using
                  precious metals that are especially hardened to grip the
                  diamond without the necessity of prongs. The settings are
                  designed to be very secure.
                </p>
                <h5>Channel</h5>
                <p>
                  Channel settings are a loved for their brilliance and
                  durability. With this setting, small diamonds (usually round
                  or princess-cut) are set deep into the metal band, thus
                  creating a “channel” which holds the diamonds. The small
                  diamonds are very secure because they are embedded into the
                  metal, making it very difficult for them to fall out. For this
                  reason, channel settings are a particularly good choice for
                  people who work with their hands.
                </p>
                <h5>Twist</h5>
                <p>
                  Twist settings are becoming more and more popular among
                  couples looking to buy an engagement ring. In this setting,
                  the metal band is shaped and turned to create a crisscrossed
                  effect. The result is a unique look that is as complex as it
                  is delicate.
                </p>
                <h5>Bar</h5>
                <p>
                  As the name suggests, the bar setting is characterized by two
                  metal bars that hold the diamond in place. The bar setting is
                  a sleek and modern look that makes a bold statement. This
                  setting is also showcases the center diamond beautifully,
                  which allows more light to enter the diamond and increases the
                  diamond’s brilliance.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
