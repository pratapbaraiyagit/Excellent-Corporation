import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LooseDiamondSidebar from './LooseDiamondSidebar';

export default function ChooseADiamond() {
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
                <h4 className="text_primary">
                  How to Choose the Perfect Diamond
                </h4>
                <p>
                  When looking to buy a wedding or engagement ring, it is
                  important that you know how to choose the perfect diamond.
                  While some people prefer gemstone or rough diamonds, classic
                  diamonds are still the most popular stone on the market and so
                  it is essential that you understand everything you can about
                  them. When searching for the perfect diamond*, there are four
                  categories (or characteristics) to consider.
                </p>
                <h5>The 4 C's:</h5>
                <p>
                  Cut - Describes the finish, proportion and polish of the
                  diamond. These factors determine the fire and brilliance of a
                  diamond.
                </p>
                <p>
                  An Ideal Cut diamond is a round (also known as brilliant) or
                  princess cut diamond that is cut to ideal proportions and
                  angles and has excellent polish and symmetry ratings.
                </p>
                <p>
                  A True Hearts diamond is a round or princess cut diamond that
                  exhibits a near flawless Hearts and Arrows pattern of perfect
                  optical symmetry, maximizing the diamond’s fire, brilliance
                  and light dispersion.
                </p>
                <p>
                  Clarity - Describes the clearness or purity of a diamond. A
                  grade is assigned to each diamond, with "F" representing a
                  flawless diamond to "I" describing a diamond that has
                  inclusions. Most diamonds can be found at various grades
                  between “F” and “I.” Diamond buyers will sometimes choose a
                  gem with some inclusions, as long as they are not visible to
                  the naked eye.
                </p>
                <p>
                  Color - From white to yellow, diamonds receive a grade for the
                  amount of color they contain. Diamond buyers prefer colorless
                  to near colorless diamonds, with diamonds graded J, K, and L
                  offering the best value for a customer’s money.
                </p>
                <p>
                  Carat - Carat refers to the weight of the diamond. One carat
                  is equivalent to 0.20 grams. The larger the carat, the pricier
                  the diamond, although the other "C's" can influence the final
                  price significantly.
                </p>
                <p>
                  Though not mentioned as one of the four C's, a diamond's shape
                  plays an integral part in the selection of any diamond
                  engagement ring.
                </p>
                <p>
                  Lastly it is critical that you have a comprehensive
                  understanding of diamond anatomy and proportion— brilliance,
                  dispersion and scintillation.
                </p>
                <p>
                  Understanding how to choose the perfect diamond, will affect
                  how you choose your engagement ring. Before choosing your
                  perfect engagement ring, make sure you have a comprehensive
                  understanding of diamonds- from their structure to the 4C's.
                </p>
                <p>
                  *To clarify, when we say perfect we are referring to the
                  perfect diamond for you. This of course means that the diamond
                  has the characteristics you desire and is within your budget.
                  For example, some customers prefer larger diamonds with lower
                  grades, while others prefer smaller diamonds with higher
                  grades. Perfect diamonds— or diamonds without any flaws— are
                  exceedingly rare and very expensive.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
