import ProductList from "../productList/ProductList";
import NewProduct from "../newProduct/NewProduct";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";


const Home = ({ search }) => {

const Home = ({ onloggedInUser,search }) => {

  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState()
  const [reload, setReload] = useState(true);


  //------FILTRO-----

  useEffect(() => {
    if (search) {
      const filtered = product.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.brand.toLowerCase().includes(search.toLowerCase()) ||
          product.type.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(product);
    }
  }, [search, product]);


  //------PEDIDO DE LISTA DE PRODUCTOS

  useEffect(() => {
    fetch("http://localhost:8000/products", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        return response.json();
      })
      .then((productData) => {
        console.log(productData);
        setProduct(productData);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [reload]);

  //---------BORRAR PRODUCTO------------

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Error al borrar producto");
      } else {
        console.log("Producto eliminado");
        setProduct((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      }
    } catch (error) {
      alert(error);
    }

  };

  //--------- AGRAGAR PRODUCTO---------------

  const saveProductDataHandler = async (enteredProductData) => {
    const productDto = {
      name: enteredProductData.productName,
      brand: enteredProductData.productBrand,
      type: enteredProductData.productType,
      price: enteredProductData.productPrice,
      img: enteredProductData.productImg,
      available: enteredProductData.available,
      id: 0,
    };

    try {
      const response = await fetch("http://localhost:8000/products", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productDto),
      });

      if (!response.ok) {
        throw new Error("Error al agregar producto");
      } else {
        console.log("Producto Agregado");
      }

      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      alert(error);
    }
    setReload(!reload);
  };

  //------- EDITAR PRECIO DEL PRODUCTO---------

  const sumbitNewPrice = async (newPrice, product) => {
    console.log("precio", newPrice);
    console.log("id", product.id);
    const newPriceDto = {
      ...product,
      price: newPrice,
    };
    try {
      const response = await fetch(
        `http://localhost:8000/products/${product.id}`,
        {
          method: "PUT",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPriceDto),
        }
      );
      if (!response.ok) {
        throw new Error("Error al editar el producto");
      } else {
        console.log("Precio actualizado");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      alert(error);
    }
    setReload(!reload);
  };


  return (
    <div>
      {onloggedInUser && onloggedInUser.rol === "admin" ? (
        <NewProduct onProductDataSaved={saveProductDataHandler} />
      ) : (
        ""
      )}
      <ProductList
        productList={filteredProducts}
        onDeleteProduct={deleteProduct}
        onNewPrice={sumbitNewPrice}
      />
    </div>
  );
};

Home.propTypes = {
  search: PropTypes.string
  onloggedInUser: PropTypes.object,
};

export default Home;
