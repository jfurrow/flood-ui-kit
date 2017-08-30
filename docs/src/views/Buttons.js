import React, { Component } from 'react';

import Button from 'flood-ui-kit/components/Button';
import Container from 'flood-ui-kit/components/Container';
import FormRow from 'flood-ui-kit/components/FormRow';

import Section from '../components/Section';

class ButtonsView extends Component {
  state = {
    isLoading: {
      primary: false,
      secondary: false,
      tertiary: false
    }
  };
  timeouts = [];

  componentWillUnmount() {
    this.timeouts.forEach(global.clearTimeout);
  }

  getButtonClickHandler = (buttonID) => {
    return () => {
      this.setState({
        isLoading: Object.assign(
          {},
          this.state.isLoading,
          {
            [buttonID]: !this.state.isLoading[buttonID]
          }
        )
      });
    };
  };

  isLoading = (buttonID) => {
    return this.state.isLoading[buttonID];
  };

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
        <Section title="Buttons with loading indicators">
          <p className="lead">Click each button to toggle its loading state.</p>
          <FormRow wrap>
            <Button canLoad priority="primary" isLoading={this.isLoading('primary')} onClick={this.getButtonClickHandler('primary')}>
              Primary Button
            </Button>
            <Button canLoad priority="secondary" isLoading={this.isLoading('secondary')} onClick={this.getButtonClickHandler('secondary')}>
              Secondary Button
            </Button>
            <Button canLoad priority="tertiary" isLoading={this.isLoading('tertiary')} onClick={this.getButtonClickHandler('tertiary')}>
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
