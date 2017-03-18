import React, { PropTypes } from 'react';
import { Survey, Model } from 'survey-react';
import { Button } from 'react-bootstrap';

const Preview = ({ previewModel, editSurvey }) => {
  
  const preview = new Model(previewModel);

  return (
    <div>
      <Button className="pull-right"
            bsStyle="primary"
            bsSize="sm"
            onClick={
              () => editSurvey('SURVEY', 'SURVEY')
            }
            >Edit Survey Options</Button>
      <div className="clearfix" />
      <br />
      <div>
        <Survey model={preview} />
      </div>
    </div>
  )
}

Preview.PropTypes = {
  previewModel: PropTypes.object,
  editSurvey: PropTypes.func
}

export default Preview;
