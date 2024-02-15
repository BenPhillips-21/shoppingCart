const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="#" className="navbar-brand">Brooks & Sinclair</a>
                <ul className="nav-links">
                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
