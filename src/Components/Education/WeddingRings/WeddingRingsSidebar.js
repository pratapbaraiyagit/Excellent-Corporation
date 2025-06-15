import React from 'react';
import { Link } from 'react-router-dom';

export default function WeddingRingsSidebar() {
  return (
    <div className="sidebar_wrapper education_sidebar_wrapper">
      <ul>
        <li
          className={
            window.location.pathname === '/education/natural-gemstone-styles'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/natural-gemstone-styles">
            Natural Gemstone Styles
          </Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/alternative-metals'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/alternative-metals">Alternative Metals</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/finding-perfect-ring'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/finding-perfect-ring">Finding Perfect Ring</Link>
        </li>
      </ul>
    </div>
  );
}
