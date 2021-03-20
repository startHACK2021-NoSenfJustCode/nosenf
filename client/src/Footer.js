import React from 'react';
import {Link} from "react-router-dom";
import HomeIcon from './images/footer/HomeIcon.png'
import MapIcon from './images/footer/MapIcon.png'
import HeartIcon from './images/footer/HeartIcon.png'
import GearIcon from './images/footer/GearIcon.png'
class Footer extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">
            <img src={HomeIcon} alt="Home"/>
          </Link>
        </li>
        <li>
          <Link to="/map">
          <img src={MapIcon} alt="Map"/>
          </Link>
        </li>
        <li>
          <Link to="/plus">+</Link>
        </li>
        <li>
          <Link to="/heart">
          <img src={HeartIcon} alt="Heart"/>
          </Link>
        </li>
        <li>
          <Link to="/settings">            
          <img src={GearIcon} alt="Settings"/>
          </Link>
        </li>
      </ul>);
  }
}

export default Footer;