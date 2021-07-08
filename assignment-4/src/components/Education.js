import React from 'react';

const Education = (props) => {
    return (
        <div>
            <h4>Level of Education :</h4>
            <select name = "education" onChange = {props.onChange}>
                <option></option>  
                <option>Post Graduate</option>  
                <option>Under Graduate</option>  
                <option>HSC ( 10 + 2 )</option>  
                <option>SSC ( 10 + 0 )</option>  
            </select>
        </div>
    )
}

export default Education;
