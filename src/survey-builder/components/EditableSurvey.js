import React, { PropTypes } from 'react';
import { Survey, Model } from "survey-react";
import { Button } from 'react-bootstrap';
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
  onShowModal,
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
          Object.assign({}, model, { visible: true })
        ]
      }
    ],
    questionStartIndex: ''+(serial+1),
    showNavigationButtons: false,
  });

  return compose(connectDragSource, connectDropTarget)(
    <div className="EditableSurvey--wrapper">
      <Button bsStyle="danger" bsSize="small" onClick={() => {
        onDelete(id, tab, validators, choices)
      }} >Delete</Button>
      <Button bsStyle="default" bsSize="small" onClick={() => {
        onShowModal('QUESTION', id)
      }}>Edit</Button>
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
