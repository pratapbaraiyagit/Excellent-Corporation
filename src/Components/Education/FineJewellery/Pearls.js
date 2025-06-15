import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FineJewellerySidebar from './FineJewellerySidebar';

export default function Pearls() {
  return (
    <main>
      <section className="natural_gemstone_wrap pb100 pb50-md pb80-lg">
        <Container>
          <h3 className="mb30 mb15-lg">Wedding Rings</h3>
          <Row>
            <Col xxl={2} md={3}>
              <FineJewellerySidebar />
            </Col>
            <Col xxl={10} md={9}>
              <div className="diamond_detial_box">
                <h4 className="text_primary">Pearls</h4>
                <p>
                  Pearls are naturally created by a marine-based organism called
                  a mollusk (otherwise known as an oyster). Natural pearls are
                  extremely rare and hard to find. This is why many of the
                  pearls that are available to consumers today are cultured
                  pearls. In order to produce a cultured pearl one must
                  introduce a grain of sand or a bead within an oyster or a
                  mussel. This will irritate the mollusk, which instigates a
                  response wherein the grain of sand or bead is coated with
                  smooth layers of a substance called nacre. This crystallized
                  element aids in forming the shell that results in giving the
                  pearl its unique coloration and splendor. In order to produce
                  a cultured pearl one must introduce a grain of sand or a bead
                  within an oyster or a mussel. This will irritate the mollusk,
                  which instigates a response wherein the grain of sand or bead
                  is coated with smooth layers of a substance called nacre. This
                  crystallized element aids in forming the shell that results in
                  giving the pearl its unique coloration and splendor.
                </p>
                <p>
                  Cultured whole pearls are grouped by origin. These categories
                  are comprised of four areas:
                </p>
                <ul>
                  <li>Species of mollusks</li>
                  <li>Geographical location</li>
                  <li>Salt water</li>
                  <li>Species of mollusks</li>
                </ul>
                <p>
                  Akoya pearls originate mainly in Japan and China. The oyster
                  that produces Akoyas has the common name of Pinctada Fucata.
                  These pearls range from two to nine millimeters in diameter,
                  averaging six to seven millimeters. They also display a white
                  appearance with a rose hue. The highest percentage of
                  harvested Akoyas is spherical in shape. Due to the consistent
                  size and shape of the Akoya, we often find that this quality
                  of pearl brings forth perfectly matched strands.
                </p>
                <p>
                  The South Sea cultured pearl is known to Australia, Indonesia,
                  and also the Philippines. The common name for the oyster in
                  these areas is Pinctada Maxima. There are two kinds of
                  Pinctada Maxima; gold-lipped and silver-lipped. While
                  appearing golden, silver, or pale with a satin finish look,
                  they are quite different from the reflective nature of the
                  Akoya. In Australia, South Sea pearls are found in the wild
                  and can range from ten to fifteen millimeters in diameter,
                  averaging thirteen millimeters. Conversely, those found in
                  Indonesia and the Philippines are hatchery-bred and fall
                  roughly two millimeters smaller in size. The South Sea quality
                  tends to be more expensive than that of the Akoya, so grouping
                  them together in large matched strands is less practical.
                  South Sea pearls are more often set into necklaces, rings, and
                  other jewelry designs that require fewer pearls.
                </p>
                <p>
                  A Tahitian cultured pearl comes from the French Polynesian
                  lagoons. Another well-known source of these pearls is the Cook
                  Islands, an area made popular by the television series
                  Survivor. The common name of the oyster that creates the
                  Tahitian is Pinctada Margaritifera (also known as the
                  black-lipped oyster). Producing a wide array of colors such as
                  peacock, aubergine, and pistachio, these pearls range from
                  eight to fourteen millimeters in diameter, averaging nine and
                  a half millimeters. Mixing and matching large Tahitians with
                  the unusual color schemes that are offered can create jewelry
                  that will demand high prices. However, much like the South Sea
                  cultured pearls, the Tahitian quality is more affordable when
                  sold in jewelry that accentuates singles, pairs, or sets.
                </p>
                <p>
                  Similar to the Akoya, the Freshwater cultured pearl is also
                  native to China. However, this pearl does not derive from an
                  oyster and is smaller and less spherical in shape. The color
                  of these pearls can be unique because their color is based
                  upon natural attributes of the mussel as well as the fact that
                  it can be treated or irradiated to achieve a more desired
                  color. The mollusks that produce these pearls are called
                  mussels. The main producer of the Freshwater pearl is the
                  Hyriopsis Cumingi. Small crops of these pearls are produced in
                  Japan, but the majority of the world’s supply of the
                  Freshwater quality comes from China. China can generate up to
                  fifteen times the amount of these pearls when compared to all
                  of the saltwater and freshwater producers combined mainly
                  because a mussel can be harvested more than once, which
                  results in several pearls at one time. Each of those pearls
                  range between four to eleven millimeters in diameter in size.
                  Seeing that there is such a high quantity of this quality it
                  makes the Freshwater a much more affordable option when
                  compared to the other cultured pearls.
                </p>
                <h5>Color</h5>
                <p>
                  Available in a rainbow of colors; pinkish, which is often
                  called rose, silvery white, greenish white, creamy, golden
                  overtones, gray, cognac and black. Color enhancement is
                  considered the norm for both colored and white base pearls.
                </p>
                <h5>Size</h5>
                <p>
                  The diameter of a pearl measured in millimeters. Generally,
                  the larger the pearl, the rarer and more valuable it is to
                  find.
                </p>
                <h5>Shape</h5>
                <p>
                  The more spherical and symmetrical the pearl the more valuable
                  it will be. Baroque pearls, which are any unusually shaped and
                  asymmetrical pearl, can be very attractive and are usually
                  less expensive than round pearls.
                </p>
                <h5>Surface</h5>
                <p>
                  The fewer the spots, discolorations, cracks or blemishes, the
                  more expensive the pearl.
                </p>
                <h5>Luster</h5>
                <p>
                  Luster (Pearl Luster) is the glow and brilliance of the pearl
                  to the human eye. The longer the pearl is left in the oyster
                  to form, the thicker the layer of nacre surrounding the pearl,
                  the higher the luster.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
