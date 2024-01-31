//import {toggleForm} from "../helpers/helpers.js";
// eslint-disable-next-line react/prop-types
function Login({isLogin,setLogin,isRegister,setRegister}) {

    const toggleForm = () => {
        setRegister(!isRegister);
        setLogin(!isLogin);
    };

    return (
        <>
            <form>
            {/*Email input*/}
            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control email" required />
                <label className="form-label" htmlFor="form2Example1">Email adres</label>
            </div>

            {/*Password input*/}
            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" required />
                <label className="form-label" htmlFor="form2Example2">Wachtwoord</label>
            </div>

            {/*2 column grid layout for inline styling*/}
            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                    {/*Checkbox*/}
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form2Example3" checked />
                        <label className="form-check-label" htmlFor="form2Example3"> Onthoud mij </label>
                    </div>
                </div>

                <div className="col">
                    {/*Simple link*/}
                    <span>Wachtwoord vergeten?</span>
                </div>
            </div>

            {/*Submit button*/}
            <button type="button" className="btn btn-primary btn-block mb-4">Inloggen</button>

            {/*Register buttons*/}
            <div className="text-center">
                <p>Geen account? <span className="btn btn-primary" onClick={toggleForm}>Registreer</span></p>
            </div>
            </form>
        </>
    );
}

export default Login;