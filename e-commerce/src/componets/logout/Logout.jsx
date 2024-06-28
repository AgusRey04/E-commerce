import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const Logout = ({ onLogout, loggedInUser }) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    onLogout(); // Llama a la función de cierre de sesión
    navigate("/login");
  };

  return (
    <>
      <Form>
        <h2>Datos Personales</h2>
        <Form.Group>Nombre: {loggedInUser.firstName}</Form.Group>
        <Form.Group>Apellido: {loggedInUser.lastName}</Form.Group>
        <Form.Group>Email: {loggedInUser.email} </Form.Group>
        <Form.Group>Telefono: {loggedInUser.phone}</Form.Group>
        <Form.Group>Direccion: {loggedInUser.addres}</Form.Group>
      </Form>

      <Button onClick={logoutHandler}>Cerrar Sesión</Button>
    </>
  );
};

Logout.propTypes = {
  onLogout: PropTypes.func,
  loggedInUser: PropTypes.object,
};

export default Logout;
