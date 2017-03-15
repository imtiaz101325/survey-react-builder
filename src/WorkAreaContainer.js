import { connect } from 'react-redux';

import { addSurvey } from './addSurvey';

import WorkArea from './WorkArea';

const randomFun = (models) => {
  return models;
}

const mapStateToProps = (state) => {
  return {
    models: randomFun(state.editor)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddModel: () => {
      dispatch({
        type: 'ADD_SINGLE_INPUT',
        model: {
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
                  }
      })
    }
  }
}


const WorkAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkArea)


export default WorkAreaContainer;
