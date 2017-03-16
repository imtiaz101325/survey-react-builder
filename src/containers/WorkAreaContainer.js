import { connect } from 'react-redux';

import addButton, { addSingleInput, toggleAddButtons } from '../modules/AddSurvey';

import WorkArea from '../components/WorkArea';

const randomFun = (models) => models;
const getButtonState = (state) => state;

const mapStateToProps = (state) => {
  return {
    models: randomFun(state.addButton.editor),
    showButtons: getButtonState(state.addButton.showButtons),
    surveyOptions: ['input', 'checkbox']
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addModel: () => {
      dispatch(addSingleInput({
                      showNavigationButtons: false,
                      pages : [
                        {
                            name: "page1",
                            questions: [
                                {
                                    type: "text",
                                    name: "question1"
                                }
                            ]
                        }
                      ]
                  }))
    },
    toggleButtons: (event) => {
      dispatch(toggleAddButtons(event))
    }
  }
}


const WorkAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkArea)


export default WorkAreaContainer;
