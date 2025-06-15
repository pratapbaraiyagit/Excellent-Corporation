import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import BannerOne from '../Assets/Images/banner1.jpg';
import BannerTwo from '../Assets/Images/banner2.jpg';
import About1 from '../Assets/Images/about1.jpg';
import DiamondBtn from '../Assets/Images/diamond-btn.svg';
import WeddingRing from '../Assets/Images/rings-wedding.svg';
import Pear from '../Assets/Images/Home/shape/pear.png';
import Round from '../Assets/Images/Home/shape/round.png';
import Heart from '../Assets/Images/Home/shape/heart.png';
import Oval from '../Assets/Images/Home/shape/oval.png';
import Cushion from '../Assets/Images/Home/shape/cushion.png';
import Princess from '../Assets/Images/Home/shape/princess.png';
import Emerald from '../Assets/Images/Home/shape/emerald.png';
import Marquise from '../Assets/Images/Home/shape/marquise.png';
import Radiant from '../Assets/Images/Home/shape/radiant.png';
import asscherShape from '../Assets/Images/diamond-shape/asscher.svg';
import heartShape from '../Assets/Images/diamond-shape/heart.svg';
import radientShape from '../Assets/Images/diamond-shape/radiant.svg';
import cushionShape from '../Assets/Images/diamond-shape/cushion.svg';
import emeraldShape from '../Assets/Images/diamond-shape/emerald.svg';
import marquiseShape from '../Assets/Images/diamond-shape/marquise.svg';
import ovalShape from '../Assets/Images/diamond-shape/oval.svg';
import princessShape from '../Assets/Images/diamond-shape/princess.svg';
import roundShape from '../Assets/Images/diamond-shape/round.svg';
import ResetIcon from '../Assets/Images/reset.svg';
import Jewelary1 from '../Assets/Images/jewelary1.jpg';
import Jewelary2 from '../Assets/Images/jewelary2.jpg';
import Jewelary3 from '../Assets/Images/jewelary3.jpg';
import Jewelary4 from '../Assets/Images/jewelary4.jpg';
import Jewelary5 from '../Assets/Images/jewelary5.jpg';
import Jewelary6 from '../Assets/Images/jewelary6.jpg';
import LargestIcon from '../Assets/Images/largest.svg';
import MostTrustedIcon from '../Assets/Images/most-trusted.svg';
import CompetitiveIcon from '../Assets/Images/competitive.svg';
import DiamondProcess1 from '../Assets/Images/process/diamond-process1.jpg';
import DiamondProcess2 from '../Assets/Images/process/diamond-process2.jpg';
import DiamondProcess3 from '../Assets/Images/process/diamond-process3.jpg';
import DiamondProcess4 from '../Assets/Images/process/diamond-process4.jpg';
import DiamondProcess5 from '../Assets/Images/process/diamond-process5.jpg';
import DiamondProcess6 from '../Assets/Images/process/diamond-process6.jpg';
import DiamondProcess7 from '../Assets/Images/process/diamond-process7.jpg';
import DiamondProcess8 from '../Assets/Images/process/diamond-process8.jpg';
import JewelaryProcess1 from '../Assets/Images/process/jewelary-process1.jpg';
import JewelaryProcess2 from '../Assets/Images/process/jewelary-process2.jpg';
import JewelaryProcess3 from '../Assets/Images/process/jewelary-process3.jpg';
import JewelaryProcess4 from '../Assets/Images/process/jewelary-process4.jpg';
import JewelaryProcess5 from '../Assets/Images/process/jewelary-process5.jpg';
import JewelaryProcess6 from '../Assets/Images/process/jewelary-process6.jpg';
import JewelaryProcess7 from '../Assets/Images/process/jewelary-process7.jpg';
import JewelaryProcess8 from '../Assets/Images/process/jewelary-process8.jpg';
import JewelaryProcess9 from '../Assets/Images/process/jewelary-process9.jpg';
import JewelaryProcess10 from '../Assets/Images/process/jewelary-process10.jpg';
import JewelaryProcess11 from '../Assets/Images/process/jewelary-process11.jpg';
import JewelaryProcess12 from '../Assets/Images/process/jewelary-process12.jpg';
import JewelaryProcess13 from '../Assets/Images/process/jewelary-process13.jpg';
import JewelaryProcess14 from '../Assets/Images/process/jewelary-process14.jpg';
import VideoBg from '../Assets/Images/video-bg.jpg';
import VideoBtn from '../Assets/Images/video-btn.svg';
import JewelaryTab1 from '../Assets/Images/jewelaryTab1.jpg';
import JewelaryTab2 from '../Assets/Images/jewelaryTab2.jpg';
import JewelaryTab3 from '../Assets/Images/jewelaryTab3.jpg';
import Globe from '../Assets/Images/globe.svg';
import Diamond from '../Assets/Images/diamond.svg';
import Money from '../Assets/Images/money.svg';
import Find from '../Assets/Images/find.svg';
import Charity1 from '../Assets/Images/charity1.jpg';
import Charity2 from '../Assets/Images/charity2.jpg';
import GooglePlay from '../Assets/Images/google-play.png';
import AppStore from '../Assets/Images/app-store.png';
import AppSS from '../Assets/Images/app-ss.png';
import UserImg from '../Assets/Images/user1.jpg';
import TestiImg from '../Assets/Images/testi1.jpg';
import Start from '../Assets/Images/star.svg';
import {
  Accordion,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Tab,
  Tabs,
} from 'react-bootstrap';
import SVGInject from '@iconfu/svg-inject';
import PhoneWithCountry from './Global/PhoneWithCountry';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    SVGInject(document.querySelectorAll('img.injectable'));
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [diamondType, setDiamondType] = useState(1);
  const navigate = useNavigate();
  return (
    <main>
      <section className="banner_wrapper mt_header_height">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
          modules={[Navigation, EffectFade]}
          navigation={true}
          effect={'fade'}
        >
          <SwiperSlide>
            <div className="banner_slide">
              <img src={BannerOne} alt="" />
              <div className="banner_text">
                <Container>
                  <h2 className="h3">Buy Diamonds Online From </h2>
                  <h1>
                    <span className="text_primary">Live Inventory</span> On
                    Single Click
                  </h1>
                </Container>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_slide">
              <img src={BannerTwo} alt="" />
              <div className="banner_text">
                <Container>
                  <h2 className="h3">Buy Diamonds Online </h2>
                  <h1>
                    <span className="text_primary">With Quickest Shipment</span>{' '}
                    On Single Click
                  </h1>
                </Container>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="home_two_wrapper pt100 pb80 pt70-xl pb60-xl pt50-sm pb50-sm pb30-xs">
        <Container fluid className="p0">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="home_two_img">
                <img src={About1} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="home_two_text">
                <h2 className="mb35">
                  <span>One stop solution</span> for all your lab grown diamonds
                  needs
                </h2>
                <div className="button_group">
                  <Button
                    variant="primary"
                    className="rounded-pill btn_shadow medium_padding mr15 mr0-xs"
                    onClick={() => navigate('/diamond')}
                  >
                    <img src={DiamondBtn} alt="" /> Buy Diamond
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="rounded-pill btn_shadow medium_padding mr15 mr0-xs"
                    onClick={() => navigate('/choose-diamond')}
                  >
                    <img src={WeddingRing} alt="" /> Customise Jewellery
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="diamond_shape_wrapper pt30 pb120 pb80-xl pt90-xs">
        <Container>
          <div className="text-center title_wrapper pb80 pb20-lg">
            <h2 className="mb30">
              Buy <span>Diamonds</span> by Shape
            </h2>
            <Button
              variant="primary"
              className="rounded-pill btn_shadow medium_padding mr15"
              onClick={() => navigate('/diamond')}
            >
              View All
            </Button>
          </div>
        </Container>
        <div className="diamond_slider_wrapper">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            slidesPerView={9}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              380: {
                slidesPerView: 2.5,
              },
              575: {
                slidesPerView: 3,
              },
              720: {
                slidesPerView: 4,
              },
              850: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
              1200: {
                slidesPerView: 7,
              },
              1551: {
                slidesPerView: 9,
              },
            }}
            className="DiamondSlider"
          >
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Pear} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Pear</h5>
                  <p>Maximum brilliance in an exquisite square form</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Round} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Round</h5>
                  <p>Maximum brilliance in an exquisite square form</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Heart} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Heart</h5>
                  <p>Maximum brilliance in an exquisite square form</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Oval} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Oval</h5>
                  <p>Maximum brilliance in an exquisite square form</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Cushion} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Cushion</h5>
                  <p>Maximum brilliance in an exquisite square form</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Princess} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Princess</h5>
                  <p>Maximum brilliance in an exquisite square form</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Emerald} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Emerald</h5>
                  <p>Maximum brilliance in an exquisite square form</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Marquise} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Marquise</h5>
                  <p>Maximum brilliance in an exquisite square form</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Radiant} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Radiant</h5>
                  <p>Maximum brilliance in an exquisite square form</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="quick_search_diamond pb100 pb80-xl pb50-sm">
        <Container>
          <div className="text-center mb30">
            <h5 className=" text-uppercase">Quick search diamond</h5>
            <span className="text_primary">Minimise</span>
          </div>
          <div className="quick_search_box">
            <div className="quick_search_inner">
              <div className="search_inner_wrap">
                <div className="check_input_wraper">
                  <ul>
                    <li>
                      <div className="checkbox_wrapper radio_wrapper">
                        <Form.Check
                          type="radio"
                          name="group1"
                          id="NaturalDiamond"
                          label="Natural Diamond"
                          checked={diamondType === 1}
                          onClick={() => setDiamondType(1)}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="checkbox_wrapper radio_wrapper">
                        <Form.Check
                          type="radio"
                          name="group1"
                          id="LabGrownDiamond"
                          label="Lab Grown Diamond"
                          checked={diamondType === 2}
                          onClick={() => setDiamondType(2)}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="search_inner_wrap">
                <div className="search_label">
                  <h6>Shape</h6>
                </div>
                <div className="search_content">
                  <div className="shape_select">
                    <ul>
                      <li>
                        <div className="custom_checkbox_shape">
                          <input type="checkbox" id="asscher" />
                          <label htmlFor="asscher">
                            <img
                              src={asscherShape}
                              alt=""
                              className="injectable"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom_checkbox_shape">
                          <input type="checkbox" id="cushion" />
                          <label htmlFor="cushion">
                            <img
                              src={cushionShape}
                              alt=""
                              className="injectable"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom_checkbox_shape">
                          <input type="checkbox" id="emerald" />
                          <label htmlFor="emerald">
                            <img
                              src={emeraldShape}
                              alt=""
                              className="injectable"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom_checkbox_shape">
                          <input type="checkbox" id="heart" />
                          <label htmlFor="heart">
                            <img
                              src={heartShape}
                              alt=""
                              className="injectable"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom_checkbox_shape">
                          <input type="checkbox" id="marquise" />
                          <label htmlFor="marquise">
                            <img
                              src={marquiseShape}
                              alt=""
                              className="injectable"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom_checkbox_shape">
                          <input type="checkbox" id="oval" />
                          <label htmlFor="oval">
                            <img
                              src={ovalShape}
                              alt=""
                              className="injectable"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom_checkbox_shape">
                          <input type="checkbox" id="princess" />
                          <label htmlFor="princess">
                            <img
                              src={princessShape}
                              alt=""
                              className="injectable"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom_checkbox_shape">
                          <input type="checkbox" id="radient" />
                          <label htmlFor="radient">
                            <img
                              src={radientShape}
                              alt=""
                              className="injectable"
                            />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom_checkbox_shape">
                          <input type="checkbox" id="round" />
                          <label htmlFor="round">
                            <img
                              src={roundShape}
                              alt=""
                              className="injectable"
                            />
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="search_inner_wrap">
                <div className="search_label">
                  <h6>Price</h6>
                </div>
                <div className="search_content">
                  <div className="input_box_wrapper">
                    <ul>
                      <li>
                        <Form.Group
                          className="form_group"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="email" placeholder="$ From" />
                        </Form.Group>
                      </li>
                      <li>
                        <Form.Group
                          className="form_group"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="email" placeholder="$ To" />
                        </Form.Group>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="search_inner_wrap">
                <div className="search_label">
                  <h6>Carat</h6>
                </div>
                <div className="search_content">
                  <div className="input_box_wrapper">
                    <ul>
                      <li>
                        <Form.Group
                          className="form_group"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="email" placeholder="From" />
                        </Form.Group>
                      </li>
                      <li>
                        <Form.Group
                          className="form_group"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="email" placeholder="To" />
                        </Form.Group>
                      </li>
                      <li>
                        <Form.Group
                          className="form_group"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="email"
                            placeholder="Certificate No."
                          />
                        </Form.Group>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="search_inner_wrap align-items-start">
                <div className="search_label mt10">
                  <h6>Color</h6>
                </div>
                <div className="search_content">
                  <div className="fancy_color_tab_wrapper">
                    <div className="tab_design_one">
                      <Tabs defaultActiveKey="White" id="fancy_color_tab">
                        <Tab eventKey="White" title="White">
                          <div className="check_input_wraper">
                            <ul>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="d"
                                    label="D"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="e"
                                    label="E"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="f"
                                    label="F"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="g"
                                    label="G"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="h"
                                    label="H"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="i"
                                    label="I"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="j"
                                    label="J"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="k"
                                    label="K"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="l"
                                    label="L"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="m"
                                    label="M"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="n"
                                    label="N"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="o-p"
                                    label="O-P"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="q-r"
                                    label="Q-R"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="s-t"
                                    label="S-T"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="U-V"
                                    label="U-V"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="W-X"
                                    label="W-X"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Y-Z"
                                    label="Y-Z"
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </Tab>
                        <Tab eventKey="Fancy" title="Fancy">
                          <div className="check_input_wraper">
                            <ul>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Yellow-Bn"
                                    label="Yellow-Bn"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Green-Blue"
                                    label="Green-Blue"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Brown-Pink"
                                    label="Brown-Pink"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Black"
                                    label="Black"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Blue"
                                    label="Blue"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Brown"
                                    label="Brown"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Gray"
                                    label="Gray"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Gray-Blue"
                                    label="Gray-Blue"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Green"
                                    label="Green"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Yellow"
                                    label="Yellow"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Orange"
                                    label="Orange"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Other"
                                    label="Other"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Pink"
                                    label="Pink"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Purple"
                                    label="Purple"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="checkbox_wrapper">
                                  <Form.Check
                                    type="checkbox"
                                    id="Red"
                                    label="Red"
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
              <div className="search_inner_wrap">
                <div className="search_label">
                  <h6>Clarity</h6>
                </div>
                <div className="search_content">
                  <div className="check_input_wraper">
                    <ul>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="FL" label="FL" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="IF" label="IF" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="VVS1" label="VVS1" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="VVS2" label="VVS2" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="VS1" label="VS1" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="VS2" label="VS2" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="SI1" label="SI1" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="SI2" label="SI2" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="SI3" label="SI3" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="I1" label="I1" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="I2" label="I2" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="I3" label="I3" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="search_inner_wrap">
                <div className="search_label">
                  <h6>Certificate</h6>
                </div>
                <div className="search_content">
                  <div className="check_input_wraper">
                    <ul>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="GIA" label="GIA" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="IGI" label="IGI" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="HRD" label="HRD" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="SGL" label="SGL" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="AGS" label="AGS" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="GCAL" label="GCAL" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="GSI" label="GSI" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="OGI" label="OGI" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="NGS" label="NGS" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check
                            type="checkbox"
                            id="OTHER"
                            label="OTHER"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="search_inner_wrap">
                <div className="search_label">
                  <h6>Fluorescence</h6>
                </div>
                <div className="search_content">
                  <div className="check_input_wraper">
                    <ul>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="None" label="None" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check
                            type="checkbox"
                            id="Faint"
                            label="Faint"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check
                            type="checkbox"
                            id="Medium"
                            label="Medium"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check
                            type="checkbox"
                            id="Strong"
                            label="Strong"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check
                            type="checkbox"
                            id="V-Strong"
                            label="V-Strong"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="search_inner_wrap mb0">
                <div className="search_label">
                  <h6>Make</h6>
                </div>
                <div className="search_content">
                  <div className="check_input_wraper">
                    <ul>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="3EX" label="3EX" />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check
                            type="checkbox"
                            id="EX CUT"
                            label="EX CUT"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="checkbox_wrapper">
                          <Form.Check type="checkbox" id="#VG+" label="# VG+" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="search_button_wrap">
                <Button variant="outline-primary" className="rounded-pill mr20">
                  <img src={ResetIcon} alt="" /> Reset Filter
                </Button>
                <Button variant="primary" className="rounded-pill">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="buy_diamond_jewelary">
        <Container>
          <h2 className="text-center mb50 mb30-sm">
            Buy <span>Diamonds</span> Jewellery
          </h2>
          <Row className="g-0">
            <Col md={4} sm={6}>
              <div className="jewelary_category_box">
                <div className="jewelary_category_img">
                  <img src={Jewelary1} alt="" />
                </div>
                <div className="category_name">
                  <h6>Bracelet</h6>
                </div>
                <div className="view_btn">
                  <Button
                    variant="light"
                    className="rounded"
                    onClick={() => navigate('/jewellery')}
                  >
                    View All <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="jewelary_category_box">
                <div className="jewelary_category_img">
                  <img src={Jewelary2} alt="" />
                </div>
                <div className="category_name">
                  <h6>Necklace</h6>
                </div>
                <div className="view_btn">
                  <Button
                    variant="light"
                    className="rounded"
                    onClick={() => navigate('/jewellery')}
                  >
                    View All <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="jewelary_category_box">
                <div className="jewelary_category_img">
                  <img src={Jewelary3} alt="" />
                </div>
                <div className="category_name">
                  <h6>watch</h6>
                </div>
                <div className="view_btn">
                  <Button
                    variant="light"
                    className="rounded"
                    onClick={() => navigate('/jewellery')}
                  >
                    View All <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="jewelary_category_box">
                <div className="jewelary_category_img">
                  <img src={Jewelary4} alt="" />
                </div>
                <div className="category_name">
                  <h6>Earrings</h6>
                </div>
                <div className="view_btn">
                  <Button
                    variant="light"
                    className="rounded"
                    onClick={() => navigate('/jewellery')}
                  >
                    View All <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="jewelary_category_box">
                <div className="jewelary_category_img">
                  <img src={Jewelary5} alt="" />
                </div>
                <div className="category_name">
                  <h6>Ring</h6>
                </div>
                <div className="view_btn">
                  <Button
                    variant="light"
                    className="rounded"
                    onClick={() => navigate('/jewellery')}
                  >
                    View All <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="jewelary_category_box">
                <div className="jewelary_category_img">
                  <img src={Jewelary6} alt="" />
                </div>
                <div className="category_name">
                  <h6>others</h6>
                </div>
                <div className="view_btn">
                  <Button
                    variant="light"
                    className="rounded"
                    onClick={() => navigate('/jewellery')}
                  >
                    View All <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="why_choose_us pt100 pb100 mt110 mt80-xl mt50-sm mt50-sm pt50-md">
        <Container>
          <h2 className="text-center pb150 mb0 pb60-xl">
            Why Choose <span className="d-block">Excellent Corporation?</span>
          </h2>
          <div className="why_choose_slider_wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={50}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                991: {
                  slidesPerView: 3,
                },
              }}
              className="why_choose_slider"
            >
              <SwiperSlide>
                <div className="why_choose_slide">
                  <div className="text-center">
                    <img className="mb20" src={LargestIcon} alt="" />
                    <h4 className="mb30">Largest</h4>
                  </div>
                  <ul>
                    <li>Tens of thousands of members</li>
                    <li>Over 1.8M diamonds & jewellery</li>
                    <li>99 countries</li>
                    <li>Secure payments</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="why_choose_slide pt35 most_trusted">
                  <div className="text-center">
                    <img className="mb20" src={MostTrustedIcon} alt="" />
                    <h4 className="mb30">Most Trusted</h4>
                  </div>
                  <ul>
                    <li>Secure network</li>
                    <li>Verified buyers and suppliers</li>
                    <li>Established in 1976</li>
                    <li>Secure payments</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="why_choose_slide">
                  <div className="text-center">
                    <img className="mb20" src={CompetitiveIcon} alt="" />
                    <h4 className="mb30">Competitive</h4>
                  </div>
                  <ul>
                    <li>Source at the best prices</li>
                    <li>No commission or transaction fees</li>
                    <li>Real-time pricing info with Excellent Price List</li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section className="diamond_process pb10">
        <Container>
          <h2 className="mb50 text-center">
            Diamond <span>Buying</span> process
          </h2>
          <div className="diamond_process_slider_wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={90}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 2,
                },
                1080: {
                  slidesPerView: 3,
                },
              }}
              className="diamond_process_slider navigation_center_bottom"
            >
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess1} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Filter Diamond
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess2} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Select Diamond
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess3} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Add to Cart
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess4} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Confirm Availability
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess5} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Accept Order
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess6} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      You Get Invoice
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess7} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">Pay</h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess8} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Ship and Tracking
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section className="diamond_process jewelary_process pt100 pb70 pt50-xl pt10-md mt50-xl pt120-sm mt20-sm">
        <Container>
          <h2 className="pb150 pb90-lg text-center pb20-sm">
            Jewelery <span>Buying</span> process
          </h2>
          <div className="diamond_process_slider_wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={90}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 2,
                },
                1080: {
                  slidesPerView: 3,
                },
              }}
              className="diamond_process_slider navigation_center_bottom"
            >
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess1} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Choose Diamond
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess2} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Choose Setting
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess3} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Add to Cart
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess4} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Accept Order
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess5} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      You Pay
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess6} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Complete Design
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess7} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Send You Design
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess8} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      You Confirm Design
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess9} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Send You Invoice
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess10} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      You Pay
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess11} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Produce
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess12} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      QC and Sending Video
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess13} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      You Confirm Design
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess14} alt="" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Ship and provide Tracking
                    </h3>
                    <p>
                      Search & select diamonds, with detailed parameters, from
                      our live inventory of 6,00,000+ natural and 1,50,000+
                      lab-grown diamonds.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section className="about_video_Wrapper mt200 mb60 mt150-xl mt100-lg mt50-md mb0-md">
        <Container>
          <Row>
            <Col xl={5} lg={6}>
              <div className="about_text_wrapper pt70 pb70 pr50 pt40-lg pb40-lg">
                <h2 className="mb20">
                  <span>Excellent</span> Web Progress
                </h2>
                <h4 className="mb15">About Us</h4>
                <p className="text_primary mb15">
                  Excellent Corporation was founded on these simple principles:
                  Provide the largest selection of the lab grown diamond,
                  jewellery and certified loose diamonds, with the mission
                  luxury product for all
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  className="rounded-pill"
                  onClick={() => navigate('/about-us')}
                >
                  Know More
                </Button>
              </div>
            </Col>
            <Col xl={7} lg={6}>
              <div className="video_img">
                <img src={VideoBg} alt="" />
                <Button variant="link" onClick={handleShow}>
                  <img src={VideoBtn} alt="" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="persnalize_jewelary_wrapper pt120 pb120 pt80-xl pb80-xl pt60-lg">
        <Container>
          <h2 className="text-center mb50">
            Personalised diamond jewellery <span>just for you</span>
          </h2>
          <div className="tab_design_two">
            <Tabs
              defaultActiveKey="CertifiedDiamond"
              id="personalize_jewellary"
            >
              <Tab eventKey="CertifiedDiamond" title="Certified Diamond">
                <Row>
                  <Col md={7}>
                    <div className="Personalize_jewelary_form">
                      <Form className="square_input_wrapper">
                        <Row>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Enter Your Name"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="email"
                                placeholder="Enter Your Email"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <PhoneWithCountry />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Shape</option>
                                <option value="1">Round</option>
                                <option value="2">Pear</option>
                                <option value="3">Oval</option>
                                <option value="4">Marquise</option>
                                <option value="5">Princess</option>
                                <option value="6">Heart</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Size</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Color</option>
                                <option value="1">D</option>
                                <option value="2">E</option>
                                <option value="3">F</option>
                                <option value="4">G</option>
                                <option value="5">H</option>
                                <option value="6">I</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Clarity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Lab</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Cut</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Polish</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Symmetry</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Diamond Type</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Any other suggetion"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            variant="primary"
                            className="rounded-pill btn_shadow"
                          >
                            Submit Request
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="jewelry_img_wrap">
                      <img src={JewelaryTab1} alt="" />
                    </div>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="ParcelGoods" title="Parcel Goods">
                <Row>
                  <Col md={7}>
                    <div className="Personalize_jewelary_form">
                      <Form className="square_input_wrapper">
                        <Row>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Enter Your Name"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="email"
                                placeholder="Enter Your Email"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <PhoneWithCountry />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Shape</option>
                                <option value="1">Round</option>
                                <option value="2">Pear</option>
                                <option value="3">Oval</option>
                                <option value="4">Marquise</option>
                                <option value="5">Princess</option>
                                <option value="6">Heart</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Size</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Color</option>
                                <option value="1">D</option>
                                <option value="2">E</option>
                                <option value="3">F</option>
                                <option value="4">G</option>
                                <option value="5">H</option>
                                <option value="6">I</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Clarity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="number"
                                placeholder="Quantity (Pcs.)"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="number"
                                placeholder="Quantity (Total Carats)"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Measurements</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Diamond Type</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Any other suggetion"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            variant="primary"
                            className="rounded-pill btn_shadow"
                          >
                            Submit Request
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="jewelry_img_wrap">
                      <img src={JewelaryTab2} alt="" />
                    </div>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="CustomiseJewellery" title="Customise Jewellery">
                <Row>
                  <Col md={7}>
                    <div className="Personalize_jewelary_form">
                      <Form className="square_input_wrapper">
                        <Row>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Enter Your Name"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="email"
                                placeholder="Enter Your Email"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <PhoneWithCountry />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Jewellery Type</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Metal Color</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Metal Type</option>
                                <option value="1">D</option>
                                <option value="2">E</option>
                                <option value="3">F</option>
                                <option value="4">G</option>
                                <option value="5">H</option>
                                <option value="6">I</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Size Guide</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Stone Details"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group controlId="formFile" className="mb20">
                              <Form.Control type="file" placeholder="asfasda" />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Quantity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Budget Suggestion"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb20"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Select aria-label="Default select example">
                                <option>Diamond Type</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Any other suggetion"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            variant="primary"
                            className="rounded-pill btn_shadow"
                          >
                            Submit Request
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="jewelry_img_wrap">
                      <img src={JewelaryTab3} alt="" />
                    </div>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </section>

      <section className="number_wrapper pt100 pt50-lg">
        <Container>
          <Row>
            <Col md={9}>
              <div className="number_slider_Wrapper">
                <h2 className="text-white text-center mb50">
                  Now on <span>Excellent Corporation</span>
                </h2>
                <div className="number_slider_inner">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={4}
                    spaceBetween={40}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      411: {
                        slidesPerView: 2,
                      },
                      851: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 4,
                      },
                    }}
                    className="number_slider"
                  >
                    <SwiperSlide>
                      <div className="number_slide text-center">
                        <div className="number_slide_inner">
                          <img src={Globe} className="mb10" alt="" />
                          <h3>24</h3>
                          <p>Countries</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="number_slide text-center">
                        <div className="number_slide_inner">
                          <img src={Diamond} className="mb10" alt="" />
                          <h3>1,547,87</h3>
                          <p>Diamonds & Jewellery pieces</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="number_slide text-center">
                        <div className="number_slide_inner">
                          <img src={Money} className="mb10" alt="" />
                          <h3>$7,987,124</h3>
                          <p>Value of Listing</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="number_slide text-center">
                        <div className="number_slide_inner">
                          <img src={Find} className="mb10" alt="" />
                          <h3>98K</h3>
                          <p>Daily Searches</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="text-center mt40">
                  <Button variant="primary" className="rounded-pill">
                    Become a Member
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="charity_wrapper pb50 pt20 pb0-sm">
        <Container>
          <Row>
            <Col xl={8} lg={7}>
              <div className="charity_slider_wrapper">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  slidesPerView={2}
                  spaceBetween={20}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 2,
                    },
                  }}
                  className="charity_slider navigation_center_bottom"
                >
                  <SwiperSlide>
                    <div className="charity_slide">
                      <img src={Charity1} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="charity_slide">
                      <img src={Charity2} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="charity_slide">
                      <img src={Charity1} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="charity_slide">
                      <img src={Charity2} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
            <Col xl={4} lg={5}>
              <div className="charty_text_wrapper mt30">
                <h2 className="mb30">
                  We Do <span>Charity</span> Work
                </h2>
                <p className="mb30">
                  At Excellent Web Progress, we believe in more than just
                  creating exquisite diamond jewelry; we are committed to making
                  a positive impact on the world around us. Through our
                  philanthropic efforts, we actively engage in various charity
                  initiatives aimed at giving back to the community and making a
                  difference in the lives of those in need.
                </p>
                <Button variant="primary" className="rounded-pill" size="sm">
                  Know More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="app_wrapper pt50 pb80 pb50-xl">
        <Container>
          <Row>
            <Col lg={6} className="order-2 order-lg-1">
              <div className="app_text_wrapper">
                <div className="app_text_wrapper_inner">
                  <h2>
                    The <span>Excellent Web Progress</span> Mobile App
                  </h2>
                  <p>
                    Experience the brilliance of Excellent Web Progress with our
                    cutting-edge mobile app. Explore exquisite jewelry designs,
                    shop conveniently, and stay updated with the latest trends.
                    Download now and find your perfect piece!
                  </p>
                  <div className="app_button">
                    <Button variant="link" className="p0">
                      <img src={GooglePlay} alt="" />
                    </Button>
                    <Button variant="link" className="p0">
                      <img src={AppStore} alt="" />
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-1 order-lg-2">
              <div className="app_img_wrapper">
                <img src={AppSS} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonial_Wrapper pt100 pb40 pt80-xl">
        <Container>
          <h2 className="text-center mb60 mb30-sm">
            Customer <span>Testimonials</span>
          </h2>
          <div className="testimonial_slider_wrapepr">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                631: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1442: {
                  slidesPerView: 4,
                },
              }}
              className="testimonial_slider navigation_center_bottom pb90"
            >
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="user_name">
                        <h6>Dillon Splude</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img src={TestiImg} alt="" />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Great ring for a great price. My fiancé loves her ring and
                    she gets compliments daily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="user_name">
                        <h6>Dillon Splude</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img src={TestiImg} alt="" />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Great ring for a great price. My fiancé loves her ring and
                    she gets compliments daily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="user_name">
                        <h6>Dillon Splude</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img src={TestiImg} alt="" />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Great ring for a great price. My fiancé loves her ring and
                    she gets compliments daily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="user_name">
                        <h6>Dillon Splude</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img src={TestiImg} alt="" />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Great ring for a great price. My fiancé loves her ring and
                    she gets compliments daily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="user_name">
                        <h6>Dillon Splude</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img src={TestiImg} alt="" />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Great ring for a great price. My fiancé loves her ring and
                    she gets compliments daily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img src={UserImg} alt="" />
                      </div>
                      <div className="user_name">
                        <h6>Dillon Splude</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img src={TestiImg} alt="" />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Great ring for a great price. My fiancé loves her ring and
                    she gets compliments daily.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section className="faq_wrapper pt100 pb120 pt80-xl pb80-xl pt50-md pb50-md">
        <Container>
          <h2 className="pb60 text-center pb40-xl">
            Frequently Asked Questions <span>(FAQs)</span>
          </h2>
          <Accordion defaultActiveKey="0" className="accordian_design_one">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is Webflow and why is it the best website builder?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Lorem ipsum dolor sit amet consectetur. Risus.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Lorem ipsum dolor sit amet consectetur consecteturc on sectetur.
                Risus.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Lorem ipsum dolor sit amet consectetur. Risus.Lorem ipsum dolor
                sit amet consectetur. Risus.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Lorem ipsum dolor sit amet consectetur. Risus.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Lorem ipsum dolor sit amet consectetur. Risus.Lorem ipsum dolor
                sit amet consectetur. Risus.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        className="modal_without_title modal_large"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/D0UnqGm_miA?si=7zoCGU2R1x6g_gX6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </main>
  );
}
