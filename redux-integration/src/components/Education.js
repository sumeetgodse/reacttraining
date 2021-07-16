const Education = (props) => {
    return (
        <div style = {{height: "40px", padding: "10px", marginTop: "10px"}}>
            <select name = "education" ref = {props.educationRef}>
                <option value = "">-- Please Select Education --</option>  
                <option value = "Post-Graduate">Post Graduate</option>  
                <option value = "Graduate">Graduate</option>  
                <option value = "HSC">HSC ( 10 + 2 )</option>  
                <option value = "SSC">SSC ( 10 + 0 )</option>  
            </select>
        </div>
    )
}

export default Education;
