import { useParams } from "react-router"
import NavBar from './navbar'
import { trousers } from './data';
// switch above to allProducts

function Product() {
    console.log(trousers)
    let {id} = useParams()
    let product = trousers.find(trouser => id === trouser.name)
    console.log(product)
    
    return (
        <>
            <NavBar></NavBar>
        <div className="product-container">
            <div className="product-image-container">
                <img src={product.image}></img>
                <div className="losButtons">
                    <button>Bello</button>
                    <button>Bello</button>
                </div>
            </div>
            <div className="product-info-container">
                <h1>{product.name}</h1>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
                {/* Add Colour */}
                {/* Add stock */}
                <input
                        type="number"
                        min="0"
                        // onChange={(e) => handleQuantityChange(item.id, e)}
                    />
                <button>Add to Cart</button>
            </div>
        </div>
        </>
    )
}

export default Product