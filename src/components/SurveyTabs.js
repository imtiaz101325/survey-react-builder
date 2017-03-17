import React, { PropTypes } from 'react';
import { Button } from 'reactstrap';

import EditableSurvey from './EditableSurvey';

const SurveyTabs = ({
  tabs,
  questions,
  selectedTab,
  handleSurveyDelete,
  addNewTab,
  focusTab,
  deleteTab
 }) => (
  <div>
    <div>
      {tabs.map(
        ( { name, id }, key) => {
          // if(selectedTab === key){ !!add classnames later
            return <div>
              <div className="WorkArea--tab WorkArea--tab-selected"
                          onClick={() => {
                            focusTab(id)
                          }}
                          key={key}
                          >{name}</div>
              {
                (key === 0)?
                <Button color="danger"
                        size="sm"
                        disabled
                        onClick={() => {
                          deleteTab(id)
                        }}
                        >-</Button> :
                <Button color="danger"
                        size="sm"
                        onClick={() => {
                          deleteTab(id)
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
                                                        validators={questions.validators || []} //error here
                                                        choices={questions.choices || []}
                                                        id={id}
                                                        key={key} />
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
