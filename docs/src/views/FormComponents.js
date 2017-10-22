 import React, { Component } from 'react';

import Button from 'flood-ui-kit/components/Button';
import Checkbox from 'flood-ui-kit/components/Checkbox';
import Container from 'flood-ui-kit/components/Container';
import Form from 'flood-ui-kit/components/Form';
import FormElementAddon from 'flood-ui-kit/components/FormElementAddon';
import FormError from 'flood-ui-kit/components/FormError';
import FormGroup from 'flood-ui-kit/components/FormGroup';
import FormRow from 'flood-ui-kit/components/FormRow';
import Radio from 'flood-ui-kit/components/Radio';
import Search from 'flood-ui-kit/icons/Search';
import Select from 'flood-ui-kit/components/Select';
import SelectItem from 'flood-ui-kit/components/SelectItem';
import Textbox from 'flood-ui-kit/components/Textbox';

import Section from '../components/Section';

const CustomTriggerComponent = (props) => {
  return (
    <div onClick={props.onClick} ref={props.setRef}>\/</div>
  );
};

class TextBoxesView extends Component {
  handleFormSubmit = event => {
    console.log(event.formData);
  };

  render() {
    return (
      <Container>
        <Section title="Textboxes">
          <Form onSubmit={this.handleFormSubmit}>
            <p className="copy--lead">
              Donec sit amet metus vulputate, eleifend purus nec, auctor nisl. Donec accumsan sem in cursus laoreet. Curabitur egestas mauris odio, et fringilla mi pellentesque quis. In egestas enim tincidunt posuere fringilla.  Sed faucibus felis at dapibus ultricies. Nullam ante augue, dapibus eu malesuada sed, ornare non diam. Mauris tincidunt nec nibh ut mollis. Phasellus et libero eu lacus convallis consectetur vitae vitae nisi. In dictum, mauris ac laoreet pretium, dui dolor mollis sapien, ut condimentum odio odio in est.
            </p>
            <p>
              Donec sit amet metus vulputate, eleifend purus nec, auctor nisl. Donec accumsan sem in cursus laoreet. Curabitur egestas mauris odio, et fringilla mi pellentesque quis. In egestas enim tincidunt posuere fringilla.
            </p>
            <p>Here are two text boxes.</p>
            <FormRow>
              <Textbox label="Label" placeholder="Placeholder" id="textbox--foo" width="one-quarter" />
              <Textbox label="Label" addonPlacement="before" id="textbox--bar">
                <FormElementAddon>
                  <Search />
                </FormElementAddon>
              </Textbox>
            </FormRow>
          </Form>
        </Section>
        <Section title="Checkboxes">
          <Form onSubmit={this.handleFormSubmit}>
            <FormRow>
              <Checkbox id="checkbox--a" grow={false}>Foo</Checkbox>
              <Checkbox id="checkbox--b" grow={false}>Foo</Checkbox>
              <Checkbox id="checkbox--c" grow={false}>Foo</Checkbox>
              <Radio groupID="radio-group" id="radio--a" grow={false}>Foo</Radio>
              <Radio groupID="radio-group" id="radio--b" grow={false}>Foo</Radio>
              <Radio groupID="radio-group" id="radio--c" grow={false}>Foo</Radio>
            </FormRow>
          </Form>
        </Section>
        <Section title="Select Elements">
          <Form onSubmit={this.handleFormSubmit}>
            <p className="copy--lead">
              <code>Select</code> components display a toggleable list of child <code>SelectItem</code> components.
            </p>
            <p>By default, they will embody the following appearance:</p>
            <FormRow>
              <Select id="my-items" grow={false} label="Select Label" width="one-half">
                <SelectItem id="my-placeholder" placeholder>Select an item</SelectItem>
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
            </FormRow>
            <p>They can also have a totally custom appearance:</p>
            <FormRow>
              <Select
                grow={false}
                id="custom-trigger-element"
                matchTriggerWidth={false}
                menuAlign="right"
                omitFormValue
                persistTrigger
                triggerComponent={CustomTriggerComponent}>
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
            </FormRow>
          </Form>
        </Section>
        <Section title="Form Composition">
          <Form onSubmit={this.handleFormSubmit} ref={(ref) => this.formRef = ref}>
            <FormRow>
              <Textbox label="Textbox Label" placeholder="Placeholder" id="another-example" width="one-quarter" />
              <Checkbox id="checkbox-a" labelOffset matchTextboxHeight width="auto">
                Checkbox
              </Checkbox>
              <Select id="select-a" labelOffset width="one-half">
                <SelectItem id="my-placeholder" placeholder>Select A</SelectItem>
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
            </FormRow>
            <FormRow>
              <Textbox label="Textbox Label" id="foo-example" width="one-half" />
              <Checkbox id="my-checkbox" labelOffset matchTextboxHeight width="auto">
                Something Something...
              </Checkbox>
              <Select id="my-items" labelOffset>
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
            </FormRow>
            <FormRow>
              <FormGroup label="Form Group Label">
                <FormRow>
                  <Radio groupID="radio-group" id="radio-id-a" matchTextboxHeight value="a" width="auto">
                    Radio A
                  </Radio>
                  <Radio groupID="radio-group" id="radio-id-b" matchTextboxHeight value="b" width="auto">
                    Radio B
                  </Radio>
                  <Radio groupID="radio-group" id="radio-id-c" matchTextboxHeight value="c" width="auto">
                    Radio C
                  </Radio>
                </FormRow>
              </FormGroup>
              <Select id="more-items" labelOffset width="one-half">
                <SelectItem id="more-placeholder" placeholder>Please Select an Item</SelectItem>
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
              <Button labelOffset priority="secondary" width="auto" onClick={() => this.formRef.resetForm()}>
                Reset
              </Button>
              <Button labelOffset priority="primary" type="submit" width="auto">
                Submit
              </Button>
            </FormRow>
          </Form>
        </Section>
        <Section title="Forms With Errors">
          <Form onChange={({formData}) => console.log(formData)} onSubmit={this.handleFormSubmit}>
            <FormRow>
              <FormError>
                This is an error!
              </FormError>
            </FormRow>
            <FormRow>
              <FormGroup label="Form Group Label">
                <FormRow>
                  <Radio groupID="radio-group" id="radio-id-a" matchTextboxHeight value="a" width="auto">
                    Radio A
                  </Radio>
                  <Radio groupID="radio-group" id="radio-id-b" matchTextboxHeight value="b" width="auto">
                    Radio B
                  </Radio>
                  <Radio groupID="radio-group" id="radio-id-c" matchTextboxHeight value="c" width="auto">
                    Radio C
                  </Radio>
                </FormRow>
              </FormGroup>
              <Select id="more-items" labelOffset width="one-half">
                <SelectItem id="more-placeholder" placeholder>Please Select an Item</SelectItem>
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
        <Section title="Inverse Styles" inverse padded>
          <Form onSubmit={this.handleFormSubmit}>
            <FormRow>
              <FormError>
                This is an error!
              </FormError>
            </FormRow>
            <FormRow>
              <Textbox label="Textbox Label" placeholder="Placeholder" id="another-example" width="one-quarter" />
              <Checkbox id="apply-inverse-styling" labelOffset matchTextboxHeight width="auto">
                Apply inverse styling
              </Checkbox>
              <Select id="inverse-select-a" labelOffset width="one-half">
                <SelectItem id="my-placeholder" placeholder>Select an option (A)</SelectItem>
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
            </FormRow>
            <FormRow>
              <Textbox label="Textbox Label" id="inverse-textbox" width="one-half" />
              <Checkbox id="inverse-something" labelOffset matchTextboxHeight width="auto">
                Something Something...
              </Checkbox>
              <Select id="inverse-select-b" labelOffset>
                <SelectItem id="my-placeholder" placeholder>Select an option (B)</SelectItem>
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
            </FormRow>
            <FormRow>
              <FormGroup label="Form Group Label">
                <FormRow>
                  <Radio groupID="radio-group" id="radio-id-a" matchTextboxHeight value="a" width="auto">
                    Radio A
                  </Radio>
                  <Radio groupID="radio-group" id="radio-id-b" matchTextboxHeight value="b" width="auto">
                    Radio B
                  </Radio>
                  <Radio groupID="radio-group" id="radio-id-c" matchTextboxHeight value="c" width="auto">
                    Radio C
                  </Radio>
                </FormRow>
              </FormGroup>
              <Select id="more-items" labelOffset width="one-half">
                <SelectItem id="more-placeholder" placeholder>Please Select an Item</SelectItem>
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
            </FormRow>
            <FormRow justify="end">
              <Button priority="tertiary" width="auto">
                Clear
              </Button>
              <Button priority="primary" type="submit" width="auto">
                Submit
              </Button>
            </FormRow>
          </Form>
        </Section>
      </Container>
    );
  }
}

export default TextBoxesView;
