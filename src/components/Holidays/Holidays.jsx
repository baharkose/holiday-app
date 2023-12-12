import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Holidays = ({ filteredList, handleShow, setSelectedHoliday }) => {
  return (
    <>
      <Container className="d-flex flex-wrap gap-4 mt-5 justify-content-center m-auto  ">
        {filteredList.map((filtered) => (
          <Card
            className="mb-4 d-flex justify-content-center card "
            style={{ width: "18rem" }}
            key={filtered.id}
          >
            <Card.Img variant="top" src={filtered.img} />
            <Card.Body>
              <Card.Title>{filtered.lokasyon}</Card.Title>
              <Card.Text>
                <span>Tarih:</span> {filtered.tarih}
              </Card.Text>
              <Card.Text>
                <span>Süre:</span> {filtered.sure}
              </Card.Text>
              <Card.Text>
                <span>Fiyat:</span> {filtered.fiyat}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  handleShow();
                  setSelectedHoliday(filtered);
                }}
              >
                Satın Al
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Holidays;
