function Login() {

    return (
        <>
            <form>
            {/*Email input*/}
            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control email" required />
                <label className="form-label" for="form2Example1">Email address</label>
            </div>

            {/*Password input*/}
            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" required />
                <label className="form-label" for="form2Example2">Password</label>
            </div>

            {/*2 column grid layout for inline styling*/}
            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                    {/*Checkbox*/}
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label className="form-check-label" for="form2Example31"> Onthoud mij </label>
                    </div>
                </div>

                <div className="col">
                    {/*Simple link*/}
                    <a href="#!">Wachtwoord vergeten?</a>
                </div>
            </div>

            {/*Submit button*/}
            <button type="button" className="btn btn-primary btn-block mb-4">Inloggen</button>

            {/*Register buttons*/}
            <div className="text-center">
                <p>Geen account? <a href="#!">Registreer</a></p>
            </div>
            </form>
        </>
    );
}

export default Login;