import React from 'react';

const Name = (props) => {
    return (
        <div>
            <h4>Name :</h4>
            <input type = "text" name = "name" onChange = {props.onChange}  placeholder = "Enter Your Name..." />
        </div>
    )
}

export default Name;
