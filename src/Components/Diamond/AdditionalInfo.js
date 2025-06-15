import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function AdditionalInfo() {
  return (
    <Container>
      <Row className="g-4">
        <Col lg={4}>
          <div className="additional_detail_box">
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>Primary Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shape</td>
                  <td>ROUND</td>
                </tr>
                <tr>
                  <td>Carat</td>
                  <td>0.30</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Clarity</td>
                  <td>I1</td>
                </tr>
                <tr>
                  <td>Cut Grade</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Polish</td>
                  <td>EX</td>
                </tr>
                <tr>
                  <td>Symmetry</td>
                  <td>VG</td>
                </tr>
                <tr>
                  <td>Fluorescence</td>
                  <td>NIL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col lg={4}>
          <div className="additional_detail_box">
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>Measurement Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Measurements</td>
                  <td>4.33-4.35*2.66</td>
                </tr>
                <tr>
                  <td>Depth</td>
                  <td>61.40%</td>
                </tr>
                <tr>
                  <td>Table</td>
                  <td>58.00%</td>
                </tr>
                <tr>
                  <td>Crown Height</td>
                  <td>13.89%</td>
                </tr>
                <tr>
                  <td>Crown Angle</td>
                  <td>33.43°</td>
                </tr>
                <tr>
                  <td>Pavillion Depth</td>
                  <td>43.6%</td>
                </tr>
                <tr>
                  <td>Pavillion Angle</td>
                  <td>41.21°</td>
                </tr>
                <tr>
                  <td>Inscription No.</td>
                  <td>3435994384</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col lg={4}>
          <div className="additional_detail_box">
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>Additional Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lot ID</td>
                  <td>21</td>
                </tr>
                <tr>
                  <td>Lab</td>
                  <td>GIA</td>
                </tr>
                <tr>
                  <td>Shade</td>
                  <td>58.00%</td>
                </tr>
                <tr>
                  <td>Gridle Condition</td>
                  <td>Faceted (MED-STK)</td>
                </tr>
                <tr>
                  <td>Culet</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>Growth Type</td>
                  <td>Natural</td>
                </tr>
                <tr>
                  <td>Inclusions</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Mumbai INDIA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
