import {useState} from "react";
import NavBar from "../global/Nav-bar.jsx";
import LoginForm from "./Login.jsx";
import RegisterForm from "./Register.jsx";


// eslint-disable-next-line react/prop-types
function Header({setCart}) {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(true);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <header className="products outer-container">
            <section className="inner-container">
                <NavBar isNav={isNavOpen} setNav={setIsNavOpen} isForm={isFormOpen} setForm={setIsFormOpen}
                        setCart={setCart} setPage={"global"}/>
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
            </section>
        </header>
    );
}

export default Header;