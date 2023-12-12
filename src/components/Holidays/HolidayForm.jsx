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
              <div>
                <span className="fw-bold">Tarih:</span> {tarih}
              </div>
              <div>
                <span className="fw-bold">Süre:</span> {sure}
              </div>
              <div>
                <span className="fw-bold">Fiyat:</span> {fiyat}
              </div>
              <h4 className="mt-3">Kayıt Formu</h4>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  controlId="validationCustom01"
                  className="d-flex w-90 gap-1 align-items-center"
                >
                  <Form.Label>Ad:</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Adınızı giriniz"
                    defaultValue=""
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  as={Col}
                  controlId="validationCustom02"
                  className="d-flex w-90 gap-1 align-items-center"
                >
                  <Form.Label className="w-20">Soyad:</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Soyadınızı giriniz"
                    defaultValue=""
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  as={Col}
                  controlId="validationCustomUsername"
                  className="d-flex w-90 gap-1 align-items-center"
                >
                  <Form.Label>E-Posta Adresi</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="email"
                      placeholder="Epostanızı giriniz"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Lütfen geçerli bir e-posta adresi girin.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Şartlara ve koşullara katılıyorum"
                  feedback="Devam etmeden önce kabul etmelisiniz."
                  feedbackType="invalid"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Kapat
              </Button>
              <Button type="submit" variant="primary">
                Değişiklikleri Kaydet
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      }
    </>
  );
};

export default HolidayForm;
