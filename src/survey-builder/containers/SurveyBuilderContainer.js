import { compose } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {
  addTab,
  deleteSurvey,
  focusTab,
  deleteTab,
  moveSurvey,
  showModal,
  hideModal,
} from '../modules/actions';

import addSurvey from '../modules/addSurveyAction';

import {
  selectedTab,
  getModal,
  getTabs,
  getQuestions,
  getPreview,
  getModalOption,
} from '../selectors/SurveySelectors';

import SurveyBuilder from '../components/SurveyBuilder';

const mapStateToProps = (state) => {
    return {
      tabs: getTabs(state),
      questions: getQuestions(state),
      selectedTab: selectedTab(state),
      modal: getModal(state),
      modalOptions: getModalOption(state),
      previewModel: getPreview(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      handleSurveyDelete: (id, tab, validators, choices) => {
        dispatch(deleteSurvey(id, tab, validators, choices))
      },
      handleAddNewTab: () => {
        dispatch(addTab())
      },
      handleFocusTab: id => {
        dispatch(focusTab(id))
      },
      addButtonAction: (tabId, surveyId, surveyType) => {
        dispatch(addSurvey(tabId, surveyId, surveyType));
      },
      // handleEditSurvey,
      handleDeleteTab: (tabId, focusId) => {
        dispatch(deleteTab(tabId, focusId));
      },
      handleSurveyMove: (sourceId,targetId, tab) => {
        dispatch(moveSurvey(sourceId, targetId, tab))
      },
      handleShowModal: (type, id) => {
        dispatch(showModal(type, id));
      },
      handleHideModal: ({ options, type, id }) => {
        dispatch(hideModal(options, type, id));
      },
    }
}

const SurveyBuilderContainer = compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps, mapDispatchToProps)
)(SurveyBuilder);

export default SurveyBuilderContainer;
