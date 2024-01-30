import {useState} from "react";
import Navbar from "./nav-bar.jsx";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header className="outer-container header--background">
            <div className={`header--background_overlay ${isNavOpen ? 'nav_open' : ''}`}></div>
            <section className="inner-container">
                <Navbar isNav={isNavOpen} setNav={setIsNavOpen} />
                <div className="header--title">
                    <h1>KAM Online</h1>
                    <h2>Kwaliteit, Arbo en Milieu</h2>
                </div>
            </section>
        </header>
    );
}

export default Header;