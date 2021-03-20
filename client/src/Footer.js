import React from 'react';
import { NavLink } from "react-router-dom";
import HomeIcon from './images/footer/HomeIcon.png';
import MapIcon from './images/footer/MapIcon.png';
import HeartIcon from './images/footer/HeartIcon.png';
import UserIcon from './images/footer/UserIcon.png';
import WhiteUserIcon from './images/footer/WhiteUserIcon.png';
import WhiteHomeIcon from './images/footer/WhiteHomeIcon.png';
import WhiteMapIcon from './images/footer/WhiteMapIcon.png';
import WhiteHeartIcon from './images/footer/WhiteHeartIcon.png';
import PlusIcon from './images/footer/PlusIcon.png';
import './Footer.css';

class Footer extends React.Component {

  handleNavClick() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        < ul className="Footer" >
          <li onClick={this.handleNavClick.bind(this)}>
            <NavLink className='Link' activeClassName='active' exact to='/' >
              <img src={window.location.pathname === "/" ? WhiteHomeIcon : HomeIcon} alt="Home" />
            </NavLink>
          </li>
          <li onClick={this.handleNavClick.bind(this)} >
            <NavLink className='Link' activeClassName='active' exact to='/map'>
            <img src={window.location.pathname === "/map" ? WhiteMapIcon : MapIcon} alt="Map" />
            </NavLink>
          </li>
          <li onClick={this.handleNavClick.bind(this)} >
            <NavLink className='Link' activeClassName='active' exact to='/plus'>
            <img src={window.location.pathname === "/plus" ? PlusIcon : PlusIcon} alt="Plus" />
          </NavLink>
          </li>
          <li onClick={this.handleNavClick.bind(this)} >
            <NavLink className='Link' activeClassName='active' exact to='/heart'>
            <img src={window.location.pathname === "/heart" ? WhiteHeartIcon : HeartIcon} alt="Heart" />
            </NavLink>
          </li>
          <li onClick={this.handleNavClick.bind(this)} >
            <NavLink className='Link' activeClassName='active' exact to='/user'>
            <img src={window.location.pathname === "/user" ? WhiteUserIcon : UserIcon} alt="User" />
            </NavLink>
          </li>
        </ul >);
      </div>
    )
  }
}

export default Footer;
