import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'

const NewProduct = ({onProductDataSaved})=> {
    const [enteredName, setEnteredName] = useState("")
    const [enteredPrice, setEnteredPrice] = useState("")
    const [enteredType, setEnteredType] = useState("")
    const [enteredBrand, setEnteredBrand] = useState("")
    const [enteredImg, setEnteredImg] = useState("")

    const handleChangeName = (e) => {
        setEnteredName(e.target.value);
        console.log({enteredName})
      };
      const handleChangePrice = (e) => {
        setEnteredPrice(e.target.value);
      };
      const handleChangeType = (e) => {
        setEnteredType(e.target.value);
      };
      const handleChangeBrand = (e) => {
        setEnteredBrand(e.target.value);
      };
      const handleChangeImg = (e) => {
        setEnteredImg(e.target.value);
      };

      const submitProductHandler =(e) =>{
        e.preventDefault();
        const productData = {
            productName: enteredName,
            productImg: enteredImg,
            productPrice: enteredPrice,
            productType: enteredType,
            productBrand: enteredBrand,
            available: true,
        }
        onProductDataSaved(productData)
        setEnteredName("");
        setEnteredImg("");
        setEnteredBrand("");
        setEnteredPrice("");
        setEnteredType("");
      }
  return (
    <Card>
        <Card.Body>
            <Form onSubmit={submitProductHandler}>
                <Row className="justify-content-end">
                    <Col md={6}>
                            <Form.Group controlId='productName'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                            type='text'
                            placeholder='Ingrese nombre y breve descripcion'
                            onChange={handleChangeName}
                            value={enteredName}
                            />
                            </Form.Group>
                    </Col>
                    <Col md={6}>
                            <Form.Group controlId='productImg'>
                            <Form.Label>Img</Form.Label>
                            <Form.Control
                            type='text'
                            placeholder='Ingrese el enlace de la imagen'
                            onChange={handleChangeImg}
                            value={enteredImg}
                            />
                            </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col md={6}>
                            <Form.Group controlId='productPrice'>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                            type='number'
                            placeholder='Ingrese el precio $'
                            onChange={handleChangePrice}
                            value={enteredPrice}
                            />
                            </Form.Group>
                    </Col>
                    <Col md={6}>
                            <Form.Group controlId='productBrand'>
                            <Form.Label>Marca</Form.Label>
                            <Form.Control
                            type='text'
                            placeholder='Ingrese  la Marca del producto'
                            onChange={handleChangeBrand}
                            value={enteredBrand}
                            />
                            </Form.Group>
                    </Col>
                    <Col md={6}>
                            <Form.Group controlId='productType'>
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control
                            type='text'
                            placeholder='Ingrese el Tipo de producto'
                            onChange={handleChangeType}
                            value={enteredType}
                            />
                            </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col md={6} className="d-flex justify-content-end">
                    <Button className="btn btn-success" type="sumbit">Agregar producto</Button>
                    </Col>
                </Row>

            </Form>
        </Card.Body>

    </Card>
  )
}

NewProduct.propTypes = {
    onProductDataSaved: PropTypes.func.isRequired
}

export default NewProduct