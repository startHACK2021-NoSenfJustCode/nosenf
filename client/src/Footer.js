import React from 'react';
import { Link, NavLink } from "react-router-dom";
import HomeIcon from './images/footer/HomeIcon.png'
import MapIcon from './images/footer/MapIcon.png'
import HeartIcon from './images/footer/HeartIcon.png'
import GearIcon from './images/footer/GearIcon.png'
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      < ul className="Footer" >
        <li>
          <NavLink className='Link' activeClassName='active' exact to='/'>
            <img src={HomeIcon} alt="Home" />
          </NavLink>
        </li>
        <li>
          <NavLink className='Link' activeClassName='active' exact to='/map'>
            <img src={MapIcon} alt="Map" />
          </NavLink>
        </li>
        <li>
          <NavLink className='Link' activeClassName='active' exact to='/plus'>
            +
          </NavLink>
        </li>
        <li>
          <NavLink className='Link' activeClassName='active' exact to='/heart'>
            <img src={HeartIcon} alt="Heart" />
          </NavLink>
        </li>
        <li>
          <NavLink className='Link' activeClassName='active' exact to='/settings'>
            <img src={GearIcon} alt="Settings" />
          </NavLink>
        </li>
      </ul >);
  }
}

export default Footer;