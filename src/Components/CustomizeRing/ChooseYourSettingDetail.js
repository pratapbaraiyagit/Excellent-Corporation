import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import JewelleryImgSlider from '../Jewellery/JewelleryImgSlider';
import SimilarJewellery from '../Jewellery/SimilarJewellery';
import CustomizeRingSteps from './CustomizeRingSteps';
import PlusIcon from '../../Assets/Images/plusicon.svg';
import Star from '../../Assets/Images/star.svg';
import WhiteGold from '../../Assets/Images/white_gold.svg';
import Gold from '../../Assets/Images/gold.svg';
import RoseGold from '../../Assets/Images/rose-gold.svg';
import Plaatinum from '../../Assets/Images/platinum.svg';
import { useNavigate } from 'react-router-dom';
import ItemReview from '../Jewellery/ItemReview';

export default function ChooseYourSettingDetail() {
  const navigate = useNavigate();
  const [color, setColor] = useState('White Gold');
  return (
    <main>
      <section className="customize_ring_steps pt20 pb50 pt0-md pb30-sm">
        <CustomizeRingSteps />
      </section>
      <section className="jewellety_detail_wrapper pb80 pb50-md">
        <Container>
          <Row>
            <Col xxl={4} lg={5}>
              <JewelleryImgSlider />
            </Col>
            <Col xxl={8} lg={7}>
              <div className="jewellery_price_wrapper">
                <h5 className="fs_20 mb20 text_dark">
                  Radiant-Cut Moissanite Ring With Knife-Edge Band In 14K White
                  Gold (2 Ct.)
                </h5>
                <h4 className="fw_700 mb10 text_primary">$2,499.00</h4>
                <div className="rating d-flex mb20">
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                </div>
                <h6 className="fw_700 fs_14 mb25">
                  Report#
                  <span className="fw_400 ml10 text_extra_light">
                    464109439
                  </span>
                </h6>
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
                <div className="color_select_Wrap">
                  <h6 className="fs_16 fw_500 mb15">
                    Metal :
                    <span className="text_extra_light fw_400 pl10">
                      {color === 'White Gold' && '18K White Gold'}
                      {color === 'gold' && '18K Gold'}
                      {color === 'roseGold' && '18K Rose Gold'}
                      {color === 'platinum' && '18K Platinum'}
                    </span>
                  </h6>
                  <ul>
                    <li>
                      <div className="color_select_radio">
                        <input
                          type="radio"
                          name="color_select"
                          id="white_gold"
                          checked={color === 'White Gold'}
                          onClick={() => setColor('White Gold')}
                        />
                        <label htmlFor="white_gold">
                          <img src={WhiteGold} alt="" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="color_select_radio">
                        <input
                          type="radio"
                          name="color_select"
                          id="gold"
                          checked={color === 'gold'}
                          onClick={() => setColor('gold')}
                        />
                        <label htmlFor="gold">
                          <img src={Gold} alt="" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="color_select_radio">
                        <input
                          type="radio"
                          name="color_select"
                          id="roseGold"
                          checked={color === 'roseGold'}
                          onClick={() => setColor('roseGold')}
                        />
                        <label htmlFor="roseGold">
                          <img src={RoseGold} alt="" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="color_select_radio">
                        <input
                          type="radio"
                          name="color_select"
                          id="platinum"
                          checked={color === 'platinum'}
                          onClick={() => setColor('platinum')}
                        />
                        <label htmlFor="platinum">
                          <img src={Plaatinum} alt="" />
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="action_button_wrap d-flex align-items-center mt25">
                  <li className="mr10">
                    <Button
                      variant="primary"
                      className="rounded-pill pl20 pr20 btn_shadow"
                      onClick={() => navigate('/view-completed')}
                    >
                      <img src={PlusIcon} alt="" />
                      Add To Ring
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="description_wrapper">
                <h5>Product Description</h5>
                <p>
                  Classic and refined, this piece offers understated elegance
                  and unsurpassed comfort while highlighting the center diamond
                  or gemstone you select. The perfect width for stacking, it
                  offers versatility to allow her to create a wedding set that
                  shows off her true personality. ?Purchase of center diamond
                  required.?
                </p>
                <div className="jewellery_detail_right about_setting">
                  <h6 className="mb5">About Setting</h6>
                  <ul>
                    <li>
                      Width :<span>2.00mm</span>
                    </li>
                    <li>
                      Metal :<span>14K white gold</span>
                    </li>
                  </ul>
                </div>
              </div>
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
