import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import {
  addTab,
  addSurvey,
  addSingleInput,
  addRadioGroup,
  addDropdown,
  addCheckbox,
  addRating,
  addComment,
  deleteSurvey,
  focusTab,
  deleteTab
 } from '../modules/SurveyReducers';

import SurveyBuilder from '../components/SurveyBuilder';

const tabsArray = state => state.tabs;
const pagesObject = state => state.entities.pages;
const questionsObject = state => state.entities.questions;
const validatorsObject = state => state.entities.validators;
// const triggersObject = state => state.entities.triggers;
const choicesObject = state => state.entities.choices;
const selectedTab = state => state.ui.surveyTab.selectedTab;

const getTabs = createSelector(
  [tabsArray, pagesObject],
  (tabs, pages) => {
    return tabs.map(
      tab => ({
        id: tab,
        name: pages[tab].name
      })
    )
  }
)

const getQuestions = createSelector(
  [ questionsObject, selectedTab, pagesObject ],
  (questions, tab, pages) => {
    if(Object.keys(pages).length ){
      const questionsInTab = pages[tab].questions;

      const shallowQuestions = questionsInTab.map(
        id => ({
          question: questions[id],
          id: id
        })
      )

      return shallowQuestions;
    }

    return [];
  }
);


const questions = createSelector(
  [ getQuestions, validatorsObject, choicesObject ],
  (questions, validators, choices) => {
    return questions.map(
        ({question, id}) => {
          const validatorsArray = question.validators;
          const choicesArray = question.choices;

          question.validators = validatorsArray.map(
            id => validatorsObject[id]
          );

          question.choices = choicesArray.map(
            id => choicesObject[id]
          );

          return {
            questionModel: question,
            validators: validatorsArray,
            choices: choicesArray,
            id
          }
        }
      )
    }
)

const mapStateToProps = (state) => {
    return {
      tabs: getTabs(state),
      questions: questions(state),
      selectedTab: selectedTab(state) //todo preview model
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
      addButtonActions:[
         {
           color: 'primary',
           name: 'S',
           action: (tabId, surveyId) => {
             dispatch(addSurvey(tabId, surveyId));
             dispatch(addSingleInput(surveyId));
           }
         },
         {
           color: 'primary',
           name: 'S',
           action: (tabId, surveyId) => {
             dispatch(addRadioGroup(surveyId));
             dispatch(addSurvey(tabId, surveyId));
           }
         },
         {
           color: 'primary',
           name: 'S',
           action: (tabId, surveyId) => {
             dispatch(addDropdown(surveyId));
             dispatch(addSurvey(tabId, surveyId));
           }
         },
         {
           color: 'primary',
           name: 'S',
           action: (tabId, surveyId) => {
             dispatch(addCheckbox(surveyId));
             dispatch(addSurvey(tabId, surveyId));
           }
         },
         {
           color: 'primary',
           name: 'S',
           action: (tabId, surveyId) => {
             dispatch(addRating(surveyId));
             dispatch(addSurvey(tabId, surveyId));
           }
         },
         {
           color: 'primary',
           name: 'S',
           action: (tabId, surveyId) => {
             dispatch(addComment(surveyId));
             dispatch(addSurvey(tabId, surveyId));
           }
         }
       ],
      // handleEditSurvey,
      handleDeleteTab: id => {
        dispatch(deleteTab(id));
      }
    }
}

const SurveyBuilderContainer = connect(mapStateToProps, mapDispatchToProps)(SurveyBuilder)

export default SurveyBuilderContainer;
