import React from 'react';
import {
  Form, FormGroup, FormControl,
} from 'react-bootstrap';

const EditCompletedHtml = ({ value, action, name }) => (
    <Form>
      <br />
      <FormGroup key={ name }>
        <FormControl componentClass="textarea"
                     value={
                       value
                     }
                     onChange={
                       event => action(event,'Completed HTML', null, 'TEXTAREA')
                     }
                   />
      </FormGroup>
  </Form>
)

export default EditCompletedHtml;
