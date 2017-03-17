import { combineReducers } from 'redux';
import { tabsReducer,
         pagesReducer,
         questionsReducer,
         choicesReducer,
         validatorsReducer,
         triggersReducer,
         modalReducer,
         surveyBuilderReducer,
         surveyTabReducer } from './SurveyReducers';

const entitiesReducer = combineReducers({
  pages: pagesReducer,
  questions: questionsReducer,
  choices: choicesReducer,
  validators: validatorsReducer,
  triggers: triggersReducer
});

const uiReducer = combineReducers({
  modal: modalReducer,
  surveyBuilder: surveyBuilderReducer,
  surveyTab: surveyTabReducer
});

const rootReducer = combineReducers({
  tabs: tabsReducer,
  entities: entitiesReducer,
  ui: uiReducer
});

export default rootReducer;
