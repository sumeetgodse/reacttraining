const InputText = (props) => {
    const {placeholder, value, handleChange} = props;
  
    return <input type = "text" placeholder = {placeholder} value = {value} onChange = {handleChange} />
}

export default InputText;
