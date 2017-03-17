import React, { PropTypes } from 'react';
import { Survey, Model } from "survey-react";
import { Button } from 'reactstrap';
import { compose } from 'redux';
import { DragSource, DropTarget } from 'react-dnd';

import './EditableSurvey.css';

const surveySource = {
  beginDrag(props) {
    return {
      id: props.id,
      tab: props.tab
    };
  }
}

const surveyTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();

    if(sourceProps.id !== targetProps.id){
      targetProps.onMove({
        sourceId: sourceProps.id,
        targetId: targetProps.id,
        tab: sourceProps.tab
      })
    }
  }
}

const EditableSurvey = ({
  connectDragSource,
  connectDropTarget,
  onMove,
  model,
  onDelete,
  id,
  validators,
  choices,
  tab,
  serial
}) => {

  const surveyModel = new Model({
    pages: [
      {
        questions: [
          model
        ]
      }
    ],
    questionStartIndex: ''+(serial+1),
    showNavigationButtons: false,
  });

  return compose(connectDragSource, connectDropTarget)(
    <div className="EditableSurvey--wrapper">
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


export default compose(
  DragSource('SURVEY', surveySource, connect => ({
    connectDragSource: connect.dragSource()
  })),
  DropTarget('SURVEY', surveyTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(EditableSurvey);
