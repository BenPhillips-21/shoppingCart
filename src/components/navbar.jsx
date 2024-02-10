import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'

const Sidebar = ({ cart, setCart }) => {
    const [totalQuantity, setTotalQuantity] = useState()
    
    useEffect(() => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].quantity;
        }
        setTotalQuantity(total);
    }, [cart]); 
    
    return (
        <nav className="navbar navbar-dark custom-sidebar">
            <div className="container-fluid">
                <div id='logoContainer'>
                    <img id='logo' src='/ralphLaurenLogo.jpg'></img>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                    <li>
                        <p style={{color: 'white'}}>{totalQuantity}</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;


