import React, {Component} from 'react';

import Icon from './Icon';
import Checkmark from '../icons/Checkmark';
import ToggleInput from './ToggleInput';

class Checkbox extends Component {
  render() {
    return (
      <ToggleInput
        {...this.props}
        type="checkbox"
        icon={<Icon name="checkmark" />}
      />
    );
  }
}

export default Checkbox;
