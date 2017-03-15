export const addButton = (state = {
    editor: []
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
        default:
            return state;
    }
}
