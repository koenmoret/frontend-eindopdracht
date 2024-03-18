import {toggleForm} from "../helpers/helpers.js";
import {useState} from "react";
import axios from "axios";
import "./Register.css";
import Validation from "../helpers/RegisterValidation.js";

// eslint-disable-next-line react/prop-types
function Register({isLoginFormOpen, setLoginFormOpen}) {

    const [values, setValues] = useState({
        fullName: "",
        registerEmail: "",
        confirmEmail: "",
        registerPassword: ""
    });

    const [errors, setErrors] = useState("");

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if (err.fullName === "" && err.registerEmail === "" && err.registerPassword === "") {
            axios.post("http://localhost:8081/register", values)
                .then(res => {toggleForm(isLoginFormOpen, setLoginFormOpen)})
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                {/*Email input*/}
                <div className="form-outline mb-4">
                    <input type="text"
                           name="fullName"
                           id="fullName"
                           className="form-control"
                           onChange={handleInput}
                    />
                    <label className="form-label" form="fullName">Naam</label>
                    {errors.fullName && <span className="text-danger"> {errors.fullName}</span>}
                </div>
                <div className="form-outline mb-4">
                    <input type="email"
                           name="registerEmail"
                           id="registerEmail"
                           className="form-control"
                           onChange={handleInput}
                    />
                    <label className="form-label" form="registerEmail">Email adres</label>
                    {errors.registerEmail && <span className="text-danger"> {errors.registerEmail}</span>}
                </div>

                {/*Confirm Email input*/}
                <div className="form-outline mb-4">
                    <input type="email"
                           name="confirmEmail"
                           id="confirmEmail"
                           className="form-control"
                           onChange={handleInput}
                    />
                    <label className="form-label" form="confirmEmail">Bevestig email adres</label>
                    {errors.confirmEmail && <span className="text-danger"> {errors.confirmEmail}</span>}
                </div>

                {/*Password input*/}
                <div className="form-outline mb-4">
                    <input type="password"
                           name="registerPassword"
                           id="registerPassword"
                           className="form-control"
                           onChange={handleInput}
                    />
                    <label className="form-label" form="registerPassword">Wachtwoord</label>
                    {errors.registerPassword && <span className="text-danger"> {errors.registerPassword}</span>}
                </div>

                {/*Submit button*/}
                <button type="submit" className="btn btn-primary btn-block mb-4">Registreer</button>

                {/*Register buttons*/}
                <div className="text-center">
                    <p>Al een account? <span className="btn btn-primary"
                                             onClick={() => toggleForm(isLoginFormOpen, setLoginFormOpen)}>Inloggen</span>
                    </p>
                </div>
            </form>
        </>)
}

export default Register;