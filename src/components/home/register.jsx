import {toggleForm} from "../helpers/helpers.js";
import axios from "axios";
import {useState} from "react";
// eslint-disable-next-line react/prop-types
function Register({isLogin, setLogin, isRegister, setRegister}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');

    function validateEmail(email) {
        // Regular expression for a basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Test the provided email against the regular expression
        return emailRegex.test(email);
    }

    function checkPasswordStrength(password) {
        // Define password strength criteria
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password);

        // Check if the password meets the criteria
        if (
            password.length >= minLength &&
            hasUppercase &&
            hasLowercase &&
            hasNumber &&
            hasSpecialChar
        ) {
            return 'strong';
        } else if (
            password.length >= minLength &&
            ((hasUppercase && hasLowercase) || (hasUppercase && hasNumber) || (hasLowercase && hasNumber) || (hasSpecialChar && hasNumber))
        ) {
            return 'medium';
        } else {
            return 'weak';
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const values = {
            name: name,
            email: email,
            password: password
        }

        // Check if the email and confirm email match and is valid
        if (validateEmail(email)) {
            if (email !== confirmEmail) {
                alert('Emails zijn niet het zelfde');
                return;
            } else {
                const strength = checkPasswordStrength(password);


                if(strength === 'weak'){
                    alert('Wachtwoord is te zwak /n Gebruik minimaal 8 characters die tenminste 1 hoofdletter/kleine letter en speciale teken bevat.');
                }
            }
        } else {
            alert("Email is niet geldig");
            return;
        }

        // Send a request to your server to register the user
        try {

            axios.post('http://localhost:8081/users', values)
                .then(res=>console.log(res))
                .catch(err => console.log(err))
            toggleForm();
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Error during registration');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*Email input*/}
                <div className="form-outline mb-4">
                    <input type="name"
                           id="form2Example1"
                           className="form-control name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required
                    />
                    <label className="form-label" htmlFor="form2Example1">Naam</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="email"
                           id="form2Example2"
                           className="form-control email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                    />
                    <label className="form-label" htmlFor="form2Example2">Email adres</label>
                </div>

                {/*Confirm Email input*/}
                <div className="form-outline mb-4">
                    <input type="email"
                           id="form2Example3"
                           className="form-control email"
                           value={confirmEmail}
                           onChange={(e) => setConfirmEmail(e.target.value)}
                           required
                    />
                    <label className="form-label" htmlFor="form2Example3">Bevestig email adres</label>
                </div>

                {/*Password input*/}
                <div className="form-outline mb-4">
                    <input type="password"
                           id="form2Example4"
                           className="form-control"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                    />
                    <label className="form-label" htmlFor="form2Example4">Wachtwoord</label>
                </div>

                {/*Submit button*/}
                <button type="submit" className="btn btn-primary btn-block mb-4">Registreer</button>

                {/*Register buttons*/}
                <div className="text-center">
                    <p>Al een account? <span className="btn btn-primary" onClick={() => toggleForm(isLogin, setLogin, isRegister, setRegister)}>Inloggen</span></p>
                </div>
            </form>
        </>
    )
}

export default Register;