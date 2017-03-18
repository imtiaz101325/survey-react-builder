import { generate as generateId } from 'shortid';

import {
  ADD_SURVEY,
  EDIT_SURVEY,
  DELETE_SURVEY,
  MOVE_SURVEY,
  ADD_TAB,
  DELETE_TAB,
  FOCUS_TAB,
  SHOW_MODAL,
  HIDE_MODAL,
} from './index';

export const surveyOptionsReducer = (state = {
  clearInvisibleValues: false,
  completeText: '',
  completedHtml: '',
  cookieName: '',
  focusFirstQuestionAutomatic: true,
  goNextPageAutomatic: false,
  locale: {
    value: "en",
    options: [
      'da',
      'de',
      'en',
      'fi',
      'fr',
      'gr',
      'nl',
      'pl',
      'ru',
      'sv',
      'tr',
    ],
  },
  mode: {
    value: 'edit',
    options: [
      'edit',
      'display',
    ],
  },
  pageNextText: '',
  pagePrevText: '',
  questionStartIndex: '',
  questionTitleLocation: {
    value: 'top',
    options: [
      'top',
      'bottom',
    ],
  },
  questionTitleTemplate: '',
  requiredText: '*',
  sendResultOnPageNext: false,
  showCompletedPage:	true,
  showNavigationButtons: true,
  showPageNumbers: false,
  showPageTitles: true,
  showProgressBar: {
    value: 'off',
    options: [
      'off',
      'top',
      'bottom',
    ],
  },
  showQuestionNumbers: {
    value: "on",
    options: [
      'on',
      'onPage',
      'off'
    ],
  },
  showTitle: true,
  storeOthersAsComment: true,
  surveyId: '',
  surveyPostId: '',
  title: '',
  triggers: []
}, action) => {
  switch (action.type) {
    case HIDE_MODAL:
      if(action.optionsType === 'SURVEY'){
        return action.options;
      }
      return state;
    default:
      return state;
  }
}


const initialPageId = generateId();

export const tabsReducer = (state = [
  initialPageId
], action) => {
  switch (action.type) {
    case ADD_TAB:
      return [
        ...state,
        action.id
      ];
    case DELETE_TAB:
      return state.filter(
        id => (id !== action.tabId)
      )
    default:
      return state;

  }
}

export const pagesReducer = (state = {
  [initialPageId]: {
    name: 'Page Name',
    title: '',
    navigationButtonsVisibility: {
      value: 'hide',
      options: [
        'iherit',
        'show',
        'hide',
      ]
    },
    visible: true,
    visibleIf: '',
    questions: [],
  }
}, action) => {
  switch (action.type) {
    case ADD_TAB:
      return {
        ...state,
        [action.id]: {
          ...action.options
        }
      }
    case ADD_SURVEY:
      return {
        ...state,
        [action.tab]: {
          ...state[action.tab],
          questions: [...state[action.tab].questions, action.survey]
        }
      }
    case DELETE_SURVEY:
      return {
        ...state,
        [action.tab]: {
          ...state[action.tab],
          questions: state[action.tab].questions.filter(
            id => (id !== action.id)
          )
        }
      }
    case MOVE_SURVEY:
      const questionsArray = state[action.tab].questions;
      const source = action.sourceId;
      const target = action.targetId;

      //not found
      if(source === -1 || target === -1 ){
        return state;
      }

      const sourceRemoved = questionsArray.filter( id => (id !== source));
      const targetIndex = sourceRemoved.indexOf(target);
      const firstHalf = sourceRemoved.slice(0, targetIndex+1);
      const secondHalf = sourceRemoved.slice(targetIndex+1, sourceRemoved.length);

      return {
        ...state,
        [action.tab]: {
          ...state[action.tab],
          questions: [...firstHalf, source, ...secondHalf]
        }
      }
    case HIDE_MODAL:
      if(action.optionsType === 'PAGE'){
        return {
          ...state,
          [action.id]: {
            ...action.options,
            questions: state[action.id].questions,
          }
        }
      }
      return state;
    default:
      return state;
  }
}

export const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_SURVEY:
      return {
        ...state,
        [action.survey]: {
          ...action.options
        }
      }
    case EDIT_SURVEY:
      return {
        ...state,
        [action.survey]: {
          ...action.options
        }
      }
    case HIDE_MODAL:
      if(action.optionsType === 'QUESTION'){
        return {
          ...state,
          [action.id]: {
            ...action.options,
          }
        }
      }
      return state;
    default:
      return state;
  }
}


export const triggersReducer = (state = {}, action) => {
  return state;
}

export const modalUiReducer = (state = {
  open: false,
  option: 'SURVEY',
  id: 'SURVEY',
}, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        open: true,
        option: action.optionsType,
        id: action.id,
      };
    case HIDE_MODAL:
      return {
        open: false,
        option: action.optionsType,
        id: action.id,
      };
    default:
      return state;
  }
}

export const surveyBuilderUiReducer = (state = {}, action) => {
  return state;
}

export const surveyTabUiReducer = (state = {
  selectedTab: initialPageId
}, action) => {
  switch (action.type) {
    case ADD_TAB:
      return Object.assign({}, state, {
        selectedTab: action.id
      })
    case FOCUS_TAB:
      return Object.assign({}, state, {
        selectedTab: action.id
      })
    case DELETE_TAB:
      return Object.assign({}, state, {
        selectedTab: action.focusId
      })
    default:
      return state;

  }
}
