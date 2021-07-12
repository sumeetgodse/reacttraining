const Button = (props) => {
    const {label, buttonHandler} = props;
    
    return (
        <div style = {{ marginBottom: "20px" }}>
            <input type = "button" id = "button" value = "Submit" onClick = {buttonHandler} />
            <label htmlFor = "button" >{label}</label>
        </div>
    );
}

export default Button;
