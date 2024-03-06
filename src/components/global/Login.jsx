import {toggleForm} from "../helpers/helpers.js";
import {useContext, useState} from "react";
import Validation from "../helpers/LoginValidation.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {LoggedIn} from '../../App.jsx';
// eslint-disable-next-line react/prop-types
function Login({isLogin,setLogin,isRegister,setRegister, setLogged}) {

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState("");
    let loggedIn = useContext(LoggedIn);

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);

        if (err.email === "" && err.password === "") {
            axios.post("http://localhost:8081/login", values)
                .then(res => {
                    navigate('/Dashboard');
                    setLogged(loggedIn = "true");
                    console.log(loggedIn);
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                {/*Email input*/}
                <div className="form-outline mb-4">
                    <input type="email" name="email" id="loginEmail" onChange={handleInput} className="form-control email" required />
                    <label className="form-label" form="loginEmail">Email adres</label>
                    {errors.email && <span className="text-danger"> {errors.email}</span>}
                </div>

                {/*Password input*/}
                <div className="form-outline mb-4">
                    <input type="password" name="password" id="loginPassword" onChange={handleInput} className="form-control" required />
                    <label className="form-label" form="loginPassword">Wachtwoord</label>
                    {errors.password && <span className="text-danger"> {errors.password}</span>}
                </div>

                {/*2 column grid layout for inline styling*/}
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        {/*Checkbox*/}
                        {/*<div className="form-check">*/}
                        {/*    <input className="form-check-input" type="checkbox" value="" id="form2Example3" checked />*/}
                        {/*    <label className="form-check-label" form="form2Example3"> Onthoud mij </label>*/}
                        {/*</div>*/}
                    </div>

                    <div className="col">
                        {/*Simple link*/}
                        <span>Wachtwoord vergeten?</span>
                    </div>
                </div>

                {/*Submit button*/}
                <button type="submit" className="btn btn-primary btn-block mb-4">Inloggen</button>

                {/*Register buttons*/}
                <div className="text-center">
                    <p>Geen account? <span className="btn btn-primary" onClick={() => toggleForm(isRegister,setRegister,isLogin,setLogin)}>Registreer</span></p>
                </div>
            </form>
        </>
    );
}

export default Login;