import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card } from 'react-bootstrap'

const ProductItem = ({name,brand,img,price, type})=> {
  return (
        <div>
            <Card className="card border-info mb-3" >
                <Card.Img height={300} variant='top' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{brand}</Card.Subtitle>
                    <div>{type}</div>
                    <p>{price}</p>
                    <Button className="btn btn-success">Agregar carrito</Button>
                    <Button className="btn btn-success">Dar de alta</Button>
                    <Button className="btn btn-danger">Dar de baja</Button>
                    <Button className="btn btn-info">Editar</Button>
                    <Button className="btn btn-danger">Eliminar</Button>
                </Card.Body>
                
            </Card>

        </div>


   
  )
}

ProductItem.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
    
    
}

export default ProductItem