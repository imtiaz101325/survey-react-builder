import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import AddButton from './AddButtons';
import EditModal from './EditModal';
import Preview from './Preview';
import SurveyTabs from './SurveyTabs';


const SurveyBuilder = ({
  modal,
  handleShowModal,
  handleHideModal,
  modalOptions,

  tabs,
  questions,
  handleSurveyDelete,
  handleAddNewTab,
  handleFocusTab,
  handleDeleteTab,
  handleSurveyMove,

  selectedTab,
  addButtonAction,

  previewModel
}) => {
    return (
        <div>
          <EditModal visibility={modal}
                     onHide={handleHideModal}
                     options={modalOptions} />
          <Grid fluid>
              <Row>
                <Col md={6}>
                  <h1>Builder</h1>
                  <SurveyTabs tabs={tabs}
                              questions={questions}
                              handleSurveyDelete={handleSurveyDelete}
                              handleOnSurveyMove={handleSurveyMove}
                              selectedTab={selectedTab}
                              addNewTab={handleAddNewTab}
                              deleteTab={handleDeleteTab}
                              focusTab={handleFocusTab}
                              showModal={handleShowModal} />
                  <AddButton action={addButtonAction}
                             tab={selectedTab} />
                </Col>
                <Col md={6}>
                  <h1>Preview</h1>
                  <Preview previewModel={previewModel}
                           editSurvey={handleShowModal} />
                </Col>
              </Row>
          </Grid>
        </div>
    )
}

export default SurveyBuilder;
