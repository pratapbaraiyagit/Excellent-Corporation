import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import CartIcon from '../../Assets/Images/cart.svg';
import HeartIcon from '../../Assets/Images/wishliat.svg';
import Star from '../../Assets/Images/star.svg';
import Composition from '../../Assets/Images/Jewellery/composition.svg';
import Composition2 from '../../Assets/Images/Jewellery/composition2.svg';
import General from '../../Assets/Images/Jewellery/general.svg';
import { useNavigate } from 'react-router-dom';

export default function JewelleryInfo() {
  const navigate = useNavigate();
  return (
    <Row>
      <Col xl={5}>
        <div className="jewellery_price_wrapper">
          <h5 className="fs_20 mb20 text_dark">
            Radiant-Cut Moissanite Ring With Knife-Edge Band In 14K White Gold
            (2 Ct.)
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
            <span className="fw_400 ml10 text_extra_light">464109439</span>
          </h6>
          <div className="ring_size">
            <h6 className="fs_16 mb15 text_light">Ring Size</h6>
            <ul className="size_Radio">
              <li>
                <div className="custom_radio">
                  <input type="radio" id="6" name="size" />
                  <label htmlFor="6">6</label>
                </div>
              </li>
              <li>
                <div className="custom_radio">
                  <input type="radio" id="6.5" name="size" />
                  <label htmlFor="6.5">6.5</label>
                </div>
              </li>
              <li>
                <div className="custom_radio">
                  <input type="radio" id="7" name="size" />
                  <label htmlFor="7">7</label>
                </div>
              </li>
              <li>
                <div className="custom_radio">
                  <input type="radio" id="7.5" name="size" />
                  <label htmlFor="7.5">7.5</label>
                </div>
              </li>
              <li>
                <div className="custom_radio">
                  <input type="radio" id="8" name="size" />
                  <label htmlFor="8">8</label>
                </div>
              </li>
            </ul>
          </div>
          <ul className="action_button_wrap d-flex align-items-center mt25">
            <li className="mr10">
              <Button
                variant="primary"
                className="rounded-pill px20 btn_shadow"
                onClick={() => navigate('/cart')}
              >
                <img src={CartIcon} className="white_img" alt="" />
                Add To Cart
              </Button>
            </li>
            <li className="mr10">
              <Button
                variant="outline-primary"
                className="rounded-circle btn_round p0"
              >
                <img src={HeartIcon} className="mr0" alt="" />
              </Button>
            </li>
          </ul>
        </div>
      </Col>
      <Col xl={7}>
        <div className="jewellery_detail_right">
          <h5>Detail</h5>
          <div className="mb20">
            <h6 className="mb5">
              <img src={Composition} className="mr5" alt="" />
              Composition
            </h6>
            <ul>
              <li>
                Stone Group :<span>Gemstone</span>
              </li>
              <li>
                Metal :<span>14K white gold</span>
              </li>
            </ul>
          </div>
          <div className="mb20">
            <h6 className="mb5">
              <img src={Composition2} className="mr5" alt="" />
              Composition
            </h6>
            <ul>
              <li>
                Stone :<span>moissanite</span>
              </li>
              <li>
                Stone Shape :<span>Emrald</span>
              </li>
              <li>
                Stone Cut :<span>brilliant/full</span>
              </li>
              <li>
                Stone Color :<span>Colorless</span>
              </li>
              <li>
                Multi center stone :<span>no</span>
              </li>
            </ul>
          </div>
          <div className="mb0">
            <h6 className="mb5">
              <img src={General} className="mr5" alt="" /> General
            </h6>
            <ul>
              <li>
                Item width :<span>18.00 mm</span>
              </li>
              <li>
                online exclusive :<span>no</span>
              </li>
              <li>
                minimum size :<span>6.0</span>
              </li>
              <li>
                maximum size :<span>8.0</span>
              </li>
              <li>
                sku :<span>2571312-7.5</span>
              </li>
            </ul>
          </div>
        </div>
      </Col>
      <Col md={12}>
        <div className="description_wrapper">
          <h5>Description</h5>
          <p>
            This near-colorless moissanite ring features a radiant-cut center
            stone with a modern knife-edge band. A radiant cut combines a
            rectangle shape with the traditional brilliance of a round diamond.
            Its sharp facets produce impeccable sparkle in 14K white gold.
          </p>
          <p>
            Through a patented growing method, Forever One by Charles & Colvard
            offers accessible luxe jewelry with superior colorless to
            near-colorless lab-created moissanite gemstones. Each piece features
            unsurpassed craftsmanship meeting the most exacting standards.
          </p>
          <p>The total diamond equivalent weight is approximately 2 carats.</p>
        </div>
      </Col>
    </Row>
  );
}
