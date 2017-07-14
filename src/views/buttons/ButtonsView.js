import React, { Component } from 'react';

import Button from '../../components/forms/Button';
import FormRow from '../../components/forms/FormRow';
import Section from '../../components/section/Section';

class ButtonsView extends Component {
  render() {
    return (
      <Section title="Buttons">
        <FormRow wrap>
          <Button priority="primary">
            Primary Button
          </Button>
          <Button priority="secondary">
            Secondary Button
          </Button>
          <Button priority="tertiary">
            Tertiary Button
          </Button>
          <Button disabled>
            Disabled Button
          </Button>
        </FormRow>
      </Section>
    );
  }
}

export default ButtonsView;
