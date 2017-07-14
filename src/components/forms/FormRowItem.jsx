import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class FormRowItem extends Component {
  static propTypes = {
    width: PropTypes.oneOf([
      'auto',
      'eighth',
      'quarter',
      'three-eighths',
      'half',
      'five-eighths',
      'three-quarters',
      'seven-eighths'
    ])
  };

  render() {
    const classes = classnames('form__row__item', {
      [`form__row__item--${this.props.width}`]: this.props.width
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default FormRowItem;
