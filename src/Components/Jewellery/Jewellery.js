import React, { useState } from 'react';
import { Button, Col, Container, Form, Offcanvas, Row } from 'react-bootstrap';
import JewelleryFilter from './JewelleryFilter';
import JewelleryList from './JewelleryList';
import FilterIcon from '../../Assets/Images/filter.svg';

export default function Jewellery() {
  const [filtershow, setFilterShow] = useState(false);

  const handleClose = () => setFilterShow(false);
  const handleShow = () => setFilterShow(true);
  return (
    <main>
      <section className="jewellary_banner">
        <Container>
          <h1 className="text-white mb15">
            <span className="d-block h3">Introducing the</span>lost day
            collection
          </h1>
          <p className="text-white mb30">
            Rings, Bracelet, Necklace, Earrings & more collections
          </p>
          <Button variant="outline-light" className="rounded-pill px30">
            Shop Now
          </Button>
        </Container>
      </section>
      <section className="jewellery_list_wrapper pt40 pb100 pb80-xl pb50-md">
        <Container>
          <Row>
            <Col xl={3} className="d-none d-xl-block">
              <JewelleryFilter />
            </Col>
            <Col xl={9} lg={12}>
              <Row className="align-items-center mb25 jewellery_top_Wrapper">
                <Col sm={6}>
                  <div className="d-flex align-items-center total_filter_button">
                    <p className="mb0 fs_16 text_dark mr20">
                      544 Products found
                    </p>
                    <div className="mr20 mr0-xs filter_button_wrap d-block d-xl-none">
                      <Button
                        variant="outline-secondary"
                        className="rounded-pill"
                        onClick={handleShow}
                      >
                        More Filters
                        <img src={FilterIcon} className="mr0 ml30" alt="" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <ul className="select_filter_wrap">
                    {window.location.pathname === '/choose-your-setting' && (
                      <li>
                        <div className="sorting_wrap">
                          <Form.Group
                            controlId="exampleForm.ControlInput1"
                            className="form_group"
                          >
                            <Form.Select aria-label="Default select example">
                              <option value="1">Metal</option>
                              <option value="2">Metal</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </li>
                    )}
                    <li>
                      <div className="sorting_wrap">
                        <Form.Group
                          controlId="exampleForm.ControlInput1"
                          className="form_group"
                        >
                          <Form.Select aria-label="Default select example">
                            <option value="1">Price - Low to High</option>
                            <option value="2">Price - High to Low</option>
                          </Form.Select>
                        </Form.Group>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
              <JewelleryList jewelType="jewellery_list" />
            </Col>
          </Row>
        </Container>
      </section>

      <Offcanvas show={filtershow} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <JewelleryFilter />
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
}
