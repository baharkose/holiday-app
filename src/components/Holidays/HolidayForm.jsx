import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

const HolidayForm = ({ show, setShow, selectedHoliday }) => {
  console.log(selectedHoliday);
  const [validated, setValidated] = useState(false);
  const handleClose = () => setShow(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const { lokasyon, tarih, sure, fiyat } = selectedHoliday;

  return (
    <>
    {
      
       <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{lokasyon}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div>
              <span>Tarih:</span> {tarih}
            </div>
            <div>
              <span>Süre:</span> {sure}
            </div>
            <div>
              <span>Fiyat:</span> {fiyat}
            </div>

            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    }
     
    </>
  );
};

export default HolidayForm;
