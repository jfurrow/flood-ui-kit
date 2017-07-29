import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

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
    grow: false,
    shrink: false
  };

  elementRef = null;
  state = {isActive: false};

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
          <input checked={this.props.checked}
            className={`toggle-input__element`}
            name={this.props.id}
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
