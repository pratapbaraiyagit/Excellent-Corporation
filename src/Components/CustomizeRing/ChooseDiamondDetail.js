import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdditionalInfo from '../Diamond/AdditionalInfo';
import DiamondImgSlider from '../Diamond/DiamondImgSlider';
import DiamondInfo from '../Diamond/DiamondInfo';
import SimilarStone from '../Diamond/SimilarStone';
import CustomizeRingSteps from './CustomizeRingSteps';

export default function ChooseDiamondDetail() {
  return (
    <main>
      <section className="customize_ring_steps pt20 pb50 pt0-md pb30-sm">
        <CustomizeRingSteps />
      </section>
      <section className="diamond_detail_wrapper pt40 pb100 pb80-lg pb50-md pt0-md">
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

      <section className="additional_detail_wrapper pb80">
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
