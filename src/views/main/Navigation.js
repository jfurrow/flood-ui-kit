import {NavLink} from 'react-router-dom';
import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="main__navigation navigation">
        <h1 className="main__heading">Flood UI Components</h1>
        <h5 className="navigation__heading">Table of Contents</h5>
        <ul className="navigation__list">
          <li><NavLink to="/buttons">Buttons</NavLink></li>
          <li><NavLink to="/inputs">Input Elements</NavLink></li>
          <li><NavLink to="/form-composition">Form Composition</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
