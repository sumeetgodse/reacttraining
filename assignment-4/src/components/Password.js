import React from 'react';

const Password = (props) => {
    return (
        <div>
            <h4>Password :</h4>
            <input type = "password" name = "password" onChange = {props.onChange} placeholder = "Enter Password..." />
        </div>
    )
}

export default Password;
