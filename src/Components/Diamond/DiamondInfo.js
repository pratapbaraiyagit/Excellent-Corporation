import React from 'react';
import CartIcon from '../../Assets/Images/cart.svg';
import HeartIcon from '../../Assets/Images/wishliat.svg';
import PhoneIcon from '../../Assets/Images/phone.svg';
import RoundShape from '../../Assets/Images/diamond-shape/round.svg';
import IgiLogo from '../../Assets/Images/igi.png';
import HintIcon from '../../Assets/Images/hint.svg';
import Shipping from '../../Assets/Images/shiping.svg';
import CompareIcon from '../../Assets/Images/compare.svg';
import PlusIcon from '../../Assets/Images/plusicon.svg';
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function DiamondInfo() {
  const navigate = useNavigate();
  return (
    <Row>
      <Col xl={6}>
        <div className="diamond_detail_contemt_wrap mt30-sm">
          <h5 className="fs_20 mb10 fw_700">
            19.74 Carat, ROUND Shape Diamond
          </h5>
          <h3 className="fs_28 fw_700 mb10 text_primary">$21,500.00</h3>
          <p className="fs_16 mb20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy
          </p>
          <p className="mb0">
            <span className="text_secondary fw_700 mr10">Report#</span>{' '}
            464109439
          </p>
          <ul className="action_button_wrap d-flex align-items-center mt30 mb30">
            {window.location.pathname === '/choose-diamond-detail' && (
              <li className="mr10 mr5-xs">
                <Button
                  variant="primary"
                  className="rounded-pill px20 px10-xs btn_shadow"
                  onClick={() => navigate('/choose-your-setting')}
                >
                  <img src={PlusIcon} alt="" />
                  Add to Ring
                </Button>
              </li>
            )}
            <li className="mr10  mr5-xs">
              <Button
                variant="primary"
                className="rounded-pill pl20 pr20 btn_shadow btn_cart"
                onClick={() => navigate('/cart')}
              >
                <img src={CartIcon} className="white_img" alt="" />
                Add To Cart
              </Button>
            </li>
            <li className="mr10  mr5-xs">
              <Button
                variant="outline-primary"
                className="rounded-circle btn_round p0"
              >
                <img src={HeartIcon} className="mr0" alt="" />
              </Button>
            </li>
            <li className="mr10  mr5-xs">
              <Button
                variant="outline-primary"
                className="rounded-circle btn_round p0"
                onClick={() => navigate('/compare')}
              >
                <img src={CompareIcon} className="mr0" alt="" />
              </Button>
            </li>
          </ul>
          <p className="mb20">Still Confused? Talk to Expert</p>
          <p className="d-flex">
            <img src={PhoneIcon} className="mr10" alt="" /> +91 8745897453
          </p>
        </div>
      </Col>
      <Col xl={6}>
        <div className="diamond_info_table mb15">
          <h6 className="mb15">
            <img src={RoundShape} alt="" className="mr10" /> Round | D-E-F
          </h6>
          <ul>
            <li>
              Carat Size:<span>0.00 - 19.74</span>
            </li>
            <li>
              Table:
              <span>
                <img src={IgiLogo} alt="" />
              </span>
            </li>
            <li>
              Clarity:
              <span>FL</span>
            </li>
            <li>
              Cut:
              <span>Idea</span>
            </li>
            <li>
              Polish:
              <span>All</span>
            </li>
            <li>
              Depth:
              <span>50</span>
            </li>
            <li>
              Table:
              <span>IGI</span>
            </li>
          </ul>
        </div>
        <Row className="mb35">
          <Col sm={7}>
            <div className="d-flex align-items-center">
              <span>Share:</span>
              <ul className="social_share">
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-viber"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-regular fa-comments"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={5}>
            <div className="drop_hint">
              <Link to="/">
                <img src={HintIcon} alt="" />
                Drop A Hint
              </Link>
            </div>
          </Col>
        </Row>
        <div className="shipping_Wrap">
          <div className="shipping_icon">
            <img src={Shipping} alt="" />
          </div>
          <div className="shipping_text">
            <h6 className="fw_700 fs_14 m0">Free Shipping & Free Returns</h6>
            <p className="m0 fs_14">
              Order now for delivery by Tuesday, June 22, 2021
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}
