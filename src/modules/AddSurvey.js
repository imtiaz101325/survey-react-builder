const ADD_SINGLE_INPUT = 'ADD_SINGLE_INPUT';
const ADD_COMMENT = 'ADD_COMMENT';

export const addSingleInput = (model) => {
    return {type: ADD_SINGLE_INPUT, model: model}
}

export const addComment = (model) => {
    return {type: ADD_COMMENT, model: model}
}

const addSurvey = (state, action) => {
  switch (action.type) {
    case ADD_SINGLE_INPUT:

      break;
    default:

  }
}
