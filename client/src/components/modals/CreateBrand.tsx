import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createBrand, createType } from '../../http/deviceAPI';

const CreateBrand = ({ show, onHide }: { show: boolean; onHide: () => void }) => {
  const [brand, setBrand] = useState('');

  const addBrand = () => {
    createBrand({ name: brand }).then((data) => setBrand(''));
    onHide();
  };
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
          <Form.Control
            placeholder={'Enter brand'}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-danger'} onClick={onHide}>
          Close
        </Button>
        <Button variant={'outline-success'} onClick={addBrand}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
