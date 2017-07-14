import React, {Component} from 'react';

class Checkmark extends Component {
  render() {
    return (
      <svg
        className="icon icon--checkmark"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.79 9.062a1.08 1.08 0 1 0-1.42 1.628l4.01 3.493 6.486-7.39a1.08 1.08 0 1
            0-1.624-1.425L8.176 11.14l-2.387-2.08z"
          fillRule="nonzero" />
      </svg>
    );
  }
}

export default Checkmark;
