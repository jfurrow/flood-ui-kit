import React, { Component } from 'react';

import Button from '../../components/forms/Button';
import Checkbox from '../../components/forms/Checkbox';
import Form from '../../components/forms/Form';
import FormRow from '../../components/forms/FormRow';
import Textbox from '../../components/forms/Textbox';
import Section from '../../components/section/Section';
import {Select, SelectItem} from '../../components/forms/Select';

class FormCompositionView extends Component {
  handleFormSubmit = ({formData}) => {
    console.log(JSON.stringify(formData));
  };

  render() {
    return (
      <Section title="Form Composition">
        <Form onSubmit={this.handleFormSubmit}>
          <FormRow wrap>
            <Textbox label="I am a label" id="foo-example" width="half" />
            <Checkbox id="my-checkbox" labelOffset matchTextboxHeight width="auto">
              Something Something...
            </Checkbox>
            <Select id="my-items" labelOffset width="three-eighths">
              <SelectItem id="my-placeholder" placeholder>Please Select an Item</SelectItem>
              <SelectItem id="foo">Foo</SelectItem>
              <SelectItem id="bar">Bar</SelectItem>
              <SelectItem id="baz">Baz</SelectItem>
              <SelectItem id="qux">Qux</SelectItem>
              <SelectItem id="quux">Quux</SelectItem>
              <SelectItem id="quuz">Quuz</SelectItem>
              <SelectItem id="corge">Corge</SelectItem>
              <SelectItem id="grault">Grault</SelectItem>
              <SelectItem id="garply">Garply</SelectItem>
              <SelectItem id="waldo">Waldo</SelectItem>
              <SelectItem id="fred">Fred</SelectItem>
            </Select>
            <Button labelOffset priority="primary" type="submit" width="auto">
              Submit
            </Button>
          </FormRow>
        </Form>
      </Section>
    );
  }
}

export default FormCompositionView;
