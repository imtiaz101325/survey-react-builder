import React from 'react';
import {
  Button,
  Modal
} from 'react-bootstrap';
import { Survey, Model } from 'survey-react';


const EditModal = ({
  visibility,
  onHide,
  options
}) =>  {

  const modelObject = new Model({})
  return (
     <div>
        <Modal show={visibility} onHide={onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Survey model={modelObject} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

export default EditModal;
