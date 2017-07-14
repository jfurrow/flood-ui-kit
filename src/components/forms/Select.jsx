import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import Checkmark from '../icons/Checkmark';
import Chevron from '../icons/Chevron';
import FormRowItem from './FormRowItem';
import Overlay from '../Overlay';
import Portal from '../Portal';

export class Select extends Component {
  static propTypes = {
    defaultID: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string.isRequired
  };

  static defaultProps = {
    defaultID: '',
    persistentPlaceholder: false,
    priority: 'quaternary'
  };

  _buttonRef = null;

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedID: props.defaultID
    };
  }

  getItemList(children) {
    if (!this.state.isOpen) {
      return null;
    }

    const selectItems = children.reduce(
      (accumulator, child) => {
        if (child.props.placeholder) {
          return accumulator;
        }

        accumulator.push(
          React.cloneElement(
            child,
            {
              onClick: this.handleItemClick,
              isSelected: child.props.id === this.state.selectedID
            }
          )
        );

        return accumulator;
      },
      []
    );

    const buttonBoundingRect = this._buttonRef.getBoundingClientRect();
    const windowHeight = global.innerHeight;
    const dropdownStyle = {
      left: buttonBoundingRect.left,
      right: buttonBoundingRect.right,
      width: buttonBoundingRect.width
    };

    if (
      windowHeight - buttonBoundingRect.bottom < 200
      && buttonBoundingRect.top > (windowHeight - buttonBoundingRect.bottom)
    ) {
      // More room on top
      dropdownStyle.top = 'auto';
      dropdownStyle.bottom = (windowHeight - buttonBoundingRect.bottom) + buttonBoundingRect.height + 5;
      dropdownStyle.maxHeight = buttonBoundingRect.top - 10;
    } else {
      dropdownStyle.top = buttonBoundingRect.bottom + 5;
      dropdownStyle.maxHeight = global.innerHeight - buttonBoundingRect.bottom - 10;
    }

    return (
      <Portal>
        <Overlay onClick={this.handleOverlayClick} isTransparent>
          <div
            className="select__items"
            style={dropdownStyle}>
            {selectItems}
          </div>
        </Overlay>
      </Portal>
    );
  }

  getSelectedItem(children) {
    return children.filter(child => {
      if (this.props.persistentPlaceholder || !this.state.selectedID) {
        return child.props.placeholder;
      }

      return child.props.id === this.state.selectedID;
    });
  }

  handleButtonClick = event => {
    this.toggleOpenState();
  };

  handleItemClick = id => {
    this.setState({selectedID: id});
  };

  handleOverlayClick = event => {
    this.toggleOpenState();
  };

  toggleOpenState = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const selectItems = React.Children.toArray(this.props.children);
    const classes = classnames(
      'select form__item',
      this.props.additionalClassNames,
      {
        'form__item--label-offset': this.props.labelOffset,
        'select--is-open': this.state.isOpen
      }
    );

    return (
      <FormRowItem labelOffset={this.props.labelOffset} width={this.props.width}>
        <div className={classes}>
          <input
            className="input input--hidden"
            name={this.props.id}
            tabIndex={-1}
            type="text"
            value={this.state.selectedID} />
          <Button
            additionalClassNames="select__button"
            buttonRef={ref => this._buttonRef = ref}
            onClick={this.handleButtonClick}
            priority={this.props.priority}
            wrap={false}>
            {this.getSelectedItem(selectItems)}
            <div className="select__indicator">
              <Chevron />
            </div>
          </Button>
          {this.getItemList(selectItems)}
        </div>
      </FormRowItem>
    );
  }
}

export class SelectItem extends Component {
  static propTypes = {
    isSelected: PropTypes.bool,
    children: PropTypes.node
  };

  handleClick = (event) => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.id);
  };

  render() {
    const classes = classnames('select__item', {
      'select__item--is-selected': this.props.isSelected
    });

    return (
      <div className={classes} onClick={this.handleClick}>
        <Checkmark />
        {this.props.children}
      </div>
    );
  }
}
