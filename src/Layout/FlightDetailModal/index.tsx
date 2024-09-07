import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface FlightDetailModalProps {
  showModal: boolean;
  handleClose: () => void;
}

const FlightDetailModal: React.FC<FlightDetailModalProps> = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Woohoo, you&apos;re reading this text in a modal!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FlightDetailModal;
