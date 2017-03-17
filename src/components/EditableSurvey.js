import React, { PropTypes } from 'react';
import { Survey, Model } from "survey-react";
import { Button } from 'reactstrap';

import './EditableSurvey.css'

const EditableSurvey = ({
  model,
  onDelete,
  id,
  validators,
  choices,
  tab }) => {
  const surveyModel = new Model({
    showNavigationButtons: false,
    questions: [
      model
    ]
  });

  return (
    <div className="EditableSurvey--wrapper" >
      <Button color="danger" size="sm" onClick={() => {
        onDelete(id, tab, validators, choices)
      }} >Delete</Button>
      <Button color="secondary" size="sm" >Edit</Button>
      <Survey model={surveyModel} />
    </div>
  )
}

EditableSurvey.propTypes = {
  model: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  validators: PropTypes.arrayOf(PropTypes.string).isRequired,
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  tab: PropTypes.string.isRequired
}
export default EditableSurvey;
