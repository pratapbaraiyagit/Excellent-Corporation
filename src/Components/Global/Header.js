import React, { useEffect, useState } from 'react';
import { Button, Container, Dropdown, Form, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoDark from '../../Assets/Images/logo-dark.svg';
import LogoLight from '../../Assets/Images/logo-white.svg';
import UserImg from '../../Assets/Images/user.jpg';
import { logout } from '../Redux/reducers/auth.slice';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData, isLogin } = useSelector(({ auth }) => auth);
  const [navbarHideShow, setNavbarHideShow] = useState(true);
  const [dropdownHide, setDropdownHide] = useState(false);
  const location = useLocation();
  useEffect(() => {
    let scrollpos = window.scrollY;
    const header = document.querySelector('header');
    const header_height = header.offsetHeight;

    const add_class_on_scroll = () => header.classList.add('fixed');
    const remove_class_on_scroll = () => header.classList.remove('fixed');

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;

      if (scrollpos >= header_height) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
      if (scrollpos >= 400) {
        header.classList.add('fixed_header');
      } else {
        header.classList.remove('fixed_header');
      }
    });
  }, []);

  const educationUrl = [
    '/education',
    '/education/4cs',
    '/education/shapes',
    '/education/anatomy',
    '/education/ideal-cut',
    '/education/fancy-color',
    '/education/choose-a-diamond',
    '/education/diamond-care',
    '/education/ring-types',
    '/education/setting-types',
    '/education/ring-sizing',
    '/education/metals',
    '/education/budget',
    '/education/choose-the-perfect-ring',
    '/education/manufacturing',
    '/education/sapphires',
    '/education/green-emeralds',
    '/education/red-rubies',
    '/education/gemstone-antomy',
    '/education/natural-gemstone-styles',
    '/education/alternative-metals',
    '/education/finding-perfect-ring',
    '/education/diamond-studs',
    '/education/diamond-pendants',
    '/education/pearls',
  ];
  return (
    <header
      className={
        location.pathname === '/' ||
        location.pathname === '/jewellery' ||
        location.pathname === '/about-us' ||
        location.pathname === '/education'
          ? 'header_white'
          : ''
      }
    >
      <Navbar expand="xl">
        <Container>
          <Link to="/" className="navbar-brand">
            <img src={LogoDark} alt="" className="logo_dark" />
            <img src={LogoLight} alt="" className="logo_white" />
          </Link>
          <Button
            variant="link"
            className={
              navbarHideShow === true
                ? 'navbar-toggler order-last collapsed'
                : 'navbar-toggler order-last'
            }
            onClick={() => setNavbarHideShow(!navbarHideShow)}
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar
            id="navbarScroll"
            className={navbarHideShow === true ? 'show' : ''}
          >
            <ul>
              <li>
                <Link
                  to="/"
                  className={location.pathname === '/' ? 'active' : ''}
                  onClick={() => setNavbarHideShow(!navbarHideShow)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/diamond"
                  className={
                    location.pathname === '/diamond' ||
                    location.pathname === '/diamond-detail'
                      ? 'active'
                      : ''
                  }
                  onClick={() => setNavbarHideShow(!navbarHideShow)}
                >
                  Diamonds
                </Link>
              </li>
              <li>
                <Link
                  to="/jewellery"
                  className={
                    location.pathname === '/jewellery' ||
                    location.pathname === '/jewellery-detail'
                      ? 'active'
                      : ''
                  }
                  onClick={() => setNavbarHideShow(!navbarHideShow)}
                >
                  Jewellery
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setNavbarHideShow(!navbarHideShow)}>
                  Color stones
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setNavbarHideShow(!navbarHideShow)}>
                  Parcel goods
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className={
                    location.pathname === '/contact-us' ? 'active' : ''
                  }
                  onClick={() => setNavbarHideShow(!navbarHideShow)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className={
                    educationUrl.includes(location.pathname) ? 'active' : ''
                  }
                  onClick={() => setNavbarHideShow(!navbarHideShow)}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setNavbarHideShow(!navbarHideShow)}>
                  Events
                </Link>
              </li>
            </ul>
          </Navbar>
          <div className="right_header_wrap d-flex align-items-center">
            <Form>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>
            <ul className="button_right_wrapper ml20">
              {!isLogin ? (
                <li>
                  <Button
                    variant="primary"
                    className="rounded-pill btn_shadow"
                    size="sm"
                    onClick={() => navigate('/login')}
                  >
                    Sign In
                  </Button>
                </li>
              ) : (
                <li>
                  <Dropdown className="user_dropdown">
                    <Dropdown.Toggle
                      variant="link"
                      id="dropdown-basic"
                      onClick={() => setDropdownHide(!dropdownHide)}
                    >
                      <img src={UserImg} alt="" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu show={dropdownHide === false ? false : true}>
                      <Link
                        className="dropdown-item"
                        to="/my-account"
                        onClick={() => setDropdownHide(!dropdownHide)}
                      >
                        My Account
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/login"
                        onClick={() => {
                          dispatch(logout({ UserID: userData.UserID }));
                          setDropdownHide(!dropdownHide);
                        }}
                      >
                        Logout
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              )}
            </ul>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
