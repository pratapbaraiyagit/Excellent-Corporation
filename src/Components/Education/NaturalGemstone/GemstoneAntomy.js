import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NaturalGemstoneSidebar from './NaturalGemstoneSidebar';

export default function GemstoneAntomy() {
  return (
    <main>
      <section className="natural_gemstone_wrap pb100 pb50-md pb80-lg">
        <Container>
          <h3 className="mb30 mb15-lg">Natural Gemstone</h3>
          <Row>
            <Col xxl={2} md={3}>
              <NaturalGemstoneSidebar />
            </Col>
            <Col xxl={10} md={9}>
              <div className="diamond_detial_box">
                <h4 className="text_primary">Gemstone Anatomy</h4>
                <h5>Clarity</h5>
                <p>
                  In natural gemstones, clarity refers to the amount of internal
                  flaws (inclusions) or external flaws of each stone. Most
                  gemstones have some amount of inclusions, and finding a
                  flawless gemstone is rarer than finding a flawless diamond.
                  When natural gemstones are formed, the process within the
                  earth that creates them is what determines the number of flaws
                  a cut stone will have. Some gemstones, like the emerald, are
                  formed under violent circumstances, and, therefore, are almost
                  always included. Darker gemstones-like the blue topaz, purple
                  amethyst, and red garnet-can carry more inclusions without
                  lessening the value because the depth of their color masks
                  most flaws. Lighter gemstones will show internal inclusions
                  much more clearly. The diamond is the most obvious example,
                  although it is less common to find an internally flawless
                  emerald than an internally flawless diamond. Sapphires rarely
                  exhibit the high clarity of fine diamonds. Sapphires host many
                  different inclusions, and even the best sapphires are not
                  expected to be free of inclusions when viewed at 10x
                  magnification. In fact, sapphire inclusions vary with their
                  source or origin and treatment history.
                </p>
                <p>
                  Where clarity is concerned, colored gemstone are divided into
                  several classifications reflecting differences in the
                  geological conditions under which they are formed and how
                  those conditions affect the physical appearance of the
                  gemstone, with and without magnification. Colored gemstones
                  are basically divided into three categories by GIA for
                  purposes grading clarity; Type I, Type II and Type III.
                </p>
                <p>
                  Type I – Gemstone form under geological conditions in which
                  inclusions are not very noticeable and such gemstone are often
                  "eye-clean."
                </p>
                <p>
                  Type II – Gemstone form under geological conditions that are
                  more severe, resulting in the presence of inclusions that are
                  typically more noticeable. Sapphires fall into Type II
                  gemstone.
                </p>
                <p>
                  Type III – Gemstone form under the most violent geological
                  conditions, resulting in gemstone that typically show
                  inclusions, often to the unaided eye, and are rarely
                  "eye-clean."
                </p>
                <h5>Cut</h5>
                <p>
                  Colored gemstones come in all sorts of shapes and cuts that
                  are designed to enhance their natural beauty; the best cuts
                  enhance and reflect light in an even manner without any
                  darkness or windowing in the stone. There are no fixed rules
                  for cutting colored gemstones, and often the cutter makes a
                  choice based on the inclusions in the gemstone in order to
                  work best around any such flaws so as to minimize their
                  impact.
                </p>
                <p>
                  The facets on the top or crown of the gem have the function of
                  capturing light, while the facets on the bottom or pavilion
                  reflect light internally. This capturing and reflecting light
                  produces several different visual effects.
                </p>
                <h5>Polish</h5>
                <p>
                  Gemstones are polished to give a reflective finish, in order
                  to allow light to refract through the stone and reflect off
                  the surface. A variety of materials can be used to polish a
                  gemstone, including very fine diamond grades, metal oxides,
                  like aluminum oxide or ferric oxide, or felt, leather or wood.
                  A gemstone’s polish is largely connected to its sparkle.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
