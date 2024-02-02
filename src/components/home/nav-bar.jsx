// eslint-disable-next-line react/prop-types
function Navbar({isNav,setNav,isForm,setForm}) {

    const toggleMenu = () => {
        setNav(!isNav);
    };
    const toggleForm = () => {
        setForm(!isForm);
    };

    return (
        <>
            <div className="header--nav">
                <nav className={`gsm menu--list ${isNav ? 'nav_open' : ''}`}>
                    <ul>
                        <li><a href="/" className="nav-item">Home</a></li>
                        <li><a href="#" className="nav-item">Boeken</a></li>
                        <li><a href="#" className="nav-item">Kaart</a></li>
                        <li><span className="nav-item" onClick={toggleForm}>Login</span></li>
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