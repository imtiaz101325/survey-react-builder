import { ADD_SURVEY } from './index';

export default (tabId, surveyId, surveyType) => {

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
        visible: true,
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
