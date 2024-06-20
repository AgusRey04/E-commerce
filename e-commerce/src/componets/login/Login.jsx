import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userAPI, setUserAPI] = useState([]);
  const [error, setError] = useState();
  const [comparar, setComparar] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/users", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los usuarios");
        }
        return response.json();
      })
      .then((userData) => {
        console.log(userData);
        setUserAPI(userData);
      })
      .catch((error) => {
        console.error("Error", error);
      });
    fetch("http://localhost:8000//login", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los usuarios");
        }
        return response.json();
      })
      .then((userData) => {
        console.log(userData);
        setUserAPI(userData);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const userDataHandler = (event) => {
    event.preventDefault();
    setError("");
    userAPI.map((user) => {
      if (user.username === username) {
        return setComparar(true);
      }
    });
    console.log("comparar-----", comparar);
    if (comparar) {
      console.log("Login successful");
    } else {
      console.error("Usuario o contraseña incorrectos");

      setError(" incorrectos");
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
            <Form.Control.Feedback></Form.Control.Feedback>
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
            <Form.Control.Feedback></Form.Control.Feedback>
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
          <Button onClick={userDataHandler}>Iniciar Sesión</Button>
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
