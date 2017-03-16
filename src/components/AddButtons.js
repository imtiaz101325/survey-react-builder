import React, { PropTypes } from 'react';
import { Button } from 'reactstrap';

import './AddButtons.css';

const AddButtons = ({ actions }) => (
  <div className='AddButtons'>
    <Button color='primary'
            >+</Button>
    {
      actions.map(
        ({ color, action, name }, key) =>(
          <Button key={key}
                  color={color}
                  onClick={action()}
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
  })).isRequired
}

export default AddButtons;
