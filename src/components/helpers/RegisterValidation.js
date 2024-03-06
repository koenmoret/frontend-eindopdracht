// eslint-disable-next-line no-unused-vars
function Validation(values){
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.fullName === ""){
        error.fullName = "Naam veld mag niet leeg zijn.";
    }else {
        error.fullName = "";
    }

    if(values.registerEmail === ""){
        error.registerEmail = "Email veld mag niet leeg zijn.";
    }else if(!email_pattern.test(values.registerEmail)){
        error.registerEmail = "Email voldoet niet aan de eisen";
    }else {
        error.registerEmail = "";
    }

    if(values.confirmEmail === ""){
        error.confirmEmail = "Email veld mag niet leeg zijn.";
    }
    /*else if(values.registerEmail !== values.confirmEmail){
        error.confirmEmail = "Email is niet het zelfde";
    }*/
    else {
        error.confirmEmail = "";
    }

    if(values.registerPassword === "") {
        error.registerPassword = "Wachtwoord veld mag niet leeg zijn.";
    }
    // }else if(!password_pattern.test(values.registerPassword)){
    //     error.registerPassword = "Wachtwoord voldoet niet aan de eisen.";
    // }
    else {
        error.registerPassword = "";
    }
    return error;
}

export default Validation;
