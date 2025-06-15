import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FineJewellerySidebar from './FineJewellerySidebar';

export default function DiamondPendants() {
  return (
    <main>
      <section className="natural_gemstone_wrap pb100 pb50-md pb80-lg">
        <Container>
          <h3 className="mb30 mb15-lg">Wedding Rings</h3>
          <Row>
            <Col xxl={2} md={3}>
              <FineJewellerySidebar />
            </Col>
            <Col xxl={10} md={9}>
              <div className="diamond_detial_box">
                <h4 className="text_primary">Diamond Pendants</h4>
                <h5>Key Pendants</h5>
                <p>
                  Diamond key pendants have become the perfect token to unlock
                  the key to your loved one's heart. What makes our diamond key
                  pendants so unique is that each key represents the metaphor
                  that you are unlocking your loved one's heart which gives way
                  to a treasure and a lifetime of happiness and devotion.
                </p>
                <h5>Solitaire Pendants</h5>
                <p>
                  Solitaire Pendants are classic jewelry pieces, perfect for all
                  occasions. Diamond solitaire pendants are subtle yet shine
                  enough to make a statement. They are timeless keepsakes to add
                  to your jewelry collection and make for sentimental
                  anniversary, Valentine’s Day and birthday gifts.
                </p>
                <p>
                  Pendants are sold in both white gold and yellow gold and vary
                  in price. Some of our most popular solitaire pendant styles
                  include: Pave Set Frame Diamond Pendants, Pave Bail Diamond
                  Pendants, and the traditional Diamond Pendant. All pendants
                  come with diamonds of different carat weight, cut and clarity.
                </p>
                <h5>Pendants</h5>
                <p>
                  Diamond Pendants are timeless, and can be worn to all
                  occasions. They are classic keepsakes to add to your jewelry
                  collection and are wonderful anniversary, Valentine’s Day and
                  birthday gifts.
                </p>
                <p>
                  Some of our most popular pendant styles include: the
                  traditional Diamond Pendant, Pave Bail Diamond Pendants, and
                  Pave Set Frame Diamond Pendants. All pendants come with
                  diamonds of different carat weight, cut and clarity.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
