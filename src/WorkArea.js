import React from 'react';
import { Button } from 'reactstrap';
import { Model, Survey } from "survey-react";

const WorkArea = () => {

  const surveyJSON = {
      showNavigationButtons: false,
      pages : [
        {
            name: "page1",
            questions: [
                {
                    type: "text",
                    name: "question1"
                }
            ]
        }, {
            name: "page2",
            questions: [
                {
                    type: "text",
                    name: "question1"
                }
            ]
        }
      ]
  }

  const surveyBuilder = () => {
    return (
      <div className="survey-entry-wrapper" >
        <Survey model={new Model(surveyJSON)} />
        <Button color="secondary" size="sm" >Edit</Button>
        <Button color="danger" size="sm" >Delete</Button>
      </div>
    )
  }

  let componentGroup = [surveyBuilder(), surveyBuilder()];

  return (
    <div>
      {componentGroup}
      <Button color="primary"
        >Add</Button>
    </div>
  )
}

export default WorkArea;
