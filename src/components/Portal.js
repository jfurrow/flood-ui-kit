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

  componentDidMount() {
    this._nodeEl = global.document.createElement('div');
    this._nodeEl.classList.add('portal')
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

export default Portal;
