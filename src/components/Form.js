import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {getDataFromForm} from './util/forms';

class Form extends Component {
  static propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
  };

  handleFormChange = event => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.props.onSubmit) {
      const formData = getDataFromForm(event.target);
      this.props.onSubmit({event, formData})
    }
  };

  render () {
    return (
      <form
        onChange={this.handleFormChange}
        onSubmit={this.handleFormSubmit}>
        {this.props.children}
      </form>
    );
  }
}

export default Form;
