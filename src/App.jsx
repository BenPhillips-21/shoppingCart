import './App.css'
import NavBar from './components/navbar'
import Home from './components/home'
import Shop from './components/shop'
import ErrorPage from './components/errorpage'
import { useParams } from "react-router-dom";

function App() {
const { name } = useParams();

  return (
    <>
      <div className="chungus">
        <NavBar />
          {name==="home" && <Home />}
          {name==="shop" && <Shop />}
          {!name && <Home />}
          {name !== undefined && name !== "shop" && name !== "home" && <ErrorPage />}
      </div>
    </>
  )
}

export default App
