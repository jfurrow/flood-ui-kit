import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class FormElementAddon extends Component {
  static propTypes = {
    addonPlacement: PropTypes.oneOf(['before', 'after']),
    type: PropTypes.oneOf(['icon']),
    isInteractive: PropTypes.bool
  };

  static defaultProps = {
    type: 'icon',
    isInteractive: false
  };

  render() {
    const classes = classnames(
      'form__element__addon',
      {
        [`form__element__addon--placed-${this.props.addonPlacement}`]: this.props.addonPlacement,
        'form__element__addon--is-interactive': this.props.isInteractive,
        'form__element__addon--is-icon': this.props.type === 'icon'
      },
      this.props.className
    );

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
