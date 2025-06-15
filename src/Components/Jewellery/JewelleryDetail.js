import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ItemReview from './ItemReview';
import JewelleryImgSlider from './JewelleryImgSlider';
import JewelleryInfo from './JewelleryInfo';
import SimilarJewellery from './SimilarJewellery';

export default function JewelleryDetail() {
  return (
    <main>
      <section className="jewellety_detail_wrapper pt40 pb80 pt0-md pb50-md">
        <Container>
          <Row className="g-4">
            <Col xl={4} lg={5}>
              <JewelleryImgSlider />
            </Col>
            <Col xl={8} lg={7}>
              <JewelleryInfo />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="review_wrapper pb80 pb50-md">
        <ItemReview />
      </section>

      <section className="similar_stone_wrapper pb100 pb80-lg pb50-md">
        <SimilarJewellery />
      </section>
    </main>
  );
}
