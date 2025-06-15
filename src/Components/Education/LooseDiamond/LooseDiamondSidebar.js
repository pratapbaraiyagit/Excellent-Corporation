import React from 'react';
import { Link } from 'react-router-dom';

export default function LooseDiamondSidebar() {
  return (
    <div className="sidebar_wrapper education_sidebar_wrapper">
      <ul>
        <li
          className={
            window.location.pathname === '/education/4cs' ? 'active' : ''
          }
        >
          <Link to="/education/4cs">4CS</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/shapes' ? 'active' : ''
          }
        >
          <Link to="/education/shapes">Shapes</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/anatomy' ? 'active' : ''
          }
        >
          <Link to="/education/anatomy">Anatomy</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/ideal-cut' ? 'active' : ''
          }
        >
          <Link to="/education/ideal-cut">Ideal Cut</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/fancy-color'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/fancy-color">Fancy Color</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/choose-a-diamond'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/choose-a-diamond">Choose a Diamond</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/diamond-care'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/diamond-care">Diamond Care</Link>
        </li>
      </ul>
    </div>
  );
}
