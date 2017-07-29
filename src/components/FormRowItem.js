import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class FormRowItem extends Component {
  static propTypes = {
    grow: PropTypes.bool,
    shrink: PropTypes.bool,
    width: PropTypes.oneOf([
      'auto',
      'one-eighth',
      'one-quarter',
      'three-eighths',
      'one-half',
      'five-eighths',
      'three-quarters',
      'seven-eighths'
    ])
  };

  static defaultProps = {
    grow: true,
    shrink: true,
    width: 'auto'
  }

  render() {
    const classes = classnames('form__row__item', this.props.className, {
      [`form__row__item--${this.props.width}`]: this.props.width,
      'form__row__item--grow': this.props.grow,
      'form__row__item--shrink': this.props.shrink
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default FormRowItem;
