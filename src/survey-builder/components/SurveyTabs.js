import React, { PropTypes } from 'react';
import { Button } from 'reactstrap';

import EditableSurvey from './EditableSurvey';

const SurveyTabs = ({
  tabs,
  questions,
  selectedTab,
  handleSurveyDelete,
  handleOnSurveyMove,
  addNewTab,
  focusTab,
  deleteTab
 }) => (
  <div>
    <div>
      {tabs.map(
        ( { name, id }, key, arr) => {
          // if(selectedTab === key){ !!add classnames later
            return <div key={key} >
              <div className="WorkArea--tab WorkArea--tab-selected"
                          onClick={() => {
                            focusTab(id);
                          }}

                          style={{display: 'inline'}}
                          >{name}</div>

                          {
                            (id === selectedTab) ?
                              <span >✓</span>
                            : <sapn ></sapn>
                          }
              {
                (key === 0)?
                <Button color="danger"
                        size="sm"
                        disabled
                        >-</Button> :
                <Button color="danger"
                        size="sm"
                        onClick={() => {
                          if(id === selectedTab){
                            deleteTab(id, arr[key-1].id);
                          }else{
                            deleteTab(id, selectedTab);
                          }
                        }}
                        >-</Button>
              }
            </div>
          // }
        }
      )}
      <Button color="primary"
              size="sm"
              onClick={addNewTab}
              >+</Button>
    </div>
    <div>
      {
        (questions.length) ?
        questions.map(
          ({questionModel, id}, key) => <EditableSurvey model={questionModel}
                                                        tab={selectedTab}
                                                        onDelete={handleSurveyDelete}
                                                        onMove={handleOnSurveyMove}
                                                        validators={questions.validators || []} //error here
                                                        choices={questions.choices || []}
                                                        id={id}
                                                        key={key}
                                                        serial={key} />
        ) :
          <div />

      }
    </div>
  </div>
)

SurveyTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })).isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    json: PropTypes.object,
    id: PropTypes.string
  })).isRequired,
  handleSurveyDelete: PropTypes.func,
  selectedTab: PropTypes.string.isRequired,
  addNewTab: PropTypes.func,
  focusTab: PropTypes.func
}

export default SurveyTabs;
