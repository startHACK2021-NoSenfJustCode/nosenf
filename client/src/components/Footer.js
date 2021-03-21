import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import HomeIcon from '../images/footer/HomeIcon.png';
import MapIcon from '../images/footer/MapIcon.png';
import HeartIcon from '../images/footer/HeartIcon.png';
import UserIcon from '../images/footer/UserIcon.png';
import WhiteUserIcon from '../images/footer/WhiteUserIcon.png';
import WhiteHomeIcon from '../images/footer/WhiteHomeIcon.png';
import WhiteMapIcon from '../images/footer/WhiteMapIcon.png';
import WhiteHeartIcon from '../images/footer/WhiteHeartIcon.png';
import PlusIcon from '../images/footer/PlusIcon.png';
import '../styles/Footer.css';



function Footer({pathname}) {
  return (
    <div>
      <ul className="Footer fixed-bottom" >
        <li >
          <NavLink className='Link' activeClassName='active' exact to='/' >
            <img src={pathname === "/" ? WhiteHomeIcon : HomeIcon} alt="Home" />
          </NavLink>
        </li>

        <li >
          <NavLink className='Link' activeClassName='active' exact to='/map'>
            <img src={pathname === "/map" ? WhiteMapIcon : MapIcon} alt="Map" />
          </NavLink>
        </li>

        <li>
          <NavLink className='Link' activeClassName='active' exact to='/plus'>
            <img src={pathname === "/plus" ? PlusIcon : PlusIcon} alt="Plus" />
          </NavLink>
        </li>

        <li>
          <NavLink className='Link' activeClassName='active' exact to='/heart'>
            <img src={pathname === "/heart" ? WhiteHeartIcon : HeartIcon} alt="Heart" />
          </NavLink>
        </li>

        <li>
          <NavLink className='Link' activeClassName='active' exact to='/user'>
            <img src={pathname === "/user" ? WhiteUserIcon : UserIcon} alt="User" />
          </NavLink>
        </li>
      </ul>

    </div>
  )
}

Footer.propTypes = {
  pathname: PropTypes.string.isRequired
};


export default Footer;
