import {useState} from "react";
import Navbar from "./nav-bar.jsx";
import LoginForm from "./login.jsx";
import RegisterForm from "./register.jsx";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(true);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <header className="outer-container header--background">
            <div className={`header--background_overlay ${isNavOpen ? 'nav_open' : ''}`}></div>
            <section className="inner-container">
                <Navbar isNav={isNavOpen} setNav={setIsNavOpen} isForm={isFormOpen} setForm={setIsFormOpen}/>
                <div className={`forms ${isFormOpen ? 'form_open' : ''}`}>
                    <div className={`loginForm ${isLoginOpen ? 'login_open' : ''}`}>
                        <LoginForm isLogin={isLoginOpen} setLogin={setIsLoginOpen} isRegister={isRegisterOpen}
                                   setRegister={setIsRegisterOpen}/>
                    </div>
                    <div className={`registerForm ${isRegisterOpen ? 'register_open' : ''}`}>
                        <RegisterForm isLogin={isLoginOpen} setLogin={setIsLoginOpen} isRegister={isRegisterOpen}
                                      setRegister={setIsRegisterOpen}/>
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