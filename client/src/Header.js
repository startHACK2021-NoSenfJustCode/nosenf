import React from 'react';
import DarkLogo from './images/DarkStGallenLogoCrop.png';
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