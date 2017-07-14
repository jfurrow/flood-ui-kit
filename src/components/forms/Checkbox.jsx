import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Checkmark from '../icons/Checkmark';
import FormRowItem from './FormRowItem';

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.string,
    id: PropTypes.string.isRequired
  };

  defaultProps = {
    type: 'checkbox'
  };

  checkboxRef = null;
  state = {isActive: false};

  handleKeyDown = event => {
    if ((event.key === ' ' || event.key === 'Enter')) {
      if (!this.state.isActive) {
        this.setState({isActive: true});
      }
    } else if (this.state.isActive) {
      this.setState({isActive: false});
    }
  };

  handleKeyUp = event => {
    if (event.key === ' ' || event.key === 'Enter') {
      this.checkboxRef.checked = !this.checkboxRef.checked;
    }

    if (this.state.isActive) {
      this.setState({isActive: false});
    }
  };

  handleLabelFocus = event => {
    global.addEventListener('keydown', this.handleKeyDown);
    global.addEventListener('keyup', this.handleKeyUp);
  };

  handleLabelBlur = event => {
    if (this.state.isActive) {
      this.setState({isActive: false});
    }

    global.removeEventListener('keydown', this.handleKeyDown);
    global.removeEventListener('keyup', this.handleKeyUp);
  };

  render() {
    const classes = classnames('checkbox form__item', {
      'checkbox--is-active': this.state.isActive,
      'form__item--match-textbox-height': this.props.matchTextboxHeight,
      'form__item--label-offset': this.props.labelOffset
    });

    return (
      <FormRowItem width={this.props.width}>
        <label className={classes}
          onBlur={this.handleLabelBlur}
          onFocus={this.handleLabelFocus}
          tabIndex={0}>
          <input checked={this.props.checked}
            className="checkbox__element"
            name={this.props.id}
            ref={ref => this.checkboxRef = ref}
            type="checkbox"
          />
          <div className="checkbox__indicator">
            <div className="checkbox__indicator__icon">
              <Checkmark />
            </div>
          </div>
          <div className="checkbox__label">
            {this.props.children}
          </div>
        </label>
      </FormRowItem>
    );
  }
}

export default Checkbox;
