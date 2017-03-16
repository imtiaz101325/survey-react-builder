import React, { PropTypes } from 'react';

import EditableSurvey from './EditableSurvey';
import AddButton from './AddButton';

const WorkArea = ({
  handleAddSingleInput,
  questions
}) => {
    return (
        <div>
            {questions.map((json) => <EditableSurvey modelJSON={json}/>)
}
            <AddButton
              addSingleInput={handleAddSingleInput}/>
        </div>
    )
}

WorkArea.propTypes = {
  handleAddSingleInput: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default WorkArea;
