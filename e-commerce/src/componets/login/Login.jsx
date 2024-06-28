import { useEffect, useState, useRef } from "react";
import { Button, Card, Form, Row, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onUpdateUser }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    username: false,
    password: false,
    exist: false,
    notFunction: false,
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("logged_in_user")) {
      navigate("/logout");
    }
  }, [navigate]);

  const handleSubmit = () => {
    setErrors({
      username: false,
      password: false,
      exist: false,
      notFunction: false,
    });
    if (!passwordRef.current.value && !usernameRef.current.value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: true,
        username: true,
      }));
      return;
    }

    if (!passwordRef.current.value) {
      passwordRef.current.focus();
      setErrors((prevErrors) => ({ ...prevErrors, password: true }));
      return;
    }
    if (!usernameRef.current.value) {
      usernameRef.current.focus();
      setErrors((prevErrors) => ({ ...prevErrors, username: true }));
      return;
    }

    loginHandler(usernameRef.current.value, passwordRef.current.value);
    setErrors((prevErrors) => ({ ...prevErrors, exist: false }));
  };

  const changeUsernameHandler = () => {
    setErrors((prevErrors) => ({ ...prevErrors, username: false }));
    setUsername(usernameRef.current.value);
  };

  const changePasswordHandler = (event) => {
    setErrors((prevErrors) => ({ ...prevErrors, password: false }));
    setPassword(event.target.value);
  };

  const loginHandler = async (username, password) => {
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
        onUpdateUser(userData);
        navigate("/");
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, exist: true }));
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        notFunction: true,
      }));
    }
  };

  return (
    <Card className="card-log">
      <Form>
        <Row className="mb-3">
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese el usuario..."
              className="input-lg"
              ref={usernameRef}
              value={username}
              onChange={changeUsernameHandler}
            />
            {errors.username && (
              <Alert variant="danger">El usuario es requerido.</Alert>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Ingrese la contraseña..."
              className="input-lg"
              value={password}
              ref={passwordRef}
              onChange={changePasswordHandler}
            />
            {errors.password && (
              <Alert variant="danger">La contraseña es requerida.</Alert>
            )}
          </Form.Group>
        </Row>

        {errors.exist && (
          <div className="mt-3 mb-3">
            <Alert variant="danger">
              El usuario o la contraseña es incorrecto.
            </Alert>
          </div>
        )}
        {errors.notFunction && (
          <Row className="mb-3">
            <Alert variant="danger">
              Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.
            </Alert>
          </Row>
        )}
        <Row className="mb-3">
          <Button type="button" onClick={handleSubmit}>
            Iniciar Sesión
          </Button>
        </Row>
        <Row className="mb-3">
          <Button type="button" onClick={() => navigate("/register")}>
            Registrarse
          </Button>
        </Row>
      </Form>
    </Card>
  );
};

Login.propTypes = {
  onUpdateUser: PropTypes.func.isRequired,
};

export default Login;
