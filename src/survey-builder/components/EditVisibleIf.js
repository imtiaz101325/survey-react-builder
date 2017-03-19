import React from 'react';
import {
  Form, FormGroup, FormControl,
  HelpBlock,
} from 'react-bootstrap';

const EditVisibleIf = ({ value, action, name }) => (
    <Form>
      <br />
      <FormGroup key={ name }>
        <FormControl componentClass="textarea"
                     value={
                       value
                     }
                     onChange={
                       event => action(event,'Visible If', null, 'TEXTAREA')
                     }
                   />
      </FormGroup>
      <HelpBlock>
        Please enter a boolean expression. It should return true
        to keep the question/page visible. For example:
        {
          '{question1} = "value1" or ({question2} = 3 and {question3} < 5)'
        }
      </HelpBlock>
  </Form>
)

export default EditVisibleIf;
