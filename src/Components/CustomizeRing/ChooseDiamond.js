import React, { useState } from 'react';
import DiamondSearch from '../Diamond/DiamondSearch';
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
import DiamondFilter from '../Diamond/DiamondFilter';
import DiamondGridView from '../Diamond/DiamondGridView';
import DiamondListView from '../Diamond/DiamondListView';
import CustomizeRingSteps from './CustomizeRingSteps';
import DiamondTopButton from '../Diamond/DiamondTopButton';

export default function ChooseDiamond() {
  const [listGrid, setListGrid] = useState('Grid');
  const [filtershow, setFilterShow] = useState(false);

  const handleClose = () => setFilterShow(false);
  return (
    <main>
      <section className="customize_ring_steps pt20 pb50">
        <CustomizeRingSteps />
      </section>
      <section className="diamond_search_wrapper bg_light pt40 pb40">
        <Container>
          <h2 className="text-center mb40">
            Search for <span>Diamonds</span>
          </h2>
          <DiamondSearch />
        </Container>
      </section>
      <div
        className={
          listGrid === 'Grid'
            ? 'diamond_grid_wrapper pt30 pb100'
            : 'diamond_grid_wrapper diamond_list_wrapper pt30 pb100'
        }
      >
        <Container>
          <Row>
            {listGrid === 'Grid' && (
              <Col xl={3} className="d-none d-xl-block">
                <DiamondFilter />
              </Col>
            )}
            <Col xl={listGrid === 'Grid' ? `9` : `12`} lg={12}>
              <DiamondTopButton listGrid={listGrid} setListGrid={setListGrid} />
              <div className="product_list_grid_wrapper">
                {listGrid === 'Grid' ? (
                  <DiamondGridView />
                ) : (
                  <DiamondListView />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Offcanvas show={filtershow} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DiamondFilter />
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
}
