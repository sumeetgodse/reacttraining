const Email = (props) => {
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const handleChange = (e) => {
        const email = e.target.value;
        if( !emailRegexp.test(email) ) {
            document.getElementById("errorEmail").innerHTML = "Invalid Email";
        } else {
            document.getElementById("errorEmail").innerHTML = "";
        }
    }

    return (
        <div style = {{height: "30px", padding: "10px"}}>
            <input style = {{height: "30px", border: "none", borderBottom: "1px solid black"}} type = "text" ref = {props.txtEmail} placeholder = "Email (abc@gmail.com)" onChange = {handleChange} />
            <p style = {{color: "red", fontSize: "10px"}} id = "errorEmail" />
        </div>
    )
}

export default Email;
