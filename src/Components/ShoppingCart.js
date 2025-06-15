import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CartProduct from '../Assets/Images/cart-product.jpg';
import Trash from '../Assets/Images/trash.svg';
import DiscountIcon from '../Assets/Images/discount.svg';
import LocationIcon from '../Assets/Images/location.svg';
import JewelleryProduct from '../Assets/Images/jewellery-cart.jpg';
import PlusIcon from '../Assets/Images/plus.svg';
import MinusIcon from '../Assets/Images/minus.svg';
import EditIcon from '../Assets/Images/Edit.svg';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {
  let [count, setCount] = useState(1);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count > 1) {
      count = count - 1;
      setCount(count);
    }
  }
  return (
    <main>
      <section className="cart_wrapper pt40 pb90 pt0-lg pb80-lg pb50-md">
        <Container>
          <Row>
            <Col xxl={6} xl={7}>
              <div className="cart_product_list_wrapper">
                <div className="diamond_cart_items">
                  <h2 className="h5">Diamond</h2>
                  <div className="diamond_cart_box">
                    <Row className="align-items-center">
                      <Col sm={6}>
                        <div className="diamond_product_info">
                          <div className="diamond_img_cart">
                            <img src={CartProduct} alt="" />
                          </div>
                          <div className="diamond_text_cart">
                            <p className="fs_14 m0 text_extra_light">
                              0.30 Carat - K - VS1
                            </p>
                            <h6 className="text_dark mb5">Good Cut- Round</h6>
                            <h5 className="m0 text_dark fs_14">
                              IGI Number
                              <span className="text_extra_light ml15">
                                4578325414
                              </span>
                            </h5>
                          </div>
                        </div>
                      </Col>
                      <Col sm={6}>
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
                      <Col sm={6}>
                        <div className="diamond_product_info">
                          <div className="diamond_img_cart">
                            <img src={CartProduct} alt="" />
                          </div>
                          <div className="diamond_text_cart">
                            <p className="fs_14 m0 text_extra_light">
                              0.30 Carat - K - VS1
                            </p>
                            <h6 className="text_dark mb5">Good Cut- Round</h6>
                            <h5 className="m0 text_dark fs_14">
                              IGI Number
                              <span className="text_extra_light ml15">
                                4578325414
                              </span>
                            </h5>
                          </div>
                        </div>
                      </Col>
                      <Col sm={6}>
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
                </div>
                <div className="jewellery_cart_items">
                  <h2 className="h5">Jewellery</h2>
                  <div className="jewelary_cart_box">
                    <h6>
                      Radiant-Cut Moissanite Ring with Knife-Edge Band in 14K
                      White Gold (2 ct.)
                    </h6>
                    <Row className="align-items-center">
                      <Col sm={5}>
                        <div className="jewellery_product_info d-flex align-items-center">
                          <div className="jewellery_img_cart">
                            <img src={JewelleryProduct} alt="" />
                          </div>
                          <div className="jewellery_text_cart pl15">
                            <p className="fs_14 mb5 text_extra_light">
                              SKU: 1245514-7.5
                            </p>
                            <p className="fs_14 mb5 text_extra_light">
                              Ring Size: 7.5
                            </p>
                            <h6 className="mb0 text_primary">$350.00</h6>
                          </div>
                        </div>
                      </Col>
                      <Col sm={4}>
                        <div className="total_wrap">
                          <h6 className="fs_14 text_dark mb15 d-flex align-items-center">
                            Total :
                            <span className="text_primary fs_22 pl15">
                              $350
                            </span>
                          </h6>
                          <div className="total_items">
                            <button
                              onClick={decrementCount}
                              className="decrease"
                            >
                              <img src={MinusIcon} alt="" />
                            </button>
                            <div className="total_count">{count}</div>
                            <button
                              onClick={incrementCount}
                              className="increase"
                            >
                              <img src={PlusIcon} alt="" />
                            </button>
                          </div>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <ul className="cart_action d-flex align-items-center justify-content-end">
                          <li className="mr20">
                            <Link to="/">
                              <img src={EditIcon} alt="" className="mr10" />
                              Edit Item
                            </Link>
                          </li>
                          <li>
                            <Button variant="light" className="delete_btn">
                              <img src={Trash} alt="" />
                            </Button>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
            <Col xxl={6} xl={5} className="border_left">
              <div className="cart_total_wrapper">
                <div className="coupon_Wrapper bg_primary_light mb25">
                  <div className="applied_coupon d-flex align-items-center justify-content-between p20">
                    <div className="d-flex align-items-center">
                      <div className="discount_icon">
                        <img src={DiscountIcon} alt="" />
                      </div>
                      <div className="coupon_text pl15">
                        <h6 className="fs_16 text_secondary mb5">
                          PERFECTDIAM12
                        </h6>
                        <p className="fs_16 fw_300 text_secondary mb0">
                          Save another $150 on this order
                        </p>
                      </div>
                    </div>
                    <div className="applyed_button">
                      <span className="text_primary">Apply</span>
                    </div>
                  </div>
                  <div className="apply_more text-center p15">
                    <span className="text_primary fs_18">
                      Apply more coupons
                    </span>
                  </div>
                </div>
                <div className="delivery_store_detail bg_primary_light p15 d-flex align-items-center justify-content-between mb25">
                  <p className="d-flex align-items-center m0 text_dark fs_16">
                    <img src={LocationIcon} alt="" className="mr10" /> Check
                    Delivery & Store Details
                  </p>
                  <span className="text_primary">Enter Pincode</span>
                </div>
                <div className="subTotal_wrapper bg_light mb25">
                  <div className="subTotal_inner p25">
                    <ul>
                      <li>
                        Subtotal :<span>$1021</span>
                      </li>
                      <li>
                        Coupon Discount
                        <span className="text_primary">Apply Coupon</span>
                      </li>
                      <li>
                        Shipping (Standerd)
                        <span>Free</span>
                      </li>
                    </ul>
                  </div>
                  <div className="total_wrapper p25">
                    <ul>
                      <li className="fs_16 fw_600">
                        Total Cost<span className="fs_22">$1021</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button
                  variant="primary"
                  className="rounded-pill btn_shadow w-100"
                >
                  Place Order
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
