import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Overlay from './Overlay';
import TransitionGroup from './TransitionGroup';

const minPreferableBottomSpace = 150;

export default class ContextMenu extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    in: PropTypes.bool,
    matchTriggerWidth: PropTypes.bool,
    menuAlign: PropTypes.oneOf(['left', 'right']),
    overlayProps: PropTypes.object,
    padding: PropTypes.bool,
    scrolling: PropTypes.bool
  };

  static defaultProps = {
    matchTriggerWidth: true,
    menuAlign: 'left',
    overlayProps: {},
    padding: true,
    scrolling: true
  };

  handleOverlayClick = () => {
    if (this.props.onOverlayClick) {
      this.props.onOverlayClick();
    }
  };

  render() {
    const dropdownStyle = {};
    let shouldRenderAbove = false;

    if (this.props.triggerRef) {
      const buttonBoundingRect = this.props.triggerRef.getBoundingClientRect();
      const windowHeight = global.innerHeight;

      shouldRenderAbove = (
        windowHeight - buttonBoundingRect.bottom < minPreferableBottomSpace
        && buttonBoundingRect.top > (windowHeight - buttonBoundingRect.bottom)
      );

      if (shouldRenderAbove) {
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

      this.dropdownStyle = dropdownStyle;
    }

    const classes = classnames('context-menu__items', {
      'context-menu__items--is-up': shouldRenderAbove,
      'context-menu__items--is-down': !shouldRenderAbove,
      'context-menu__items--match-trigger-width': this.props.matchTriggerWidth,
      'context-menu__items--no-padding': !this.props.padding,
      'context-menu__items--no-scrolling': !this.props.scrolling
    });

    return (
      <TransitionGroup in={this.props.in} transitionName="context-menu">
        <div className="context-menu" onClick={this.props.onClick}>
          <Overlay additionalClassNames="context-menu__overlay" onClick={this.handleOverlayClick} isTransparent {...this.props.overlayProps} />
          <div className={classes} ref={this.props.setRef} style={dropdownStyle}>
            {this.props.children}
          </div>
        </div>
      </TransitionGroup>
    );
  }
}
