import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LooseDiamondSidebar from './LooseDiamondSidebar';

export default function IdealCut() {
  return (
    <main>
      <section className="education_diamond_wrap pb100 pb50-md pb80-lg">
        <Container>
          <h3 className="mb30 mb15-lg">Diamonds</h3>
          <Row>
            <Col xxl={2} md={3}>
              <LooseDiamondSidebar />
            </Col>
            <Col xxl={10} md={9}>
              <div className="diamond_detial_box">
                <h4 className="text_primary">Ideal Cut Diamonds</h4>
                <p>
                  An ideal cut diamond is a round, brilliant, or princess cut
                  diamond that is cut to ideal proportions and angles and has
                  excellent polish and symmetry ratings. An ideal cut diamond
                  reflects almost all the light that enters it, and is among the
                  rarest cuts. The ideal cut diamond is used as benchmark for
                  grading all other diamonds. In America, ideal cut proportions
                  are often determined by the American Gem Society Laboratory
                  (AGSL), but different countries and different companies base
                  their idea of the ideal cut on different standards.
                </p>
                <p>
                  Back in the 1900s, Belgian diamond cutter, Marcel Tolkowsky,
                  coined the term- Ideal Cut. After analyzing the round
                  brilliant cut diamond, he took both brilliance (the amount of
                  the white light reflected) and fire (the separation of white
                  light into its spectral colors) into consideration. While his
                  calculations serve as a guide for today's idea of the global
                  "ideal cut" standards, countries have still made their own
                  modifications.
                </p>
                <p>
                  Tolkowsky's ideal cut is not perfect, but it nevertheless
                  serves as a basic guideline for ideal cut diamonds. Today, we
                  also use the guidelines of a gemstone cutter named Bruce
                  Harding who developed another model in the 1970s as well as
                  other computer models and technological scopes.
                </p>
                <p>
                  Ideal diamonds are perfectly proportioned to refract light,
                  producing that fire and brilliance up through to the table and
                  crown. There are at least six "ideal cuts" being used today
                  but only three of them (including the one by Tolkowsky ) are
                  the most common.
                </p>
              </div>
              <div className="diamond_detial_box">
                <h5>
                  True Hearts<sup>TM</sup> Round Cut (Hearts and Arrows
                  Diamonds)
                </h5>
                <p>
                  At the heart of our True HeartsTM collection are round cut
                  diamonds. These superior Hearts and Arrows diamonds feature
                  perfect proportions and symmetry, as well as the highest
                  grades for cut and polish. When viewed from certain angles,
                  they reveal intricate patterns of hearts and arrows. The
                  stones are polished with great precision, yielding an internal
                  reflection of arrows when viewed from above and hearts when
                  viewed from below. This effect is incredibly hard to achieve
                  for even the most skilled diamond cutters.
                </p>
                <p>
                  These red and white ‘Ideal Scope’ images also serve as a clear
                  indication of a diamond’s perfect optical symmetry.
                </p>
                <p>
                  A certificate from one of the world’s top grading laboratories
                  – the GIA or AGS – accompanies each Hearts and Arrows diamond,
                  verifying its superior quality. This document contains
                  information about a diamond’s cut, polish, and symmetry, among
                  other important attributes.
                </p>
                <h5>
                  True Hearts<sup>TM</sup> Princess and Cushion Cut
                </h5>
                <p>
                  For a princess cut or cushion cut diamond to qualify as a True
                  HeartsTM diamond, it must be certified as an Ideal Cut by the
                  AGS. This involves measuring a stone’s light performance -
                  that is, how it reflects and bends the light to produce
                  brilliance - as well as other characteristics such as cut,
                  polish, and symmetry.
                </p>
                <p>
                  Fewer than 1% of the world’s diamonds have the perfect
                  internal symmetry and proportions necessary to earn the True
                  HeartsTM distinction.
                </p>
                <h5>
                  What is a True Hearts<sup>TM</sup> Lab-Created Diamond?
                </h5>
                <p>
                  True HeartsTM lab-created diamonds contain the same internal
                  symmetry and proportions as well as the highest gem grading
                  for cut and polish found in True HeartsTM earth-created
                  diamonds. The only difference between the two is their origin.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
