import React from 'react';
import { Button } from 'reactstrap';

import './AddButton.css';

const AddButton = ({
  handleAddModel,
  handleRevealButtons,
  handleHideButtons,
  showButtons,
  options
}) => {
  return <div>
      <Button color="primary"
              onClick={
                () => handleAddModel()
              }
              onMouseOver={
                (event) => {
                  handleRevealButtons(event)
                }
              }>+</Button>
      <div
        className="AddButton"
        onMouseLeave={
          (event) => handleHideButtons(event)
        }>
        {
          (showButtons)?
            options.map(surveyType => <Button color="primary">{surveyType}</Button>):<div />
        }
      </div>
    </div>
}


export default AddButton;
