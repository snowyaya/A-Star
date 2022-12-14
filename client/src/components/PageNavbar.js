import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PageNavbar.css";
import Dropdown from './Dropdown';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Home from "./Home";

const PageNavBar = (props) => {
  // const [navDivs, setNavDivs] = useState(true);  

  /* Dropdwon menu*/
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 1300) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1300) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div className="PageNavbar">
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "rgba(0,0,0,0.0)"}}>
        <Link to='/' className='navbar-logo font-link' onClick={closeMobileMenu} style={{fontSize:'28px'}}>
          STARDVISOR
          {/* <i class='fab fa-firstdraft' /> */}
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'} >
          <li className='nav-item'>
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/dashboard'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Dashboard
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link
              to='/recommendation'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Recommendation
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/funding'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Funding
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/vc'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              VC
            </Link>
          </li>

          <li className="nav-item">
          <Link
              to='/signup'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              SignUp
            </Link>
          </li>
        </ul>

        
      </nav>
      </div>
      
  );
};
export default PageNavBar;