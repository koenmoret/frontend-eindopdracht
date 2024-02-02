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