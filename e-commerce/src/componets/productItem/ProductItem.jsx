
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const ProductItem = ({ product, onDeleteProduct, onNewPrice }) => {
    const [showForm, setShowform] = useState(false)
    const [newPrice, setNewPrice] = useState()

    const deleteProduct = () => {
        onDeleteProduct(product.id)
    }

    const editPriceProduct = () => {
        setShowform(true)
    }

    const handleNewPrice = (e) => {
        setNewPrice(e.target.value)
    }
    const sumbitNewPrice = (e) => {
        e.preventDefault();
        if (newPrice > 0) {
            console.log(product, newPrice)
            onNewPrice(newPrice, product)
            setShowform(false)
            setNewPrice("")
        } else {
            alert("El valor ingresado debe ser mayor a 0")
            setShowform(false)
            setNewPrice("")
        }

    }

    return (
        <div>
            <Card className="card border-info mb-3" >
                <Card.Img height={300} variant='top' src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle>{product.brand}</Card.Subtitle>
                    <div>{product.type}</div>
                    {showForm ?
                        <Form onSubmit={sumbitNewPrice}>
                            <Form.Label>Nuevo Precio</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Ingrese el nuevo valor del producto'
                                onChange={handleNewPrice}
                                value={newPrice} />
                            <Button type='sumbit'>Aceptar</Button>
                        </Form>

                        :
                        <p>{product.price}</p>
                    }

                    {showForm ? ""
                        :
                        <div>
                            <Button className="btn btn-success">Agregar carrito</Button>
                            <Button onClick={editPriceProduct}>Cambiar precio</Button>
                            <Button className="btn btn-danger" onClick={deleteProduct}>Eliminar</Button>
                        </div>
                    }

                </Card.Body>

            </Card>

        </div>



    )
}

ProductItem.propTypes = {
    product: PropTypes.object,
    onDeleteProduct: PropTypes.func.isRequired,
    onNewPrice: PropTypes.func.isRequired,



}

export default ProductItem