import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Button from './Button';
import ContextMenu from './ContextMenu';
import {dispatchChangeEvent} from './util/forms';
import FormElementAddon from './FormElementAddon';
import Chevron from '../icons/Chevron';
import FormRowItem from './FormRowItem';
import Overlay from './Overlay';
import Portal from './Portal';

const minPreferableBottomSpace = 150;

export default class Select extends Component {
  static propTypes = {
    defaultID: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string.isRequired,
    matchTriggerWidth: PropTypes.bool,
    menuAlign: PropTypes.oneOf(['left', 'right']),
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    defaultID: '',
    matchTriggerWidth: true,
    menuAlign: 'left',
    persistentPlaceholder: false,
    priority: 'quaternary'
  };

  menuRef = null;
  inputRef = null;
  triggerRef = null;

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedID: props.defaultID
    };
  }

  componentDidUpdate(_prevProps, prevState) {
    if (!prevState.isOpen && this.state.isOpen) {
      // TODO: Set focus on the dropdown menu.
    } else if (prevState.isOpen && !this.state.isOpen) {
      // this.triggerRef.focus();
    }
  }

  componentWillUpdate(_nextProps, nextState) {
    if (nextState.isOpen && !this.state.isOpen) {
      global.addEventListener('keydown', this.handleKeyDown);
      global.addEventListener('scroll', this.handleWindowScroll, {capture: true});

      if (this.props.onOpen) {
        this.props.onOpen();
      }
    } else if (!nextState.isOpen && this.state.isOpen) {
      global.addEventListener('keydown', this.handleKeyDown);
      global.removeEventListener('scroll', this.handleWindowScroll, {capture: true});

      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }

  getItemList(children) {
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

    const dropdownStyle = {};
    let shouldRenderAbove = false;

    if (this.triggerRef) {
      const buttonBoundingRect = this.triggerRef.getBoundingClientRect();
      const windowHeight = global.innerHeight;

      shouldRenderAbove = (
        windowHeight - buttonBoundingRect.bottom < minPreferableBottomSpace
        && buttonBoundingRect.top > (windowHeight - buttonBoundingRect.bottom)
      );

      if (shouldRenderAbove) {
        // More room on top
        dropdownStyle.top = 'auto';
        dropdownStyle.bottom = (windowHeight - buttonBoundingRect.bottom) + buttonBoundingRect.height + 5;
        dropdownStyle.maxHeight = buttonBoundingRect.top - 10;
      } else {
        dropdownStyle.top = buttonBoundingRect.bottom + 5;
        dropdownStyle.maxHeight = global.innerHeight - buttonBoundingRect.bottom - 10;
      }

      if (this.props.matchTriggerWidth) {
        dropdownStyle.width = buttonBoundingRect.width;
        dropdownStyle.left = buttonBoundingRect.left;
        dropdownStyle.right = global.innerWidth - buttonBoundingRect.left - buttonBoundingRect.width;
      } else if (this.props.menuAlign === 'right') {
        dropdownStyle.right = global.innerWidth - buttonBoundingRect.left - buttonBoundingRect.width;
      } else {
        dropdownStyle.left = buttonBoundingRect.left;
      }
    }

    const classes = classnames('select__items', {
      'select__items--is-up': shouldRenderAbove,
      'select__items--is-down': !shouldRenderAbove,
      'select__items--match-trigger-width': this.props.matchTriggerWidth
    });

    return (
      <div>
        <Overlay additionalClassNames="select__overlay" onClick={this.handleOverlayClick} isTransparent />
        <div className={classes} ref={(ref) => this.menuRef = ref} style={dropdownStyle}>
          {selectItems}
        </div>
      </div>
    );
  }

  getLabel() {
    if (this.props.label) {
      return (
        <label className="form__element__label" htmlFor={this.props.id}>
          {this.props.label}
        </label>
      );
    }
  }

  getSelectedItem(children) {
    return children.filter(child => {
      if (this.props.persistentPlaceholder || !this.state.selectedID) {
        return child.props.placeholder;
      }

      return child.props.id === this.state.selectedID;
    });
  }

  getTrigger(selectItems) {
    if (this.props.triggerComponent) {
      return (
        <this.props.triggerComponent
          isOpen={this.state.isOpen}
          onClick={this.handleTriggerClick}
          triggerRef={ref => this.triggerRef = ref}>
          {this.getSelectedItem(selectItems)}
        </this.props.triggerComponent>
      );
    }

    return (
      <Button
        additionalClassNames="select__button"
        buttonRef={ref => this.triggerRef = ref}
        addonPlacement="after"
        onClick={this.handleTriggerClick}
        priority={this.props.priority}
        wrap={false}>
        <FormElementAddon className="select__indicator">
          <Chevron />
        </FormElementAddon>
        {this.getSelectedItem(selectItems)}
      </Button>
    );
  }

  handleTriggerClick = () => {
    this.toggleOpenState();
  };

  handleItemClick = id => {
    this.setState({isOpen: false, selectedID: id}, () => {
      if (this.props.onSelect) {
        this.props.onSelect(id);
      }

      if (this.inputRef) {
        dispatchChangeEvent(this.inputRef);
      }
    });
  };

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault();

      this.setState({isOpen: false});
    }
  };

  handleOverlayClick = () => {
    this.toggleOpenState();
  };

  handleWindowScroll = (event) => {
    if (this.menuRef && !this.menuRef.contains(event.target)) {
      if (this.state.isOpen) {
        this.setState({isOpen: false});
      }
    }
  };

  toggleOpenState = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const selectItems = React.Children.toArray(this.props.children);
    const classes = classnames(
      'select form__element',
      this.props.additionalClassNames,
      {
        'form__element--label-offset': this.props.labelOffset,
        'select--is-open': this.state.isOpen
      }
    );

    return (
      <FormRowItem shrink={this.props.shrink} grow={this.props.grow} labelOffset={this.props.labelOffset} width={this.props.width}>
        {this.getLabel()}
        <div className={classes}>
          <input
            className="input input--hidden"
            name={this.props.id}
            onChange={(event) => {console.log(event)}}
            tabIndex={-1}
            ref={(ref) => this.inputRef = ref}
            type="text"
            value={this.state.selectedID} />
          {this.getTrigger(selectItems)}
          <Portal>
            <ContextMenu in={this.state.isOpen}>
              {this.getItemList(selectItems)}
            </ContextMenu>
          </Portal>
        </div>
      </FormRowItem>
    );
  }
}
