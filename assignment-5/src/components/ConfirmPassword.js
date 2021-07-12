const ConfirmPassword = (props) => {
    return (
        <div>
            <h4>Confirm Password :</h4>
            <input type = "password" name = "confirmPassword" onChange = {props.onChange} placeholder = "Confirm Password..." />
            <p style = {{ color: 'red' }} id = "confirmPwdError" />
        </div>
    );
}

export default ConfirmPassword;
