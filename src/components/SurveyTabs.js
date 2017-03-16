import React, { PropTypes } from 'react';
import { Button } from 'reactstrap';

import EditableSurvey from './EditableSurvey';

const SurveyTabs = ({
  tabs,
  questions,
  selectedTab,
  handleSurveyDelete,
  addNewTab,
  focusTab
 }) => (
  <div>
    <div>
      {tabs.map(
        ( name , key) => {
          if(selectedTab === key){
            return <div className="WorkArea--tab WorkArea--tab-selected"
                        onClick={focusTab(key)}
                        >{name}</div>
          }else{
            return <div className="WorkArea--tab"
                        onClick={focusTab(key)}
                        >{name}</div>
          }
        }
      )}
      <Button color="primary"
              size="sm"
              onClick={addNewTab}
              >+</Button>
    </div>
    <div>
      {
        questions.map(
          ({json, id}, key) => <EditableSurvey modelJSON={json}
                                    onDelete={handleSurveyDelete(id, key)}
                                    id={id}
                                    key={key} />
        )
      }
    </div>
  </div>
)

SurveyTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    json: PropTypes.object,
    id: PropTypes.string
  })).isRequired,
  handleSurveyDelete: PropTypes.func,
  selectedTab: PropTypes.number,
  addNewTab: PropTypes.func,
  focusTab: PropTypes.func
}

export default SurveyTabs;
