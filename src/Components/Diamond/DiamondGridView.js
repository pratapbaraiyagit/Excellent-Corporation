import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Product from '../../Assets/Images/product.jpg';
import HeartIcon from '../../Assets/Images/heart.svg';
import CheckIcon from '../../Assets/Images/check.svg';
import LeftAngle from '../../Assets/Images/left-angle.svg';
import RightAngle from '../../Assets/Images/right-angle.svg';
import { Link } from 'react-router-dom';

export default function DiamondGridView() {
  const data = [
    {
      id: 1,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Fair Price',
    },
    {
      id: 2,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Fair Price',
    },
    {
      id: 3,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Great Price',
    },
    {
      id: 4,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Great Price',
    },
    {
      id: 5,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Fair Price',
    },
    {
      id: 6,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Fair Price',
    },
    {
      id: 7,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Fair Price',
    },
    {
      id: 8,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Great Price',
    },
    {
      id: 9,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Fair Price',
    },
    {
      id: 10,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Fair Price',
    },
    {
      id: 11,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Great Price',
    },
    {
      id: 12,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Fair Price',
    },
    {
      id: 13,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Fair Price',
    },
    {
      id: 14,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Fair Price',
    },
    {
      id: 15,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Great Price',
    },
    {
      id: 16,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Great Price',
    },
    {
      id: 17,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Fair Price',
    },
    {
      id: 18,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Great Price',
    },
    {
      id: 19,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Fair Price',
    },
    {
      id: 20,
      title: '0.30 Carat - K - VS1 Good Cut- Round',
      img: Product,
      price: '$350',
      discount: '18%',
      rating: '16/18',
      rateFairGood: 'Fair Price',
    },
  ];
  return (
    <div className="product_grid_wrapper">
      <Row className="g-4">
        {data.map(diamondProduct => (
          <Col xxl={3} md={4} sm={6}>
            <div className="product_box">
              <div className="product_img">
                <Link
                  to={
                    window.location.pathname === '/diamond'
                      ? '/diamond-detail'
                      : '/choose-diamond-detail'
                  }
                >
                  <img src={diamondProduct.img} alt="" />
                </Link>
                <div className="whishlist_icon">
                  <Button variant="link">
                    <img src={HeartIcon} alt="" />
                  </Button>
                </div>
              </div>
              <div className="product_info">
                <div className="product_title">
                  <h6>
                    <Link
                      to={
                        window.location.pathname === '/diamond'
                          ? '/diamond-detail'
                          : '/choose-diamond-detail'
                      }
                    >
                      {diamondProduct.title}
                    </Link>
                  </h6>
                  <Form.Check type="checkbox" id="selectProduct" />
                </div>
                <h6 className="price">
                  {diamondProduct.price}
                  <span>{diamondProduct.discount} below market</span>
                </h6>
                <Row>
                  <Col>
                    <h5>
                      <img src={CheckIcon} alt="" /> {diamondProduct.rating}
                    </h5>
                  </Col>
                  <Col>
                    <div className="good_fair_price">
                      <span
                        className={
                          diamondProduct.rateFairGood === 'Fair Price'
                            ? 'fair'
                            : 'great'
                        }
                      >
                        {diamondProduct.rateFairGood}
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="pagination_Wrapper mt20">
        <Row className="align-items-center">
          <Col sm={3}>
            <p className="m0">Displaying 1 to 1o of 86 items</p>
          </Col>
          <Col sm={9}>
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
