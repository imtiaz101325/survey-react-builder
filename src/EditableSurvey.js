import React from 'react';
import { Survey, Model } from "survey-react";
import { Button } from 'reactstrap';

const EditableSurvey = ({ modelJSON, onDelete }) => {

  const model = new Model(modelJSON);

  return (
    <div className="EditableSurvey--wrapper" >
      <Survey model={model} />
      <Button color="secondary" size="sm" >Edit</Button>
      <Button color="danger" size="sm" onClick={onDelete} >Delete</Button>
    </div>
  )
}

export default EditableSurvey;
