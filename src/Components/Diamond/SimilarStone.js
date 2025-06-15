import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import Product from '../../Assets/Images/product.jpg';
import HeartIcon from '../../Assets/Images/heart.svg';
import CheckIcon from '../../Assets/Images/check.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function SimilarStone() {
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
  ];
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView={5}
      spaceBetween={20}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        1081: {
          slidesPerView: 4,
        },
        1399: {
          slidesPerView: 5,
        },
      }}
      className="recommended_slider_wrap pb80 navigation_center_bottom"
    >
      {data.map(diamondProduct => (
        <SwiperSlide>
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
