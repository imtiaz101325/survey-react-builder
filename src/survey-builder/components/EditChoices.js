import React from 'react';
import {
  Form, FormGroup, FormControl,
  Col,
  Glyphicon,
  ButtonGroup, Button,
} from 'react-bootstrap';

const EditChoices = ({
  options,
  action,
  removeOption,
  editOption,
  addOption,
  removeAll
 }) => (
  <Form horizontal>
    <FormGroup key="-1">
      <Col md={ 2 }/>
      <Col md={ 4 }><h5>Value</h5></Col>
      <Col md={ 4 }><h5>Text</h5></Col>
      <Col md={ 2 }/>
    </FormGroup>
    {
      options.map(
        ({ text, value }, key) =>
            <FormGroup key={key}>
              <Col md={ 2 }>
                {/* TODO -- Handle DND */}
                <Button className="pull-right">
                  <Glyphicon glyph="glyphicon glyphicon-align-justify" />
                </Button>
              </Col>
              <Col md={ 4 }>
                <FormControl type="text"
                             value={
                               value
                             }
                             onChange={
                               event => editOption(text, event.target.value, key)
                             }
                           />
              </Col>
              <Col md={ 4 }>
                <FormControl type="text"
                             value={
                               text
                             }
                             onChange={
                               event => editOption(event.target.value, value, key)
                             }
                           />
              </Col>
              <Col md={ 2 }>
                <Button bsStyle="danger"
                        onClick={
                         () => removeOption(key)
                        }>
                  <Glyphicon glyph="glyphicon glyphicon-trash" />
                </Button>
              </Col>
            </FormGroup>
      )
    }
    <FormGroup>
      <Col md={12}>
        <ButtonGroup className="pull-right" >
          <Button bsStyle="primary" onClick={ addOption }>
            Add
          </Button>
          <Button bsStyle="danger" onClick={ () => removeAll('Choices') }>
            Remove All
          </Button>
        </ButtonGroup>
      </Col>
    </FormGroup>
  </Form>
)

export default EditChoices;
