import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import DiamondListData from './DiamondListData';
import { useTable, useExpanded } from 'react-table';
import ProductListImg from '../../Assets/Images/product-list-img.jpg';
import RightArrow from '../../Assets/Images/accordian-arrow.svg';
import ProductImg from '../../Assets/Images/product.jpg';
import LocationPin from '../../Assets/Images/location-pin.svg';
import { useNavigate } from 'react-router-dom';
import LeftAngle from '../../Assets/Images/left-angle.svg';
import RightAngle from '../../Assets/Images/right-angle.svg';

function Table({ columns: userColumns, data, renderRowSubComponent }) {
  const navigate = useNavigate();
  const [field, setField] = useState([
    'select',
    'image',
    'shape',
    'size',
    'color',
    'clarity',
    'cut',
    'pol',
    'sym',
    'fluor',
    'shade',
    'luster',
    'ec',
    'lab',
    'price',
    'table',
    'detpth',
  ]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    state: { expanded },
  } = useTable(
    {
      columns: userColumns,
      data,
    },
    useExpanded,
  );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <React.Fragment {...row.getRowProps()}>
              <tr>
                {row.cells.map((cell, index) => {
                  return index !== 0 && index !== 1 ? (
                    <td
                      {...cell.getCellProps()}
                      onClick={() => navigate('/diamond-detail')}
                    >
                      {cell.render('Cell')}
                    </td>
                  ) : (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
              {row.isExpanded ? (
                <tr className="exapanded_row">
                  <td colSpan={visibleColumns.length}>
                    {renderRowSubComponent({ row })}
                  </td>
                </tr>
              ) : null}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

export default function DiamondListView() {
  const columns = React.useMemo(
    () => [
      {
        id: 'expander',
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span
            {...getToggleAllRowsExpandedProps()}
            className={
              isAllRowsExpanded
                ? 'toggle_arrow expanded_toggle'
                : 'toggle_arrow collapse_toggle'
            }
          >
            <img src={RightArrow} alt="" />
          </span>
        ),
        Cell: ({ row }) => (
          <span
            {...row.getToggleRowExpandedProps()}
            className={
              row.isExpanded
                ? 'toggle_arrow expanded_toggle'
                : 'toggle_arrow collapse_toggle'
            }
          >
            <img src={RightArrow} alt="" />
          </span>
        ),
      },
      {
        select: 'Select_check',
        Header: row => <Form.Check type="checkbox" id="selectAll" />,
        accessor: 'select',
        Cell: ({ row }) => <Form.Check type="checkbox" id="select" />,
      },
      {
        Header: 'Image',
        accessor: 'image',
        Cell: ({ row }) => <img src={ProductListImg} alt="" />,
      },
      {
        Header: 'Shape',
        accessor: 'shape',
      },
      {
        Header: 'Size',
        accessor: 'size',
      },
      {
        Header: 'Color',
        accessor: 'color',
      },
      {
        Header: 'Clarity',
        accessor: 'clarity',
      },
      {
        Header: 'Cut',
        accessor: 'cut',
      },
      {
        Header: 'Pol',
        accessor: 'pol',
      },
      {
        Header: 'Sym',
        accessor: 'sym',
      },
      {
        Header: 'Fluor',
        accessor: 'fluor',
      },
      {
        Header: 'Shade',
        accessor: 'shade',
      },
      {
        Header: 'Luster',
        accessor: 'luster',
      },
      {
        Header: 'EC',
        accessor: 'ec',
      },
      {
        Header: 'Lab',
        accessor: 'lab',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Table',
        accessor: 'table',
      },
      {
        Header: 'Detpth',
        accessor: 'detpth',
      },
    ],
    [],
  );

  const data = React.useMemo(() => DiamondListData(10), []);

  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <div className="expanded_table_Wrap">
        <div className="expanded_table_Wrap_inner">
          <div className="diamond_detail_main">
            <div className="diamond_detail_box">
              <h6>Diamond Detail</h6>
              <div className="diamond_detail_text left">
                <ul>
                  <li>Excellent luster</li>
                  <li>100% eye clean</li>
                </ul>
                <Row>
                  <Col xs={4}>
                    <div className="diamond_img">
                      <img src={ProductImg} alt="" />
                    </div>
                  </Col>
                  <Col xs={8}>
                    <div className="diamond_detail_table">
                      <table>
                        <tbody>
                          <tr>
                            <th>Certification#</th>
                            <td>IGI</td>
                          </tr>
                          <tr>
                            <th>Stock#</th>
                            <td>-</td>
                          </tr>
                          <tr>
                            <th>Mine of origin</th>
                            <td>N/A</td>
                          </tr>
                          <tr>
                            <th>Mine of market</th>
                            <td>N/A</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="diamond_detail_main">
            <div className="diamond_detail_box">
              <h6>Diamond Detail</h6>
              <div className="diamond_detail_text left">
                <Row>
                  <Col xs={6}>
                    <div className="diamond_detail_table">
                      <table>
                        <tbody>
                          <tr>
                            <th>Measurment</th>
                            <td>4.33-4.35*2.66</td>
                          </tr>
                          <tr>
                            <th>Table</th>
                            <td>58.00%</td>
                          </tr>
                          <tr>
                            <th>Depth</th>
                            <td>61.40%</td>
                          </tr>
                          <tr>
                            <th>Ration</th>
                            <td>-</td>
                          </tr>
                          <tr>
                            <th>Culet</th>
                            <td>-</td>
                          </tr>
                          <tr>
                            <th>Girdle</th>
                            <td>-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="diamond_detail_table">
                      <table>
                        <tbody>
                          <tr>
                            <th>Crown angle</th>
                            <td>-</td>
                          </tr>
                          <tr>
                            <th>Crown height</th>
                            <td>-</td>
                          </tr>
                          <tr>
                            <th>Pavilion angle</th>
                            <td>-</td>
                          </tr>
                          <tr>
                            <th>Pavilion depth</th>
                            <td>-</td>
                          </tr>
                          <tr>
                            <th>Lower Half</th>
                            <td>-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="supplyer_detail_main">
            <div className="diamond_detail_box">
              <h6>Supplier Details</h6>
              <div className="diamond_detail_text">
                <div className="other_supplier">
                  <div className="supplyer_info">
                    <div className="supplier_img">os</div>
                    <h5>Other Supplier</h5>
                  </div>
                  <p>
                    <img src={LocationPin} alt="" /> India
                  </p>
                </div>
                <div className="price_detail_wrap">
                  <h5>Price Details</h5>
                  <div className="diamond_price">
                    <h4>Diamond price</h4>
                    <h3>
                      <p>-97.4%</p>
                      <p>$182.00/ct</p>
                      <p className="text_secondary fw_600">$185.64</p>
                      <p>$15,360.69</p>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    [],
  );
  return (
    <div className="product_list_wrapper">
      <Container>
        <div className="table-responsive">
          <Table
            columns={columns}
            data={data}
            renderRowSubComponent={renderRowSubComponent}
          />
        </div>
        <div className="pagination_Wrapper">
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
      </Container>
    </div>
  );
}
