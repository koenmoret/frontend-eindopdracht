import './Nav-bar.css';
import {NavLink} from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
function NavBar({isNav, setNav, isForm, setForm, setCart, setPage}) {
    const toggleMenu = () => {
        setNav(!isNav);
    };
    const toggleForm = () => {
        setForm(!isForm);
    };

    return (
        <>
            <div className="header--nav">
                <nav className={`${setPage} gsm menu--list ${isNav ? 'nav_open' : ''}`}>
                    <ul>
                        <li><NavLink to="/"
                                     className={({isActive}) => isActive === true ? 'nav-item active-link' : 'nav-item default-link'}
                                     onClick={toggleForm}>Home</NavLink></li>
                        <li><a href="#" className="nav-item">Boeken</a></li>
                        <li><NavLink to="/products"
                                     className={({isActive}) => isActive === true ? 'nav-item active-link' : 'nav-item default-link'}>Producten</NavLink>
                        </li>
                        <li><span className="nav-item" onClick={toggleForm}>Login</span></li>
                        {/* Voeg hier het winkelmandje toe */}
                        <li>
                            <span className="fa-shopping-cart">
                                <FaShoppingCart/>
                                {setCart > 0 && <span className="cart-counter">{setCart}</span>}
                        </span>
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