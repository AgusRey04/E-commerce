import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    // Elimina los tokens de acceso y de refresco al cerrar sesión
    localStorage.removeItem("logged_in_user");
    navigate("/login");
  };

  return (
    <>
      <h1>Sesión iniciada</h1>
      <Button onClick={logoutHandler}>Cerrar Sesión</Button>;
    </>
  );
};

export default Logout;
