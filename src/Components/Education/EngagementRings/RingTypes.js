import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import EngagementRingsSidebar from './EngagementRingsSidebar';

export default function RingTypes() {
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
                <h4 className="text_primary">Solitaire Engagement Rings</h4>
                <p>
                  A solitaire ring setting features a single stone, typically a
                  diamond with a plain mounting (usually four or six prongs).
                  Solitaires are one of the most popular engagement ring
                  settings. Their appeal is in their elegance, simplicity, and
                  timelessness. Solitaire engagement rings come in a variety of
                  sizes and styles. Some have narrower bands which have the
                  effect of making a smaller diamond appear larger, and
                  compliment small fingers. Others have thicker bands which
                  allow for more options in the way the diamond is set. Many
                  solitaire rings have ring guards (or rings wraps) which frame
                  the center diamond, making it appear more prominent.
                </p>
                <h4 className="text_primary">Pavé Engagement Rings</h4>
                <p>
                  A pavé engagement ring is encrusted with very small diamonds
                  all along the band to give the appearance of a solid diamond
                  surface. Because pave-set diamonds use only tiny beads or
                  prongs to hold them in place, very little of the metal band
                  shows through and the diamonds appear to be free-standing.
                  Pave settings can either go around the whole band (full pave)
                  or stop halfway around it (half pave). Micro pave rings are
                  even more delicate and intricate than regular pave settings.
                  The individual stones are so small that they appear to blend
                  together and create extraordinary fire. Typically, round
                  brilliant or princess cut diamonds are used as center stones
                  in pave engagement rings. Most center stones are prong-set,
                  basket-set or bezel-set.
                </p>
                <h4 className="text_primary">Channel Set Engagement Rings</h4>
                <p>
                  Channel set engagement rings feature side diamonds that are
                  embedded into the channel groove of the ring. A thin strip of
                  metal secures the diamonds in place—no prongs are used. The
                  diamonds are flush with the band and as a result, channel set
                  rings are sturdier than other designs and less likely to snag
                  on clothing. Channel settings are available in gold and
                  platinum, with a variety of diamond shapes and cuts. When it
                  comes to picking the right channel stones for your channel
                  ring, princess cut is a popular choice, as its square edges
                  ensure no gaps between the stones.
                </p>
                <h4 className="text_primary">Sidestone Engagement Rings</h4>
                <p>
                  Sidestone engagement ring settings provide a perfect
                  complement to a center stone and typically consist of a center
                  diamond flanked by two or more smaller-sized side diamonds.
                  Because sidestones add size and brilliance to the center
                  diamond, they make the overall appearance of the engagement
                  ring more impressive and radiant. When it comes to selecting a
                  center diamond for an engagement ring with side stones, round
                  brilliant or princess cut diamonds are typically chosen,
                  although most diamond shapes can be used.
                </p>
                <h4 className="text_primary">Three-Stone Engagement Rings</h4>
                <p>
                  Three stone engagement rings consist of a center diamond
                  flanked by two side diamonds, which accentuate the size and
                  brilliance of the center diamond.The center stone is usually
                  set higher to complement the side stones and add depth to the
                  ring. Round or princess cut diamonds are the most popular
                  choices for center stones. Most center stones are prong-set,
                  basket-set or bezel-set, as these settings effectively
                  distinguish the center diamond from the setting.
                </p>
                <h4 className="text_primary">Tension Set Engagement Rings</h4>
                <p>
                  Tension engagement rings are a modern engagement ring setting
                  in which a diamond is held in place by the physical force of
                  the setting, without any prongs. In a tension ring, the
                  diamond appears to be floating in air. As the name suggests,
                  tension rings use the force and tension of the ring to push
                  against the diamond to hold it in place. Tension cut
                  engagement rings are some of the most secure engagement rings
                  around as the whole ring works to hold the diamond in place
                  even tighter than prong settings. Since tension cut
                  engagements rings show off the entire diamond, the shape and
                  cut of the diamond is extremely important. Round, princess,
                  and emerald-cut diamonds are popular choices for tension set
                  rings.
                </p>
                <h4 className="text_primary">Vintage Engagement Rings</h4>
                <p>
                  Vintage and antique-style engagement rings offer the beauty
                  and intricate craftsmanship of vintage rings with the sturdy
                  and lasting design techniques of modern engagement rings.
                  Vintage-style engagement ring designs often draw inspiration
                  from various time periods and contain diamonds with modern
                  diamond cuts, which maximize fire, brilliance, and light
                  reflective properties.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
