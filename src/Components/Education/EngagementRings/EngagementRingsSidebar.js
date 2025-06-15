import React from 'react';
import { Link } from 'react-router-dom';

export default function EngagementRingsSidebar() {
  return (
    <div className="sidebar_wrapper education_sidebar_wrapper">
      <ul>
        <li
          className={
            window.location.pathname === '/education/ring-types' ? 'active' : ''
          }
        >
          <Link to="/education/ring-types">Ring Types</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/setting-types'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/setting-types">Setting Types</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/ring-sizing'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/ring-sizing">Ring Sizing</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/metals' ? 'active' : ''
          }
        >
          <Link to="/education/metals">Metals</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/budget' ? 'active' : ''
          }
        >
          <Link to="/education/budget">Budget</Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/choose-the-perfect-ring'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/choose-the-perfect-ring">
            Choose the perfect ring
          </Link>
        </li>
        <li
          className={
            window.location.pathname === '/education/manufacturing'
              ? 'active'
              : ''
          }
        >
          <Link to="/education/manufacturing">Manufacturing</Link>
        </li>
      </ul>
    </div>
  );
}
