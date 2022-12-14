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
  
  // useEffect(() => {
  //   const pageList = ["home", "dashboard", "recommendation", "funding", "VC"];

  //   let navbarDivs = pageList.map((page, i) => {
  //     if (props.active === page) {
  //       return (
  //         <a className="nav-item nav-link active" key={i} href={"/" + page} style={{fontSize: '35px', fontWeight: 'bold'}}>
  //           {page.charAt(0).toUpperCase() + page.substring(1, page.length)}
  //         </a>
  //       );
  //     } else {
  //       return (
  //         <a className="nav-item nav-link" key={i} href={"/" + page} style={{fontSize: '35px', fontWeight: 'bold'}}>
  //           {page.charAt(0).toUpperCase() + page.substring(1, page.length)}
  //         </a>
  //       );
  //     }
  //   });
  //   setNavDivs(navbarDivs);
  // }, [props.active]);

  return (
    // <div className="PageNavbar">
    //   <nav className="navbar navbar-expand-lg navbar-dark">
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{backgroundColor: "rgba(0,0,0,0.0)"}}>
    //       <div className="navbar-nav" style={{backgroundColor: "rgba(0,0,0,0.0)"}}>{navDivs}</div>
    //     </div>
    //   </nav>
    // </div>
    
    <div className="PageNavbar">
      
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "rgba(0,0,0,0.0)"}}>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
          
        </ul>

        <Button />
      </nav>
      </div>
      
  );
};
export default PageNavBar;