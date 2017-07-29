import React, { Component } from 'react';

import Button from 'flood-ui-kit/components/Button';
import Container from 'flood-ui-kit/components/Container';
import FormRow from 'flood-ui-kit/components/FormRow';

import Section from '../components/Section';

class ButtonsView extends Component {
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

export default ButtonsView;
