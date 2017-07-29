import {NavLink} from 'react-router-dom';
import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="main__navigation navigation">
        <h1 className="main__heading">Flood UI Components</h1>
        <h4 className="navigation__heading">Table of Contents</h4>
        <ul className="navigation__list">
          <li><NavLink activeClassName="is-active" to="/buttons">Buttons</NavLink></li>
          <li><NavLink activeClassName="is-active" to="/form-components">Form Components</NavLink></li>
          <li><NavLink activeClassName="is-active" to="/panels">Panels</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
