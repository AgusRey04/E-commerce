import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useState } from "react";

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate("/");
  };
  const handleLoginNavigation = () => {
    navigate("/login");
  };
  const handleCartNavigation = () => {
    navigate("/cart");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery("")
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand
          onClick={handleHomeNavigation}
          style={{ cursor: "pointer" }}
        >
          Inicio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleLoginNavigation}>Iniciar Sesión</Nav.Link>
            <Nav.Link onClick={handleCartNavigation}>Carrito</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Buscar"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
