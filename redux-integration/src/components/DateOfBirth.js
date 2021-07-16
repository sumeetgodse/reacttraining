import { validate_date } from '../utilities/utility.js';

const DateOfBirth = (props) => {
    const dateRegexp = /^([0-9]{1,2})-([0-9]{1,2})-([0-9]{2,4})$/;

    const handleChange = (e) => {
        const dob = e.target.value;
        if( !dateRegexp.test(dob) || !validate_date(dob) ) {
            document.getElementById("errorDob").innerHTML = "Invalid Date";
        } else {
            document.getElementById("errorDob").innerHTML = "";
        }
    }

    return (
        <div style = {{height: "40px", padding: "10px"}}>
            <input style = {{height: "30px", border: "none", borderBottom: "1px solid black"}} type = "text" ref = {props.dobRef} placeholder = "Date of Birth (mm-dd-yyyy)" onChange = {handleChange} />
            <p style = {{color: "red", fontSize: "10px"}} id = "errorDob"/>
        </div>
    )
}

export default DateOfBirth;
