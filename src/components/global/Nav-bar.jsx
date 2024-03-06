import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {FaShoppingCart} from 'react-icons/fa';
import {LoggedIn} from '../../App.jsx';
import {CartItemCount} from '../../App.jsx';
import './Nav-bar.css';


// eslint-disable-next-line react/prop-types
function NavBar({isNav, setNav, isForm, setForm, setClass}) {

    const loggedIn = useContext(LoggedIn);
    const cartItemCount = useContext(CartItemCount);
    console.log(loggedIn);
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

    return (
        <>
            <div className="header--nav">
                <nav className={`${setClass} gsm menu--list ${isNav ? 'nav_open' : ''}`}>
                    <ul>
                        <li><NavLink to="/"
                                     className={({isActive}) => isActive === true ? 'nav-item active-link' : 'nav-item default-link'}
                                     onClick={hideForm}>Home</NavLink></li>
                        <li><a href="#" className="nav-item">Boeken</a></li>
                        <li><NavLink to="/products"
                                     className={({isActive}) => isActive === true ? 'nav-item active-link' : 'nav-item default-link'}>Producten</NavLink>
                        </li>
                        <li>{loggedIn === "false" ?
                            <span className="nav-item" onClick={toggleForm}>Login</span> : <NavLink to="/dashboard"><span className="nav-item">Dashboard</span></NavLink>}</li>
                        {/* Voeg hier het winkelmandje toe */}
                        <li><NavLink to="/checkout">
                            <span className="fa-shopping-cart">
                                <FaShoppingCart/>
                                {cartItemCount > 0 && <span className="cart-counter">{cartItemCount}</span>}
                        </span></NavLink>
                        </li>

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