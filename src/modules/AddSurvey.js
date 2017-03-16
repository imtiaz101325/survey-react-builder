const ADD_SINGLE_INPUT = 'ADD_SINGLE_INPUT';
const ADD_COMMENT = 'ADD_COMMENT';
// const TOGGLE_BUTTONS = 'TOGGLE_BUTTON';
const REVEAL_BUTTONS = 'REVEAL_BUTTON';
const HIDE_BUTTONS = 'HIDE_BUTTONS';

export const addSingleInput = (model) => {
    return {type: 'ADD_SINGLE_INPUT', model: model}
}

export const addComment = (model) => {
    return {type: 'ADD_COMMENT', model: model}
}

export const addCheckBox = (model) => {
    return {type: 'ADD_COMMENT', model: model}
}

// export const toggleAddButtons = (event) => {
//   return {
//     type: 'TOGGLE_BUTTON',
//     payload: event
//   }
// }

export const revealButtons = () => {
    return {type: REVEAL_BUTTONS}
}

export const hideButtons = () => {
    return {type: HIDE_BUTTONS}
}

const addButton = (state = {
    editor: [],
    showButtons: false
}, action) => {
    switch (action.type) {
        case ADD_SINGLE_INPUT:
            return Object.assign({}, state, {
                editor: [
                    ...state.editor,
                    action.model
                ]
            });
            break;
        // case TOGGLE_BUTTON:
        //     return Object.assign({}, state, {
        //         showButtons: !state.showButtons
        //     })
        case REVEAL_BUTTONS:
          return Object.assign({}, state, {
            showButtons: true
          })
          break;
        case HIDE_BUTTONS:
          return Object.assign({}, state, {
            showButtons: false
          })
          break;
        default:
            return state;
    }
}

export default addButton;
