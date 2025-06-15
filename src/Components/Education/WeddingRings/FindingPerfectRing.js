import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import WeddingRingsSidebar from './WeddingRingsSidebar';

export default function FindingPerfectRing() {
  return (
    <main>
      <section className="natural_gemstone_wrap pb100 pb50-md pb80-lg">
        <Container>
          <h3 className="mb30 mb15-lg">Wedding Rings</h3>
          <Row>
            <Col xxl={2} md={3}>
              <WeddingRingsSidebar />
            </Col>
            <Col xxl={10} md={9}>
              <div className="diamond_detial_box">
                <h4 className="text_primary">
                  Finding The Perfect Wedding Ring
                </h4>
                <p>
                  Every bride has an idea of what ring she wants and, if
                  possible, the ring that he'll be wearing too. If your man is
                  hesitant about wearing a ring, then put aside your plans for
                  matching bands. Though having rings that match can be a
                  wonderful public expression of your love for each other, that
                  shouldn't be a critical point. Many men find rings to be
                  uncomfortable, so if your platinum round pave set diamond
                  wedding ring doesn't come in an equivalent ring for him, don't
                  fret - wear the ring you want and let him pick out the ring
                  that he likes.
                </p>
                <h5>Traditional, Contemporary, or Both?</h5>
                <p>
                  Styles of rings vary from the traditional to the contemporary,
                  with many women choosing to blend both. Fashion designers such
                  as M Danhov understand what brides want and that includes
                  diamonds - lots of them! For example, the Ladies 18k White
                  Gold MY4 by Danhov Diamond Wedding Band represents the
                  ultimate wedding band: four rows of 2.15 carats of pave' set
                  diamonds in white gold. Stunningly elegant, yet amazingly
                  refined, rings from the Danhov Collection are admired and
                  desired worldwide.
                </p>
                <p>
                  Men have many choices too when it comes to wedding bands. The
                  rules have changed to the point where any man, if he likes
                  them, can have a wedding ring that is encrusted in diamonds
                  too. A customized ring can be made that fits his personality
                  and, if your are one lucky woman, match your ring too. One
                  special note: many men prefer comfort-fit rings, those wedding
                  bands which have rounded inner edges to them.
                </p>
                <h5>When Ordering Your Rings</h5>
                <p>
                  On-line ring buying has grown in leaps and bounds because
                  consumers have discovered that they can get the same rings
                  through mail order that they can buy at the local jewelry
                  store. Moreover, in many cases on-line purchases are delivered
                  state tax free, translating into additional savings for the
                  happy couple. That ring selling for $6000 at the mall jewelry
                  shop could retail for under $5000 on-line!
                </p>
                <p>
                  No matter where you choose to buy your wedding rings, finding
                  a pair that satisfies you both is very important. Your wedding
                  day is a once in a lifetime event, and a day you'll want to
                  cherish forever. Find the right pair of rings and you'll have
                  a forever reminder of your commitment to each other, rings
                  that will satisfy both husband and wife.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
