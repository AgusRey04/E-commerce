import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const ProductItem = ({ product, onDeleteProduct, onNewPrice }) => {
  const [showForm, setShowForm] = useState(false);
  const [newPrice, setNewPrice] = useState("");
  const [userRol, setUserRol] = useState(false); // Inicialmente false

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("logged_in_user"));
    if (user && user.rol === "admin") {
      setUserRol(true);
    } else {
      setUserRol(false);
    }
  }, []);

  const deleteProduct = () => {
    onDeleteProduct(product.id);
  };

  const editPriceProduct = () => {
    setShowForm(true);
  };

  const handleNewPrice = (e) => {
    setNewPrice(e.target.value);
  };

  const submitNewPrice = (e) => {
    e.preventDefault();
    if (newPrice > 0) {
      onNewPrice(newPrice, product);
      setShowForm(false);
      setNewPrice("");
    } else {
      alert("El valor ingresado debe ser mayor a 0");
    }
  };

  return (
    <div>
      <Card className="card border-info mb-3">
        <Card.Img height={300} variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>{product.brand}</Card.Subtitle>
          <div>{product.type}</div>
          {userRol ? (
            // Mostrar opciones para admin
            <div>
              {showForm ? (
                <Form onSubmit={submitNewPrice}>
                  <Form.Label>Nuevo Precio</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese el nuevo valor del producto"
                    value={newPrice}
                    onChange={handleNewPrice}
                  />
                  <Button type="submit">Aceptar</Button>
                </Form>
              ) : (
                <p>${product.price}</p>
              )}

              {showForm ? (
                ""
              ) : (
                <div>
                  <Button className="btn btn-success">
                    Agregar al carrito
                  </Button>
                  <Button onClick={editPriceProduct}>Cambiar precio</Button>
                  <Button className="btn btn-danger" onClick={deleteProduct}>
                    Eliminar
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <p>${product.price}</p>
              <Button className="btn btn-success">Agregar al carrito</Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  onNewPrice: PropTypes.func.isRequired,
};

export default ProductItem;
