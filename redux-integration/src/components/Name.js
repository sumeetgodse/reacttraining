const Name = (props) => {
    const nameRegexp = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;

    const handleChange = (e) => {
        const name = e.target.value;
        if( !nameRegexp.test(name) ) {
            document.getElementById("errorName").innerHTML = "Invalid Name";
        } else {
            document.getElementById("errorName").innerHTML = "";
        }
    }

    return (
        <div style = {{height: "40px", padding: "10px"}}>
            <input style = {{height: "30px", border: "none", borderBottom: "1px solid black"}} type = "text" ref = {props.txtName} placeholder = "Enter Full Name" onChange = {handleChange} />
            <p style = {{color: "red", fontSize: "10px"}} id = "errorName" />
        </div>
    )
}

export default Name;
