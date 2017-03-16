import React from 'react';

import AddButton from './AddButtons';
// import EditModal from './EditModal';
import Preview from './Preview';
import SurveyTabs from './SurveyTabs';


const SurveyBuilder = ({
  tabs,
  questions,
  selectedTab,
  previewModel,
  handleSurveyDelete,
  handleAddNewTab,
  handleFocusTab,
  addButtonActions,
  handleEditSurvey,
}) => {
    return (
        <div>
            {/* <EditModal /> */}
            <SurveyTabs tabs={tabs}
                        questions={questions}
                        handleSurveyDelete={handleSurveyDelete}
                        selectedTab={selectedTab}
                        addNewTab={handleAddNewTab}
                        focusTab={handleFocusTab} />
            <AddButton actions={addButtonActions} />
            <Preview previewModel={previewModel}
                     editSurvey={handleEditSurvey} />
        </div>
    )
}

export default SurveyBuilder;
