import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LooseDiamondSidebar from './LooseDiamondSidebar';

export default function DiamondCare() {
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
                <h4 className="text_primary">Diamond Care</h4>
                <h5>Cleaning Your Diamond Jewelry</h5>
                <p>
                  Depending on the setting you choose, you can soak your diamond
                  engagement and/or wedding rings for up to 30 minutes in a
                  solution of dishwashing liquid and water. This is best suited
                  to prong and cathedral settings. In pave and basket settings,
                  however, soaking the rings can increase the likelihood of the
                  gems coming loose. Be mindful of this when you decide to soak
                  any jewelry piece use mild dish soap in warm water and soak
                  your jewelry for a few minutes. Using a soft cloth or cotton
                  swab, gently scrub the metal (gold, platinum, silver) and then
                  rinse. Repeat the process if necessary, but always proceed
                  with caution when it comes to soaking jewelry.
                </p>
                <p>
                  For extra shine, you can soak diamonds in window cleaner
                  afterwards. Because glass cleaner contains some harsh
                  chemicals, do not soak for more than a minute at a time, and
                  do not use this process at all with rhodium. To ensure that
                  all of the glass cleaner is rinsed off, use the same mild dish
                  soap solution. Dip your ring into the solution, rinse it with
                  warm water, and then dry it completely.
                </p>
                <p>
                  You can use toothpicks to remove dirt that is lodged in
                  between the prongs and the diamonds, but be extra careful not
                  to scratch the metal or move the positioning of a prong. If
                  fibers from cloth get stuck in the setting, gently use
                  tweezers to remove them. Again, be careful of the metal. Even
                  though diamonds can only be scratched by other diamonds, the
                  precious metals into which they are set can be scratched more
                  easily.
                </p>
                <p>
                  Ionic cleaners can be used on most diamond jewelry. If your
                  engagement ring is set with stones other than diamonds,
                  consider other cleaning methods, as some gemstones are
                  adversely affected by the electrical current in the ionic
                  cleaning process.
                </p>
                <p>
                  When storing your diamond jewelry, be sure to keep it separate
                  from other jewelry. Remember that diamonds can not only
                  scratch any other jewelry you have, but can scratch each other
                  as well. Make sure that two diamond pieces are not being
                  stored in such a way that they touch each other.
                </p>
                <h5>Insuring Your Diamond Jewelry</h5>
                <p>
                  Once you have purchased your beautiful diamond jewelry, you
                  will want to make sure that it is properly insured, in the
                  event of theft or loss. Although homeowner's and renter's
                  policies will cover a portion of your jewelry loss, it is
                  often a small amount in comparison to the original cost of a
                  diamond engagement ring or wedding ring. It is advisable to
                  find out how much is covered by the policies you have in
                  place, and then look into additional policies.
                </p>
                <p>
                  If you choose to get additional insurance, find out if there
                  is a deductible and how much it is. Most insurance companies
                  will not insure fine jewelry without an appraisal, so make
                  sure you find out which appraisal reports are acceptable to
                  your insurance company. Ask if the policy covers you fully,
                  whether the item is merely damaged, or even if it is lost
                  overseas. Many policies will have riders that do not allow for
                  this level of coverage. Make sure you read the details of the
                  policy carefully before you pay for extra insurance. Also find
                  out if your jewelry is covered at the full replacement cost,
                  and if you can receive a cash settlement in lieu of a
                  replacement item.
                </p>
                <p>
                  Be aware that your insurance company may require updated
                  appraisals on a regular basis. Be prepared to have your
                  jewelry appraised every few years. Ask what the rules are for
                  the particular insurance company you choose. Also find out if
                  there is a discount if you have a home security system, such
                  as an alarm system.
                </p>
                <p>
                  When you invest in diamond jewelry, you want to make sure that
                  your investment is protected. Research insurance companies
                  online or call around for information to make comparisons
                  before you choose.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
