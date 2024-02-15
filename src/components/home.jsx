import { useState, useEffect } from 'react';

const Home = () => {
    const photos = ['/lauren.jpg', '/home.jpg', '/boatMe.jpg', '/husky.jpg'];
    const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className="slideshow">
            <img src={photos[currentIndex]} alt="Slideshow" />
        </div>
    );
};

export default Home;
