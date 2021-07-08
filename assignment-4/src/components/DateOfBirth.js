import React from 'react';

const DateOfBirth = (props) => {
    return (
        <div>
            <h4>Date of Birth :</h4>
            <input type = "text" name = "dateOfBirth" placeholder = "MM-DD-YYYY"  onChange = {props.onChange} />
        </div>
    )
}

export default DateOfBirth;
