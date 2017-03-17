import React, { PropTypes } from 'react';
import { Survey, Model } from 'survey-react';
import { Button } from 'react-bootstrap';

const Preview = ({ previewModel, editSurvey }) => {

  const preview = new Model(previewModel);

  return (
    <div>
      <Button bsStyle="primary"
              onClick={editSurvey}
              >Options</Button>
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
