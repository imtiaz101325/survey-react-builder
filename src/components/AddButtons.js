import React, { PropTypes } from 'react';
import { Button } from 'reactstrap';

import './AddButtons.css';

const AddButtons = ({ addSingleInput }) => (
  <div className='AddButtons'>
    <Button color="primary" >+</Button>
    <Button color="primary" onClick={addSingleInput}>S</Button>
  </div>
);

AddButtons.propTypes = {
  addSingleInput: PropTypes.func.isRequired
}

export default AddButtons;
