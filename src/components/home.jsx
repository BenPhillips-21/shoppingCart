import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allProducts, blazers, polos, sweaters, trousers, jumpers } from './data';

const Home = ({products, setProducts}) => {
    const photos = ['/husky.jpg', '/boatMe.jpg', '/polo.jpg'];
    const [currentIndex, setCurrentIndex] = useState(0);

    const navigate = useNavigate(); 

    const goShop = () => {
      navigate('/shop'); 
    };

    const handleClick = (number) => {
        setCurrentIndex(number)
      };

    const handleBungus = (array) => {
        setProducts(array)
        goShop()
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % photos.length);
        }, 10000);

        return () => clearInterval(intervalId);
    }, [photos]); 

    useEffect(() => {
        if (currentIndex >= photos.length) {
            setCurrentIndex(0);
        }
    }, [currentIndex, photos.length]);

    return (
        <>
        <div className="papa-container">
            <div className="slideshow-container">
                <div className="slideshow">
                    <img src={photos[currentIndex]} alt="Slideshow" />
                </div>
                <div className="buttons-container">
                    <button style={{backgroundColor: currentIndex === 0 ? 'gold' : 'grey'}} onClick={() => handleClick(0)}></button>
                    <button style={{backgroundColor: currentIndex === 1 ? 'gold' : 'grey'}} onClick={() => handleClick(1)}></button>
                    <button style={{backgroundColor: currentIndex === 2 ? 'gold' : 'grey'}} onClick={() => handleClick(2)}></button>
                </div>
            </div>
            <h3 style={{marginTop: '15px'}}>Explore our range</h3>
            <div className="images-container">
                <span className="image-span">
                    <img src="/sweater.jpg" alt="Image 1" />
                    <span className="text-overlay" onClick={() => handleBungus(sweaters)}>Sweaters</span>
                </span>
                <span className="image-span">
                    <img src="/trousers.jpg" alt="Image 1" />
                    <span className="text-overlay" onClick={() => handleBungus(trousers)}>Trousers</span>
                </span>
                <span className="image-span">
                    <img src="/guapo.jpg" alt="Image 1" />
                    <span className="text-overlay" onClick={() => handleBungus(jumpers)}>Jumpers</span>
                </span>
                <span className="image-span">
                    <img src="/Polos.jpg" alt="Image 1" />
                    <span className="text-overlay" onClick={() => handleBungus(polos)}>Polos</span>
                </span>
                <span className="image-span">
                    <img src="/blazers.jpg" alt="Image 1" />
                    <span className="text-overlay" onClick={() => handleBungus(blazers)}>Blazers</span>
                </span>
            </div>
            <h2 style={{marginTop: '20px'}}>Polo Ralph Lauren</h2>
            <p style={{width: '800px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus velit culpa, doloribus porro dolor. Quia corrupti consectetur, nesciunt eos, odit labore aliquam distinctio praesentium incidunt sunt mollitia? Praesentium rerum, corrupti maiores blanditiis tempore nesciunt rem repellendus natus dicta enim doloribus id ducimus voluptatem. Reprehenderit rerum eligendi magnam, beatae numquam enim eius voluptatibus ratione, illum, eaque unde ullam facere exercitationem id veritatia? Quia corrupti consectetur, nesciunt eos, odit labore aliquam distinctio praesentium.</p>
            <button style={{backgroundColor: 'gold'}} onClick={goShop}>Shop Now</button>
        </div>
        </>
    );
};

export default Home;
