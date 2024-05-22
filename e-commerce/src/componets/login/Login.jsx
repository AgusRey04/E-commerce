import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./Login.css";
import {useNavigate} from "react-router-dom"
// roles:   usuario = 0
//          admin = 1
//          superAdmin = 2

const USUARIOS = [{ username: "Agus", password: "1234", rol: 0 },
  { username: "Admin", password: "AdminMRM",rol: 1  },
  { username: "superAdmin", password: "9999", rol: 2 },
  { username: "Maria", password: "1234", rol: 0},
  { username: "Ana", password: "1234", rol: 0},
  { username: "Jose", password: "1234", rol: 0},
  { username: "Marcos", password: "1234", rol: 0},
  { username: "Jose", password: "1234", rol: 0},
]

const Login = () => {
  const navigation = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState()




  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };
 const handlePasswordChange= (event) => {
   setPassword(event.target.value)
 };
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    USUARIOS.map(usuario=>(usuario.username === username && usuario.password === password?navigation("/"):null));
  };
  return (
    <Card className="card-log">
      {
        <Form >
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
          <Row className="mb-3">
          <Button type="submit" onClick={handleLoginSubmit}>
            Iniciar Sesion
          </Button>
          </Row>
          <Row className="mb-3">
          <Button type="submit" onClick={()=>navigation("/registerUser")} >
            Registrarse
          </Button>
          </Row>
          
        </Form>
      }
    </Card>
  );
};


export default Login;
