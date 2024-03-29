import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { allProducts, blazers, polos, sweaters, trousers, jumpers } from './data';

const Shop = ({ products, setProducts }) => {
    const navigate = useNavigate(); 

    const [isHovered, setIsHovered] = useState(false);

    const handleProductClick = (product) => {
        navigate(`/${product.id}`)
    }

    return (
        <>
        <div className="leShop">
            <div className="textandimage">
                <div className="text-container">
                    <h2>Ralph Lauren</h2>
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
                <div className="boop">
                    <img onClick={() => handleProductClick(product)} src={product.image} alt={product.name} />
                </div>
                <p>{product.name}</p>
                <p style={{ marginTop: '-20px' }}>${product.price}</p>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default Shop