import {useState} from "react";
import NavBar from "../global/Nav-bar.jsx";
import LoginForm from "../global/Login.jsx";
import RegisterForm from "../global/Register.jsx";

// eslint-disable-next-line react/prop-types
const Header = ({setCart}) => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(true);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <header className="home outer-container header--background">
            <div className={`header--background_overlay ${isNavOpen ? 'nav_open' : ''}`}></div>
            <section className="inner-container">
                <NavBar isNav={isNavOpen} setNav={setIsNavOpen} isForm={isFormOpen} setForm={setIsFormOpen} setCart={setCart} setPage={"Home"}/>
                <div className={`forms ${isFormOpen ? 'form_open' : ''}`}>
                    <div className={`loginForm ${isLoginOpen ? 'login_open' : ''}`}>
                        <LoginForm isLogin={isLoginOpen} setLogin={setIsLoginOpen} isRegister={isRegisterOpen} setRegister={setIsRegisterOpen}/>
                    </div>
                    <div className={`registerForm ${isRegisterOpen ? 'register_open' : ''}`}>
                        <RegisterForm isLogin={isLoginOpen} setLogin={setIsLoginOpen} isRegister={isRegisterOpen} setRegister={setIsRegisterOpen}/>
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