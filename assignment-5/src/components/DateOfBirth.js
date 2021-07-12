const DateOfBirth = (props) => {
    return (
        <div>
            <h4>Date of Birth :</h4>
            <input type = "text" name = "dateOfBirth" placeholder = "MM-DD-YYYY"  onChange = {props.onChange} />
            <p style = {{ color: 'red' }} id = "dobError" />
        </div>
    )
}

export default DateOfBirth;
