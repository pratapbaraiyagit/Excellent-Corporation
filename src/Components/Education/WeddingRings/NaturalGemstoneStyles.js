import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import WeddingRingsSidebar from './WeddingRingsSidebar';

export default function NaturalGemstoneStyles() {
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
                <h4 className="text_primary">Classic Wedding Rings</h4>
                <p>
                  Classic wedding rings are the perfect choice for newly engaged
                  couples in the market for traditional, timeless rings. Like
                  most bridal jewelry, classic wedding rings come in yellow
                  gold, white gold and platinum. Rings are sold in a variety of
                  widths, ranging from 2mm to 8mm. Classic wedding rings are
                  known for their comfort, as opposed to more intricate or
                  carved wedding rings. Unlike engagement rings, both men and
                  women wear wedding rings all the time and therefore it is
                  extremely important that they are comfortable for every day
                  wear. When selecting classic wedding rings, understanding
                  width is also critical. The width of your wedding ring is
                  entirely a matter of personal style. Some men and women prefer
                  wider bands while others prefer narrower bands. The width of a
                  woman's wedding ring, specifically, depends entirely on the
                  width of the band on her engagement ring. If a woman with
                  small hands already has a large, wide engagement ring,
                  choosing a narrower band for her wedding ring is a better
                  choice for her comfort. A woman with larger hands can handle
                  wider bands on both engagement and wedding rings, but might
                  prefer not to. Women's wedding rings traditionally match their
                  engagement rings in some way, but they can be very different
                  widths and look beautiful together.
                </p>
              </div>
              <div className="diamond_detial_box">
                <h4 className="text_primary">Carved Wedding Rings</h4>
                <p>
                  Women’s carved wedding bands are a popular choice for women
                  who prefer a twist on the classic wedding ring. Carved wedding
                  bands have some sort of carving on them, as opposed to classic
                  wedding rings which are plain and do not have any engravings
                  or patterns. Women with simple or understated engagement
                  rings, often choose to wear intricate carved wedding rings.
                  Carved wedding rings, however, also look striking next to
                  flashy or engagement rings.
                </p>
              </div>
              <div className="diamond_detial_box">
                <h4 className="text_primary">Diamond Wedding Rings</h4>
                <p>
                  Women’s diamond wedding rings are a beautiful symbol of a
                  lifelong commitment of two souls coming together. For women
                  who prefer sparkly jewelry, diamond wedding rings are a great
                  choice. Women’s diamond rings come in all shapes and sizes—
                  all metal types and widths. Diamond wedding rings are also a
                  beautiful way to compliment a classic or even carved wedding
                  band.
                </p>
              </div>
              <div className="diamond_detial_box">
                <h4 className="text_primary">Anniversary Wedding Rings</h4>
                <p>
                  Many couples have the tradition of exchanging anniversary
                  rings on their anniversary. For women who love diamond rings,
                  an anniversary ring is the perfect gift to add to her jewelry
                  collection. Women’s anniversary rings come in a range of
                  styles, widths and metal types. Some women prefer platinum
                  anniversary rings, while others prefer yellow gold anniversary
                  rings.Most women try to match their anniversary rings to their
                  engagement and wedding rings. This way, they can wear all
                  three rings at the same time.
                </p>
              </div>
              <div className="diamond_detial_box">
                <h4 className="text_primary">Eternity Wedding Rings</h4>
                <p>
                  Eternity rings represent eternal, undying love. They are a
                  symbol of a lifelong commitment and union. Women’s eternity
                  rings are the perfect gift for anniversaries, Valentine’s Day
                  and special occasions. Eternity rings are usually encrusted in
                  diamonds and sparkle magnificently when worn alongside your
                  engagement or wedding ring.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
