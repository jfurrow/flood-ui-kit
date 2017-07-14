import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
  componentDidMount() {
    this._nodeEl = global.document.createElement('div');
    global.document.body.appendChild(this._nodeEl);
    this.renderChildren(this.props);
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this._nodeEl);
    global.document.body.removeChild(this._nodeEl);
  }

  componentWillReceiveProps(nextProps) {
    this.renderChildren(nextProps);
  }

  renderChildren(props) {
    ReactDOM.render(props.children, this._nodeEl);
  }

  render() {
    return null;
  }
}

Portal.defaultProps = {
  children: <div />
};

Portal.propTypes = {
  children: PropTypes.node
};

export default Portal;
