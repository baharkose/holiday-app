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

  //- 1) öncelikle hangi veriler kaydedilecek onlar için bir obje oluştur.
  const [kayitForm, setKayitForm] = useState({
    ad: "",
    soyad: "",
    email:"",
    adet: "1",
  });

  //- 2) onları kullanmak için aç.
  const { ad, soyad, adet, email } = kayitForm;

  //- 3) input verilerini depolamak için bir fonksiyon oluştur.
  const handleKayitForm = (e) => {
    //- kayıtformunu aç -> tek tek inputtan gelenleri depolamak için
    setKayitForm({
      ...kayitForm,
      [e.target.name]: e.target.value,
    });
  };

  console.log(kayitForm)

  const handleShow = (e) => {
    e.preventDefault();    
    setShowC(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form
          noValidate
          validated={validated}
          onSubmit={(e)=>{
            handleShow(e);//- canvasın açılması için e prevent default yazabilmek için handleShowa e ataması yapıldı.
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
                  name="ad"
                  onChange={handleKayitForm}
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
                  name="soyad"
                  onChange={handleKayitForm}
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
                <Form.Label className="w-25 fw-bold">
                  E-Posta Adresi:
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Epostanızı giriniz"
                    aria-describedby="inputGroupPrepend"
                    required
                    name="eposta"
                    onChange={handleKayitForm}
                  />
                  <Form.Control.Feedback type="invalid">
                    Lütfen geçerli bir e-posta adresi girin.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                controlId="validationCustomUsername"
                className="d-flex w-90 gap-1 align-items-center"
              >
                <Form.Label className="w-25 fw-bold">Kişi Sayısı:</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="number"
                    placeholder="1"
                    aria-describedby="inputGroupPrepend"
                    required
                    name="adet"
                    onChange={handleKayitForm}

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
