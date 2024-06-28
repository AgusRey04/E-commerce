import { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Alert from "react-bootstrap/Alert";
import "./Login.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Login = ({ onUpdateUser }) => {
  const navigate = useNavigate();
  const [errors, setError] = useState({
    username: false,
    password: false,
    exist: false,
    notFunction: false,
  });

  const usernameRef = useRef(false);
  const passwordRef = useRef(false);

  useEffect(() => {
    if (localStorage.getItem("logged_in_user")) {
      navigate("/logout");
    }
  }, [navigate]);

  const handleSubmit = () => {
    const newErrors = {
      username: !usernameRef.current.value,
      password: !passwordRef.current.value,
      exist: false,
      notFunction: false,
    };

    setError(newErrors);

    if (passwordRef.current.value && usernameRef.current.value) {
      loginHandler(passwordRef.current.value, usernameRef.current.value);
    }
  };

  const changeUsernameHandler = () => {
    setError((prevErrors) => ({ ...prevErrors, username: false }));
  };
  const changePasswordHandler = () => {
    setError((prevErrors) => ({ ...prevErrors, password: false }));
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
        setError((prevErrors) => ({ ...prevErrors, exist: true }));
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError((prevErrors) => ({
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
              ref={passwordRef}
              onChange={changePasswordHandler}
            />
            {errors.password && (
              <Alert variant="danger">La contraseña es requerida.</Alert>
            )}
          </Form.Group>
        </Row>

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
