import { generate as generateId } from 'shortid';

import {
  EDIT_SURVEY,
  DELETE_SURVEY,
  MOVE_SURVEY,
  ADD_TAB,
  DELETE_TAB,
  FOCUS_TAB,
  SHOW_MODAL,
  HIDE_MODAL,
} from './index';

export const addTab = () => {
  return {
    type: ADD_TAB,
    id: generateId(),
    options: {
      name: 'Page Name',
      title: '',
      navigationButtonsVisibility: {
        value: 'hide',
        option: [
          'iherit',
          'show',
          'hide'
        ],
      },
      questions: []
    }
  }
}

export const focusTab = tabId => {
  return {
    type: FOCUS_TAB,
    id: tabId
  }
}

export const deleteTab = (tabId, focusId) => {
  return {
    type: DELETE_TAB,
    tabId,
    focusId
  }
}

export const editSurvey = (tabId, surveyId, options) => {
  return {
    type: EDIT_SURVEY,
    tab: tabId,
    survey: surveyId,
    options: options
  }
}


export const deleteSurvey = (id, tab, validators, choices) => {
  return {
    type: DELETE_SURVEY,
    id: id,
    tab,
    validators,
    choices
  }
}

export const moveSurvey = ({ sourceId, targetId, tab }) => {
  return {
    type: MOVE_SURVEY,
    sourceId,
    targetId,
    tab
  }
}

export const showModal = (type, id) => {
  return {
    type: SHOW_MODAL,
    optionsType: type,
    id
  }
}


export const hideModal = (options, type, id) => {
  return {
    type: HIDE_MODAL,
    options,
    optionsType: type,
    id
  }
}
