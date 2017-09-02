import React from 'react';
import TransitionGroup from './TransitionGroup';

export default class ContextMenu extends React.PureComponent {
  render() {
    return (
      <TransitionGroup in={this.props.in} transitionName="select__menu">
        <div className="select__menu">
          {this.props.children}
        </div>
      </TransitionGroup>
    );
  }
}
