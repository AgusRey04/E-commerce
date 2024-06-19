import { useReducer } from 'react'
import PropTypes from 'prop-types'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'

const initialProductForm = {
  id: 0,
  name: "",
  price: "",
  type: "",
  brand: "",
  img: "",
  formValid: false,
}

const productformReducer = (state, action) => {
  switch (action.type) {
    case "NAME_UPDATE":
      return {
        ...state,
        name: action.value,
        formValid:
          action.value && state.price && state.type && state.brand && state.img,
      };
      case "PRICE_UPDATE":
        return {
          ...state,
          price: action.value,
          formValid:
            action.value && state.name && state.type && state.brand && state.img,
        };
        case "TYPE_UPDATE":
      return {
        ...state,
        type: action.value,
        formValid:
          action.value && state.price && state.name && state.brand && state.img,
      };
      case "BRAND_UPDATE":
      return {
        ...state,
        brand: action.value,
        formValid:
          action.value && state.price && state.type && state.name && state.img,
      };
      case "URL_UPDATE":
      return {
        ...state,
        img: action.value,
        formValid:
          action.value && state.price && state.type && state.brand && state.name,
      };
      case "RESET_FORM":
        return{
          ...initialProductForm,
          formValid: false
        }
        default:
          return state;
      
  }
}


const NewProduct = ({ onProductDataSaved }) => {
  const [productForm, dispatch] = useReducer(productformReducer, initialProductForm)

  const handleChangeName = (e) => {
    dispatch({
      type: "NAME_UPDATE",
      value: e.target.value,
    })
  };
  const handleChangePrice = (e) => {
    dispatch({
      type: "PRICE_UPDATE",
      value: e.target.value,
    })
  };
  const handleChangeType = (e) => {
    dispatch({
      type: "TYPE_UPDATE",
      value: e.target.value,
    })
  };
  const handleChangeBrand = (e) => {
    dispatch({
      type: "BRAND_UPDATE",
      value: e.target.value,
    })
  };
  const handleChangeImg = (e) => {
    dispatch({
      type: "URL_UPDATE",
      value: e.target.value,
    })
  };

  const submitProductHandler = (e) => {
    e.preventDefault();
    const productData = {
      productName: productForm.name,
      productImg: productForm.img,
      productPrice: productForm.price,
      productType: productForm.type,
      productBrand: productForm.brand,
      available: true,
    }
    onProductDataSaved(productData)
    dispatch({
      type: "RESET_FORM"
    })
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
                  value={productForm.name}
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
                  value={productForm.img}
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
                  value={productForm.price}
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
                  value={productForm.brand}
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
                  value={productForm.type}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col md={6} className="d-flex justify-content-end">
              <Button
                className="btn btn-success"
                type="sumbit"
                disabled={!productForm.formValid}
              >Agregar producto
              </Button>
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