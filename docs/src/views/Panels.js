import React, { Component } from 'react';

import Container from 'flood-ui-kit/components/Container';
import Panel from 'flood-ui-kit/components/Panel';
import PanelContent from 'flood-ui-kit/components/PanelContent';
import PanelFooter from 'flood-ui-kit/components/PanelFooter';
import PanelHeader from 'flood-ui-kit/components/PanelHeader';

import Section from '../components/Section';

class Panels extends Component {
  render() {
    return (
      <Container>
        <Section title="Panels">
          <Panel type="raised">
            <PanelHeader hasBorder>Panel Header</PanelHeader>
            <PanelContent>Panel Content</PanelContent>
            <PanelFooter>Panel Footer</PanelFooter>
          </Panel>
        </Section>
      </Container>
    );
  }
}

export default Panels;
