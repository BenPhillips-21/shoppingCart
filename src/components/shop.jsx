import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { trousers } from './data';

const Shop = () => {
    const [products, setProducts] = useState(trousers);

    const navigate = useNavigate(); 

    const handleProductClick = (product) => {
        navigate(`/${product.name}`)
    }

    return (
        <>
        <div className="leShop">
            <div className="textandimage">
                <div className="text-container">
                    <h2>Ralph Lauren Trousers</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nemo assumenda error dicta culpa mollitia reiciendis voluptatum totam perferendis labore, quidem in, dignissimos maxime nostrum incidunt quibusdam consequuntur, praesentium est? Doloremque tempora sunt error sit, quo quia modi praesentium ut!</p>
                </div>
                <div className="image-container">
                    <img src='/usa.jpg'></img>
                </div>
            </div>
            <div className='shopButtons'>
                <button onClick={() => setProducts(allProducts)}>All Products</button>
                <button onClick={() => setProducts(sweaters)}>Sweaters</button>
                <button onClick={() => setProducts(trousers)}>Trousers</button>
                <button onClick={() => setProducts(jumpers)}>Jumpers</button>
                <button onClick={() => setProducts(polos)}>Polos</button>
                <button onClick={() => setProducts(blazers)}>Blazers</button>
            </div>
            <div className="grid-container">
            {products && products.map(product => (
                <div key={product.name}>
                <img onClick={() => handleProductClick(product)} src={product.image} alt={product.name} />
                <p>{product.price}</p>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default Shop