import React from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
} from 'react-bootstrap';

const SelectForm = ({ root, value, option, key, action }) => (
  <FormGroup key={ 'General' + key + option }>
    <ControlLabel>{ option }</ControlLabel>
    <FormControl componentClass="select"
                 onChange={
                   event => action(event, 'General', option, 'SELECT')
                 }
                 placeholder={ value }>
      {
        root.options.map(
          lable => <option value={ lable }
                           key={ option + lable }>{ lable }</option>
        )
      }
    </FormControl>
  </FormGroup>
)

const CheckboxForm = ({ value, action, key, option }) => (
  <Checkbox checked={ value }
                   onChange={
                     event => action(event, 'General', option, 'CHECKBOX')
                    }
                   key={ 'General' + key + option }
                   >{ option }</Checkbox>
)

const TextForm = ({ value, action, key, option, type }) => (
  <FormGroup key={ 'General' + key + option }>
    <ControlLabel>{ option }</ControlLabel>
    <FormControl type={ type }
                 value={
                   value
                 }
                 onChange={
                   event => action(event, 'General', option, 'TEXT')
                 }
               />
  </FormGroup>
)

const EditGeneralOptions = ({ options, handleSelect }) => (
  <Form>
    {
      Object.keys(options.General).map(
        (option, key) => {
          const root = options.General[option];
          let value = options.General[option];

          if (root && root.value) {
            value = root.value;
          }

          if(root && root.options){
            return <SelectForm root={ options.General[option] }
                               value={ value }
                               option={ option }
                               key={ key }
                               action={ handleSelect } />
          } else {
            const computedType = (typeof value === 'boolean') ? 'checkbox' : 'text';

            if(computedType === 'checkbox') {
              return <CheckboxForm value={ value }
                                   option={ option }
                                   key={ key }
                                   action={ handleSelect } />
            }

            if (option === 'type' ) return null;

            return <TextForm type={ computedType }
                             value={ value }
                             option={ option }
                             key={ key }
                             action={ handleSelect } />
          }
        }
      )
    }
  </Form>
)

export default EditGeneralOptions;
