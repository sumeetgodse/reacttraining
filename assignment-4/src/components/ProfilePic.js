import React from 'react';

const ProfilePic = (props) => {
    return (
        <div>
            <h4>Upload Profile Pic :</h4>
            <input type = "file" name = "profilePicUrl" onChange = {props.onChange} />
        </div>
    )
}

export default ProfilePic;
