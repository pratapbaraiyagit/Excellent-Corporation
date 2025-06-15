import React from 'react';
import { Link } from 'react-router-dom';

export default function FineJewellerySidebar() {
  return (
    <div className="sidebar_wrapper education_sidebar_wrapper">
      <ul>
        <li
          className={
            window.location.pathname === '/education/diamond-studs'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/diamond-studs">Diamond Studs</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/diamond-pendants'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/diamond-pendants">Diamond Pendants</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/pearls' ? 'active' : ''
          }
        >
          <Link to="/education/pearls">Pearls</Link>
        </li>
      </ul>
    </div>
  );
}
