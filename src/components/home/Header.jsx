import {useState} from "react";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleMenu = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="outer-container header--background">
            <div className={`header--background_overlay ${isNavOpen ? 'nav_open' : ''}`}></div>
            <section className="inner-container">
                <div className="header--nav">
                    <nav className={`gsm menu--list ${isNavOpen ? 'nav_open' : ''}`}>
                        <ul>
                            <li><a href="/" className="nav-item">Home</a></li>
                            <li><a href="#" className="nav-item">Boeken</a></li>
                            <li><a href="#" className="nav-item">Kaart</a></li>
                            <li><a href="/login" className="nav-item">Login</a></li>
                        </ul>
                    </nav>
                    <div id="menuToggler" onClick={toggleMenu}>
                        <div id="hamburger" className={`gsm ${isNavOpen ? 'nav_open' : ''}`}></div>
                    </div>
                </div>
                <div className="header--title">
                    <h1>KAM Online</h1>
                    <h2>Kwaliteit, Arbo en Milieu</h2>
                </div>
            </section>
        </header>
    );
}

export default Header;