import { validate_date } from "./utility";

const nameRegexp = /^[a-zA-z]+([\s][a-zA-Z]+)*$/g;
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
const passwordRegexp = /^(?!^[.])(?!.*[.]$)(?!.*[.]{2})[\w!'`&=~%#/$*+\-^?{}|.]{1,64}$/g;
const dateRegexp = /^([0-9]{1,2})-([0-9]{1,2})-([0-9]{2,4})$/g;
const imgFormat = /(\.jpg|\.jpeg|\.png)$/i;

const validate_data = (state) => {
    const { name, email, dateOfBirth, gender, profilePicUrl, education, password, confirmPassword  } = state;

    let flag = true;

    if( name === "" || !nameRegexp.test(name) ) {
        flag = false;
        document.getElementById('nameError').innerHTML = "Invalid name, please re-enter";
    }
  
    if( email === "" || !emailRegexp.test(email) ) {
        flag = false;
        document.getElementById('emailError').innerHTML = "Invalid email, please re-enter";
    }
  
    if( password === "" || !passwordRegexp.test(password) ) {
        flag = false;
        document.getElementById('pwdError').innerHTML = "Invalid password, please re-enter";
    }

    if( password !== confirmPassword ) {
        flag = false;
        document.getElementById('confirmPwdError').innerHTML = "Passwords do not match, pleasere-enter";
    }

    if( gender === "" ) {
        flag = false;
        document.getElementById('genderError').innerHTML = "Please select gender";
    }

    if( education === "" ) {
        flag = false;
        document.getElementById('educationError').innerHTML = "Please select education";
    }

    if( dateOfBirth === "" || !dateRegexp.test(dateOfBirth) || !validate_date(dateOfBirth) ) {
        flag = false;
        document.getElementById('dobError').innerHTML = "Incorrect date, please re-enter";
    }

    if( profilePicUrl === "" || !imgFormat.test(profilePicUrl) ) {
        flag = false;
        document.getElementById('profilePicError').innerHTML = "Invalid image format (png & jpg only)";
    }

    //console.log(name+email+dateOfBirth+gender+profilePicUrl+education+password+confirmPassword)
    return flag;
}

export { validate_data };
