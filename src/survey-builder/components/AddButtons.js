import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { generate as generateId } from 'shortid';

import './AddButtons.css';

const AddButtons = ({ action, tab }) => (
  <div className='AddButtons'>
    <Button color='primary' className="btn-circle" disabled
            >+</Button>
    {
      [
         {
           color: 'primary',
           name: 'S',
           type: 'SINGLE_INPUT'
         },
         {
           color: 'primary',
           name: 'Rd',
           type: 'RADIO_GROUP',
         },
         {
           color: 'primary',
           name: 'D',
           type: 'DROPDOWN',
         },
         {
           color: 'primary',
           name: 'Ck',
           type: 'CHECKBOX',
         },
         {
           color: 'primary',
           name: 'Rt',
           type: 'RATING',
         },
         {
           color: 'primary',
           name: 'Co',
           type: 'COMMENT',
         }
       ].map(
        ({ color, name, type }, key) =>(
          <Button key={key}
                  bsStyle={color}
                  onClick={() => {
                    const survey = generateId();
                    action(tab, survey, type);
                  }}
                  className="btn-circle"
                  >{name}</Button>
      ))
    }
  </div>
);

AddButtons.propTypes = {
  action: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired
}

export default AddButtons;
