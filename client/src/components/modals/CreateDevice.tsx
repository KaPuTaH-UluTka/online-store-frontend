import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index';
import { IBrand, IDescription, IDevice, IType } from '../../types/types';
import {
  createDevice,
  createType,
  fetchBrands,
  fetchDevices,
  fetchTypes,
} from '../../http/deviceAPI';
import { setFips } from 'crypto';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }: { show: boolean; onHide: () => void }) => {
  const { device } = useContext(Context);

  const [deviceName, setDeviceName] = useState('');
  const [devicePrice, setDevicePrice] = useState(0);
  const [deviceFile, setDeviceFile] = useState<File | null>(null);
  const [info, setInfo] = useState([] as IDescription[]);

  const selectFile = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      setDeviceFile(target.files[0]);
    }
  };

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number: number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(info.map((spec) => (spec.number === number ? { ...spec, [key]: value } : spec)));
  };

  useEffect(() => {
    fetchTypes().then((data) => device?.setTypes(data.rows));
    fetchBrands().then((data) => device?.setBrands(data.rows));
    fetchDevices().then((data) => device?.setDevices(data.rows));
  }, []);

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', deviceName);
    formData.append('name', `${devicePrice}`);
    formData.append('img', deviceFile as File);
    formData.append('brandId', `${device?.selectedBrand?.id}`);
    formData.append('typeId', `${device?.selectedType?.id}`);
    formData.append('info', JSON.stringify(info));
    createDevice(formData).then((data) => onHide());
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
            <Dropdown.Toggle>{device?.selectedType?.name || 'Choose type'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => {
                return (
                  <Dropdown.Item onClick={() => device?.setSelectedType(type)} key={type.id}>
                    {type.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={'mt-2 mb-2'}>
            <Dropdown.Toggle>{device?.selectedBrand?.name || 'Choose brand'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => {
                return (
                  <Dropdown.Item onClick={() => device?.setSelectedBrand(brand)} key={brand.id}>
                    {brand.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className={'mt-3'}
            placeholder={'Enter device name'}
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
          />
          <Form.Control
            className={'mt-3'}
            placeholder={'Enter device price'}
            type={'number'}
            value={devicePrice}
            onChange={(e) => setDevicePrice(+e.target.value)}
          />
          <Form.Control className={'mt-3'} type={'file'} onChange={(e) => selectFile(e)} />
          <Button className={'mt-2'} variant={'outline-dark'} onClick={addInfo}>
            Add specification
          </Button>
          {info.map((i) => {
            return (
              <Row className={'mt-2'} key={i.number}>
                <Col md={4}>
                  <Form.Control
                    value={i.title}
                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                    placeholder={'Enter title'}
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    value={i.description}
                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                    placeholder={'Enter description'}
                  />
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
        <Button variant={'outline-success'} onClick={addDevice}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
