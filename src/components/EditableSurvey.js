import React, { PropTypes } from 'react';
import { Survey, Model } from "survey-react";
import { Button } from 'reactstrap';

import './EditableSurvey.css'

const EditableSurvey = ({ modelJSON, onDelete }) => {

  const model = new Model(modelJSON);

  return (
    <div className="EditableSurvey--wrapper" >
      <Button color="danger" size="sm" onClick={onDelete} >Delete</Button>
      <Button color="secondary" size="sm" >Edit</Button>
      <Survey model={model} />
    </div>
  )
}

EditableSurvey.propTypes = {
  modelJSON: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
}
export default EditableSurvey;
