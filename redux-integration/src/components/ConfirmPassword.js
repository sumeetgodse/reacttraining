const ConfirmPassword = (props) => {
    const handleChange = (e) => {
        const password =  props.pwdRef.current.value;
        const confirmedPasword = e.target.value;

        if( password !== confirmedPasword ) {
            document.getElementById("errorConfirmPwd").innerHTML = "Passwords do not match"
        } else {
            document.getElementById("errorConfirmPwd").innerHTML = ""
        }
    }

    return (
        <div style = {{height: "30px", padding: "10px"}}>
            <input style = {{height: "30px", border: "none", borderBottom: "1px solid black"}} type = "password" ref = {props.confirmPwdRef} placeholder = "Confirm Password" onChange = {handleChange} />
            <p style = {{color: "red", fontSize: "10px"}} id = "errorConfirmPwd" />
        </div>
    )
}

export default ConfirmPassword;
