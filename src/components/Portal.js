import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

class Portal extends React.Component {
  static defaultProps = {
    children: <div />
  };

  static propTypes = {
    children: PropTypes.node
  };

  mountPoint = null;

  componentDidMount() {
    this.mountPoint = global.document.createElement("div");
    this.mountPoint.classList.add("portal");
    global.document.body.appendChild(this.mountPoint);
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
    global.document.body.removeChild(this.mountPoint);
  }

  render() {
    if (this.mountPoint == null) return null;
    return ReactDOM.createPortal(this.props.children, this.mountPoint);
  }
}

export default Portal;
