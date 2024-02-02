import {toggleForm} from "../helpers/helpers.js";

// eslint-disable-next-line react/prop-types
function Login({isLogin, setLogin, isRegister, setRegister}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const values = {
            email: email,
            password: password
        }

        // Send a request to your server to check the user
        try {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    console.log(res);
                    if(res.data === "Succes"){

                        // navigate('/Home');
                        alert("Okay");
                    }else {
                        alert("Error");
                    }
                 })
                .catch(err => console.log(err))

        } catch (error) {
            console.error('Error during login:', error);
            alert('Error during login');
        }
    };
 

        <>
            <form>
                {/*Email input*/}
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control email" required />
                    <label className="form-label" form="form2Example1">Email adres</label>
                </div>

                {/*Password input*/}
                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" required />
                    <label className="form-label" form="form2Example2">Wachtwoord</label>
                </div>

                {/*2 column grid layout for inline styling*/}
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        {/*Checkbox*/}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example3" checked />
                            <label className="form-check-label" form="form2Example3"> Onthoud mij </label>
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
                    <p>Geen account? <span className="btn btn-primary" onClick={() => toggleForm(isRegister,setRegister,isLogin,setLogin)}>Registreer</span></p>

                </div>
            </form>
        </>
    );
}

export default Login;