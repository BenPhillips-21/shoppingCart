import { Link } from "react-router-dom";

const Sidebar = () => {
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
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;


