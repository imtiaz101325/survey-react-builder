import React from 'react';
import {
  Form, FormGroup, FormControl, ControlLabel,
  Col,
  Glyphicon,
  ButtonGroup, Button, DropdownButton,
  MenuItem,
} from 'react-bootstrap';


const FieldEditor = ({
  fields,
  validatorKey,
  editValidator,
  removeValidator,
}) => (
  <div>
    {
      Object.keys(fields).map(
        (field, fieldKey) => (
          <FormGroup key={ validatorKey + fieldKey + field }>
            <Col md={ 2 } />
            <Col md={ 3 }>
              <ControlLabel>{ field }</ControlLabel>
            </Col>
            <Col md={ 5 }>
              <FormControl type="text"
                           value={
                             fields[field]
                           }
                           onChange={
                             event => {
                               editValidator(event.target.value, field, validatorKey)
                             }
                           }
                         />
            </Col>
            <Col md={ 2 } />
          </FormGroup>
        )
      )
    }
  </div>
)

const EditValidators = ({
  options,
  addValidator,
  editValidator,
  removeAll,
  removeValidator,
}) => (
  <Form horizontal>
    <br />
    {
      options.map(
        ( { type, ...fields }, key) => (
            <div key={ key + type } >
              <FormGroup>
                <Col md={ 1 } />
                <Col md={ 9 }>
                  <ControlLabel>{ type }</ControlLabel>
                </Col>
                <Col md={ 2 }>
                  <Button bsStyle="danger"
                          onClick={
                           () => removeValidator(key)
                          }>
                    <Glyphicon glyph="glyphicon glyphicon-trash" />
                  </Button>
                </Col>
              </FormGroup>
              <FieldEditor fields={ fields }
                           validatorKey={ key }
                           removeValidator={ removeValidator }
                           editValidator={ editValidator }
                         />
            </div>
          )
        )
    }
    <FormGroup>
      <Col md={12}>
        <ButtonGroup className="pull-right" >
          <DropdownButton title="Add"
                          id="add-validator"
                          bsStyle="primary"
                          onSelect={ (key, event ) => {
                            addValidator(key)
                          }}>
            <MenuItem eventKey="1">
              Numeric Validator
            </MenuItem>
            <MenuItem eventKey="2">
              Text Validator
            </MenuItem>
            <MenuItem eventKey="3">
              Answer Count Validator
            </MenuItem>
            <MenuItem eventKey="4">
              Regex Validator
            </MenuItem>
            <MenuItem eventKey="5">
              Email Validator
            </MenuItem>
          </DropdownButton>
          <Button bsStyle="danger" onClick={ () => removeAll('Validators') }>
            Remove All
          </Button>
        </ButtonGroup>
      </Col>
    </FormGroup>
  </Form>
)

export default EditValidators;
