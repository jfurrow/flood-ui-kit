import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {dispatchChangeEvent} from './util/forms';
import FormRowItem from './FormRowItem';

class ToggleInput extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.string,
    grow: PropTypes.bool,
    id: PropTypes.string.isRequired,
    shrink: PropTypes.bool,
    type: PropTypes.oneOf(['checkbox', 'radio'])
  };

  static defaultProps = {
    onChange: () => {},
    grow: false,
    shrink: false
  };

  constructor(props) {
    super(props);

    this.initialValue = props.checked;
  }

  elementRef = null;
  state = {isActive: false};

  handleInputChange = event => {
    event.stopPropagation();
  };

  handleKeyDown = event => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      if (!this.state.isActive) {
        this.setState({isActive: !this.state.isActive});
      }
    }
  };

  handleKeyUp = event => {
    if (event.key === ' ' || event.key === 'Enter') {
      this.elementRef.checked = !this.elementRef.checked;
      // We're faking the event's target to make it easier to handle this keyboard event.
      this.triggerChangeEvent({event, target: this.elementRef});
    }

    if (this.state.isActive) {
      this.setState({isActive: false});
    }
  };

  handleLabelBlur = event => {
    if (this.state.isActive) {
      this.setState({isActive: false});
    }

    global.removeEventListener('keydown', this.handleKeyDown);
    global.removeEventListener('keyup', this.handleKeyUp);
  };

  handleLabelFocus = event => {
    global.addEventListener('keydown', this.handleKeyDown);
    global.addEventListener('keyup', this.handleKeyUp);
  };

  triggerChangeEvent = event => {
    dispatchChangeEvent(this.elementRef);
    this.props.onChange(event);
  };

  render() {
    const classes = classnames('form__element toggle-input', this.props.type, {
      'toggle-input--is-active': this.state.isActive,
      'form__element--match-textbox-height': this.props.matchTextboxHeight,
      'form__element--label-offset': this.props.labelOffset
    });

    return (
      <FormRowItem shrink={this.props.shrink} grow={this.props.grow} width={this.props.width}>
        <label className={classes}
          onBlur={this.handleLabelBlur}
          onFocus={this.handleLabelFocus}
          tabIndex={0}>
          <input
            data-default-value={this.initialValue}
            defaultChecked={this.props.checked}
            className="toggle-input__element"
            name={this.props.type === 'radio' ? this.props.groupID : this.props.id}
            onClick={this.triggerChangeEvent}
            onChange={this.handleInputChange}
            ref={ref => this.elementRef = ref}
            type={this.props.type}
            value={this.props.type === 'radio' ? this.props.value : undefined}
          />
          <div className={`toggle-input__indicator`}>
            <div className={`toggle-input__indicator__icon`}>
              {this.props.icon}
            </div>
          </div>
          <div className={`toggle-input__label`}>
            {this.props.children}
          </div>
        </label>
      </FormRowItem>
    );
  }
}

export default ToggleInput;
