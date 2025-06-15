import React from 'react';
import UserImg from '../../Assets/Images/user.jpg';
import Camera from '../../Assets/Images/camera.svg';
import { Link } from 'react-router-dom';

export default function AccountSidebar() {
  return (
    <div className="sidebar_wrapper">
      <div className="user_img">
        <img src={UserImg} alt="" />
        <div className="change_img_button">
          <input type="file" id="uploadImg" />
          <label htmlFor="uploadImg">
            <img src={Camera} alt="" />
          </label>
        </div>
      </div>
      <ul>
        <li
          className={window.location.pathname === '/my-account' ? 'active' : ''}
        >
          <Link to="/my-account">My Accounts</Link>
        </li>
        <li
          className={window.location.pathname === '/my-orders' ? 'active' : ''}
        >
          <Link to="/my-orders">My Orders</Link>
        </li>
        <li
          className={
            window.location.pathname === '/my-hold-list' ? 'active' : ''
          }
        >
          <Link to="/my-hold-list">My Hold List</Link>
        </li>
        <li
          className={
            window.location.pathname === '/tracker-my-order' ? 'active' : ''
          }
        >
          <Link to="/tracker-my-order">Track My Order</Link>
        </li>
        <li
          className={
            window.location.pathname === '/purchase-history' ? 'active' : ''
          }
        >
          <Link to="/purchase-history">Purchase History</Link>
        </li>
      </ul>
    </div>
  );
}
