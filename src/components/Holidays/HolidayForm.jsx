import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import HolidayList from "./HolidayList";

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
  const [showC, setShowC] = useState(false);

  const handleShow = () => {
    setShowC(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form
          noValidate
          validated={validated}
          onSubmit={()=>{
            handleShow()
            handleClose() //- kayıtola basınca hemen kapanması için
          }}
        >
          <Modal.Body>
            <div className="modal-header d-flex flex-column ">
              <h3 className="pb-2">{lokasyon}</h3>
              <i>
                <div className="information d-flex gap-3 justify-content-center h6">
                  <div>
                    <span className="fw-bold">(Tarih:</span> {tarih}
                  </div>
                  <div>
                    <span className="fw-bold">Süre:</span> {sure}
                  </div>
                  <div>
                    <span className="fw-bold">Fiyat:</span> {fiyat})
                  </div>
                </div>
              </i>
            </div>

            <h4 className="mt-3 pb-2">Kayıt Formu</h4>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="validationCustom01"
                className="d-flex w-90 gap-1 align-items-center"
              >
                <Form.Label className="w-25 fw-bold">Ad:</Form.Label>
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
                <Form.Label className="w-25 fw-bold">Soyad:</Form.Label>
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
                <Form.Label className="w-25 fw-bold">E-Posta Adresi</Form.Label>
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
              Kayıt Ol
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <HolidayList showC={showC} setShowC={setShowC} />
    </>
  );
};

export default HolidayForm;
