import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const InfoModal = ({major, description}) => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>Major Details</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        data-bs-theme="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {major}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: 'white', backgroundColor: '#292b2c' }}>{
        description.split('\n').map((line, index) => (
        <React.Fragment key={index}>
        {line}
        <br />
        </React.Fragment>
  ))}</Modal.Body>
      </Modal>
    </>
  );
}

export default InfoModal;