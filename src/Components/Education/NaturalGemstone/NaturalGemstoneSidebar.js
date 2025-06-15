import React from 'react';
import { Link } from 'react-router-dom';

export default function NaturalGemstoneSidebar() {
  return (
    <div className="sidebar_wrapper education_sidebar_wrapper">
      <ul>
        <li
          className={
            window.location.pathname === '/education/sapphires' ? 'active' : ''
          }
        >
          <Link to="/education/sapphires">Sapphires</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/green-emeralds'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/green-emeralds">Green Emeralds</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/red-rubies' ? 'active' : ''
          }
        >
          <Link to="/education/red-rubies">Red Rubies</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/gemstone-antomy'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/gemstone-antomy">Gemstone Antomy</Link>
        </li>
      </ul>
    </div>
  );
}
