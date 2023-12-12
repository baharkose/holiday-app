import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Holidays = ({
  filteredList
}) => {
  return (
    <>
      <Container className="d-flex flex-wrap gap-4 mt-5 justify-content-center m-auto  ">
        {filteredList.map(
          ({ id, sezon, lokasyon, kategori, tarih, sure, img }) => (
            <Card
              className="mb-4 d-flex justify-content-center card "
              style={{ width: "18rem" }}
              key={id}
            >
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{lokasyon}</Card.Title>
                <Card.Text>
                  <span>Tarih:</span> {tarih}
                </Card.Text>
                <Card.Text>
                  <span>Süre:</span> {sure}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          )
        )}
      </Container>
    </>
  );
};

export default Holidays;
