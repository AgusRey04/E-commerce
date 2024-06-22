import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    // Elimina los tokens de acceso y de refresco al cerrar sesión
    localStorage.removeItem("logged_in_user");
    navigate("/login");
  };
    const dataUser = JSON.parse(localStorage.getItem("logged_in_user"))
    console.log(dataUser)
  return (
    <>
      <Form>
        <h2>Datos Personales</h2>
        <Form.Group>Nombre: {dataUser.firstName}</Form.Group>
        <Form.Group>Apellido: {dataUser.lastName}</Form.Group>
        <Form.Group>Email: {dataUser.email} </Form.Group>
        <Form.Group>Telefono: {dataUser.phone}</Form.Group>
        <Form.Group>Direccion: {dataUser.addres}</Form.Group>
      </Form>

      <Button onClick={logoutHandler}>Cerrar Sesión</Button>
    </>
  );
};

export default Logout;
