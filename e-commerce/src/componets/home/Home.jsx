

import ProductList from '../productList/ProductList'
import NewProduct from '../newProduct/NewProduct'
import {  useEffect, useState } from 'react'


const Home =()=> {
  const [product, setProduct] = useState([])
  const [reload, setReload] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8000/products", {
          method: "GET",
          mode: "cors"
      })
      .then((response) => {
        if(!response.ok){
          throw new Error("Error al obtener los productos")
        }
        return response.json();
      })
      .then((productData)=>{
        console.log(productData)
        setProduct(productData);
      })
      .catch((error)=> {
        console.error("Error", error);
      })
    
  }, [reload]);

  

  const saveProductDataHandler = async (enteredProductData) =>{
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
    const  response = await fetch("http://localhost:8000/products", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productDto),
    });

    if(!response.ok){
      throw new Error("Error al agregar el libro")
    }

    const data = await response.json();
    console.log(data)
    setProduct(data);
  } catch(error){
    alert(error)
    
  }
  setReload(!reload)
}

  return (
    <div>
      <NewProduct onProductDataSaved={saveProductDataHandler}/>
      <ProductList productList = {product} />
    </div>
  )
 
}

Home.propTypes = {
 
}

export default Home;