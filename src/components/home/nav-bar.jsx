// eslint-disable-next-line react/prop-types
function Navbar({isNav,setNav}) {

    const toggleMenu = () => {
        setNav(!isNav);
    };

    return (
        <>
            <div className="header--nav">
                <nav className={`gsm menu--list ${isNav ? 'nav_open' : ''}`}>
                    <ul>
                        <li><a href="/" className="nav-item">Home</a></li>
                        <li><a href="#" className="nav-item">Boeken</a></li>
                        <li><a href="#" className="nav-item">Kaart</a></li>
                        <li><a href="/login" className="nav-item">Login</a></li>
                    </ul>
                </nav>
                <div id="menuToggler" onClick={toggleMenu}>
                    <div id="hamburger" className={`gsm ${isNav ? 'nav_open' : ''}`}></div>
                </div>
            </div>
        </>
    );
}

export default Navbar;