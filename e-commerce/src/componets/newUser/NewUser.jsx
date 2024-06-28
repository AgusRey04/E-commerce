import { useReducer, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import { Card, Form, Row, Col, Button, Alert } from "react-bootstrap";
import "./NewUser.css";

const initialNewUserForm = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  rol: "user",
  phone: "",
  address: "",
};

const newUserFormReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_FORM":
      return initialNewUserForm;
    default:
      return state;
  }
};

const NewUser = ({ onNewUserDataSaved }) => {
  const [newUserForm, dispatch] = useReducer(
    newUserFormReducer,
    initialNewUserForm
  );
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false,
    address: false,
    mismatchPassword: false,
    exist: false,
    serverError: false,
  });
  const navigate = useNavigate(); // Hook para redirección

  const submitNewUserHandler = async (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
      phone,
      address,
    } = newUserForm;

    setErrors({
      firstName: !firstName,
      lastName: !lastName,
      username: !username,
      email: !email,
      password: !password,
      confirmPassword: !confirmPassword,
      phone: !phone,
      address: !address,
      mismatchPassword: password !== confirmPassword,
      exist: false,
      serverError: false,
    });

    if (
      firstName &&
      lastName &&
      username &&
      email &&
      password &&
      confirmPassword &&
      phone &&
      address &&
      password === confirmPassword
    ) {
      const userDto = {
        firstName,
        lastName,
        username,
        email,
        password,
        phone,
        address,
        status: true,
        rol: newUserForm.rol,
      };

      try {
        const response = await fetch("http://localhost:8000/register", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDto),
        });

        if (!response.ok) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            exist: true,
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            exist: false,
            serverError: false,
          }));
          const data = await response.json();
          console.log("Usuario Agregado:", data);
          dispatch({ type: "RESET_FORM" });
          navigate("/login");
          onNewUserDataSaved(data);
          alert("El usuario se agregó correctamente"); // Mostrar alerta de éxito al registrar de nuevo
        }
      } catch (error) {
        console.log("Error al agregar un usuario:", error);
        setErrors((prevErrors) => ({
          ...prevErrors,
          serverError: true,
        }));
      }
    }
  };

  return (
    <Card className="card-newuser" style={{ width: "50rem" }}>
      <Card.Body>
        <Form onSubmit={submitNewUserHandler}>
          <Row className="mb-3">
            <Col>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar nombre..."
                value={newUserForm.firstName}
                isInvalid={errors.firstName}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "firstName",
                    value: e.target.value,
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                El nombre es requerido.
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar apellido..."
                value={newUserForm.lastName}
                isInvalid={errors.lastName}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "lastName",
                    value: e.target.value,
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                El apellido es requerido.
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar usuario..."
                value={newUserForm.username}
                isInvalid={errors.username}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "username",
                    value: e.target.value,
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                El usuario es requerido.
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresar email..."
                value={newUserForm.email}
                isInvalid={errors.email}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "email",
                    value: e.target.value,
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                El email es requerido.
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresar contraseña..."
                value={newUserForm.password}
                isInvalid={errors.password}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "password",
                    value: e.target.value,
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                La contraseña es requerida.
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmar contraseña..."
                value={newUserForm.confirmPassword}
                isInvalid={errors.confirmPassword || errors.mismatchPassword}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "confirmPassword",
                    value: e.target.value,
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword
                  ? "La confirmación de contraseña es requerida."
                  : "Las contraseñas no coinciden."}
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar teléfono..."
                value={newUserForm.phone}
                isInvalid={errors.phone}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "phone",
                    value: e.target.value,
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                El teléfono es requerido.
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar dirección..."
                value={newUserForm.address}
                isInvalid={errors.address}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "address",
                    value: e.target.value,
                  })
                }
              />
              <Form.Control.Feedback type="invalid">
                La dirección es requerida.
              </Form.Control.Feedback>
            </Col>
          </Row>
          {errors.serverError && (
            <Alert variant="danger">
              Error al agregar un usuario. Inténtalo de nuevo más tarde.
            </Alert>
          )}
          {errors.exist && (
            <Alert variant="danger">
              El usuario ya existe. Inténtalo con otro nombre de usuario o
              email.
            </Alert>
          )}
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

NewUser.propTypes = {
  onNewUserDataSaved: PropTypes.object,
};

export default NewUser;
