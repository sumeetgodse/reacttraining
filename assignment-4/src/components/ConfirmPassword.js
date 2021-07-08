import React from 'react';

const ConfirmPassword = (props) => {
    return (
        <div>
            <h4>Confirm Password :</h4>
            <input type = "password" name = "confirmPassword" onChange = {props.onChange} placeholder = "Confirm Password..." />
            <br /><br />
        </div>
    );
}

export default ConfirmPassword;
