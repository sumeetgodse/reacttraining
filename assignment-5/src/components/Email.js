import React from 'react';

const Email = (props) => {
    return (
        <div>
            <h4>Email :</h4>
            <input type = "text" name = "email" onChange = {props.onChange} placeholder = "xyz@gmail.com" />
        </div>
    )
}

export default Email;
