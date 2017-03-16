import React from 'react';
import { Button } from 'reactstrap';

import './AddButton.css';

const AddButton = ({
  handleAddModel,
  handleToggleButtons,
  showButtons,
  options
}) => {
  return <div className="AddButton"
      onMouseOver={
        (event) => {
          console.log("Happening", event);
          handleToggleButtons(event)
        }
      }
      onMouseLeave={
        (event) => handleToggleButtons(event)
      } >
      <Button color="primary"
              onClick={
                () => handleAddModel()
              }
               >Add</Button>
      {
        (showButtons)?
          options.map(surveyType => <Button color="primary">{surveyType}</Button>):<div />
      }
    </div>
}


export default AddButton;
