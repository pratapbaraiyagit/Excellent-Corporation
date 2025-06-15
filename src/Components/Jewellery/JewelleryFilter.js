import React, { useCallback, useState } from 'react';
import { Accordion, Form } from 'react-bootstrap';
import RangeSlider from 'react-range-slider-input';
import Emerald from '../../Assets/Images/filter-shape/emerald.png';
import Pear from '../../Assets/Images/filter-shape/pear.png';
import Round from '../../Assets/Images/filter-shape/round.png';
import Oval from '../../Assets/Images/filter-shape/oval.png';
import Cushion from '../../Assets/Images/filter-shape/cushion.png';
import Princess from '../../Assets/Images/filter-shape/princess.png';
import Marquise from '../../Assets/Images/filter-shape/marquise.png';
import Radiant from '../../Assets/Images/filter-shape/radiant.png';
import Heart from '../../Assets/Images/filter-shape/heart.png';

export default function JewelleryFilter() {
  const [value, setValue] = useState({
    pricePerCarat: [0, 50000],
  });
  const onSetValue = useCallback((name, val) => {
    setValue(prev => ({ ...prev, [name]: val }));
  }, []);
  return (
    <div className="jewellery_filter">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Categories</Accordion.Header>
          <Accordion.Body>
            <div className="category_radio">
              <Form.Check
                type="radio"
                label="Engagement Rings"
                id="EngagementRings"
                name="category"
              />
              <Form.Check
                type="radio"
                label="Bracelet"
                id="Bracelet"
                name="category"
              />
              <Form.Check
                type="radio"
                label="Wedding Rings"
                id="WeddingRings"
                name="category"
              />
              <Form.Check
                type="radio"
                label="Necklace"
                id="Necklace"
                name="category"
              />
              <Form.Check
                type="radio"
                label="Earrings"
                id="Earrings"
                name="category"
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Stone</Accordion.Header>
          <Accordion.Body>
            <div className="common_checkbox_wrapper">
              <Form.Check type="checkbox" id="Diamond" label="Diamond" />
              <Form.Check type="checkbox" id="NoStone" label="No Stone" />
              <Form.Check type="checkbox" id="Simulated" label="Simulated" />
              <Form.Check type="checkbox" id="SouthSea" label="South Sea" />
              <Form.Check
                type="checkbox"
                id="EngagementRings2"
                label="Engagement Rings"
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="2">
        <Accordion.Item eventKey="2">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <h6 className="mb20">Table</h6>
            <RangeSlider
              value={value.pricePerCarat}
              min={0}
              max={100}
              onInput={e => onSetValue('pricePerCarat', e)}
            />
            <div className="range_value d-flex justify-content-between align-content-center">
              <div className="value">
                $
                <span>
                  {value.pricePerCarat[0] ? value.pricePerCarat[0] : 0}
                </span>
              </div>
              <div className="value">
                $
                <span>
                  {value.pricePerCarat[1] ? value.pricePerCarat[1] : 0}
                </span>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="3">
        <Accordion.Item eventKey="3">
          <Accordion.Header>Shape</Accordion.Header>
          <Accordion.Body>
            <div className="filter_shape_checkbox shape_select">
              <ul>
                <li>
                  <div className="custom_checkbox_shape">
                    <input type="checkbox" id="emerald" />
                    <label htmlFor="emerald">
                      <img src={Pear} alt="" className="injectable" />
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom_checkbox_shape">
                    <input type="checkbox" id="round" />
                    <label htmlFor="round">
                      <img src={Round} alt="" className="injectable" />
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom_checkbox_shape">
                    <input type="checkbox" id="oval" />
                    <label htmlFor="oval">
                      <img src={Oval} alt="" className="injectable" />
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom_checkbox_shape">
                    <input type="checkbox" id="cushion" />
                    <label htmlFor="cushion">
                      <img src={Cushion} alt="" className="injectable" />
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom_checkbox_shape">
                    <input type="checkbox" id="princess" />
                    <label htmlFor="princess">
                      <img src={Princess} alt="" className="injectable" />
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom_checkbox_shape">
                    <input type="checkbox" id="Emerald" />
                    <label htmlFor="Emerald">
                      <img src={Emerald} alt="" className="injectable" />
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom_checkbox_shape">
                    <input type="checkbox" id="marquise" />
                    <label htmlFor="marquise">
                      <img src={Marquise} alt="" className="injectable" />
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom_checkbox_shape">
                    <input type="checkbox" id="radiant" />
                    <label htmlFor="radiant">
                      <img src={Radiant} alt="" className="injectable" />
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom_checkbox_shape">
                    <input type="checkbox" id="Heart" />
                    <label htmlFor="Heart">
                      <img src={Heart} alt="" className="injectable" />
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="4">
        <Accordion.Item eventKey="4" className="pb0">
          <Accordion.Header>Metal</Accordion.Header>
          <Accordion.Body>
            <div className="common_checkbox_wrapper">
              <Form.Check type="checkbox" id="Gold22K" label="Gold 22K" />
              <Form.Check type="checkbox" id="Gold18K" label="Gold 18K" />
              <Form.Check type="checkbox" id="Silver" label="Silver" />
              <Form.Check type="checkbox" id="Platinum" label="Platinum" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
