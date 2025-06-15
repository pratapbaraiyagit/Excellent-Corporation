import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LooseDiamondSidebar from './LooseDiamondSidebar';

export default function Shapes() {
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
                <h4 className="text_primary">Diamond Shapes</h4>
                <p>
                  Diamonds come in many different shapes. Each diamond shape
                  possesses its own unique qualities, so exploring and learning
                  about the various shapes is worth your while.
                </p>
                <h5>Asscher Cut Diamonds</h5>
                <p>
                  The Asscher Cut Diamond, also called a "Square Emerald-Cut",
                  is made using a step-cut process and has cropped corners.
                  Because of the cropped corners, an Asscher Cut Diamond appears
                  almost octagonal at first glance. They are bright, shiny, and
                  clear in appearance. Like Emerald-Cut Diamonds, they have the
                  clarity of glacier-water ice, allowing you to see all the way
                  through the stone. However, since inclusions are obvious to
                  the naked eye with Asscher Cut Diamonds, it is important to
                  get one that is flawless or as close to flawless as possible.
                </p>
                <h5>Brilliant Cut Diamonds</h5>
                <p>
                  The Round Diamond, or Brilliant Cut Diamond, is by far the
                  most popular shape for diamond engagement rings. It is
                  cone-shaped to maximize light return through the top of the
                  diamond. It is cut to have 58 facets: 33 on the crown and 25
                  on the pavilion. The relationship between the angle of the
                  crown (above the girdle) and the pavilion (below the girdle)
                  is complementary. A steep crown angle is complemented by a
                  shallower pavilion angle, and vice versa.
                </p>
                <h5>Cushion Cut Diamonds</h5>
                <p>
                  The Cushion Cut Diamond is an antique cut that has a classic,
                  romantic appeal. It is considered a cross between the Old Mine
                  Cut, which was popular in the late 19th and early 20th
                  centuries, and a modern Oval-Cut Diamond. The Old Mine Cut
                  featured large facets and rounded corners, since the cutting
                  was all done by hand at the time. They were designed to catch
                  the beauty of candlelight. The Cushion-Cut Diamond contains 58
                  facets.
                </p>
                <h5>Emerald Cut Diamonds</h5>
                <p>
                  The Emerald-Cut Diamond is a very popular style known for its
                  beauty and precision. While it lacks the brilliance of
                  diamonds cut with triangular and kite-shaped facets, it more
                  than makes up for it in its extreme clarity – it’s like
                  looking into glacier-pure ice. The Emerald-Cut diamond is
                  named so because this style of cut was originally used only on
                  emeralds. It is called a step-cut, which is the cut most
                  commonly used on square or rectangular diamonds.
                </p>
                <h5>Heart Diamonds</h5>
                <p>
                  The Heart Shaped Diamond has a cleft at the top and exhibits
                  superior brilliance. It is among the most romantic of the
                  diamond shapes. When selecting a heart shaped diamond,
                  symmetry is essential, as the two halves of the heart must be
                  identical. The split between the two lobes should be obvious
                  and sharp, and the wings should have a round shape. Generally,
                  heart shapes diamonds of less than .50 carats are not a good
                  choice. As opposed to other diamond shapes, they appear
                  smaller, especially after set in prongs. Bezel and three prong
                  settings are best for small heart shaped diamonds.
                </p>
                <h5>Marquise Diamonds</h5>
                <p>
                  The Marquise-Cut Diamond is a boat-shaped brilliant stone that
                  is considered to be a "classic" shape for diamond engagement
                  rings. As with all 'fancy cut' diamonds, color and clarity are
                  the two most important qualities in this particular style of
                  cut. The Marquise-Cut Diamond uses a cutting process similar
                  to that of a Round Brilliant Diamond, but the diamond cutter
                  maximizes the carat weight of the gem by elongating it into
                  its distinctive ''boat-shape''. This way, they can eliminate
                  all inclusions while maintaining as much of the unblemished
                  stone as possible. However, because of the elongated shape,
                  color and clarity imperfections are more obvious than they are
                  in a traditional Round Brilliant Diamonds.
                </p>
                <h5>Oval Diamonds</h5>
                <p>
                  The Oval Cut Diamond is a modified version of the most popular
                  cut, the Round Brilliant. It is the perfect choice for buyers
                  who are looking for characteristics similar to the Round
                  "Ideal" Cut, but would like something in a shape that is more
                  unusual. Oval Cut diamonds also create the optical illusion of
                  length and serve to elegantly elongate fingers.
                </p>
                <h5>Pear Diamonds</h5>
                <p>
                  The Pear Shaped Diamond combines the tradition and brilliance
                  of a round cut with a less common shape to create an unusual
                  diamond that can still make light 'dance' as it does in the
                  traditional Round Brilliant Cut. It is probably the most
                  subjective diamond shape, as its size and proportions are
                  really a matter of taste. The diamond usually contains 58
                  facets, allowing for light to pass through it much the same
                  way as in a Round, but makes more of an impression because of
                  its much less common shape.
                </p>
                <h5>Princess Cut Diamonds</h5>
                <p>
                  The Princess cut diamonds can make the perfect engagement
                  rings since they are very clear. Their exquisite shape makes
                  them an exotic treasure, as they are designed for getting top
                  brilliance from their square cut. When purchasing a Princess
                  Cut diamond, make sure that the setting for your ring protects
                  the four pointed corners. The Princess Cut diamond allows more
                  acceptably for flaws.
                </p>
                <h5>Radiant Cut Diamonds</h5>
                <p>
                  The Radiant Cut Diamond combines the more stylish square or
                  rectangular shape with the brilliance of the more traditional
                  Round Cut. It combines two diamond cutting styles-the Round
                  Cut style and the Emerald Cut style, to create a
                  non-traditional, yet still brilliant, diamond. This cut,
                  created in 1977 by Henry Grossbard, was designed to maintain
                  the beauty of each different type of diamond, while still
                  creating something altogether different from anything
                  available at the time.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
