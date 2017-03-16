const ADD_SINGLE_INPUT = 'ADD_SINGLE_INPUT';
const ADD_COMMENT = 'ADD_COMMENT';
const TOGGLE_BUTTON = 'TOGGLE_BUTTON';
const REVEAL_BUTTON = 'REVEAL_BUTTON';

export const addSingleInput = (model) => {
  return {
    type: 'ADD_SINGLE_INPUT',
    model: model
  }
}

export const addComment = (model) => {
  return {
    type: 'ADD_COMMENT',
    model: model
  }
}

export const addCheckBox = (model) => {
  return {
    type: 'ADD_COMMENT',
    model: model
  }
}

export const toggleAddButtons = (event) => {
  return {
    type: 'TOGGLE_BUTTON',
    payload: event
  }
}



const addButton = (state = {
    editor: [],
    showButtons: false
}, action) => {
    switch (action.type) {
        case 'ADD_SINGLE_INPUT':
            return Object.assign({}, state, {
                editor: [
                    ...state.editor,
                    action.model
                ]
            });
            break;
        case 'TOGGLE_BUTTON':
            return Object.assign({}, state,{
              showButtons: !state.showButtons
            })
        default:
            return state;
    }
}

export default addButton;
