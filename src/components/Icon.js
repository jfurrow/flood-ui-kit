import React from 'react';

import checkmarkIcon from '../svg/checkmark.svg';
import searchIcon from '../svg/search.svg';

const iconTypes = {
  checkmark: {
    class: 'icon icon--checkmark',
    path: './icons/checkmark.svg'
  },
  chevron: {
    class: 'icon icon--chevron',
    path: '../icons/chevron.svg'
  },
  circle: {
    class: 'icon icon--checkmark',
    path: '../icons/circle.svg'
  },
  search: {
    class: 'icon icon--search icon--stroke',
    path: '../icons/search.svg'
  }
};

const Icon = ({ name, overrideClass, size }) => {
  const iconType = iconTypes[name];
  console.log(searchIcon);

  return (
    <svg
      className="icon icon--search icon--stroke"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
        <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
