import './App.css'
import NavBar from './components/navbar'
import Home from './components/home'
import Shop from './components/shop'
import Product from './components/product'
import ErrorPage from './components/errorpage'
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import { trousers } from './components/data';

function App() {
const { name } = useParams();
const [cart, setCart] = useState([trousers[0]])
let product = trousers.find(trouser => name === trouser.name)
console.log("Cart in app", cart)

  return (
    <>
      <div className="chungus">
        <NavBar cart={cart} setCart={setCart} />
          {name==="home" && <Home />}
          {name==="shop" && <Shop />}
          {product !== undefined && <Product product={product} cart={cart} setCart={setCart} />}
          {!name && <Home />}
          {name !== undefined && name !== "shop" && name !== "home" && product === undefined && <ErrorPage />}
      </div>
    </>
  )
}

export default App
