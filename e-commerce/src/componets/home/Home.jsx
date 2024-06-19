import PropTypes from "prop-types";
import ProductList from "../productList/ProductList";
import NewProduct from "../newProduct/NewProduct";
import { useEffect, useState } from "react";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los el usuario");
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
  }, []);

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
  };

  return (
    <div>
      <NewProduct onProductDataSaved={saveProductDataHandler} />
      <ProductList productList={product} />
    </div>
  );
};

Home.propTypes = {};

export default Home;
