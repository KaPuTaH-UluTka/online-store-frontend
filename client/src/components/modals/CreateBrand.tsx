import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CreateBrand = ({ show, onHide }: { show: boolean; onHide: () => void }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={'Enter brand'} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>
          Close
        </Button>
        <Button variant={'outline-success'}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
