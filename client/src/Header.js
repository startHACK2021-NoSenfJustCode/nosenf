import React from 'react';
import DarkLogo from './images/DarkStGallenLogo.png';
import './Header.css';


class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <img src={DarkLogo} alt="Header"/>
      </div>
    );
  }
}

export default Header;