// eslint-disable-next-line no-unused-vars
function Validation(values){
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.email === ""){
        error.email = "Email veld mag niet leeg zijn.";
    }
    // else if(!email_pattern.test(values.email)){
    //     error.email = "Email is niet het zelfde";
    // }
    else {
        error.email = "";
    }

    if(values.password === ""){
        error.password = "Wachtwoord veld mag niet leeg zijn.";
    }
    // else if(!password_pattern.test(values.password)){
    //     error.password = "Wachtwoord voldoet niet aan de eisen.";
    // }
    else {
        error.password = "";
    }
    return error;
}

export default Validation;

// function validateEmail(email) {
//     // Regular expression for a basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // Test the provided email against the regular expression
//     return emailRegex.test(email);
// }
//
// function checkPasswordStrength(password) {
//     // Define password strength criteria
//     const minLength = 8;
//     const hasUppercase = /[A-Z]/.test(password);
//     const hasLowercase = /[a-z]/.test(password);
//     const hasNumber = /\d/.test(password);
//     const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password);
//
//     // Check if the password meets the criteria
//     if (
//         password.length >= minLength &&
//         hasUppercase &&
//         hasLowercase &&
//         hasNumber &&
//         hasSpecialChar
//     ) {
//         return 'strong';
//     } else if (
//         password.length >= minLength &&
//         ((hasUppercase && hasLowercase) || (hasUppercase && hasNumber) || (hasLowercase && hasNumber) || (hasSpecialChar && hasNumber))
//     ) {
//         return 'medium';
//     } else {
//         return 'weak';
//     }
// }