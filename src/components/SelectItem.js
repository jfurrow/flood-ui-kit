import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Checkmark from '../icons/Checkmark';

export default class SelectItem extends Component {
  static propTypes = {
    isSelected: PropTypes.bool,
    children: PropTypes.node
  };

  handleClick = (event) => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.id);
  };

  render() {
    const classes = classnames('select__item', {
      'select__item--is-selected': this.props.isSelected
    });

    return (
      <div className={classes} onClick={this.handleClick}>
        <Checkmark />
        {this.props.children}
      </div>
    );
  }
}
