import * as S from "./style"; //Importando conteúdo do styled component
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavbarMenu() {

  return (
    <S.NavbarWrapper>
      <Navbar expand="lg">
        <Container>
            <Navbar.Brand>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-links">
            <Link to="/bairro" className="nav-item">
                <Nav.Item>Bairros</Nav.Item>
            </Link>
            <Nav.Item>Ponto Turístico</Nav.Item>
            <NavDropdown title="Ônibus" id="basic-nav-dropdown">
                <NavDropdown.Item as={"div"}>Cadastro</NavDropdown.Item>

                <NavDropdown.Item as={"div"}>Pesquisa</NavDropdown.Item>
            </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </S.NavbarWrapper>
  );
}