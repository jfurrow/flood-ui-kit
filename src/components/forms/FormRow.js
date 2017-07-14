import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class FormRow extends Component {
  static propTypes = {
    children: PropTypes.node,
    wrap: PropTypes.bool
  };

  render() {
    const classes = classnames('form__row', {
      'form__row--wrap': this.props.wrap
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default FormRow;
