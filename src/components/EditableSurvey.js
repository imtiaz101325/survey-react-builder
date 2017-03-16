import React, { PropTypes } from 'react';
import { Survey, Model } from "survey-react";
import { Button } from 'reactstrap';

import './EditableSurvey.css'

const EditableSurvey = ({ model, onDelete, id, key }) => {

  const surveyModel = new Model(model);

  return (
    <div className="EditableSurvey--wrapper" >
      <Button color="danger" size="sm" onClick={onDelete(id)} >Delete</Button>
      <Button color="secondary" size="sm" >Edit</Button>
      <Survey model={surveyModel} />
    </div>
  )
}

EditableSurvey.propTypes = {
  model: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}
export default EditableSurvey;
