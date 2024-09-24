import React from 'react';
import './styledPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Main-Logo.png';
import User from '../assets/student.svg';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EditIcon from '@mui/icons-material/Edit'; // Added this import
import { Outlet, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Footer from './Footer';

function Home() {
  const [isLoggetIn, setIsLoggedIn] = useState(false);
  const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false); // State for handling course menu
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userData'));
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const toggleMenu = () => {
    let subMenu = window.document.getElementById('subMenu');
    subMenu.classList.toggle('open-menu');
    setIsLoggedIn(userData && (userData.status === 200 || userData.status === 201) ? true : false);
  };

  const toggleCourseMenu = () => {
    setIsCourseMenuOpen(!isCourseMenuOpen);
  };

  const LogoutHandler = (e) => {
    e.stopPropagation();
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    navigate('/form');
  };

  return (
    <>
      <header className="hero">
        <img src={Logo} alt="Logo" className="home-logo" />

        <nav className="navbar" id="navcontainer" ref={navRef}>
          <NavLink to="/" className="page-link">
            Home
          </NavLink>
          {/* Course section with hoverable dropdown */}
          <div
            className="course-menu-container"
            onMouseEnter={toggleCourseMenu}
            onMouseLeave={toggleCourseMenu}
          >
            <NavLink to="learn" className="page-link">
              Learn
              <div className="down-arrow-container">
                <span className="down-arrow"><FontAwesomeIcon icon={faAngleDown}/></span> 
              </div>
            </NavLink>
            {isCourseMenuOpen && (
              <div className="dropdown-menu">
                <NavLink to="/course/pre-basic" className="dropdown-link">
                  Pre-Basic Level
                </NavLink>
                <NavLink to="/course/basic" className="dropdown-link">
                  Basic Level
                </NavLink>
                <NavLink to="/course/intermediate" className="dropdown-link">
                  Intermediate Level
                </NavLink>
                <NavLink to="/course/advanced" className="dropdown-link">
                  Advanced Level
                </NavLink>
                <NavLink to="/course/kids" className="dropdown-link">
                  For Kids
                </NavLink>
              </div>
            )}
          </div>
          <NavLink to="course" className="page-link">
            Course
          </NavLink>
          <NavLink to="service" className="page-link">
            Service
          </NavLink>
          <NavLink to="contact" className="page-link">
            Contact
          </NavLink>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>

          <img src={User} alt="Logo" className="home-user" onClick={toggleMenu} />
          {isLoggetIn ? (
            <div className="sub-menu-wrap" id="subMenu">
              <div className="sub-menu">
                <div className="user-info">
                  <img src={User} alt="user" className="home-user" />
                  <h2>{userData?.data?.name}</h2>
                </div>
                <hr />

                <div className="sub-menu-link">
                  <EditIcon />
                  <p>Edit Profile</p>
                  <span>{' > '}</span>
                </div>

                <div className="sub-menu-link">
                  <HelpOutlineIcon />
                  <p>Edit Help & Support</p>
                  <span>{' > '}</span>
                </div>

                <div className="sub-menu-link" onClick={LogoutHandler}>
                  <LogoutIcon />
                  <p>Logout</p>
                  <span>{' > '}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="sub-menu-wrap" id="subMenu">
              <div className="sub-menu">
                <hr />
                <div className="sub-menu-link" onClick={() => navigate('/form')}>
                  <LoginIcon />
                  <p>Login</p>
                  <span>{' > '}</span>
                </div>
              </div>
            </div>
          )}
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <div className="Outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Home;
