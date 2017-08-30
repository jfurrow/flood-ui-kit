import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import FormElementAddon from './FormElementAddon';
import FormRowItem from './FormRowItem';

export default class Textbox extends Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    addonPlacement: PropTypes.oneOf(['before', 'after']),
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['password', 'text'])
  };

  static defaultProps = {
    type: 'text'
  };

  getChildren() {
    return React.Children.map(this.props.children, (child, index) => {
      if (child.type === FormElementAddon) {
        return React.cloneElement(child, {addonPlacement: this.props.addonPlacement});
      }

      return child;
    });
  }

  getLabel() {
    if (this.props.label) {
      return (
        <label className="form__element__label" htmlFor={this.props.id}>
          {this.props.label}
        </label>
      );
    }
  }

  render() {
    const classes = classnames('input input--text form__element', {
      [`form__element--has-addon--placed-${this.props.addonPlacement}`]: this.props.addonPlacement && this.props.children,
      'form__element--label-offset': this.props.labelOffset
    });

    return (
      <FormRowItem width={this.props.width}>
        {this.getLabel()}
        <div className="form__element__wrapper">
          <input className={classes}
            defaultValue={this.props.defaultValue}
            placeholder={this.props.placeholder}
            name={this.props.id}
            tabIndex={0}
            type={this.props.type}
          />
          {this.getChildren()}
        </div>
      </FormRowItem>
    );
  }
}
