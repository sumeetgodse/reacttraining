const validate_date = (date) => {
    const varDate = new Date(date);
    const today = new Date();

    if( varDate > today ) {
      return false;
    }

    return true;
}

const clear_form_errors = () => {
    const formElements = ["nameError", "emailError", "dobError", "genderError", "profilePicError", "educationError", "pwdError", "confirmPwdError"];

    formElements.forEach((element) => {
      document.getElementById(element).innerHTML = "";
    })
}

export { validate_date, clear_form_errors };
