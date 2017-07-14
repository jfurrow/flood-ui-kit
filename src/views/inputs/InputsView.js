import React, { Component } from 'react';

import Checkbox from '../../components/forms/Checkbox';
import Form from '../../components/forms/Form';
import FormRow from '../../components/forms/FormRow';
import Section from '../../components/section/Section';
import Textbox from '../../components/forms/Textbox';

class TextBoxesView extends Component {
  handleFormSubmit = event => {
    console.log(event.target);
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Section title="Textboxes">
          <FormRow>
            <Textbox placeholder="Foo" id="textbox--foo" />
          </FormRow>
        </Section>
        <Section title="Checkboxes">
          <FormRow>
            <Checkbox id="checkbox--a" width="auto">Foo</Checkbox>
          </FormRow>
        </Section>
      </Form>
    );
  }
}

export default TextBoxesView;
