import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Overlay extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    isTransparent: PropTypes.bool
  };

  render() {
    const classes = classnames('overlay', this.props.additionalClassNames, {
      'overlay--transparent': this.props.isTransparent
    });

    return (
      <div className={classes} onClickCapture={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default Overlay;
