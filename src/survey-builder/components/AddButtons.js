import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { generate as generateId } from 'shortid';

import './AddButtons.css';

const AddButtons = ({ actions, tab }) => (
  <div className='AddButtons'>
    <Button color='primary' className="btn-circle"
            >+</Button>
    {
      actions.map(
        ({ color, action, name }, key) =>(
          <Button key={key}
                  bsStyle={color}
                  onClick={() => {
                    const survey = generateId();
                    action(tab, survey)
                  }}
                  className="btn-circle"
                  >{name}</Button>
      ))
    }
  </div>
);

AddButtons.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
    action: PropTypes.func
  })).isRequired,
  tab: PropTypes.string.isRequired
}

export default AddButtons;
