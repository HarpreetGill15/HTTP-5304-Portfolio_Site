import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from 'reactstrap';

import Logo from '../assets/big-logo.png';

class Header extends React.Component {
  constructor() {
    super();
  }


  render() {
 
    
    return (
      <div className='navbar-contain'>
        <img src={Logo} className='img-fluid logo' alt="Logo for Harpreet Gill's website" width="140px" height="140px"/>
        <nav>
          <ul className='navi'>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#social">Social Info</a></li>
          </ul>
        </nav>
      </div>

    );
  }
}

export default Header;
