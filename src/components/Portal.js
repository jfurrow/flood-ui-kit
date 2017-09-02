import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
  static defaultProps = {
    children: <div />
  };

  static propTypes = {
    children: PropTypes.node
  };

  mountPoint = null;

  componentDidMount() {
    this.mountPoint = global.document.createElement('div');
    this.mountPoint.classList.add('portal')
    global.document.body.appendChild(this.mountPoint);
    this.renderChildren(this.props);
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
    global.document.body.removeChild(this.mountPoint);
  }

  componentWillReceiveProps(nextProps) {
    this.renderChildren(nextProps);
  }

  renderChildren(props) {
    ReactDOM.render(props.children, this.mountPoint);
  }

  render() {
    return null;
  }
}

export default Portal;
