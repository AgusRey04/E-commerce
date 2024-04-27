
import { useState } from 'react'
import './App.css'
import Home from './componets/home/Home'

const PRODUCTOSPC = [
  {
    id: 1,
    productName: "Procesador Intel Core i9-10900K",
    productBrand: "Intel",
    productType: "Procesador",
    productPrice: 599.99,
    productImg: "https://images-na.ssl-images-amazon.com/images/I/61qUfPKfqJL.jpg",
    available: true
  },
  {
    id: 2,
    productName: "Tarjeta Gráfica NVIDIA GeForce RTX 3080",
    productBrand: "NVIDIA",
    productType: "Tarjeta Gráfica",
    productPrice: 899.99,
    productImg: "https://m.media-amazon.com/images/I/41e1zP76o7L.jpg",
    available: true
  },
  {
    id: 3,
    productName: "Memoria RAM Corsair Vengeance RGB Pro 16GB",
    productBrand: "Corsair",
    productType: "Memoria RAM",
    productPrice: 129.99,
    productImg: "https://m.media-amazon.com/images/I/51jnTiyHJUL.jpg",
    available: false
  },
  {
    id: 4,
    productName: "SSD Samsung 970 EVO Plus 1TB",
    productBrand: "Samsung",
    productType: "SSD",
    productPrice: 199.99,
    productImg: "https://m.media-amazon.com/images/I/41QZdNEpzAL.jpg",
    available: true
  },
  {
    id: 5,
    productName: "Procesador AMD Ryzen 9 5900X",
    productBrand: "AMD",
    productType: "Procesador",
    productPrice: 549.99,
    productImg: "https://m.media-amazon.com/images/I/51fNCtt4E3L.jpg",
    available: true
  },
  {
    id: 6,
    productName: "Tarjeta Gráfica AMD Radeon RX 6800 XT",
    productBrand: "AMD",
    productType: "Tarjeta Gráfica",
    productPrice: 649.99,
    productImg: "https://i.blogs.es/a22729/captura-de-pantalla-2020-11-18-a-las-20.55.29/original.png",
    available: true
  }
]

function App() {
 const [product, setProduct] = useState(PRODUCTOSPC)
 const saveProductDataHandler = (enteredProductData) =>{
  const productData = {
    ...enteredProductData,
    id: Math.random().toString(),
  };
  setProduct((prev)=> [...prev, productData])
 }

  return (
    <div>
    <p>nav bar</p>
    <p>login</p>
    <p>carrito</p>
    <Home productList={product} onProducUp={saveProductDataHandler}/>
    
    </div>
  )
}

export default App
