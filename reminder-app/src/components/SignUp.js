import "../styles/auth.css";
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { store } from "../store/store";
import { addUser } from "../store/userReducer";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmError, setConfirmError] = useState(false);

    const history = useHistory();

    const exists = (email) => {
        const users = store.getState().userReducer;
        for( let j = 0; j < users.length; j ++) {
            if( users[j].email === email ) {
                return true;
            }
        }
        return false;
    }

    const handleSignUp = () => {
        if( !emailRegexp.test(email) || exists(email) ) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }  
        if( password === "" ) {
            setPasswordError(true);
        } else if( password !== confirmPassword ) {
            setConfirmError(true);
        } else {
            const newUser = {
                email: email,
                password: password
            }
            store.dispatch(addUser(newUser));
            history.push("/login");
        }
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleCPChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    return(
        <div className = "login-container">
            <div className = "login-header">
                Sign Up
            </div>
            <div className = "login-input">
                <TextField error = {emailError} value = {email} onChange = {(e) => handleEmailChange(e)} id = "outlined-basic" label = {emailError ? "Invalid Email or User already exists!" : "Email"} variant = "outlined" fullWidth />
            </div>
            <div className = "login-input">
                <TextField error = {passwordError} value = {password} onChange = {(e) => handlePasswordChange(e)} id = "outlined-basic" label = {passwordError ? "Invalid Password!" : "Password"} variant = "outlined" fullWidth />
            </div>
            <div className = "login-input">
                <TextField error = {confirmError} value = {confirmPassword} onChange = {(e) => handleCPChange(e)} id = "outlined-basic" label = {confirmError ? "Passwords do not match!" : "Confirm Password"} variant = "outlined" fullWidth />
            </div>
            <div className = "login-button-container">
                <input onClick = {() => handleSignUp()} className = "login-button" type = "button" value = "Sign Up" />
            </div>
            <div className = "login-already">
                Existing User? <Link style = {{textDecoration: "none", fontWeight: "bold"}} to = "/login">Log In</Link>
            </div>
        </div>
    );
}

export default SignUp;
