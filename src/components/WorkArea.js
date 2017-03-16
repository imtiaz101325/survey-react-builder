import React from 'react';

import EditableSurvey from './EditableSurvey';
import AddButton from './AddButton';

const WorkArea = ({
  models,
  addModel,
  toggleButtons,
  showButtons,
  surveyOptions
}) => {
    return (
        <div>
            {models.map((json) => <EditableSurvey modelJSON={json}/>)
}
            <AddButton
              handleAddModel={addModel}
              handleToggleButtons={toggleButtons}
              showButtons={showButtons}
              options={surveyOptions}/>
        </div>
    )
}

export default WorkArea;
