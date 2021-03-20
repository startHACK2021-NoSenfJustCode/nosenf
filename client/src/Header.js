import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <img src={'./images/DarkStGallenLogo.png'} alt="Header"/>
      </div>
    );
  }
}

export default Header;