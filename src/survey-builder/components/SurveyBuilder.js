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
  addButtonActions,

  previewModel
}) => {
    return (
        <Grid fluid>
            <EditModal visibility={modal}
                       onHide={handleHideModal}
                       options={modalOptions} />
            <Row>
              <Col md={6}>
                <SurveyTabs tabs={tabs}
                            questions={questions}
                            handleSurveyDelete={handleSurveyDelete}
                            handleOnSurveyMove={handleSurveyMove}
                            selectedTab={selectedTab}
                            addNewTab={handleAddNewTab}
                            deleteTab={handleDeleteTab}
                            focusTab={handleFocusTab}
                            showModal={handleShowModal} />
                <AddButton actions={addButtonActions}
                           tab={selectedTab} />
              </Col>
              <Col md={6}>
                <Preview previewModel={previewModel}
                         showModal={handleShowModal} />
              </Col>
            </Row>
        </Grid>
    )
}

export default SurveyBuilder;
