import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Jewellery1 from '../../Assets/Images/Jewellery/1.jpg';
import Jewellery2 from '../../Assets/Images/Jewellery/2.jpg';
import Jewellery3 from '../../Assets/Images/Jewellery/3.jpg';
import Jewellery4 from '../../Assets/Images/Jewellery/4.jpg';
import Jewellery5 from '../../Assets/Images/Jewellery/5.jpg';
import Jewellery6 from '../../Assets/Images/Jewellery/6.jpg';
import Jewellery7 from '../../Assets/Images/Jewellery/7.jpg';
import Jewellery8 from '../../Assets/Images/Jewellery/8.jpg';
import Jewellery9 from '../../Assets/Images/Jewellery/9.jpg';
import HeartBlue from '../../Assets/Images/Jewellery/heart-blue.svg';
import LeftAngle from '../../Assets/Images/left-angle.svg';
import RightAngle from '../../Assets/Images/right-angle.svg';

export default function JewelleryList({ jewelType }) {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      img: Jewellery1,
      title:
        'Diamond hoop earrings with three-row setting in 10k white gold (1 ct. tw.)',
      priceOld: '$1,999.00',
      priceNew: '$1,299.00',
    },
    {
      id: 2,
      img: Jewellery2,
      title:
        'Diamond hoop earrings with three-row setting in 10k white gold (1 ct. tw.)',
      priceOld: '$1,999.00',
      priceNew: '$1,299.00',
    },
    {
      id: 3,
      img: Jewellery3,
      title:
        'Diamond hoop earrings with three-row setting in 10k white gold (1 ct. tw.)',
      priceOld: '$1,999.00',
      priceNew: '$1,299.00',
    },
    {
      id: 4,
      img: Jewellery4,
      title:
        'Diamond hoop earrings with three-row setting in 10k white gold (1 ct. tw.)',
      priceOld: '$1,999.00',
      priceNew: '$1,299.00',
    },
    {
      id: 5,
      img: Jewellery5,
      title:
        'Diamond hoop earrings with three-row setting in 10k white gold (1 ct. tw.)',
      priceOld: '$1,999.00',
      priceNew: '$1,299.00',
    },
    {
      id: 6,
      img: Jewellery6,
      title:
        'Diamond hoop earrings with three-row setting in 10k white gold (1 ct. tw.)',
      priceOld: '$1,999.00',
      priceNew: '$1,299.00',
    },
    {
      id: 7,
      img: Jewellery7,
      title:
        'Diamond hoop earrings with three-row setting in 10k white gold (1 ct. tw.)',
      priceOld: '$1,999.00',
      priceNew: '$1,299.00',
    },
    {
      id: 8,
      img: Jewellery8,
      title:
        'Diamond hoop earrings with three-row setting in 10k white gold (1 ct. tw.)',
      priceOld: '$1,999.00',
      priceNew: '$1,299.00',
    },
    {
      id: 9,
      img: Jewellery9,
      title:
        'Diamond hoop earrings with three-row setting in 10k white gold (1 ct. tw.)',
      priceOld: '$1,999.00',
      priceNew: '$1,299.00',
    },
  ];
  return (
    <div className="jewellery_main_Wrapper">
      <Row className="g-4">
        {data.map(jewelleryProduct => (
          <Col xl={jewelType === 'choose_setting' ? '3' : '4'} lg={4} sm={6}>
            <div className="jewellery_box_wrapper">
              <div className="jewellery_img_wrapper">
                <Link
                  to={
                    window.location.pathname === '/choose-your-setting'
                      ? '/choose-your-setting-detail'
                      : '/jewellery-detail'
                  }
                >
                  <img src={jewelleryProduct.img} alt="" />
                </Link>
                <span>Sale</span>
                <Button variant="link" className="active">
                  <img src={HeartBlue} alt="" />
                </Button>
              </div>
              <div className="jewellery_detail_text">
                <h5>
                  <Link
                    to={
                      window.location.pathname === '/choose-your-setting'
                        ? '/choose-your-setting-detail'
                        : '/jewellery-detail'
                    }
                  >
                    {jewelleryProduct.title}
                  </Link>
                </h5>
                <div className="price">
                  <h6>
                    <del>{jewelleryProduct.priceOld}</del>
                    {jewelleryProduct.priceNew}
                  </h6>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    variant="primary"
                    className="rounded-pill btn_shadow px30 px20-xl mr15 fs_14"
                    size="sm"
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="rounded-pill fs_14"
                    onClick={() => navigate('/cart')}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="pagination_Wrapper mt20">
        <Row className="align-items-center">
          <Col md={4}>
            <p className="m0">Displaying 1 to 1o of 86 items</p>
          </Col>
          <Col md={8}>
            <ul>
              <li>
                <div className="row_per_page">
                  <span>Rows per page</span>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Select aria-label="Default select example">
                      <option value="1">10</option>
                      <option value="2">25</option>
                      <option value="3">50</option>
                      <option value="4">100</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </li>
              <li>
                <div className="total_row">
                  <p>
                    1-10 of <span>24</span>
                  </p>
                </div>
              </li>
              <li>
                <div className="next_prev_page">
                  <Button variant="light">
                    <img src={LeftAngle} alt="" />
                  </Button>
                  <Button variant="light">
                    <img src={RightAngle} alt="" />
                  </Button>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}
