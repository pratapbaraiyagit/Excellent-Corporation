import React from 'react';
import { Container } from 'react-bootstrap';
import JewelleryList from '../Jewellery/JewelleryList';
import CustomizeRingSteps from './CustomizeRingSteps';
import Solitaire from '../../Assets/Images/solitaire.svg';
import Halo from '../../Assets/Images/Halo.svg';
import Pave from '../../Assets/Images/Pave.svg';
import SideStones from '../../Assets/Images/SideStones.svg';

export default function ChooseYourSetting() {
  return (
    <main>
      <section className="customize_ring_steps pt20 pb50 pt0-md pb30-sm">
        <CustomizeRingSteps />
      </section>
      <section className="engagement_ring_setting">
        <Container>
          <h5 className="text-center mb25">Engagement Rings Settings</h5>
          <ul>
            <li>
              <div className="ring_setting_radio">
                <input type="radio" id="Solitaire" name="ring_setting" />
                <label htmlFor="Solitaire">
                  <img src={Solitaire} alt="" />
                  Solitaire
                </label>
              </div>
            </li>
            <li>
              <div className="ring_setting_radio">
                <input type="radio" id="Halo" name="ring_setting" />
                <label htmlFor="Halo">
                  <img src={Halo} alt="" />
                  Halo
                </label>
              </div>
            </li>
            <li>
              <div className="ring_setting_radio">
                <input type="radio" id="Pave" name="ring_setting" />
                <label htmlFor="Pave">
                  <img src={Pave} alt="" />
                  Pave
                </label>
              </div>
            </li>
            <li>
              <div className="ring_setting_radio">
                <input type="radio" id="SideStones" name="ring_setting" />
                <label htmlFor="SideStones">
                  <img src={SideStones} alt="" />
                  Side Stones
                </label>
              </div>
            </li>
          </ul>
        </Container>
      </section>
      <section className="jewellery_listing_Wrapper pt50 pb100 pt30-xs pb80-lg pb50-md">
        <Container>
          <JewelleryList jewelType="choose_setting" />
        </Container>
      </section>
    </main>
  );
}
