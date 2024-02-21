import './App.css'
import NavBar from './components/navbar'
import Home from './components/home'
import Shop from './components/shop'
import Cart from './components/cart'
import Product from './components/product'
import ErrorPage from './components/errorpage'
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import { allProducts } from './components/data';

function App() {
const { id } = useParams();
let idNumber = parseInt(id);
const [cart, setCart] = useState([allProducts[0]])
let product = allProducts.find(leProduct => idNumber === leProduct.id);
console.log("Product:", product)
console.log("Cart in app:", cart)

  return (
    <>
      <div className="chungus">
        <NavBar cart={cart} setCart={setCart} />
          {id==="home" && <Home />}
          {id==="shop" && <Shop />}
          {id==="cart" && <Cart cart={cart} setCart={setCart}/>}
          {product !== undefined && <Product product={product} cart={cart} setCart={setCart} />}
          {!id && <Home />}
          { id!== undefined && id!=="cart" && id !== "shop" && id !== "home" && product === undefined && <ErrorPage />}
      </div>
    </>
  )
}

export default App
