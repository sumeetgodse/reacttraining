const Gender = (props) => {
    return (
        <div onChange = {props.onChange}>
            <h4>Gender :</h4>
            <input type = "radio" id = "male" value = "Male" name = "gender" />
            <label htmlFor = "male">Male</label>
            <input type = "radio" id = "female" value = "Female" name = "gender" />
            <label htmlFor = "female">Female</label>
            <p style = {{ color: 'red' }} id = "genderError" />
        </div>
    )
}

export default Gender;
