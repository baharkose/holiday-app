import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarH = ({
  handleSearch,
  handleDonem,
  handleSeasonName,
}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Happy Holiday</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <NavDropdown title="Yaz Dönemi" id="yaz">
              <NavDropdown.Item name="yurtDisi" onClick={(e) => handleDonem(e)}>
                Yurt Dışı
              </NavDropdown.Item>
              <NavDropdown.Item name="yurtIci" onClick={(e) => handleDonem(e)}>
                Yurt İçi
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Kış Dönemi" id="kis">
              <NavDropdown.Item name="yurtDisi" onClick={(e) => handleDonem(e)}>
                Yurt Dışı
              </NavDropdown.Item>
              <NavDropdown.Item name="yurtIci" onClick={(e) => handleDonem(e)}>
                Yurt İçi
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ara Dönem" id="araDonem">
              <NavDropdown.Item name="yurtDisi" onClick={(e) => handleDonem(e)}>
                Yurt Dışı
              </NavDropdown.Item>
              <NavDropdown.Item name="yurtIci" onClick={(e) => handleDonem(e)}>
                Yurt İçi
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => handleSearch(e)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarH;
