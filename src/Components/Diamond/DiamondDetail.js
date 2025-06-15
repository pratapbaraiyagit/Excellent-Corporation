import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DiamondImgSlider from './DiamondImgSlider';
import DiamondInfo from './DiamondInfo';
import AdditionalInfo from './AdditionalInfo';
import SimilarStone from './SimilarStone';
import CustomizeRingSteps from '../CustomizeRing/CustomizeRingSteps';

export default function DiamondDetail() {
  return (
    <main>
      <section className="diamond_detail_wrapper pt40 pt0-sm pb100 pb80-xl pb50-md">
        <Container>
          <Row>
            <Col xl={4} md={6}>
              <DiamondImgSlider />
            </Col>
            <Col xl={8} md={6}>
              <DiamondInfo />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="additional_detail_wrapper pb80 pb50-md">
        <AdditionalInfo />
      </section>

      <section className="recommended_you pb40">
        <Container>
          <h2 className="text-center mb25 h3">Recommended For You</h2>
          <SimilarStone />
        </Container>
      </section>
    </main>
  );
}
