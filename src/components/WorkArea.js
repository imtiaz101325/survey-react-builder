import React from 'react';

import EditableSurvey from './EditableSurvey';
import AddButton from './AddButton';

const WorkArea = ({
  models,
  addModel,
  revealButtonsAction,
  hideButtonsAction,
  showButtons,
  surveyOptions
}) => {
    return (
        <div>
            {models.map((json) => <EditableSurvey modelJSON={json}/>)
}
            <AddButton
              handleAddModel={addModel}
              handleRevealButtons={revealButtonsAction}
              handleHideButtons={hideButtonsAction}
              showButtons={showButtons}
              options={surveyOptions}/>
        </div>
    )
}

export default WorkArea;
