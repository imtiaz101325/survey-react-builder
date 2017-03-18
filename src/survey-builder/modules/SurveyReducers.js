import { generate as generateId } from 'shortid';

const ADD_SURVEY = 'ADD_SURVEY';
const EDIT_SURVEY = 'EDIT_SURVEY';
const DELETE_SURVEY = 'DELETE_SURVEY';
const MOVE_SURVEY = 'MOVE_SURVEY';
const ADD_TAB = 'ADD_TAB';
const DELETE_TAB = 'DELETE_TAB';
const FOCUS_TAB = 'FOCUS_TAB';
const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

export const addTab = () => {
  return {
    type: ADD_TAB,
    id: generateId(),
    options: {
      name: 'Page Name',
      title: '',
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

export const addSurvey = (tabId, surveyId, surveyType) => {

  let options = {};

  switch (surveyType) {
    case 'SINGLE_INPUT':
      options = {
        type: 'text',
        name: 'Question Name',
        commentText: '',
        indent: {
          value: '0',
          options: [
            '0', '1', '2', '3',
          ]
        },
        inputType: {
          value: 'text',
          options: [
            'date',
            'color',
            'datetime',
            'datetime-local',
            'email',
            'month',
            'number',
            'password',
            'range',
            'tel',
            'text',
            'time',
            'url',
            'week',
          ]
        },
        isRequired: false,
        placeHolder: '',
        size: '25',
        startWithNewLine: true,
        title: '',
        visibleIf: '',
        width: '',
        validators: [],
      }
      break;
    case 'RADIO_GROUP':
      options = {
        type: 'radiogroup',
        name: 'Radio Group Name',
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
        ],
        choicesOrder: {
          value: 'none',
          options: [
            'none',
            'asc',
            'desc',
          ]
        },
        colCount: {
          value: '1',
          options: [
            '0', '1', '2', '3', '4',
          ]
        },
        commentText: '',
        hasComment: false,
        hasOther: false,
        indent: {
          value: '0',
          options: [
            '0', '1', '2', '3',
          ]
        },
        isRequired: false,
        otherErrorText: '',
        otherText: 'Other (describe)',
        startWithNewLine: true,
        storeOthersAsComment: true,
        validators: [],
        title: '',
        visible: true,
        visibleIf: '',
        width: '',
      }
      break;
    case 'DROPDOWN':
      options = {
        type: 'dropdown',
        name: 'Dropdown Name',
        validators: [],
        choices: [
          {
           value: 1,
           text: 'first item'
          },
          {
           value: 2,
           text: 'second item'
          },
          {
           value: 3,
           text: 'third item'
          }
        ],
        choicesOrder: {
          value: 'none',
          options: [
            'none',
            'asc',
            'desc',
          ]
        },
        commentText: '',
        hasComment: false,
        hasOther: false,
        indent: {
          value: '0',
          options: [
            '0', '1', '2', '3',
          ]
        },
        isRequired: false,
        optionsCaption: '',
        otherErrorText: '',
        otherText: 'Other (describe)',
        startWithNewLine: true,
        storeOthersAsComment: true,
        title: '',
        visible: true,
        visibleIf: '',
        width: ''
      }
      break;
    case 'CHECKBOX':
      options = {
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
        ],
        choicesOrder: {
          value: 'none',
          options: [
            'none',
            'asc',
            'desc',
          ]
        },
        colCount: {
          value: '1',
          options: [
            '0', '1', '2', '3', '4',
          ]
        },
        commentText: '',
        hasComment: false,
        hasOther: false,
        indent: {
          value: '0',
          options: [
            '0', '1', '2', '3',
          ]
        },
        isRequired: false,
        otherErrorText: '',
        otherText: 'Other (describe)',
        startWithNewLine: true,
        storeOthersAsComment: true,
        title: '',
        visible: true,
        visibleIf: '',
        width: '',
      }
      break;
    case 'RATING':
      options = {
        type: 'rating',
        name: 'Rating Name',
        validators: [],
        commentText: '',
        hasComment: false,
        indent: {
          value: '0',
          options: [
            '0', '1', '2', '3',
          ]
        },
        isRequired: false,
        maximumRateDescription: '',
        mininumRateDescription: '',
        rateValues: [],
        startWithNewLine: true,
        title: '',
        visible: true,
        visibleIf: '',
        width: '',
      }
      break;
    case 'COMMENT':
      options = {
        type: 'comment',
        name: 'Comment Name',
        validators: [],
        cols: '50',
        commentText: '',
        indent: {
          value: '0',
          options: [
            '0', '1', '2', '3',
          ]
        },
        isRequired: false,
        placeHolder: '',
        rows: '4',
        startWithNewLine: true,
        title: '',
        visible: true,
        visibleIf: '',
        width: '',
      }
      break;
    default:
      break;
  }

  return {
    type: ADD_SURVEY,
    tab: tabId,
    survey: surveyId,
    options: options
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
