import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import EngagementRingsSidebar from './EngagementRingsSidebar';

export default function Manufacturing() {
  return (
    <main>
      <section className="engagement_ring_wrap pb100 pb50-md pb80-lg">
        <Container>
          <h3 className="mb30 mb15-lg">Engagement Rings</h3>
          <Row>
            <Col xxl={2} md={3}>
              <EngagementRingsSidebar />
            </Col>
            <Col xxl={10} md={9}>
              <div className="diamond_detial_box">
                <h4 className="text_primary">Ring Manufacturing</h4>
                <h5>MODEL MAKING</h5>
                <p>
                  Jewelry manufacturing begins with the model. There are 2 main
                  ways to build a model.
                </p>
                <p>By Hand</p>
                <p>
                  Skilled craftsmen either carve a design out of wax, or craft
                  different elements of metal together to create a master model.
                </p>
                <p>By Computer (CAD)</p>
                <p>
                  Computer designers utilize special programs to build images
                  that create the tiniest details.
                </p>
                <p>CAM</p>
                <p>
                  Computer designers utilize special programs to build images
                  that create the tiniest details.
                </p>
                <h5>MOLD MAKING AND CASTING</h5>
                <p>
                  Once you have a model, a mold is made. A mold enables you to
                  duplicate the model as many times as you would like in any
                  metal. Hot wax under pressure is injected into the mold and
                  removed when cooled, which serves as a casting model.
                </p>
                <p>
                  Waxes are grouped together on a wax tree with other styles to
                  be casted in the same metal and color.
                </p>
                <p>
                  The wax tree goes into a form, where plaster is poured into
                  it. The form is baked overnight and the wax is melted away.
                  This leaves an empty cavity of the rings.
                </p>
                <p>
                  Metal is heated to extreme temperatures and transformed to
                  liquid. The metal is vacuumed into the plaster form with the
                  now empty cavity of rings.
                </p>
                <h5>JEWELRY MAKING</h5>
                <p>
                  When a ring style is ordered, different metal components are
                  ordered to the specifications of the desired ring. Those
                  components are pieced together and cut to size. We either
                  solder or laser the metal to weld it to accommodate the proper
                  center stone and finger size. Since platinum requires such
                  high heat, it is always welded by laser.
                </p>
                <p>
                  Next, the rings go through a series of polishing stages to
                  prepare them for stone setting. Diamonds and gem stones are
                  picked to the specifications of the style, accurate to the
                  .01mm. Color, clarity, and cut of each accenting diamond or
                  gem stone is double checked.
                </p>
                <p>
                  Using special drill heads in the actual shape of diamonds,
                  bearings are cut in the metal. Each stone is set into its
                  bearing and secured by the surrounding metal. There are
                  several different methods to securing stones to jewelry.
                </p>
                <h5>POLISHING AND FINISHING</h5>
                <p>
                  Once the ring is assembled and stones are set, it's time to
                  finish the piece.
                </p>
                <p>
                  Using different sized and shaped buffs and polishing brushes,
                  we are able to access every part of the jewelry - from inside
                  to underneath the gallery.
                </p>
                <p>
                  The final polishing step is called lapping. Lapping ensures
                  the ring have a smooth, high quality finish.
                </p>
                <p>
                  Since white gold is not pure white, it requires plating. We
                  plate our jewelry by attaching electrodes, then dipping in
                  rhodium solution. Rhodium is a pure white metal.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
