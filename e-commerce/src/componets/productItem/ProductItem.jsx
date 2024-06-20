
import PropTypes from 'prop-types'
import {useState } from 'react'
import { Button, Card } from 'react-bootstrap'


const ProductItem = ({name,brand,img,price, type,id,onDeleteProduct})=> {
    
    
    const deleteProduct=() =>{
        
        console.log("id",id)
        onDeleteProduct(id)
    }
    
    
   
  return (
        <div>
            <Card className="card border-info mb-3" >
                <Card.Img height={300} variant='top' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{brand}</Card.Subtitle>
                    <div>{type}</div>
                    <p>${price}</p>
                    <Button className="btn btn-success">Agregar carrito</Button>
                
                    <Button>Editar</Button>
                    <Button className="btn btn-danger" onClick={deleteProduct}>Eliminar</Button>
                </Card.Body>
                
            </Card>

        </div>


   
  )
}

ProductItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
    available: PropTypes.bool,
    onDeleteProduct: PropTypes.func.isRequired,
    
    
    
}

export default ProductItem