import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import JewelleryImgSlider from '../Jewellery/JewelleryImgSlider';
import SimilarJewellery from '../Jewellery/SimilarJewellery';
import CustomizeRingSteps from './CustomizeRingSteps';
import CartIcon from '../../Assets/Images/cart.svg';
import Star from '../../Assets/Images/star.svg';
import ShieldIcon from '../../Assets/Images/shield-check.svg';
import TruckIcon from '../../Assets/Images/truck.svg';
import SelectedRing from '../../Assets/Images/selected-ring.svg';
import SelectedDiamond from '../../Assets/Images/selected-diamond.svg';
import { Link, useNavigate } from 'react-router-dom';
import ItemReview from '../Jewellery/ItemReview';

export default function ViewCompleted() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="customize_ring_steps pt20 pb50">
        <CustomizeRingSteps />
      </section>
      <section className="jewellety_detail_wrapper pb80">
        <Container>
          <Row>
            <Col md={4}>
              <JewelleryImgSlider />
            </Col>
            <Col md={8}>
              <div className="jewellery_price_wrapper">
                <h5 className="fs_20 mb20 text_dark">
                  Engagement Ring{' '}
                  <span className="text_extra_light">(Completed)</span>
                </h5>
                <div className="rating d-flex mb20">
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                </div>
                <h4 className="fw_700 mb10 text_primary">$2,499.00</h4>
                <h6 className="text-uppercase text_light mb25">
                  1.01 Total Carat weight
                </h6>
                <div className="selected_diamond_wrap">
                  <div className="selected_diamond_in d-flex mb25">
                    <div className="select_img">
                      <img src={SelectedRing} alt="" />
                    </div>
                    <div className="selected_diamond_info">
                      <p className="mb10 fw_300 fs_16">
                        14K White Gold 2mm Comfort Fit Solitaire Engagement Ring
                      </p>
                      <h6 className="fs_16">
                        $1130.00 <Link to="/">Change</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="selected_diamond_in d-flex mb25">
                    <div className="select_img">
                      <img src={SelectedDiamond} alt="" />
                    </div>
                    <div className="selected_diamond_info">
                      <p className="mb10 fw_300 fs_16">
                        1.01 Carat G-SI1 Excellent Cut Round Diamond
                      </p>
                      <h6 className="fs_16">
                        $2430.00 <Link to="/">Change</Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="ring_size mb25">
                  <h6 className="fs_16 mb15 text_light">Ring Size</h6>
                  <Form.Group
                    controlId="exampleForm.ControlInput1"
                    className="form_group"
                  >
                    <Form.Select aria-label="Default select example">
                      <option value="1">Select Size</option>
                      <option value="2">6</option>
                      <option value="2">6.5</option>
                      <option value="2">7</option>
                      <option value="2">7.5</option>
                      <option value="2">8</option>
                      <option value="2">8.5</option>
                      <option value="2">9</option>
                      <option value="2">9.5</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <ul className="action_button_wrap d-flex align-items-center mt25">
                  <li className="mr10">
                    <Button
                      variant="primary"
                      className="rounded-pill pl20 pr20 btn_shadow"
                      onClick={() => navigate('/cart')}
                    >
                      <img src={CartIcon} className="white_img" alt="" />
                      Add To Cart
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="shiping_info_wrap">
                <h6>
                  Ships by : <span>Thursday, September 21.</span>
                </h6>
                <ul>
                  <li>
                    <img src={ShieldIcon} alt="" /> Risk-Free Retail
                  </li>
                  <li>
                    <img src={TruckIcon} alt="" />
                    14K White Gold 2mm Comfort Fit Solitaire Engagement Ring
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="review_wrapper pb80">
        <ItemReview />
      </section>

      <section className="similar_stone_wrapper pb100">
        <SimilarJewellery />
      </section>
    </main>
  );
}
