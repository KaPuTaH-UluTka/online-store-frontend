import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index';
import { IDescription } from '../../types/types';

const CreateDevice = ({ show, onHide }: { show: boolean; onHide: () => void }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([] as IDescription[]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number: number) => {
    setInfo(info.filter((i) => i.number !== number));
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
        <Modal.Title id="contained-modal-title-vcenter">Add device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className={'mt-2 mb-2'}>
            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => {
                return <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>;
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={'mt-2 mb-2'}>
            <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => {
                return <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>;
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className={'mt-3'} placeholder={'Enter device name'} />
          <Form.Control className={'mt-3'} placeholder={'Enter device price'} type={'number'} />
          <Form.Control className={'mt-3'} type={'file'} />
          <Button className={'mt-2'} variant={'outline-dark'} onClick={addInfo}>
            Add specification
          </Button>
          {info.map((i) => {
            return (
              <Row className={'mt-2'} key={i.number}>
                <Col md={4}>
                  <Form.Control placeholder={'Enter title'} />
                </Col>
                <Col md={4}>
                  <Form.Control placeholder={'Enter description'} />
                </Col>
                <Col md={4}>
                  <Button variant={'outline-danger'} onClick={() => removeInfo(i.number)}>
                    Delete
                  </Button>
                </Col>
              </Row>
            );
          })}
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

export default CreateDevice;
