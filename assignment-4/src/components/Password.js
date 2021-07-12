const Password = (props) => {
    return (
        <div>
            <h4>Password :</h4>
            <input type = "password" name = "password" onChange = {props.onChange} placeholder = "Enter Password..." />
            <p style = {{ color: 'red' }} id = "pwdError" />
        </div>
    )
}

export default Password;
