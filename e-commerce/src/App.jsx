
import './App.css'
import Home from './componets/home/Home'

const PRODUCTS = [{
  productImg: "https://imgs.search.brave.com/WDcfXSzeZlfbluFmVcH-8aLUkV9J64P4dHHILBrG6ws/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnVsbGg0cmQuY29t/LmFyL2ltZy9wcm9k/dWN0b3MvMTgvbW9u/aXRvci0yNy1zYW1z/dW5nLWxlZC10MzUw/ZmgtMC5qcGc",
  productName: "Monitor Gamer Samsung LF24T350FHLCZB 24",
  productBrand: "Samsung",
  productType:"Monitor",
  productPrice:"10",
  available: true
},{
  productImg:"https://images.fravega.com/f1000/10c3feb11c5c1a6e039df9222b7de650.png",
  productName:"Smart Kassel Teclado Gamer Xtrike Me",
  productBrand: "Xtrike me",
  productType: "Teclado",
  productPrice:"100",
  available: true

},
{ productImg: "https://imgs.https://images.fravega.com/f1000/0ac2ce0b6b4946b5579ff9bc1b597107.jpg.webp.brave.com/WDcfXSzeZlfbluFmVcH-8aLUkV9J64P4dHHILBrG6ws/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnVsbGg0cmQuY29t/LmFyL2ltZy9wcm9k/dWN0b3MvMTgvbW9u/aXRvci0yNy1zYW1z/dW5nLWxlZC10MzUw/ZmgtMC5qcGc",
productName: "Monitor Philips 27 272V8LA/55",
productBrand: "Philips",
productType:"Monitor",
productPrice:"12",
available: true
}
]

function App() {
 

  return (
    <Home/>
  )
}

export default App
