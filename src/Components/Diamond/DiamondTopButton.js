import React, { useState } from 'react';
import { Button, Col, Form, Offcanvas, Row } from 'react-bootstrap';
import Grid from '../../Assets/Images/grid.svg';
import List from '../../Assets/Images/list.svg';
import CartIcon from '../../Assets/Images/cart.svg';
import HeartIcon from '../../Assets/Images/wishliat.svg';
import FilterIcon from '../../Assets/Images/filter.svg';
import { useNavigate } from 'react-router-dom';
import DiamondFilter from './DiamondFilter';

export default function DiamondTopButton({ listGrid, setListGrid }) {
  const [filtershow, setFilterShow] = useState(false);
  const handleShow = () => setFilterShow(true);
  const navigate = useNavigate();
  const handleClose = () => setFilterShow(false);
  return (
    <>
      <Row className="mb25">
        <Col xxl={6}>
          <div className="filter_by_list mb20-xl">
            <ul>
              <li>
                <div className="list_grid_button">
                  <Button
                    variant="outline-secondary"
                    className={listGrid === 'Grid' ? 'active' : ''}
                    onClick={() => setListGrid('Grid')}
                  >
                    <img src={Grid} alt="" /> Visual
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className={listGrid === 'List' ? 'active' : ''}
                    onClick={() => setListGrid('List')}
                  >
                    <img src={List} alt="" /> List
                  </Button>
                </div>
              </li>
              <li className="mr20 mr0-xs filter_button_wrap">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  onClick={handleShow}
                >
                  More Filters
                  <img src={FilterIcon} className="mr0 ml30" alt="" />
                </Button>
              </li>
              <li className="mlauto-xl">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Select aria-label="Default select example">
                    <option value="1">Price - Low to High</option>
                    <option value="2">Price - High to Low</option>
                  </Form.Select>
                </Form.Group>
              </li>
            </ul>
          </div>
        </Col>
        <Col xxl={6}>
          <ul className="action_button_wrap d-flex align-items-center justify-content-end">
            <li className="ml10 ml0-xl mrauto-xl">
              <Button variant="primary" className="rounded-pill medium_padding">
                Export
              </Button>
            </li>
            <li className="ml10">
              <Button
                variant="outline-primary"
                className="rounded-pill medium_padding"
                onClick={() => navigate('/cart')}
              >
                <img src={CartIcon} alt="" /> Add to cart
              </Button>
            </li>
            <li className="ml10">
              <Button
                variant="outline-primary"
                className="rounded-pill medium_padding"
              >
                <img src={HeartIcon} alt="" /> Add to wishlist
              </Button>
            </li>
          </ul>
        </Col>
      </Row>

      <Offcanvas show={filtershow} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DiamondFilter />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
