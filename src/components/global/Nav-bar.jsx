import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {FaShoppingCart} from 'react-icons/fa';
import { TbLogout } from "react-icons/tb";
import {Logging} from '../../App.jsx';
import {CartItems} from '../../App.jsx';
import './Nav-bar.css';


// eslint-disable-next-line react/prop-types
function NavBar({isNav, setNav, isForm, setForm, setClass}) {

    const logging = useContext(Logging);
    const cartItems = useContext(CartItems);

    const toggleMenu = () => {
        setNav(!isNav);
    };
    const toggleForm = () => {
        setForm(!isForm);
    };
    const hideForm = () => {
        if (isForm) {
            setForm(!isForm);
        }
    };
    const logOut = () => {
        //setLogged(loggedIn = false);
        logging.setLoggedIn(logging.loggedIn = false);
    };

    return (
        <>
            <div className="header--nav">
                <nav className={`${setClass} gsm menu--list${isNav ? 'nav_open' : ''}`}>
                    <ul>
                        <li><NavLink to="/"
                                     className={({isActive}) => isActive ? 'nav-item active-link' : 'nav-item default-link'}
                                     onClick={hideForm}>Home</NavLink></li>
                        <li><NavLink to="/products"
                                     className={({isActive}) => isActive ? 'nav-item active-link' : 'nav-item default-link'}>Producten</NavLink>
                        </li>
                        <li>{!logging.loggedIn ? <span className="nav-item" onClick={toggleForm}>Login</span> : <NavLink to="/dashboard" className={({isActive}) => isActive ? 'nav-item active-link' : 'nav-item default-link'}><span className="nav-item">Dashboard</span></NavLink>}</li>
                            {/* Voeg hier het winkelmandje toe */}
                        <li><NavLink to="/checkout" className={({isActive}) => isActive ? 'nav-item active-link' : 'nav-item default-link'}>
                            <span className="fa-shopping-cart">
                                <FaShoppingCart/>
                                {cartItems.getCartItemCount > 0 && <span className="cart-counter">{cartItems.getCartItemCount}</span>}
                        </span></NavLink>
                        </li>
                        {logging.loggedIn  ? <li><span className="fa-logout" onClick={logOut}><TbLogout/></span></li> : ""}

                    </ul>
                </nav>
                <div id="menuToggler" onClick={toggleMenu}>
                    <div id="hamburger" className={`gsm ${isNav ? 'nav_open' : ''}`}></div>
                </div>
            </div>
        </>
    );
}

export default NavBar;