const addSingleInput = (model) => {
  return {
    type: 'ADD_SINGLE_INPUT',
    model: model
  }
}

const addComment = (model) => {
  return {
    type: 'ADD_COMMENT',
    model: model
  }
}

const addCheckBox = (model) => {
  return {
    type: 'ADD_COMMENT',
    model: model
  }
}

const toggleButtons = (toggleState) => {
  return {
    type: 'TOGGLE_BUTTON',
    buttonState: toggleState
  }
}

const revealButton = (currentState) => {
  return {
    type: 'REVEAL_BUTTON',
    buttonState: currentState
  }
}



export default addSingleInput;
