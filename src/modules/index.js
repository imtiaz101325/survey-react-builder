import { combineReducers } from 'redux';

import addButton from './AddSurvey';

const rootReducer = combineReducers({
  editor: addSurvey
});

export default rootReducer;
