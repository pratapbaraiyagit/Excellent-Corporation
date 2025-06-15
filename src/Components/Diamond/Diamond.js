import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DiamondFilter from './DiamondFilter';
import DiamondSearch from './DiamondSearch';
import DiamondGridView from './DiamondGridView';
import DiamondListView from './DiamondListView';
import DiamondTopButton from './DiamondTopButton';

export default function Diamond() {
  const [listGrid, setListGrid] = useState('Grid');
  return (
    <main>
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
            ? 'diamond_grid_wrapper pt30 pb100 pb80-lg pb50-md'
            : 'diamond_grid_wrapper diamond_list_wrapper pt30 pb100 pb80-lg pb50-md'
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
    </main>
  );
}
