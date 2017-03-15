import React from 'react';
import { Button } from 'reactstrap';

import EditableSurvey from './EditableSurvey';

const WorkArea = ({ models, handleAddModel }) => {
  return (
        <div>
          {
            models.map(
              (json) => <EditableSurvey
                            modelJSON={json}  />
            )
          }
          <Button color="primary"
                  onClick={
                    () => handleAddModel()
                  }
                  onMouseOver={
                    () => console.log("wow")
                  }
                  onMouseLeave={
                    () => console.log("so cool")
                  } >Add</Button>
        </div>
      )
}

export default WorkArea;
