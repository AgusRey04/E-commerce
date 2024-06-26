import { useReducer } from "react";
import PropTypes from "prop-types";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

const initialNewUserForm = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  contfirmPassword: "",
  rol: "user",
  phone: "",
  address: "",
  formValid: false,
};

const newUserFormReducer = (state, action) => {
  switch (action.type) {
    case "FIRST_NAME_UPDATE":
      return {
        ...state,
        firstName: action.value,
        formValid:
          action.value &&
          state.lastName &&
          state.username &&
          state.email &&
          state.password &&
          state.phone &&
          state.address,
      };
    case "LAST_NAME_UPDATE":
      return {
        ...state,
        lastName: action.value,
        formValid:
          action.value &&
          state.firstName &&
          state.username &&
          state.email &&
          state.password &&
          state.phone &&
          state.address,
      };
    case "USERNAME_UPDATE":
      return {
        ...state,
        username: action.value,
        formValid:
          action.value &&
          state.firstName &&
          state.lastName &&
          state.email &&
          state.password &&
          state.phone &&
          state.address,
      };
    case "EMAIL_UPDATE":
      return {
        ...state,
        email: action.value,
        formValid:
          action.value &&
          state.firstName &&
          state.lastName &&
          state.username &&
          state.password &&
          state.phone &&
          state.address,
      };
    case "PASSWORD_UPDATE":
      return {
        ...state,
        password: action.value,
        formValid:
          action.value &&
          state.firstName &&
          state.lastName &&
          state.username &&
          state.email &&
          state.phone &&
          state.address,
      };
    case "CONFIRM_PASSWORD_UPDATE":
      return {
        ...state,
        contfirmPassword: action.value,
        formValid:
          action.value &&
          state.firstName &&
          state.lastName &&
          state.username &&
          state.email &&
          state.phone &&
          state.address,
      };
    case "PHONE_UPDATE":
      return {
        ...state,
        phone: action.value,
        formValid:
          action.value &&
          state.firstName &&
          state.lastName &&
          state.username &&
          state.email &&
          state.address,
      };
    case "ADDRESS_UPDATE":
      return {
        ...state,
        address: action.value,
        formValid:
          action.value &&
          state.firstName &&
          state.lastName &&
          state.username &&
          state.email &&
          state.password &&
          state.phone,
      };
    case "RESET_FORM":
      return {
        ...initialNewUserForm,
      };
    default:
      return state;
  }
};

const NewUser = () => {
  const [newUserForm, dispatch] = useReducer(
    newUserFormReducer,
    initialNewUserForm
  );

  const submitNewUserHandler = async (event) => {
    event.preventDefault();

    if (newUserForm.password === newUserForm.contfirmPassword) {
      const userDto = {
        firstName: newUserForm.firstName,
        lastName: newUserForm.lastName,
        username: newUserForm.username,
        email: newUserForm.email,
        password: newUserForm.password,
        phone: newUserForm.phone,
        address: newUserForm.address,
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
          throw new Error("Error al agregar un usuario");
        }

        const data = await response.json();
        console.log("Usuario Agregado:", data);
        dispatch({
          type: "RESET_FORM",
        });
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Form onSubmit={submitNewUserHandler}>
            <Row className="mb-3">
              <Col>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=" Ingresar nombre..."
                  value={newUserForm.firstName}
                  onChange={(e) =>
                    dispatch({
                      type: "FIRST_NAME_UPDATE",
                      value: e.target.value,
                    })
                  }
                />
              </Col>
              <Col>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=" Ingresar apellido..."
                  value={newUserForm.lastName}
                  onChange={(e) =>
                    dispatch({
                      type: "LAST_NAME_UPDATE",
                      value: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=" Ingresar usuario..."
                  value={newUserForm.username}
                  onChange={(e) =>
                    dispatch({
                      type: "USERNAME_UPDATE",
                      value: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=" Ingresar email..."
                  value={newUserForm.email}
                  onChange={(e) =>
                    dispatch({
                      type: "EMAIL_UPDATE",
                      value: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=" Ingresar contraseña..."
                  value={newUserForm.password}
                  onChange={(e) =>
                    dispatch({
                      type: "PASSWORD_UPDATE",
                      value: e.target.value,
                    })
                  }
                />
              </Col>
              <Col>
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=" Confirmar contraseña..."
                  value={newUserForm.contfirmPassword}
                  onChange={(e) =>
                    dispatch({
                      type: "CONFIRM_PASSWORD_UPDATE",
                      value: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=" Ingresar teléfono..."
                  value={newUserForm.phone}
                  onChange={(e) =>
                    dispatch({
                      type: "PHONE_UPDATE",
                      value: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=" Ingresar dirección..."
                  value={newUserForm.address}
                  onChange={(e) =>
                    dispatch({
                      type: "ADDRESS_UPDATE",
                      value: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Button
              variant="primary"
              type="submit"
              disabled={!newUserForm.formValid}
            >
              Registrarse
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

NewUser.propTypes = {
  onNewUserDataSaved: PropTypes.func.isRequired,
};

export default NewUser;
