import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import FormRowItem from './FormRowItem';

class Textbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.string,
    id: PropTypes.string.isRequired
  };

  defaultProps = {
    type: 'text'
  };

  getLabel() {
    if (this.props.label) {
      return (
        <label className="input__label" htmlFor={this.props.id}>
          {this.props.label}
        </label>
      );
    }
  }

  render() {
    const classes = classnames('input input--text form__item', {
      'form__item--label-offset': this.props.labelOffset
    });

    return (
      <FormRowItem width={this.props.width}>
        {this.getLabel()}
        <input className={classes}
          defaultValue={this.props.d}
          placeholder={this.props.placeholder}
          name={this.props.id}
          tabIndex={0}
          type="text"
        />
      </FormRowItem>
    );
  }
}

export default Textbox;
