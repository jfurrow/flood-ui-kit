import {CSSTransitionGroup} from 'react-transition-group';
import React, {Component} from 'react';

import transitionTimeouts from '../constants/transitionTimeouts';

class TransitionGroup extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName={{
          enter: `${this.props.transitionName}--enter`,
          enterActive: `${this.props.transitionName}--enter--active`,
          leave: `${this.props.transitionName}--leave`,
          leaveActive: `${this.props.transitionName}--leave--active`,
          appear: `${this.props.transitionName}--appear`,
          appearActive: `${this.props.transitionName}--appear--active`
        }}
        transitionEnterTimeout={transitionTimeouts.xFast}
        transitionLeaveTimeout={transitionTimeouts.xFast}>
        {this.props.children}
      </CSSTransitionGroup>
    );
  }
}

export default TransitionGroup;
