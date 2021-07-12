const Education = (props) => {
    return (
        <div>
            <h4>Level of Education :</h4>
            <select name = "education" onChange = {props.onChange}>
                <option value = "">-- Please Select --</option>  
                <option value = "post-graduate">Post Graduate</option>  
                <option value = "graduate">Graduate</option>  
                <option value = "hsc">HSC ( 10 + 2 )</option>  
                <option value = "ssc">SSC ( 10 + 0 )</option>  
            </select>
            <p style = {{ color: 'red' }} id = "educationError" />
        </div>
    )
}

export default Education;
