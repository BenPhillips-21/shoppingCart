import './App.css'
import NavBar from './components/navbar'
import Home from './components/home'
import Shop from './components/shop'
import Cart from './components/cart'
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
          {name==="cart" && <Cart cart={cart} setCart={setCart}/>}
          {product !== undefined && <Product product={product} cart={cart} setCart={setCart} />}
          {!name && <Home />}
          {name !== undefined && name!=="cart" && name !== "shop" && name !== "home" && product === undefined && <ErrorPage />}
      </div>
    </>
  )
}

export default App
