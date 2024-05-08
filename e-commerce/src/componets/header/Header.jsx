import React from 'react'
import PropTypes from 'prop-types'
import {useNavigate} from "react-router-dom"
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = props => {
    const navigate = useNavigate();

    const handleHomeNavigation = () =>{
        navigate("/");
    }
    const handleLoginNavigation = ()=>{
        navigate("/login")
    }
    const handleCartNavigation = () => {
        navigate("/cart")
    }

    
  return (
    <Navbar  expand="lg" className="bg-body-tertiary mb-3">
        <Container fluid>
            <Navbar.Brand onClick={handleHomeNavigation} style={{cursor: "pointer"}}>Inicio</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll'/>
            <Navbar.Collapse id='navbarScroll'>
                <Nav 
                    className='me-auto my-2 my-lg-0'
                    style={{maxHeight: "100px"}}
                    navbarScroll
                >
                <Nav.Link onClick={handleLoginNavigation} href="">Iniciar Sesion</Nav.Link>
                <Nav.Link onClick={handleCartNavigation} href="">carrito</Nav.Link>
                
                </Nav>
            </Navbar.Collapse>
            
        </Container>
    </Navbar>
  )
}

Header.propTypes = {}

export default Header