import { generate as generateId } from 'shortid';

const ADD_SURVEY = 'ADD_SURVEY';
const ADD_SINGLE_INPUT = 'ADD_SINGLE_INPUT';
const ADD_RADIO_GROUP = 'ADD_RADIO_GROUP';
const ADD_DROPDOWN = 'ADD_DROPDOWN';
const ADD_CHECKBOX = 'ADD_CHECKBOX';
const ADD_RATING = 'ADD_RATING';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_SURVEY = 'DELETE_SURVEY';
const MOVE_SURVEY = 'MOVE_SURVEY';
const ADD_TAB = 'ADD_TAB';
const DELETE_TAB = 'DELETE_TAB';
const FOCUS_TAB = 'FOCUS_TAB';

export const addTab = () => {
  return {
    type: ADD_TAB,
    id: generateId(),
    options: {
      name: 'Page Name',
      title: 'Page Title',
      navigationButtonsVisibility: 'hiden',
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

export const addSingleInput = (surveyId) => {
    return {
      type: ADD_SINGLE_INPUT,
      id: surveyId,
      options: {
        type: 'text',
        name: 'Question Name',
        validators: [],
        choices: [
          {
           value: 1,
           text: "first item"
          },
          {
           value: 2,
           text: "second item"
          },
          {
           value: 3,
           text: "third item"
          }
        ]
      }
     }
}

export const addRadioGroup = (surveyId) => {
    return {
      type: ADD_RADIO_GROUP,
      id: surveyId,
      options: {
        type: 'radiogroup',
        name: 'Radio Group Name',
        validators: [],
        choices: [
          {
           value: 1,
           text: "first item"
          },
          {
           value: 2,
           text: "second item"
          },
          {
           value: 3,
           text: "third item"
          }
        ]
      }
     }
}


export const addDropdown = (surveyId) => {
    return {
      type: ADD_DROPDOWN,
      id: surveyId,
      options: {
        type: 'dropdown',
        name: 'Dropdown Name',
        validators: [],
        choices: [
          {
           value: 1,
           text: "first item"
          },
          {
           value: 2,
           text: "second item"
          },
          {
           value: 3,
           text: "third item"
          }
        ]
      }
     }
}

export const addCheckbox = (surveyId) => {
    return {
      type: ADD_CHECKBOX,
      id: surveyId,
      options: {
        type: 'checkbox',
        name: 'Checkbox Name',
        validators: [],
        choices: [
          {
           value: 1,
           text: "first item"
          },
          {
           value: 2,
           text: "second item"
          },
          {
           value: 3,
           text: "third item"
          }
        ]
      }
     }
}

export const addRating = (surveyId) => {
    return {
      type: ADD_RATING,
      id: surveyId,
      options: {
        type: 'rating',
        name: 'Rating Name',
        validators: []
      }
     }
}

export const addComment = (surveyId) => {
    return {
      type: ADD_COMMENT,
      id: surveyId,
      options: {
        type: 'comment',
        name: 'Comment Name',
        validators: []
      }
     }
}

export const addSurvey = (tabId, surveyId) => {
  return {
    type: ADD_SURVEY,
    tab: tabId,
    survey: surveyId
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
    title: 'Page Title',
    navigationButtonsVisibility: 'hiden',
    questions: []
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

    default:
      return state;
  }
}

export const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    // case DELETE_SURVEY:
    //   const { [action.id]: deleted, ...newState } = state;
    //   return newState;
    case ADD_SINGLE_INPUT:
      return {
        ...state,
        [action.id]: {
          ...action.options
        }
      }
    case ADD_RADIO_GROUP:
      return {
        ...state,
        [action.id]: {
          ...action.options
        }
      }
    case ADD_DROPDOWN:
      return {
        ...state,
        [action.id]: {
          ...action.options
        }
      }
    case ADD_CHECKBOX:
      return {
          ...state,
          [action.id]: {
            ...action.options
          }
        }
    case ADD_RATING:
      return {
          ...state,
          [action.id]: {
            ...action.options
          }
        }
    case ADD_COMMENT:
      return {
          ...state,
          [action.id]: {
            ...action.options
          }
        }
    default:
      return state;
  }
}


export const triggersReducer = (state = {}, action) => {
  return state;
}

export const modalUiReducer = (state = {}, action) => {
  return state;
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
