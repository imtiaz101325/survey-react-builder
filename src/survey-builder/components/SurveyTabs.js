import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import EditableSurvey from './EditableSurvey';

const SurveyTabs = ({
  tabs,
  questions,
  selectedTab,
  handleSurveyDelete,
  handleOnSurveyMove,
  addNewTab,
  focusTab,
  deleteTab,
  showModal
 }) => (
  <div>
    <div style={{cursor: 'pointer'}}>
      {tabs.map(
        ( { name, id }, key, arr) => {
          // if(selectedTab === key){ !!add classnames later
            return <span key={key} >
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
                <Button bsStyle="danger"
                        bsSize="xsmall"
                        disabled
                        >-</Button> :
                <Button bsStyle="danger"
                        bsSize="xsmall"
                        onClick={() => {
                          if(id === selectedTab){
                            deleteTab(id, arr[key-1].id);
                          }else{
                            deleteTab(id, selectedTab);
                          }
                        }}
                        >-</Button>
              }
            </span>
          // }
        }
      )}
      <Button bsStyle="primary"
              bsSize="xs"
              onClick={addNewTab}
              >+</Button>
    </div>
    <div>
    <Button className="pull-right"
          bsStyle="primary"
          bsSize="sm"
          onClick={
            () => showModal('PAGE', selectedTab)
          }
          >Edit Page Options</Button>
    <div className="clearfix" />
    <br />
    {/*TODO -- show page title here */}
      {
        (questions.length) ?
        questions.map(
          ({questionModel, id}, key) => <EditableSurvey model={questionModel}
                                                        tab={selectedTab}
                                                        onDelete={handleSurveyDelete}
                                                        onMove={handleOnSurveyMove}
                                                        onShowModal={showModal}
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
