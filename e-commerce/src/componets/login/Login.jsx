import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("logged_in_user")) {
      navigate("/logout");
    }
  }, [navigate]);

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = async () => {
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem("logged_in_user", JSON.stringify(userData));

        console.log("Datos del usuario autenticado:", userData);
        navigate("/");
      } else {
        // Error de autenticación
        setError("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      // Error de red o del servidor
      setError(
        "Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde"
      );
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <Card className="card-log">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese el usuario..."
              value={username}
              onChange={handleUserChange}
              className="input-lg"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Ingrese la contraseña..."
              value={password}
              onChange={handlePasswordChange}
              className="input-lg"
            />
          </Form.Group>
        </Row>
        {error && (
          <Row className="mb-3">
            <Col md="4">
              <div className="error-message">{error}</div>
            </Col>
          </Row>
        )}
        <Row className="mb-3">
          <Button onClick={loginHandler}>Iniciar Sesión</Button>
        </Row>
        <Row className="mb-3">
          <Button type="button" onClick={() => navigate("/registerUser")}>
            Registrarse
          </Button>
        </Row>
      </Form>
    </Card>
  );
};

export default Login;
