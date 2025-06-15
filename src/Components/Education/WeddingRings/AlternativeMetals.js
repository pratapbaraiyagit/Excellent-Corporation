import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import WeddingRingsSidebar from './WeddingRingsSidebar';

export default function AlternativeMetals() {
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
                <h4 className="text_primary">Alternative Metals</h4>
                <h5>Titanium</h5>
                <p>
                  Titanium rings are very popular, particularly as a men’s
                  wedding ring. Titanium is very durable, lightweight and
                  hypoallergenic, making it a great choice for anyone who
                  suffers from metal allergies. Titanium’s color is slightly
                  darker than that of white gold or platinum. Because of its
                  durability, titanium is usually machined from a single piece
                  of metal (which is why it cannot be used for engagement ring
                  prongs, for example). Titanium rings offer many finishes, such
                  as a brushed finished, a polished finished and a hammered
                  finish.
                </p>
                <h5>Cobalt Chrome</h5>
                <p>
                  Cobalt chrome is an alloy which is made of cobalt and
                  chromium. The major advantages of cobalt chrome are that it is
                  difficult for it to corrode, scratch or chip. Simultaneously,
                  cobalt chrome is also very malleable, making it very easy to
                  work with. Finally, cobalt chrome is hypoallergenic, making it
                  a wonderful option for anyone who has sensitive skin.
                </p>
                <h5>Ceramic</h5>
                <p>
                  Ceramic rings have become more prevalent because of their
                  durability, affordability and wide range of colors. The most
                  popular ceramic wedding ring color is black, offering a sleek
                  and unique look for a wedding band. Ceramic jewelry is also
                  very versatile, as it can be customized into a variety of
                  shapes and sizes.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
