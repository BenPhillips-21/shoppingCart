import './App.css'
import NavBar from './components/navbar'
import Home from './components/home'
import Shop from './components/shop'
import ErrorPage from './components/errorpage'
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import { trousers } from './components/data';

function App() {
const { name } = useParams();
const [cart, setCart] = useState([trousers[0]])

  return (
    <>
      <div className="chungus">
        <NavBar cart={cart} setCart={setCart} />
          {name==="home" && <Home />}
          {name==="shop" && <Shop />}
          {!name && <Home />}
          {name !== undefined && name !== "shop" && name !== "home" && <ErrorPage />}
      </div>
    </>
  )
}

export default App
