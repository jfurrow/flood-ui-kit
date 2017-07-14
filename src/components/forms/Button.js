import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import FormRowItem from './FormRowItem';

class Button extends Component {
  static defaultProps = {
    additionalClassNames: '',
    labelOffset: false,
    disabled: false,
    priority: 'primary',
    type: 'button',
    wrap: true,
    wrapper: FormRowItem,
    wrapperProps: {width: 'auto'}
  };

  static propTypes = {
    priority: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
    type: PropTypes.oneOf(['submit', 'reset', 'button'])
  };

  render() {
    const classes = classnames(
      'button form__item',
      this.props.additionalClassNames,
      {
        'form__item--label-offset': this.props.labelOffset,
        [`button--${this.props.priority}`]: this.props.priority,
        'button--disabled': this.props.disabled
      }
    );

    const content = (
      <button
        className={classes}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        ref={this.props.buttonRef}
        type={this.props.type}>
        {this.props.children}
      </button>
    );

    if (this.props.wrap) {
      return (
        <this.props.wrapper {...this.props.wrapperProps}>
          {content}
        </this.props.wrapper>
      );
    }

    return content;
  }
}

export default Button;
