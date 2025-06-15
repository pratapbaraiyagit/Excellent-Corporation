import React, { Suspense, useEffect } from 'react';
import { createPopper } from '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'react-phone-input-2/lib/style.css';
import 'react-international-phone/style.css';

import 'react-range-slider-input/dist/style.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '../Assets/css/Style.scss';
import Footer from '../Components/Global/Footer';
import Header from '../Components/Global/Header';
import Loader from '../Components/Global/Loader';
import PrivateRouter from './PrivateRouter';
const Login = React.lazy(() => import('./../Components/Login'));
const Signup = React.lazy(() => import('./../Components/Signup'));
const Home = React.lazy(() => import('./../Components/Home'));
const Diamond = React.lazy(() => import('./../Components/Diamond/Diamond'));
const DiamondDetail = React.lazy(() =>
  import('./../Components/Diamond/DiamondDetail'),
);
const Compare = React.lazy(() => import('./../Components/Diamond/Compare'));
const ShoppingCart = React.lazy(() => import('./../Components/ShoppingCart'));
const Jewellery = React.lazy(() =>
  import('./../Components/Jewellery/Jewellery'),
);
const JewelleryDetail = React.lazy(() =>
  import('./../Components/Jewellery/JewelleryDetail'),
);
const ChooseDiamond = React.lazy(() =>
  import('./../Components/CustomizeRing/ChooseDiamond'),
);
const ChooseDiamondDetail = React.lazy(() =>
  import('../Components/CustomizeRing/ChooseDiamondDetail'),
);
const ChooseYourSetting = React.lazy(() =>
  import('../Components/CustomizeRing/ChooseYourSetting'),
);
const ChooseYourSettingDetail = React.lazy(() =>
  import('../Components/CustomizeRing/ChooseYourSettingDetail'),
);
const ViewCompleted = React.lazy(() =>
  import('../Components/CustomizeRing/ViewCompleted'),
);
const MyAccont = React.lazy(() => import('../Components/Account/MyAccont'));
const MyOrders = React.lazy(() => import('../Components/Account/MyOrders'));
const TrackMyOrder = React.lazy(() =>
  import('../Components/Account/TrackMyOrder'),
);
const PurchaseHistory = React.lazy(() =>
  import('../Components/Account/PurchaseHistory'),
);
const MyHoldList = React.lazy(() => import('../Components/Account/MyHoldList'));
const ContactUs = React.lazy(() => import('./../Components/ContactUs'));
const Education = React.lazy(() =>
  import('./../Components/Education/Education'),
);
const FourCS = React.lazy(() =>
  import('../Components/Education/LooseDiamond/FourCS'),
);
const Shapes = React.lazy(() =>
  import('../Components/Education/LooseDiamond/Shapes'),
);
const Anatomy = React.lazy(() =>
  import('../Components/Education/LooseDiamond/Anatomy'),
);
const IdealCut = React.lazy(() =>
  import('../Components/Education/LooseDiamond/IdealCut'),
);
const FancyColor = React.lazy(() =>
  import('../Components/Education/LooseDiamond/FancyColor'),
);
const ChooseADiamond = React.lazy(() =>
  import('../Components/Education/LooseDiamond/ChooseADiamond'),
);
const DiamondCare = React.lazy(() =>
  import('../Components/Education/LooseDiamond/DiamondCare'),
);
const RingTypes = React.lazy(() =>
  import('../Components/Education/EngagementRings/RingTypes'),
);
const SettingTypes = React.lazy(() =>
  import('../Components/Education/EngagementRings/SettingTypes'),
);
const RingSizing = React.lazy(() =>
  import('../Components/Education/EngagementRings/RingSizing'),
);
const Metals = React.lazy(() =>
  import('../Components/Education/EngagementRings/Metals'),
);
const Budget = React.lazy(() =>
  import('../Components/Education/EngagementRings/Budget'),
);
const ChoosePerfectRing = React.lazy(() =>
  import('../Components/Education/EngagementRings/ChoosePerfectRing'),
);
const Manufacturing = React.lazy(() =>
  import('../Components/Education/EngagementRings/Manufacturing'),
);
const Sapphires = React.lazy(() =>
  import('../Components/Education/NaturalGemstone/Sapphires'),
);
const GreenEmeralds = React.lazy(() =>
  import('../Components/Education/NaturalGemstone/GreenEmeralds'),
);
const RedRubies = React.lazy(() =>
  import('../Components/Education/NaturalGemstone/RedRubies'),
);
const GemstoneAntomy = React.lazy(() =>
  import('../Components/Education/NaturalGemstone/GemstoneAntomy'),
);
const NaturalGemstoneStyles = React.lazy(() =>
  import('../Components/Education/WeddingRings/NaturalGemstoneStyles'),
);
const AlternativeMetals = React.lazy(() =>
  import('../Components/Education/WeddingRings/AlternativeMetals'),
);
const FindingPerfectRing = React.lazy(() =>
  import('../Components/Education/WeddingRings/FindingPerfectRing'),
);
const DiamondStuds = React.lazy(() =>
  import('../Components/Education/FineJewellery/DiamondStuds'),
);
const DiamondPendants = React.lazy(() =>
  import('../Components/Education/FineJewellery/DiamondPendants'),
);
const Pearls = React.lazy(() =>
  import('../Components/Education/FineJewellery/Pearls'),
);
const About = React.lazy(() => import('./../Components/About'));

export default function Index() {
  const popcorn = document.querySelector('#popcorn');
  const tooltip = document.querySelector('#tooltip');
  createPopper(popcorn, tooltip, {
    placement: 'top',
  });
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/diamond"
            element={
              <PrivateRouter>
                <Diamond />
              </PrivateRouter>
            }
          />
          <Route path="/diamond-detail" element={<DiamondDetail />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/jewellery-detail" element={<JewelleryDetail />} />
          <Route path="/choose-diamond" element={<ChooseDiamond />} />
          <Route
            path="/choose-diamond-detail"
            element={<ChooseDiamondDetail />}
          />
          <Route path="/choose-your-setting" element={<ChooseYourSetting />} />
          <Route
            path="/choose-your-setting-detail"
            element={<ChooseYourSettingDetail />}
          />
          <Route path="/view-completed" element={<ViewCompleted />} />
          <Route
            path="/my-account"
            element={
              <PrivateRouter>
                <MyAccont />
              </PrivateRouter>
            }
          />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/tracker-my-order" element={<TrackMyOrder />} />
          <Route path="/purchase-history" element={<PurchaseHistory />} />
          <Route path="/my-hold-list" element={<MyHoldList />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/education" element={<Education />} />
          <Route path="/education/4cs" element={<FourCS />} />
          <Route path="/education/shapes" element={<Shapes />} />
          <Route path="/education/anatomy" element={<Anatomy />} />
          <Route path="/education/ideal-cut" element={<IdealCut />} />
          <Route path="/education/fancy-color" element={<FancyColor />} />
          <Route
            path="/education/choose-a-diamond"
            element={<ChooseADiamond />}
          />
          <Route path="/education/diamond-care" element={<DiamondCare />} />
          <Route path="/education/ring-types" element={<RingTypes />} />
          <Route path="/education/setting-types" element={<SettingTypes />} />
          <Route path="/education/ring-sizing" element={<RingSizing />} />
          <Route path="/education/metals" element={<Metals />} />
          <Route path="/education/budget" element={<Budget />} />
          <Route
            path="/education/choose-the-perfect-ring"
            element={<ChoosePerfectRing />}
          />
          <Route path="/education/manufacturing" element={<Manufacturing />} />
          <Route path="/education/sapphires" element={<Sapphires />} />
          <Route path="/education/green-emeralds" element={<GreenEmeralds />} />
          <Route path="/education/red-rubies" element={<RedRubies />} />
          <Route
            path="/education/gemstone-antomy"
            element={<GemstoneAntomy />}
          />
          <Route
            path="/education/natural-gemstone-styles"
            element={<NaturalGemstoneStyles />}
          />
          <Route
            path="/education/alternative-metals"
            element={<AlternativeMetals />}
          />
          <Route
            path="/education/finding-perfect-ring"
            element={<FindingPerfectRing />}
          />
          <Route path="/education/diamond-studs" element={<DiamondStuds />} />
          <Route
            path="/education/diamond-pendants"
            element={<DiamondPendants />}
          />
          <Route path="/education/pearls" element={<Pearls />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}
