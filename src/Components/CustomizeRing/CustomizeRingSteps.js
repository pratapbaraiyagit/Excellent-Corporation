import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DiamondIcon from '../../Assets/Images/diamond-icon.svg';

export default function CustomizeRingSteps() {
  return (
    <Container>
      <Row className="g-2 g-sm-4">
        <Col xs={4}>
          <div
            className={
              window.location.pathname === '/choose-diamond' ||
              window.location.pathname === '/choose-diamond-detail' ||
              window.location.pathname === '/choose-your-setting' ||
              window.location.pathname === '/choose-your-setting-detail' ||
              window.location.pathname === '/view-completed'
                ? 'customize_ring_step active'
                : 'customize_ring_step'
            }
          >
            <h3>
              <span>1</span>Choose Your Diamond{' '}
              <span className="mobile_text">Diamond</span>
            </h3>
            <div className="step_icon">
              <h6>$1245.21</h6>
              <img src={DiamondIcon} alt="" />
            </div>
          </div>
        </Col>
        <Col xs={4}>
          <div
            className={
              window.location.pathname === '/choose-your-setting' ||
              window.location.pathname === '/choose-your-setting-detail' ||
              window.location.pathname === '/view-completed'
                ? 'customize_ring_step active'
                : 'customize_ring_step'
            }
          >
            <h3>
              <span>2</span>Choose Your Setting
              <span className="mobile_text">Setting</span>
            </h3>
            <div className="step_icon">
              <h6>$1245.21</h6>
              <img src={DiamondIcon} alt="" />
            </div>
          </div>
        </Col>
        <Col xs={4}>
          <div
            className={
              window.location.pathname === '/view-completed'
                ? 'customize_ring_step active'
                : 'customize_ring_step'
            }
          >
            <h3>
              <span>3</span>View Completed
              <span className="mobile_text">Preview</span>
            </h3>
            <div className="step_icon">
              <h6>$1245.21</h6>
              <img src={DiamondIcon} alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
