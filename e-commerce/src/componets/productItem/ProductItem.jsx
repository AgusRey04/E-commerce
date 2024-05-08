import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Card } from 'react-bootstrap'


const ProductItem = ({name,brand,img,price, type, available,onNewState})=> {

    const [newState, setNewState] = useState(available)
    const handleClick = () =>{
        setNewState(!newState)
    }
    const handleStateSumbit = () =>{
        onNewState(newState)
    }
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
                    {newState ? 
                    <Button className="btn btn-danger" onClick={handleClick} onSubmit={handleStateSumbit}>Dar de baja</Button>
                        :
                    <Button className="btn btn-success" onClick={handleClick}>Dar de alta</Button>
                    }
                    <Button>Editar</Button>
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
    available: PropTypes.bool,
    onNewState: PropTypes.func,
    
    
}

export default ProductItem