import {useState} from "react";

// eslint-disable-next-line react/prop-types
function Navbar({isNav,setNav,isLogin,setLogin}) {

    const toggleMenu = () => {
        setNav(!isNav);
    };
    const toggleLoginForm = () => {
        setLogin(!isLogin);
    };

    return (
        <>
            <div className="header--nav">
                <nav className={`gsm menu--list ${isNav ? 'nav_open' : ''}`}>
                    <ul>
                        <li><a href="/" className="nav-item">Home</a></li>
                        <li><a href="#" className="nav-item">Boeken</a></li>
                        <li><a href="#" className="nav-item">Kaart</a></li>
                        <li><span className="nav-item" onClick={toggleLoginForm}>Login</span></li>
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