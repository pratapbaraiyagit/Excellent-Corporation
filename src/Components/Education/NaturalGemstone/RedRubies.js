import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NaturalGemstoneSidebar from './NaturalGemstoneSidebar';

export default function RedRubies() {
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
                <h4 className="text_primary">Red Rubies</h4>
                <p>
                  While rubies are universally accepted as red corundum, there
                  are differing opinions on what constitutes a ruby versus a
                  pink sapphire. Rubies receive their red color from high levels
                  of the trace element chromium just as a pink sapphire has
                  traces of chromium. It is the saturation that defines the
                  category in which the corundum falls. In some Asian markets,
                  rubies with traces of pink are acceptable while in the
                  European and North American markets, red and pink corundum is
                  often delegated into two separate color categories.
                </p>
                <p>
                  Color is by far, the most important to consider when
                  evaluating a Ruby, with transparency being the secondary
                  concern. Objective color determination has been difficult to
                  achieve for rubies. Ancient trade terms such as “pigeon’s
                  blood,” “pomegranate,” “saffron,” and “China rose” have long
                  been used to describe the color of a ruby. However, these
                  terms are not universally recognized and an objective system
                  for evaluating rubies did not exist until recently.
                </p>
                <p>
                  The lines between the color boundaries of pink and red are
                  often blurred. In the case of rubies, the ideal color is a
                  vivid, medium-dark red to slightly purplish red with a medium
                  to medium-dark tone and either strong or vivid saturation.
                  Many fine rubies from Myanmar have a slight purple secondary
                  color while Thai rubies have been said to exhibit a “garnet
                  red” color due to their dark tone. If the ruby can fluoresce,
                  that attribute can intensify the gemstone’s color while rutile
                  needles have the ability to reflect light and also heighten
                  the color.
                </p>
                <p>
                  A ruby’s unique ability to fluoresce is sometimes used in
                  determining its origin as well as proving that a ruby is
                  indeed a ruby. Burmese rubies, which are often formed in
                  marble, tend to have fluorescence while Thai and Cambodian
                  rubies, which form within basaltic, (iron-rich rocks) do not
                  fluoresce.
                </p>
                <p>
                  Like sapphires, rubies are not subject to the same clarity
                  expectations as diamonds. Natural rubies and sapphires are far
                  rarer and are not graded at 10x magnification. Rather, they
                  are graded and viewed on eye level; a high clarity ruby would
                  be considered "eye clean."
                </p>
                <p>
                  The most famous ruby sources are Myanmar (Burma) and Sri Lanka
                  (Ceylon). However, Vietnam and Thailand, in Afghanistan,
                  Africa, Cambodia, India, Kashmir, Laos, Nepal, Pakistan,
                  Tajikistan and the United States (North Carolina) are also
                  notable resources
                </p>
                <p>
                  Myanmar, formerly known as Burma, has been a key source of the
                  highest quality rubies for centuries. The illustrious Burmese
                  ruby will have the perfect combination of intense color, silk,
                  and strong fluorescence.
                </p>
                <p>
                  Rubies from Myanmar are mainly found in two locations: the
                  famous Mogôk Valley, and Möng Hsu. While exact dates are hard
                  to come by, it is believed that the Mogôk Valley has been a
                  source of rubies for almost a thousand years. The Möng Hsu
                  area was only recently developed in the 1990s. In 2008
                  Congress passed an act that banned the importation of Burmese
                  jade and ruby into the United States. Prices for Burmese
                  rubies are at a premium as the number of gemstone for sale is
                  limited to items imported before the act.
                </p>
                <p>
                  Sri Lanka has a long history with gemstone formations and
                  throughout history has been dubbed “Island of Gems.” Sri
                  Lankan rubies tend to be more brilliant, lighter in color
                  tones that contain pink or purple secondary colors, as well as
                  higher clarity than rubies from other locations. Other
                  characteristics include a strong fluorescence, color zoning,
                  and the presence of silk.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
