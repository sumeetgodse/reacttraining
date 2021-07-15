const Password = (props) => {
    const passwordRegexp = /^(?!^[.])(?!.*[.]$)(?!.*[.]{2})[\w!'`&=~%#/$*+\-^?{}|.]{1,64}$/;

    const handleChange = (e) => {
        const password = e.target.value;
        if( !passwordRegexp.test(password) ) {
            document.getElementById("errorPwd").innerHTML = "Invalid Password";
        } else {
            document.getElementById("errorPwd").innerHTML = "";
        }
    }

    return (
        <div style = {{height: "30px", padding: "10px"}}>
            <input style = {{height: "30px", border: "none", borderBottom: "1px solid black"}} type = "password" ref = {props.pwdRef} placeholder = "Enter Password" onChange = {handleChange} />
            <p style = {{color: "red", fontSize: "10px"}} id = "errorPwd" />
        </div>
    )
}

export default Password;
