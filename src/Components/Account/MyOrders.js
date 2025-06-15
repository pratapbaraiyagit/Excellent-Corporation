import React from 'react';
import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import AccountSidebar from './AccountSidebar';
import CartProduct from '../../Assets/Images/cart-product.jpg';
import Trash from '../../Assets/Images/trash.svg';

export default function MyOrders() {
  return (
    <main>
      <section className="my_orders_wrapper pb100 pb50-md pb80-lg">
        <Container>
          <Row>
            <Col xxl={2} lg={3}>
              <AccountSidebar />
            </Col>
            <Col xxl={10} lg={9}>
              <div className="my_order_wrap">
                <h6 className="mb30 mb15-xs">My Orders</h6>
                <div className="tab_design_two">
                  <Tabs defaultActiveKey="HoldStones" id="my_order">
                    <Tab eventKey="HoldStones" title="Hold Stones">
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col xxl={4} sm={6}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col xxl={8} sm={6}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab>
                    <Tab eventKey="ConfirmStones" title="Confirm Stones">
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab>
                    <Tab
                      eventKey="NotAvailableStones"
                      title="Not Available Stones"
                    >
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
