import {useContext, useState} from "react";
import NavBar from "../global/Nav-bar.jsx";
import LoginForm from "../global/Login.jsx";
import RegisterForm from "../global/Register.jsx";
import {Logging} from "../../App.jsx";


// eslint-disable-next-line react/prop-types
const Header = ({setClass}) => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isLoginFormOpen, setLoginFormOpen] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const logging = useContext(Logging);

    return (
        <header className={`${setClass} outer-container header--background ${logging.loggedIn && 'loggedIn'}`}>
            <div className={`header--background_overlay ${isNavOpen ? 'nav_open' : ''}`}></div>
            <section className="inner-container">
                <NavBar isNav={isNavOpen} setNav={setIsNavOpen} isForm={isFormOpen} setForm={setIsFormOpen} setClass={setClass} />
                <div id="registration" className={`forms ${isFormOpen ? 'form_open' : ''}`}>
                    <div className={`loginForm ${isLoginFormOpen ? 'login_open' : ''}`}>
                        <LoginForm isLoginFormOpen={isLoginFormOpen} setLoginFormOpen={setLoginFormOpen} />
                    </div>
                    <div className={`registerForm ${isLoginFormOpen ? '' : 'register_open'}`}>
                        <RegisterForm isLoginFormOpen={isLoginFormOpen} setLoginFormOpen={setLoginFormOpen} />
                    </div>
                </div>
                {setClass === 'home' ? <div className="header--title"><h1>KAM Online</h1><h2>Kwaliteit, Arbo en Milieu</h2></div> : ""}
            </section>
        </header>
    );
}

export default Header;