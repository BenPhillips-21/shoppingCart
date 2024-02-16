const Sidebar = () => {
    return (
        <nav className="navbar navbar-dark custom-sidebar">
            <div className="container-fluid">
                <div id='logoContainer'>
                    <img id='logo' src='/ralphLaurenLogo.jpg'></img>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Shop</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;


